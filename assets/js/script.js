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
      opacity: 1,
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

// Matrix Background
function createMatrixEffect() {
  const matrixBg = document.getElementById("matrixBg");
  const columns = Math.floor(window.innerWidth / 20);

  for (let i = 0; i < columns; i++) {
    const column = document.createElement("div");
    column.classList.add("matrix-column");
    column.style.left = `${i * 20}px`;
    column.style.animationDuration = `${Math.random() * 3 + 2}s`;
    column.style.animationDelay = `${Math.random() * 5}s`;

    // Add random characters
    let content = "";
    const characters = "01";
    const rows = 20;

    for (let j = 0; j < rows; j++) {
      content +=
        characters.charAt(Math.floor(Math.random() * characters.length)) +
        "<br>";
    }

    column.innerHTML = content;
    matrixBg.appendChild(column);
  }
}

// Magnetic Effect
function initMagneticEffect() {
  const magneticElements = document.querySelectorAll(".magnetic");

  magneticElements.forEach((el) => {
    el.addEventListener("mousemove", function (e) {
      const rect = this.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const deltaX = (x - centerX) / 10;
      const deltaY = (y - centerY) / 10;

      this.style.setProperty("--tx", `${deltaX}px`);
      this.style.setProperty("--ty", `${deltaY}px`);
    });

    el.addEventListener("mouseleave", function () {
      this.style.setProperty("--tx", "0px");
      this.style.setProperty("--ty", "0px");
    });
  });
}

// Typing Animation
function initTypingAnimations() {
  const typingElements = document.querySelectorAll(".typing-text");

  typingElements.forEach((el, index) => {
    const text = el.textContent;
    el.textContent = "";
    el.style.animationDelay = `${index * 0.2}s`;

    setTimeout(() => {
      let i = 0;
      const typeWriter = () => {
        if (i < text.length) {
          el.textContent += text.charAt(i);
          i++;
          setTimeout(typeWriter, 50);
        }
      };
      typeWriter();
    }, index * 200);
  });
}

// Counter Animation
function initCounters() {
  const counters = document.querySelectorAll(".count-up");

  counters.forEach((counter) => {
    const target = parseInt(counter.getAttribute("data-count"));
    const duration = 2000;
    const step = target / (duration / 16);
    let current = 0;

    const updateCounter = () => {
      current += step;
      if (current < target) {
        counter.textContent = Math.floor(current).toLocaleString();
        requestAnimationFrame(updateCounter);
      } else {
        counter.textContent = target.toLocaleString();
      }
    };

    // Start when element is in view
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          updateCounter();
          observer.unobserve(entry.target);
        }
      });
    });

    observer.observe(counter);
  });
}

// Particle Animation
function initParticles() {
  const particles = document.querySelectorAll(".particle");

  particles.forEach((particle) => {
    gsap.to(particle, {
      y: -20,
      x: "random(-10, 10)",
      opacity: 0,
      duration: 2,
      repeat: -1,
      delay: "random(0, 3)",
      ease: "power1.inOut",
    });
  });
}

// Advanced GSAP Animations
function initAdvancedAnimations() {
  // Hero section animations
  const heroTimeline = gsap.timeline();

  heroTimeline
    .from(".hero-title span", {
      y: 100,
      opacity: 0,
      duration: 1.5,
      stagger: 0.3,
      ease: "power4.out",
    })
    .to(
      "#heroText",
      {
        opacity: 1,
        duration: 1,
        ease: "power2.out",
      },
      "-=0.5",
    )
    .from(
      ".hero-visuals .floating-card",
      {
        y: 50,
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        ease: "back.out(1.7)",
      },
      "-=0.5",
    );

  // Timeline animations
  gsap.utils.toArray(".timeline-card").forEach((card, i) => {
    gsap.from(card, {
      scrollTrigger: {
        trigger: card,
        start: "top bottom-=100",
        toggleActions: "play none none reverse",
      },
      x: i % 2 === 0 ? -100 : 100,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    });
  });

  // Team cards animations
  gsap.utils.toArray(".team-card").forEach((card, i) => {
    gsap.from(card, {
      scrollTrigger: {
        trigger: card,
        start: "top bottom-=50",
        toggleActions: "play none none reverse",
      },
      y: 100,
      opacity: 0,
      duration: 0.8,
      delay: i * 0.1,
      ease: "back.out(1.7)",
    });
  });

  // Value cards animations
  gsap.utils.toArray(".value-card").forEach((card, i) => {
    gsap.from(card, {
      scrollTrigger: {
        trigger: card,
        start: "top bottom-=50",
        toggleActions: "play none none reverse",
      },
      scale: 0.8,
      opacity: 0,
      duration: 1,
      delay: i * 0.2,
      ease: "elastic.out(1, 0.5)",
    });
  });

  // CTA animations
  gsap.from(".cta-section *", {
    scrollTrigger: {
      trigger: ".cta-section",
      start: "top bottom-=100",
      toggleActions: "play none none reverse",
    },
    y: 50,
    opacity: 0,
    duration: 1,
    stagger: 0.1,
    ease: "power3.out",
  });
}

