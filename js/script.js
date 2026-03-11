// ============================================================================
// INITIALIZATION
// ============================================================================
gsap.registerPlugin(ScrollTrigger);

// ============================================================================
// WHATSAPP BUTTON SCROLL VISIBILITY
// ============================================================================
document.addEventListener("DOMContentLoaded", () => {
  const whatsappBtn = document.getElementById("whatsapp-btn");
  const heroSection = document.getElementById("home");

  if (whatsappBtn && heroSection) {
    const showButton = () => {
      const heroBottom = heroSection.offsetHeight;
      const scrollPosition = window.scrollY + window.innerHeight;

      if (scrollPosition > heroBottom + 100) {
        whatsappBtn.classList.remove("opacity-0", "invisible");
      } else {
        whatsappBtn.classList.add("opacity-0", "invisible");
      }
    };

    // Check on scroll
    window.addEventListener("scroll", showButton);

    // Initial check
    showButton();
  }
});

// ============================================================================
// MOBILE MENU TOGGLE
// ============================================================================
document.addEventListener("DOMContentLoaded", () => {
  const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
  const mobileMenu = document.querySelector(".mobile-menu");
  const mobileNavLinks = document.querySelectorAll(".mobile-nav-link");

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
      // Animate hamburger to X
      const icon = mobileMenuBtn.querySelector("svg");
      if (mobileMenu.classList.contains("hidden")) {
        icon.innerHTML =
          '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>';
      } else {
        icon.innerHTML =
          '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>';
      }
    });

    // Close menu when clicking a link
    mobileNavLinks.forEach((link) => {
      link.addEventListener("click", () => {
        mobileMenu.classList.add("hidden");
        mobileMenuBtn.querySelector("svg").innerHTML =
          '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>';
      });
    });

    // Close menu when clicking outside
    document.addEventListener("click", (e) => {
      if (!mobileMenu.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
        mobileMenu.classList.add("hidden");
        mobileMenuBtn.querySelector("svg").innerHTML =
          '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>';
      }
    });
  }

  // ============================================================================
  // FOOTER ACCORDION (Mobile)
  // ============================================================================
  const footerToggles = document.querySelectorAll(".footer-toggle");

  footerToggles.forEach((toggle) => {
    toggle.addEventListener("click", () => {
      const column = toggle.closest(".footer-column");
      const content = column.querySelector(".footer-content");
      const icon = toggle.querySelector("svg");

      // Close all other footer columns
      footerToggles.forEach((otherToggle) => {
        if (otherToggle !== toggle) {
          const otherColumn = otherToggle.closest(".footer-column");
          const otherContent = otherColumn.querySelector(".footer-content");
          const otherIcon = otherToggle.querySelector("svg");

          otherContent.style.maxHeight = "0";
          otherIcon.classList.remove("rotate-180");
        }
      });

      // Toggle current column
      if (content.style.maxHeight === "0px" || content.style.maxHeight === "") {
        content.style.maxHeight = content.scrollHeight + "px";
        icon.classList.add("rotate-180");
      } else {
        content.style.maxHeight = "0";
        icon.classList.remove("rotate-180");
      }
    });
  });

  // Open all footer columns by default on desktop
  if (window.innerWidth >= 768) {
    footerToggles.forEach((toggle) => {
      const column = toggle.closest(".footer-column");
      const content = column.querySelector(".footer-content");
      content.style.maxHeight = "500px";
    });
  }

  // Handle window resize
  let resizeTimer;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      if (window.innerWidth >= 768) {
        footerToggles.forEach((toggle) => {
          const column = toggle.closest(".footer-column");
          const content = column.querySelector(".footer-content");
          content.style.maxHeight = "500px";
          const icon = toggle.querySelector("svg");
          icon.classList.remove("rotate-180");
        });
      } else {
        // Close all on mobile
        footerToggles.forEach((toggle) => {
          const column = toggle.closest(".footer-column");
          const content = column.querySelector(".footer-content");
          content.style.maxHeight = "0";
          const icon = toggle.querySelector("svg");
          icon.classList.remove("rotate-180");
        });
      }
    }, 250);
  });
});

// ============================================================================
// SCROLL REVEAL ANIMATIONS
// ============================================================================

// Navigation Fade In
gsap.from("nav", {
  opacity: 0,
  duration: 2,
  ease: "power2.out",
});

// Hero Section Elements Fade In (Staggered)
gsap.set(["#home .hero-title", "#home p", "#home .explore-button", "#home .view-services-btn"], { opacity: 0, y: 30 });

