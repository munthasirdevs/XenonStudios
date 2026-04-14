(function () {
  "use strict";

  const XenonTracker = {
    events: [],
    sessionId: generateId(),

    track(eventName, data = {}) {
      const event = {
        event: eventName,
        timestamp: Date.now(),
        sessionId: this.sessionId,
        url: window.location.pathname,
        ...data,
      };
      this.events.push(event);

      // Log to console in development
      if (
        window.location.hostname === "localhost" ||
        window.location.hostname === "127.0.0.1"
      ) {
        console.log(`[Xenon Track] ${eventName}`, event);
      }

      // Store in sessionStorage for session analysis
      try {
        sessionStorage.setItem("xenon_events", JSON.stringify(this.events));
      } catch (e) {}

      // Dispatch custom event for integration with other systems
      window.dispatchEvent(new CustomEvent("xenon:track", { detail: event }));
    },

    getEvents() {
      return [...this.events];
    },

    getFunnel() {
      // Simple funnel: page_view → cta_click → quiz_start → conversion_submit
      const funnel = [
        "page_view",
        "cta_click",
        "quiz_start",
        "conversion_submit",
      ];
      return funnel.map((step) => ({
        step,
        count: this.events.filter((e) => e.event === step).length,
      }));
    },
  };

  function generateId() {
    return (
      "sess_" +
      Date.now().toString(36) +
      "_" +
      Math.random().toString(36).substr(2, 9)
    );
  }

  // Expose globally
  window.XenonTracker = XenonTracker;

  // Auto-track page view
  XenonTracker.track("page_view");

  // Track CTA clicks
  document.addEventListener("click", function (e) {
    const cta = e.target.closest(
      ".animated-button, .explore-button, .space-button, .ghost-button, .service-card-button, .sticky-cta-btn, [data-track-cta]",
    );
    if (cta) {
      XenonTracker.track("cta_click", {
        element: cta.textContent.trim().substring(0, 50),
        className: cta.className.substring(0, 100),
        href: cta.href || null,
      });
    }
  });

  // Track WhatsApp clicks
  document.addEventListener("click", function (e) {
    const wa = e.target.closest('[href*="wa.link"], [href*="whatsapp"]');
    if (wa) {
      XenonTracker.track("whatsapp_click", {
        href: wa.href,
      });
    }
  });

  // Track navigation clicks
  document.addEventListener("click", function (e) {
    const navLink = e.target.closest('nav a[href^="#"]');
    if (navLink) {
      XenonTracker.track("nav_click", {
        target: navLink.getAttribute("href"),
      });
    }
  });

  // Track form submissions
  document.addEventListener("submit", function (e) {
    const form = e.target.closest("form");
    if (form) {
      XenonTracker.track("conversion_submit", {
        formId: form.id,
        formClass: form.className,
      });
    }
  });

  // Track mobile menu
  const menuBtn = document.querySelector(".mobile-menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  if (menuBtn && mobileMenu) {
    const observer = new MutationObserver(function (mutations) {
      mutations.forEach(function (m) {
        if (m.attributeName === "class") {
          const isOpen = !mobileMenu.classList.contains("hidden");
          XenonTracker.track(isOpen ? "mobile_menu_open" : "mobile_menu_close");
        }
      });
    });
    observer.observe(mobileMenu, { attributes: true });
  }

  // Listen for quiz completion messages from quiz page
  window.addEventListener("message", function (e) {
    // Only accept messages from same origin
    if (e.origin !== window.location.origin) return;

    if (e.data && e.data.event === "quiz_complete") {
      XenonTracker.track("quiz_complete", {
        quizType: e.data.quizType,
        score: e.data.score,
      });
    }
    if (e.data && e.data.event === "quiz_start") {
      XenonTracker.track("quiz_start");
    }
  });

  // Expose funnel analysis in console
  window.getXenonFunnel = function () {
    console.table(XenonTracker.getFunnel());
  };

  window.getXenonEvents = function () {
    console.log(XenonTracker.getEvents());
  };
})();
