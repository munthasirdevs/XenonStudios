// Initialize GSAP
gsap.registerPlugin(ScrollTrigger);

// Hero Entrance Animation
const tl = gsap.timeline();
tl.from(".hero-title", {
  y: 50,
  opacity: 0,
  duration: 1.2,
  ease: "power4.out",
})
  .from(
    ".hero-visuals",
    {
      y: 100,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    },
    "-=0.8",
  )
  .from(
    ".floating-card",
    {
      y: 30,
      opacity: 0,
      stagger: 0.2,
      duration: 1,
      ease: "power2.out",
    },
    "-=0.5",
  );

// Floating Motion for cards
gsap.to(".floating", {
  y: -20,
  duration: 3,
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut",
  stagger: 0.5,
});

// Mouse Parallax Effect for Hero
document.addEventListener("mousemove", (e) => {
  const { clientX, clientY } = e;
  const xPos = (clientX / window.innerWidth - 0.5) * 20;
  const yPos = (clientY / window.innerHeight - 0.5) * 20;

  gsap.to(".hero-visuals", {
    x: xPos,
    y: yPos,
    duration: 2,
    ease: "power2.out",
  });
});

// Scroll Reveal Animations
gsap.utils.toArray(".fade-in").forEach((el) => {
  gsap.from(el, {
    scrollTrigger: {
      trigger: el,
      start: "top 80%",
    },
    y: 40,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
  });
});

gsap.utils.toArray(".service-card").forEach((el) => {
  gsap.from(el, {
    scrollTrigger: {
      trigger: el,
      start: "top 85%",
    },
    y: 40,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
  });
});

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

// FAQ Toggle Functionality
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

    // Animation
    gsap.fromTo(
      answer,
      { height: 0, opacity: 0 },
      { height: "auto", opacity: 1, duration: 0.3, ease: "power2.out" },
    );
  });
});

// Navigation Scroll
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 100,
        behavior: "smooth",
      });
    }
  });
});

$(document).ready(function () {
  // Function to check if element is in viewport
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

  // Function to animate the counting
  function animateCounter($element) {
    var $this = $element;
    var countTo = parseFloat($this.attr("data-count"));
    var symbol = $this.text().replace(/\d+/g, ""); // Extract + or % symbol

    $({ countNum: 0 }).animate(
      {
        countNum: countTo,
      },
      {
        duration: 2000,
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

  // Handle scroll and initial load
  function checkCounters() {
    $(".about-card [data-count]").each(function () {
      var $this = $(this);

      // Check if element is in viewport and hasn't been animated yet
      if (isElementInViewport(this) && !$this.hasClass("animated")) {
        $this.addClass("animated");
        animateCounter($this);
      }
    });
  }

  // Initial check
  checkCounters();

  // Check on scroll
  $(window).on("scroll", checkCounters);
});

// CTA Button Animations
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