gsap.to(["#home .hero-title", "#home p", "#home .explore-button", "#home .view-services-btn"], {
  opacity: 1,
  y: 0,
  duration: 1,
  stagger: 0.2, // 0.2s delay between each element
  ease: "power2.out",
  delay: 0.2 // Slight delay so it happens smoothly right after page load
});

// Other Sections Complete Fade In & Slide Up
gsap.utils.toArray("section:not(#home)").forEach((section) => {
  gsap.from(section, {
    scrollTrigger: {
      trigger: section,
      start: "top 85%", // Triggers when the top of the section hits 85% of the viewport height
    },
    y: 50,
    opacity: 0,
    duration: 1.2,
    ease: "power3.out",
  });
});

// Service Cards Sequential Reveal
gsap.from(".service-card", {
  scrollTrigger: {
    trigger: "#services",
    start: "top 60%", // Triggers when the top of the services section reaches 60% down the screen
  },
  y: 60,
  opacity: 0,
  duration: 0.8,
  stagger: 0.15, // Animates them one by one with a 0.15s gap
  ease: "power2.out",
});

// FAQ Items
gsap.utils.toArray(".faq-item").forEach((el, i) => {
  gsap.from(el, {
    scrollTrigger: {
      trigger: el,
      start: "top 90%",
    },
    y: 30,
    opacity: 0,
    duration: 0.8,
    delay: i * 0.1,
    ease: "power2.out",
  });
});

// ============================================================================
// FAQ ACCORDION (Vanilla JS with GSAP animation)
// ============================================================================
document.querySelectorAll(".faq-question").forEach((question) => {
  question.addEventListener("click", () => {
    const item = question.parentElement;
    const answer = item.querySelector(".faq-answer");
    const toggle = item.querySelector(".faq-toggle");

    // Close all other FAQs
    document.querySelectorAll(".faq-item").forEach((otherItem) => {
      if (otherItem !== item) {
        otherItem.querySelector(".faq-answer").classList.add("hidden");
        otherItem.querySelector(".faq-toggle").textContent = "+";
      }
    });

    // Toggle current FAQ
    answer.classList.toggle("hidden");
    toggle.textContent = answer.classList.contains("hidden") ? "+" : "−";

    // Animate
    gsap.fromTo(
      answer,
      { height: 0, opacity: 0 },
      { height: "auto", opacity: 1, duration: 0.3, ease: "power2.out" },
    );
  });
});

// ============================================================================
// COUNTER ANIMATIONS (jQuery)
// ============================================================================
$(document).ready(function () {
  function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  function animateCounter($element) {
    var $this = $element;
    var countTo = parseFloat($this.attr("data-count"));
    var symbol = $this.text().replace(/\d+/g, "");

    $({ countNum: 0 }).animate(
      {
        countNum: countTo,
      },
      {
        duration: 3000,
        easing: "swing",
        step: function () {
          var value = Math.floor(this.countNum);
          $this.text(value + symbol);
        },
        complete: function () {
          $this.text(countTo + symbol);
        },
      },
    );
  }

  function checkCounters() {
    $(".status-card [data-count]").each(function () {
      var $this = $(this);
      if (isElementInViewport(this) && !$this.hasClass("animated")) {
        $this.addClass("animated");
        animateCounter($this);
      }
    });
  }

  checkCounters();
  $(window).on("scroll", checkCounters);
});

// ============================================================================
// SMOOTH SCROLLING & NAVIGATION (jQuery)
// ============================================================================
$(document).ready(function () {
  // Smooth scroll for anchor links
  $('a[href^="#"]').on("click", function (e) {
    e.preventDefault();
    var target = $(this.getAttribute("href"));
    if (target.length) {
      $("html, body")
        .stop()
        .animate(
          {
            scrollTop: target.offset().top - 100,
          },
          1000,
          "swing",
        );
    }
  });

  // Active nav link highlighting on scroll
  $(window).scroll(function () {
    var scrollPos = $(document).scrollTop() + 200;
    $(".nav-link").each(function () {
      var currLink = $(this);
      var refElement = $(currLink.attr("href"));
      if (
        refElement.length &&
        refElement.position().top <= scrollPos &&
        refElement.position().top + refElement.height() > scrollPos
      ) {
        $(".nav-link").removeClass("text-[#00F2FF]");
        currLink.addClass("text-[#00F2FF]");
      }
    });
  });
});

// ============================================================================
// CTA BUTTON CLICK ANIMATION (Vanilla JS)
// ============================================================================
document.querySelectorAll("button").forEach((button) => {
  button.addEventListener("click", function () {
    gsap.to(this, {
      scale: 0.95,
      duration: 0.1,
      yoyo: true,
      repeat: 1,
    });
  });
});
