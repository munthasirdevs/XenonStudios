// ============================================================================
// INITIALIZATION
// ============================================================================
if (typeof gsap !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

// ============================================================================
// GSAP SCROLL ANIMATIONS (Index Page Specific)
// ============================================================================
const initGsapAnimations = () => {
  if (typeof gsap === 'undefined') return;

  // Only run heavy GSAP animations if not reduced-motion preference
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;
  if (prefersReducedMotion) {
    return;
  }

  // Navigation Fade In
  gsap.from("nav", {
    opacity: 0,
    y: -20,
    duration: 1,
    ease: "power2.out",
    clearProps: "all",
  });

  // Hero Staggered Reveal
  const heroElements = [
    "#home .hero-title",
    "#home p",
    "#home .explore-button",
    "#home .view-services-btn",
  ];
  gsap.fromTo(
    heroElements,
    {
      opacity: 0,
      y: 30,
    },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power2.out",
      delay: 0.3,
      clearProps: "opacity,transform",
    },
  );

  // Section Reveals
  gsap.utils.toArray("section:not(#home)").forEach((section) => {
    gsap.from(section, {
      scrollTrigger: {
        trigger: section,
        start: "top 85%",
      },
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
      clearProps: "all",
    });
  });

  // Service Cards
  gsap.from(".service-card", {
    scrollTrigger: {
      trigger: "#services",
      start: "top 70%",
    },
    y: 60,
    opacity: 0,
    duration: 0.8,
    stagger: 0.15,
    ease: "power2.out",
    clearProps: "all",
  });

  // FAQ Items
  gsap.utils.toArray(".faq-item").forEach((el, i) => {
    gsap.from(el, {
      scrollTrigger: {
        trigger: el,
        start: "top 90%",
      },
      y: 20,
      opacity: 0,
      duration: 0.6,
      ease: "power2.out",
      clearProps: "all",
    });
  });
};

// ============================================================================
// STATS COUNTERS ANIMATION (Index Page Specific)
// ============================================================================
// ============================================================================
// INDEX PAGE INITIALIZATION
// ============================================================================
document.addEventListener("DOMContentLoaded", () => {
  initGsapAnimations();
});
