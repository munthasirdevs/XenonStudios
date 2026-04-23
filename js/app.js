// ============================================================================
// PAGE LOADER
// ============================================================================
const initPageLoader = () => {
  const loader = document.getElementById("page-loader");
  const progressBar = document.getElementById("loader-progress");

  if (!loader || !progressBar) return;

  let progress = 0;
  const interval = setInterval(() => {
    progress += Math.random() * 15;
    if (progress > 90) progress = 90;
    progressBar.style.width = progress + "%";
  }, 100);

  const hideLoader = () => {
    clearInterval(interval);
    progressBar.style.width = "100%";

    setTimeout(() => {
      loader.classList.add("fade-out");
      setTimeout(() => {
        loader.style.display = "none";
        document.body.style.overflow = "auto";
      }, 500);
    }, 300);
  };

  if (document.readyState === "complete") {
    hideLoader();
  } else {
    window.addEventListener("load", hideLoader);
    setTimeout(hideLoader, 3000);
  }
};

// ============================================================================
// SCROLL-TRIGGERED ANIMATIONS (Performance Optimized)
// ============================================================================
const initScrollAnimations = () => {
  const animatedElements = document.querySelectorAll(".section-animate");

  if (!animatedElements.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    },
  );

  animatedElements.forEach((el) => observer.observe(el));
};

// ============================================================================
// WHATSAPP BUTTON SCROLL VISIBILITY (Optimized with throttle)
// ============================================================================
const initWhatsappResvisibility = () => {
  const whatsappBtn = document.getElementById("whatsapp-btn");
  const heroSection = document.getElementById("home");

  if (whatsappBtn && heroSection) {
    let ticking = false;

    const showButton = () => {
      const heroBottom =
        heroSection.getBoundingClientRect().bottom + window.scrollY;
      const scrollPosition = window.scrollY + window.innerHeight * 0.7;

      if (scrollPosition > heroBottom) {
        whatsappBtn.classList.remove("opacity-0", "invisible");
        whatsappBtn.classList.add("opacity-100", "visible");
      } else {
        whatsappBtn.classList.add("opacity-0", "invisible");
        whatsappBtn.classList.remove("opacity-100", "visible");
      }
      ticking = false;
    };

    window.addEventListener(
      "scroll",
      () => {
        if (!ticking) {
          window.requestAnimationFrame(() => {
            showButton();
          });
          ticking = true;
        }
      },
      { passive: true },
    );

    showButton();
  }
};

// ============================================================================
// MOBILE MENU TOGGLE
// ============================================================================
const initMobileMenu = () => {
  const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
  const mobileMenu = document.querySelector(".mobile-menu");
  const mobileNavLinks = document.querySelectorAll(".mobile-nav-link");

  if (mobileMenuBtn && mobileMenu) {
    const icon = mobileMenuBtn.querySelector("svg");
    const hamburgerPath = "M4 6h16M4 12h16M4 18h16";
    const closePath = "M6 18L18 6M6 6l12 12";

    const toggleMenu = (show) => {
      mobileMenu.classList.toggle("hidden", !show);
      icon.innerHTML = `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="${show ? closePath : hamburgerPath}"></path>`;
    };

    mobileMenuBtn.addEventListener("click", () => {
      const isHidden = mobileMenu.classList.contains("hidden");
      toggleMenu(isHidden);
    });

    mobileNavLinks.forEach((link) => {
      link.addEventListener("click", () => toggleMenu(false));
    });

    document.addEventListener("click", (e) => {
      if (!mobileMenu.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
        toggleMenu(false);
      }
    });
  }
};