// Initialize everything when DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
  // Initialize GSAP
  gsap.registerPlugin(ScrollTrigger);

  // Create effects
  createMatrixEffect();
  initMagneticEffect();
  initTypingAnimations();
  initCounters();
  initParticles();
  initAdvancedAnimations();

  // Smooth scrolling for anchor links
  $('a[href^="#"]').on("click", function (e) {
    e.preventDefault();
    const target = $(this.getAttribute("href"));
    if (target.length) {
      $("html, body")
        .stop()
        .animate(
          {
            scrollTop: target.offset().top - 100,
          },
          1000,
          "power3.inOut",
        );
    }
  });

  // Update active nav link on scroll
  $(window).scroll(function () {
    const scrollPos = $(document).scrollTop() + 200;
    $("a.nav-link").each(function () {
      const currLink = $(this);
      const refElement = $(currLink.attr("href"));
      if (
        refElement.length &&
        refElement.position().top <= scrollPos &&
        refElement.position().top + refElement.height() > scrollPos
      ) {
        $("a.nav-link").removeClass("active text-[#00F2FF]");
        currLink.addClass("active text-[#00F2FF]");
      }
    });
  });

  // Hover effects for cards
  $(".hover-3d").hover(
    function () {
      $(this).css(
        "transform",
        "perspective(1000px) rotateX(5deg) rotateY(5deg) translateY(-10px)",
      );
    },
    function () {
      $(this).css(
        "transform",
        "perspective(1000px) rotateX(0) rotateY(0) translateY(0)",
      );
    },
  );

  // Social icon hover effects
  $(".social-icon").hover(
    function () {
      $(this).css("transform", "scale(1.25) rotate(5deg)");
    },
    function () {
      $(this).css("transform", "scale(1) rotate(0)");
    },
  );
});

// Window resize handler
window.addEventListener("resize", function () {
  document.getElementById("matrixBg").innerHTML = "";
  createMatrixEffect();
});

