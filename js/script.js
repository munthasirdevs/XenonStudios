// ============================================
// GSAP & PLUGIN INITIALIZATION
// ============================================
gsap.registerPlugin(ScrollTrigger);

// ============================================
// HERO & ENTRANCE ANIMATIONS
// ============================================
function initHeroAnimations() {
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
}

function initFloatingMotion() {
  gsap.to(".floating", {
    y: -20,
    duration: 3,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
    stagger: 0.5,
  });
}

function initParallaxEffect() {
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
}

// ============================================
// SCROLL REVEAL ANIMATIONS
// ============================================
function initScrollReveal() {
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
}

function initAdvancedScrollAnimations() {
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

// ============================================
// FAQ FUNCTIONALITY
// ============================================
function initFAQ() {
  document.querySelectorAll(".faq-question").forEach((question) => {
    question.addEventListener("click", () => {
      const item = question.parentElement;
      const answer = item.querySelector(".faq-answer");
      const toggle = item.querySelector(".faq-toggle");

      document.querySelectorAll(".faq-item").forEach((otherItem) => {
        if (otherItem !== item) {
          otherItem.querySelector(".faq-answer").classList.add("hidden");
          otherItem.querySelector(".faq-toggle").textContent = "+";
        }
      });

      answer.classList.toggle("hidden");
      toggle.textContent = answer.classList.contains("hidden") ? "+" : "−";

      gsap.fromTo(
        answer,
        { height: 0, opacity: 0 },
        { height: "auto", opacity: 1, duration: 0.3, ease: "power2.out" },
      );
    });
  });
}

// ============================================
// NAVIGATION & SCROLLING
// ============================================
function initNavigation() {
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
}

function initActiveNavUpdate() {
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
}

// ============================================
// BUTTON INTERACTIONS
// ============================================
function initButtonAnimations() {
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
}

// ============================================
// MATRIX BACKGROUND EFFECT
// ============================================
function createMatrixEffect() {
  const matrixBg = document.getElementById("matrixBg");
  if (!matrixBg) return;

  matrixBg.innerHTML = "";
  const columns = Math.floor(window.innerWidth / 20);

  for (let i = 0; i < columns; i++) {
    const column = document.createElement("div");
    column.classList.add("matrix-column");
    column.style.left = `${i * 20}px`;
    column.style.animationDuration = `${Math.random() * 3 + 2}s`;
    column.style.animationDelay = `${Math.random() * 5}s`;

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

// ============================================
// MAGNETIC EFFECT
// ============================================
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

// ============================================
// TYPING ANIMATION
// ============================================
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

// ============================================
// COUNTER ANIMATIONS
// ============================================
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

function initJQueryCounters() {
  function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  function animateCounter($element) {
    const countTo = parseFloat($element.attr("data-count"));
    const symbol = $element.text().replace(/\d+/g, "");

    $({ countNum: 0 }).animate(
      { countNum: countTo },
      {
        duration: 2000,
        easing: "swing",
        step: function () {
          $element.text(Math.floor(this.countNum) + symbol);
        },
        complete: function () {
          $element.text(countTo + symbol);
        },
      },
    );
  }

  function checkCounters() {
    $(".about-card [data-count]").each(function () {
      const $this = $(this);
      if (isElementInViewport(this) && !$this.hasClass("animated")) {
        $this.addClass("animated");
        animateCounter($this);
      }
    });
  }

  checkCounters();
  $(window).on("scroll", checkCounters);
}

// ============================================
// PARTICLE ANIMATION
// ============================================
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

// ============================================
// FORM INTERACTIONS
// ============================================
function initFormLabels() {
  const formInputs = document.querySelectorAll(".form-input");

  formInputs.forEach((input) => {
    if (input.value) {
      const label = input.nextElementSibling;
      setLabelActive(label);
    }

    input.addEventListener("focus", function () {
      const label = this.nextElementSibling;
      setLabelActive(label);
    });

    input.addEventListener("blur", function () {
      if (!this.value) {
        const label = this.nextElementSibling;
        setLabelInactive(label);
      }
    });
  });
}

function setLabelActive(label) {
  label.style.top = "0";
  label.style.fontSize = "0.75rem";
  label.style.color = "#00F2FF";
  label.style.background = "#0A0A0C";
  label.style.padding = "0 0.5rem";
  label.style.transform = "translateY(-50%)";
}

function setLabelInactive(label) {
  label.style.top = "50%";
  label.style.fontSize = "1rem";
  label.style.color = "rgba(255, 255, 255, 0.5)";
  label.style.background = "transparent";
  label.style.padding = "0";
  label.style.transform = "translateY(-50%)";
}

function initBudgetSelection() {
  const budgetOptions = document.querySelectorAll(".budget-option");
  const budgetInput = document.getElementById("selectedBudget");

  budgetOptions.forEach((option) => {
    option.addEventListener("click", function () {
      budgetOptions.forEach((opt) => {
        opt.classList.remove(
          "bg-[#00F2FF]/20",
          "text-white",
          "border-[#00F2FF]",
        );
        opt.classList.add("text-white/70");
      });

      this.classList.remove("text-white/70");
      this.classList.add(
        "bg-[#00F2FF]/20",
        "text-white",
        "border",
        "border-[#00F2FF]",
      );
      budgetInput.value = this.dataset.budget;
    });
  });
}

function initTimelineSelection() {
  const timelineOptions = document.querySelectorAll(".timeline-option");
  const timelineInput = document.getElementById("selectedTimeline");

  timelineOptions.forEach((option) => {
    option.addEventListener("click", function () {
      timelineOptions.forEach((opt) => {
        opt.classList.remove(
          "bg-[#7000FF]/20",
          "text-white",
          "border-[#7000FF]",
        );
        opt.classList.add("text-white/70");
      });

      this.classList.remove("text-white/70");
      this.classList.add(
        "bg-[#7000FF]/20",
        "text-white",
        "border",
        "border-[#7000FF]",
      );
      timelineInput.value = this.dataset.timeline;
    });
  });
}

function initFileUpload() {
  const fileUpload = document.getElementById("fileUpload");
  const uploadArea = fileUpload?.parentElement;

  if (!uploadArea) return;

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

  ["dragenter", "dragover", "dragleave", "drop"].forEach((eventName) => {
    uploadArea.addEventListener(eventName, (e) => {
      e.preventDefault();
      e.stopPropagation();
    });
  });

  ["dragenter", "dragover"].forEach((eventName) => {
    uploadArea.addEventListener(eventName, () => {
      uploadArea.classList.add("border-[#00F2FF]", "bg-white/5");
    });
  });

  ["dragleave", "drop"].forEach((eventName) => {
    uploadArea.addEventListener(eventName, () => {
      uploadArea.classList.remove("border-[#00F2FF]", "bg-white/5");
    });
  });

  uploadArea.addEventListener("drop", (e) => {
    fileUpload.files = e.dataTransfer.files;
    fileUpload.dispatchEvent(new Event("change"));
  });
}

function initFormSubmission() {
  const contactForm = document.getElementById("contactForm");
  const successMessage = document.getElementById("successMessage");
  const budgetOptions = document.querySelectorAll(".budget-option");
  const timelineOptions = document.querySelectorAll(".timeline-option");
  const uploadArea = document.getElementById("fileUpload")?.parentElement;

  if (!contactForm) return;

  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const formData = new FormData(this);
    const formObject = {};
    formData.forEach((value, key) => {
      formObject[key] = value;
    });

    console.log("Form submitted:", formObject);

    successMessage.classList.remove("hidden");

    budgetOptions.forEach((opt) => {
      opt.classList.remove("bg-[#00F2FF]/20", "text-white", "border-[#00F2FF]");
      opt.classList.add("text-white/70");
    });

    timelineOptions.forEach((opt) => {
      opt.classList.remove("bg-[#7000FF]/20", "text-white", "border-[#7000FF]");
      opt.classList.add("text-white/70");
    });

    if (uploadArea) {
      uploadArea.innerHTML = `
        <i class="fas fa-cloud-upload-alt text-3xl text-white/30 mb-4"></i>
        <p class="text-white/50 mb-2">Drag & drop files here or</p>
        <label for="fileUpload" class="cursor-pointer text-[#00F2FF] hover:text-white transition-colors">
          Browse Files
        </label>
      `;
      uploadArea.classList.remove("border-green-500/30");
    }

    successMessage.scrollIntoView({ behavior: "smooth", block: "center" });

    gsap.fromTo(
      successMessage,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" },
    );
  });
}

// ============================================
// HOVER EFFECTS
// ============================================
function initHoverEffects() {
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

  $(".social-icon").hover(
    function () {
      $(this).css("transform", "scale(1.25) rotate(5deg)");
    },
    function () {
      $(this).css("transform", "scale(1) rotate(0)");
    },
  );

  const socialLinks = document.querySelectorAll(".social-link");
  socialLinks.forEach((link) => {
    link.addEventListener("mouseenter", function () {
      const icon = this.querySelector("i");
      gsap.to(icon, { y: -5, duration: 0.3, ease: "power2.out" });
    });

    link.addEventListener("mouseleave", function () {
      const icon = this.querySelector("i");
      gsap.to(icon, { y: 0, duration: 0.3, ease: "power2.out" });
    });
  });
}

function initFormFieldFocus() {
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
}

// ============================================
// LIVE CHAT
// ============================================
function initLiveChat() {
  const liveChatButton = document.querySelector(
    'button:contains("Start Live Chat")',
  );
  if (!liveChatButton) return;

  liveChatButton.addEventListener("click", function () {
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

    chatModal.querySelector(".close-chat").addEventListener("click", () => {
      document.body.removeChild(chatModal);
    });

    chatModal.addEventListener("click", (e) => {
      if (e.target === chatModal) {
        document.body.removeChild(chatModal);
      }
    });
  });
}

// ============================================
// INITIALIZATION
// ============================================
document.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);

  // Hero animations
  initHeroAnimations();
  initFloatingMotion();
  initParallaxEffect();

  // Scroll animations
  initScrollReveal();
  initAdvancedScrollAnimations();

  // Form interactions
  initFAQ();
  initNavigation();
  initActiveNavUpdate();
  initButtonAnimations();

  // Effects
  createMatrixEffect();
  initMagneticEffect();
  initTypingAnimations();
  initCounters();
  initJQueryCounters();
  initParticles();

  // Form handling
  initFormLabels();
  initBudgetSelection();
  initTimelineSelection();
  initFileUpload();
  initFormSubmission();

  // Hover effects
  initHoverEffects();
  initFormFieldFocus();

  // Initialize live chat
  initLiveChat();
});

// ============================================
// WINDOW RESIZE
// ============================================
window.addEventListener("resize", function () {
  createMatrixEffect();
});