// ============================================================================
// FOOTER ACCORDION (Mobile)
// ============================================================================
const initFooterAccordion = () => {
  const footerToggles = document.querySelectorAll(".footer-toggle");

  const updateFooterState = () => {
    const isDesktop = window.innerWidth >= 768;
    footerToggles.forEach((toggle) => {
      const content = toggle
        .closest(".footer-column")
        .querySelector(".footer-content");
      const icon = toggle.querySelector("svg");

      if (isDesktop) {
        content.style.maxHeight = "500px";
        content.style.opacity = "1";
        icon.classList.remove("rotate-180");
      } else {
        content.style.maxHeight = "0";
        content.style.opacity = "0";
        icon.classList.remove("rotate-180");
      }
    });
  };

  footerToggles.forEach((toggle) => {
    toggle.addEventListener("click", () => {
      if (window.innerWidth >= 768) return;

      const column = toggle.closest(".footer-column");
      const content = column.querySelector(".footer-content");
      const icon = toggle.querySelector("svg");

      footerToggles.forEach((other) => {
        if (other !== toggle) {
          const otherContent = other
            .closest(".footer-column")
            .querySelector(".footer-content");
          otherContent.style.maxHeight = "0";
          otherContent.style.opacity = "0";
          other.querySelector("svg").classList.remove("rotate-180");
        }
      });

      const isOpen =
        content.style.maxHeight !== "0px" && content.style.maxHeight !== "";
      content.style.maxHeight = isOpen ? "0" : content.scrollHeight + "px";
      content.style.opacity = isOpen ? "0" : "1";
      icon.classList.toggle("rotate-180", !isOpen);
    });
  });

  window.addEventListener("resize", () => {
    clearTimeout(window.footerResizeTimer);
    window.footerResizeTimer = setTimeout(updateFooterState, 250);
  });

  updateFooterState();
};

// ============================================================================
// SMOOTH SCROLL & ACTIVE NAV
// ============================================================================
const initSmoothScroll = () => {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href");
      // Only prevent default if it's an internal link on the same page
      if (targetId === "#") {
        e.preventDefault();
        return;
      }

      if (targetId.startsWith("#")) {
        const target = document.querySelector(targetId);
        if (target) {
          e.preventDefault();
          const navHeight = 80;
          const targetPosition =
            target.getBoundingClientRect().top + window.scrollY - navHeight;

          window.scrollTo({
            top: targetPosition,
            behavior: "smooth",
          });

          const mobileMenu = document.querySelector(".mobile-menu");
          if (mobileMenu && !mobileMenu.classList.contains("hidden")) {
            mobileMenu.classList.add("hidden");
            const mobileMenuBtn = document.querySelector(
              ".mobile-menu-btn svg path",
            );
            if (mobileMenuBtn) {
              mobileMenuBtn.setAttribute("d", "M4 6h16M4 12h16M4 18h16");
            }
          }
        }
      }
    });
  });

  const navLinks = document.querySelectorAll(".nav-link");
  const sections = document.querySelectorAll("section[id]");

  if (sections.length > 0) {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -70% 0px",
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute("id");
          navLinks.forEach((link) => {
            const isActive = link.getAttribute("href") === `#${id}`;
            link.classList.toggle("text-[var(--xenon-color-cyan)]", isActive);
            link.classList.toggle("text-white/70", !isActive);
          });
        }
      });
    }, observerOptions);

    sections.forEach((section) => observer.observe(section));
  }
};

// ============================================================================
// STATS COUNTER ANIMATION
// ============================================================================
const initStatsCounter = () => {
    if (typeof gsap !== 'undefined') {
        const counters = document.querySelectorAll("[data-count]");
        if (!counters.length) return;

        gsap.registerPlugin(ScrollTrigger);
        counters.forEach((counter) => {
            const target = parseFloat(counter.getAttribute("data-count"));
            const originalText = counter.textContent;
            const symbol = originalText.replace(/[0-9.]/g, "").trim();

            counter.textContent = "0" + symbol;

            gsap.to(counter, {
                scrollTrigger: {
                    trigger: counter,
                    start: "top 85%",
                    once: true,
                },
                innerHTML: target,
                duration: 2.5,
                snap: { innerHTML: 1 },
                ease: "power2.inOut",
                onUpdate: function () {
                    const currentValue = Math.floor(this.targets()[0].innerHTML);
                    counter.innerHTML = currentValue + symbol;
                },
            });
        });
    }
};

// ============================================================================
// GLOBAL INITIALIZATION
// ============================================================================
document.addEventListener("DOMContentLoaded", () => {
  initPageLoader();
  initScrollAnimations();
  initWhatsappResvisibility();
  initMobileMenu();
  initFooterAccordion();
  initSmoothScroll();
  initStatsCounter();

  // Button Click Feedback
  if (typeof gsap !== 'undefined') {
    document
      .querySelectorAll("button, .explore-button, .animated-button")
      .forEach((btn) => {
        btn.addEventListener("click", function () {
          gsap.to(this, { scale: 0.95, duration: 0.1, yoyo: true, repeat: 1 });
        });
      });
  }
});