// Form Interactions
document.addEventListener("DOMContentLoaded", function () {
  // Initialize GSAP
  gsap.registerPlugin(ScrollTrigger);

  // Form label animation
  const formInputs = document.querySelectorAll(".form-input");
  formInputs.forEach((input) => {
    // Set initial state
    if (input.value) {
      const label = input.nextElementSibling;
      label.style.top = "0";
      label.style.fontSize = "0.75rem";
      label.style.color = "#00F2FF";
      label.style.background = "#0A0A0C";
      label.style.padding = "0 0.5rem";
      label.style.transform = "translateY(-50%)";
    }

    input.addEventListener("focus", function () {
      const label = this.nextElementSibling;
      label.style.top = "0";
      label.style.fontSize = "0.75rem";
      label.style.color = "#00F2FF";
      label.style.background = "#0A0A0C";
      label.style.padding = "0 0.5rem";
      label.style.transform = "translateY(-50%)";
    });

    input.addEventListener("blur", function () {
      if (!this.value) {
        const label = this.nextElementSibling;
        label.style.top = "50%";
        label.style.fontSize = "1rem";
        label.style.color = "rgba(255, 255, 255, 0.5)";
        label.style.background = "transparent";
        label.style.padding = "0";
        label.style.transform = "translateY(-50%)";
      }
    });
  });

  // Budget selection
  const budgetOptions = document.querySelectorAll(".budget-option");
  const budgetInput = document.getElementById("selectedBudget");

  budgetOptions.forEach((option) => {
    option.addEventListener("click", function () {
      // Remove active class from all options
      budgetOptions.forEach((opt) => {
        opt.classList.remove(
          "bg-[#00F2FF]/20",
          "text-white",
          "border-[#00F2FF]",
        );
        opt.classList.add("text-white/70");
      });

      // Add active class to clicked option
      this.classList.remove("text-white/70");
      this.classList.add(
        "bg-[#00F2FF]/20",
        "text-white",
        "border",
        "border-[#00F2FF]",
      );

      // Update hidden input
      budgetInput.value = this.dataset.budget;
    });
  });

  // Timeline selection
  const timelineOptions = document.querySelectorAll(".timeline-option");
  const timelineInput = document.getElementById("selectedTimeline");

  timelineOptions.forEach((option) => {
    option.addEventListener("click", function () {
      // Remove active class from all options
      timelineOptions.forEach((opt) => {
        opt.classList.remove(
          "bg-[#7000FF]/20",
          "text-white",
          "border-[#7000FF]",
        );
        opt.classList.add("text-white/70");
      });

      // Add active class to clicked option
      this.classList.remove("text-white/70");
      this.classList.add(
        "bg-[#7000FF]/20",
        "text-white",
        "border",
        "border-[#7000FF]",
      );

      // Update hidden input
      timelineInput.value = this.dataset.timeline;
    });
  });

  // File upload interaction
  const fileUpload = document.getElementById("fileUpload");
  const uploadArea = fileUpload.parentElement;

  uploadArea.addEventListener("click", () => fileUpload.click());

  fileUpload.addEventListener("change", function () {
    if (this.files.length > 0) {
      uploadArea.innerHTML = `
                        <i class="fas fa-check text-green-400 text-3xl mb-4"></i>
                        <p class="text-white mb-2">${this.files.length} file(s) selected</p>
                        <p class="text-white/50 text-sm">Click to change files</p>
                    `;
      uploadArea.classList.add("border-green-500/30");
    }
  });

  // Drag and drop for files
  ["dragenter", "dragover", "dragleave", "drop"].forEach((eventName) => {
    uploadArea.addEventListener(eventName, preventDefaults, false);
  });

  function preventDefaults(e) {
    e.preventDefault();
    e.stopPropagation();
  }

  ["dragenter", "dragover"].forEach((eventName) => {
    uploadArea.addEventListener(eventName, highlight, false);
  });

  ["dragleave", "drop"].forEach((eventName) => {
    uploadArea.addEventListener(eventName, unhighlight, false);
  });

  function highlight() {
    uploadArea.classList.add("border-[#00F2FF]", "bg-white/5");
  }

  function unhighlight() {
    uploadArea.classList.remove("border-[#00F2FF]", "bg-white/5");
  }

  uploadArea.addEventListener("drop", handleDrop, false);

  function handleDrop(e) {
    const dt = e.dataTransfer;
    const files = dt.files;
    fileUpload.files = files;

    // Trigger change event
    const event = new Event("change");
    fileUpload.dispatchEvent(event);
  }

  // Form submission
  const contactForm = document.getElementById("contactForm");
  const successMessage = document.getElementById("successMessage");

  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    // Get form data
    const formData = new FormData(this);
    const formObject = {};
    formData.forEach((value, key) => {
      formObject[key] = value;
    });

    // Here you would typically send the data to your server
    console.log("Form submitted:", formObject);

    // Show success message
    successMessage.classList.remove("hidden");

    // Reset form (optional)
    // this.reset();

    // Reset active states
    budgetOptions.forEach((opt) => {
      opt.classList.remove("bg-[#00F2FF]/20", "text-white", "border-[#00F2FF]");
      opt.classList.add("text-white/70");
    });

    timelineOptions.forEach((opt) => {
      opt.classList.remove("bg-[#7000FF]/20", "text-white", "border-[#7000FF]");
      opt.classList.add("text-white/70");
    });

    // Reset file upload
    uploadArea.innerHTML = `
                    <i class="fas fa-cloud-upload-alt text-3xl text-white/30 mb-4"></i>
                    <p class="text-white/50 mb-2">Drag & drop files here or</p>
                    <label for="fileUpload" class="cursor-pointer text-[#00F2FF] hover:text-white transition-colors">
                        Browse Files
                    </label>
                    <input type="file" id="fileUpload" class="hidden" multiple>
                    <p class="text-white/30 text-sm mt-2">Max file size: 10MB</p>
                `;
    uploadArea.classList.remove("border-green-500/30");

    // Scroll to success message
    successMessage.scrollIntoView({ behavior: "smooth", block: "center" });

    // Animate success message
    gsap.fromTo(
      successMessage,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" },
    );
  });

  // FAQ Toggle
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach((item) => {
    const toggle = item.querySelector(".faq-toggle");
    const answer = item.querySelector(".faq-answer");

    item.addEventListener("click", function () {
      const isActive = answer.classList.contains("hidden");

      // Close all other FAQ items
      faqItems.forEach((otherItem) => {
        if (otherItem !== item) {
          otherItem.querySelector(".faq-answer").classList.add("hidden");
          otherItem.querySelector(".faq-toggle").style.transform =
            "rotate(0deg)";
        }
      });

      // Toggle current item
      if (isActive) {
        answer.classList.remove("hidden");
        gsap.fromTo(
          answer,
          { opacity: 0, height: 0 },
          { opacity: 1, height: "auto", duration: 0.3 },
        );
        toggle.style.transform = "rotate(45deg)";
      } else {
        answer.classList.add("hidden");
        toggle.style.transform = "rotate(0deg)";
      }
    });
  });

  // Live Chat Button
  const liveChatButton = document.querySelector(
    'button:contains("Start Live Chat")',
  );
  if (liveChatButton) {
    liveChatButton.addEventListener("click", function () {
      // Create chat modal
      const chatModal = document.createElement("div");
      chatModal.className =
        "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80";
      chatModal.innerHTML = `
                        <div class="glass rounded-3xl w-full max-w-md p-8">
                            <div class="flex justify-between items-center mb-6">
                                <h3 class="text-xl font-bold text-white">Live Chat</h3>
                                <button class="close-chat text-white/50 hover:text-white text-2xl">&times;</button>
                            </div>
                            <div class="space-y-4 mb-6">
                                <div class="bg-white/5 p-4 rounded-xl">
                                    <p class="text-white">Hello! I'm Nova, your AI assistant. How can I help you today?</p>
                                </div>
                            </div>
                            <div class="flex gap-2">
                                <input type="text" placeholder="Type your message..." 
                                    class="flex-1 px-4 py-3 rounded-xl contact-input text-white">
                                <button class="px-6 py-3 rounded-xl bg-gradient-to-r from-[#00F2FF] to-[#7000FF] text-black font-bold">
                                    Send
                                </button>
                            </div>
                        </div>
                    `;

      document.body.appendChild(chatModal);

      // Close modal
      chatModal.querySelector(".close-chat").addEventListener("click", () => {
        document.body.removeChild(chatModal);
      });

      // Close on background click
      chatModal.addEventListener("click", (e) => {
        if (e.target === chatModal) {
          document.body.removeChild(chatModal);
        }
      });
    });
  }

  // Social link hover effects
  const socialLinks = document.querySelectorAll(".social-link");
  socialLinks.forEach((link) => {
    link.addEventListener("mouseenter", function () {
      const icon = this.querySelector("i");
      gsap.to(icon, {
        y: -5,
        duration: 0.3,
        ease: "power2.out",
      });
    });

    link.addEventListener("mouseleave", function () {
      const icon = this.querySelector("i");
      gsap.to(icon, {
        y: 0,
        duration: 0.3,
        ease: "power2.out",
      });
    });
  });

  // Form field focus effects
  const formFields = document.querySelectorAll(".form-field");
  formFields.forEach((field) => {
    const input = field.querySelector("input, textarea, select");
    if (input) {
      input.addEventListener("focus", () => {
        field.classList.add("focused");
      });

      input.addEventListener("blur", () => {
        if (!input.value) {
          field.classList.remove("focused");
        }
      });
    }
  });

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      if (targetId === "#") return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 100,
          behavior: "smooth",
        });
      }
    });
  });
});
