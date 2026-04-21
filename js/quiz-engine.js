/**
 * XENON STUDIOS - Quiz Engine
 * Multi-Step Agency Qualification System
 * Lead qualification + scoring + routing engine
 */

(function () {
  "use strict";

  // ============================================
  // Dependency Check
  // ============================================
  if (typeof gsap === "undefined") {
    console.error("Quiz Engine requires GSAP to be loaded. Please include GSAP library.");
    document.addEventListener("DOMContentLoaded", function () {
      var quizContainer = document.getElementById("quiz-container");
      if (quizContainer) {
        quizContainer.innerHTML =
          '<div class="text-center text-white p-8"><p class="text-red-400">Quiz requires GSAP library to function.</p></div>';
      }
    });
    return;
  }

  // ============================================
  // Site Origin for Dynamic Paths
  // ============================================
  var siteOrigin =
    window.location.origin +
    window.location.pathname.replace(/AddOn\/quiz\/.*$/, "");

  function getSiteURL(path) {
    return siteOrigin + path;
  }

  // ============================================
  // Global State
  // ============================================
  const quizState = {
    currentPage: "identity", // identity, stage, budget, processing, results
    user_type: null,
    user_type_score: 0,
    business_stage: null,
    business_stage_score: 0,
    budget_tier: null,
    budget_tier_score: 0,
    total_score: 0,
    isTransitioning: false,
  };

  // Page order for navigation
  const pageOrder = ["identity", "stage", "budget", "processing", "results"];

  // ============================================
  // Scoring Configuration
  // ============================================
  const scoreConfig = {
    user_type_labels: {
      saas: "SaaS / Tech Startup",
      ecommerce: "E-commerce Brand",
      business: "Business / Company",
      clinic: "Clinic / Professional Service",
      agency: "Agency / Creator",
    },
    user_type_icons: {
      saas: "rocket_launch",
      ecommerce: "shopping_cart",
      business: "business_center",
      clinic: "medical_services",
      agency: "palette",
    },
    business_stage_labels: {
      starting: "Starting Out",
      growing: "Growing Fast",
      scaling: "Scaling Up",
    },
    business_stage_icons: {
      starting: "sprout",
      growing: "trending_up",
      scaling: "speed",
    },
    budget_tier_labels: {
      "300-1000": "$300 – $1,000",
      "1000-3000": "$1,000 – $3,000",
      "3000-10000": "$3,000 – $10,000",
      "10000+": "$10,000+",
    },
    resultTiers: {
      high: {
        minScore: 8,
        tier: "High-Ticket Strategy Call",
        description:
          "You're ready for a full-scale digital transformation. Let's build an automated growth system that 10Xs your revenue.",
        cta: "Book Strategy Call",
        ctaLink: "https://wa.link/lx0res",
        icon: "diamond",
        color: "var(--xenon-color-cyan)",
        features: [
          "Full Funnel Automation",
          "AI-Powered Lead Gen",
          "Custom CRM Integration",
          "Dedicated Success Manager",
        ],
      },
      mid: {
        minScore: 5,
        maxScore: 7,
        tier: "Pro / Scale Package",
        description:
          "You're in a strong growth phase. Our Pro Package will accelerate your leads, conversions, and marketing infrastructure.",
        cta: "View Pro Package",
        ctaLink: getSiteURL("index.html#services"),
        icon: "stars",
        color: "var(--xenon-color-purple)",
        features: [
          "Advanced Website Build",
          "Lead Capture Systems",
          "Email Marketing Setup",
          "Analytics Dashboard",
        ],
      },
      starter: {
        minScore: 3,
        maxScore: 4,
        tier: "Starter Package",
        description:
          "Perfect foundation to begin your digital journey. We'll build your online presence and set up core marketing systems.",
        cta: "Get Started",
        ctaLink: getSiteURL("contact.html"),
        icon: "check",
        color: "var(--xenon-color-magenta)",
        features: [
          "Professional Website",
          "Basic SEO Setup",
          "Social Media Templates",
          "Brand Guidelines",
        ],
      },
      low: {
        maxScore: 2,
        tier: "Free Resources & Templates",
        description:
          "Start with our free resources to validate your idea. When you're ready to scale, we'll be here to build your growth engine.",
        cta: "Access Free Resources",
        ctaLink: getSiteURL("index.html#services"),
        icon: "menu_book",
        color: "rgba(255,255,255,0.5)",
        features: [
          "Free Website Templates",
          "Marketing Checklists",
          "Growth Playbooks",
          "Community Access",
        ],
      },
    },
  };

  // ============================================
  // DOM Elements
  // ============================================
  const elements = {
    // Pages
    pageIdentity: document.getElementById("page-identity"),
    pageStage: document.getElementById("page-stage"),
    pageBudget: document.getElementById("page-budget"),
    pageProcessing: document.getElementById("page-processing"),
    pageResults: document.getElementById("page-results"),

    // Progress (removed from UI)
    // progressBar: document.getElementById("quiz-progress-bar"),

    // Buttons
    continueStage: document.getElementById("continue-stage"),
    continueBudget: document.getElementById("continue-budget"),
    getResults: document.getElementById("get-results"),
    backToIdentity: document.getElementById("back-to-identity"),
    backToStage: document.getElementById("back-to-stage"),
    restartQuiz: document.getElementById("restart-quiz"),

    // Option cards
    identityOptions: document.querySelectorAll(".identity-option"),
    stageOptions: document.querySelectorAll(".stage-option"),
    budgetOptions: document.querySelectorAll(".budget-option"),
    allOptionCards: document.querySelectorAll(".quiz-option"),

    // Results elements
    resultBusinessIcon: document.getElementById("result-business-icon"),
    resultBusinessType: document.getElementById("result-business-type"),
    resultStageIcon: document.getElementById("result-stage-icon"),
    resultStage: document.getElementById("result-stage"),
    resultBudgetIcon: document.getElementById("result-budget-icon"),
    resultBudget: document.getElementById("result-budget"),
    tierBadge: document.getElementById("tier-badge"),
    tierTitle: document.getElementById("tier-title"),
    tierDescription: document.getElementById("tier-description"),
    tierFeatures: document.getElementById("tier-features"),
    tierCtaButton: document.getElementById("tier-cta-button"),
    tierCtaText: document.getElementById("tier-cta-text"),

    // Processing
    processingText: document.getElementById("processing-text"),
    processingBar: document.getElementById("processing-bar"),
  };

  // ============================================
  // Element Validation
  // ============================================
  function validateElements() {
    var requiredIds = [
      "quiz-container",
      "page-identity",
      "page-stage",
      "page-budget",
      "page-processing",
      "page-results",
    ];
    for (var i = 0; i < requiredIds.length; i++) {
      if (!document.getElementById(requiredIds[i])) {
        console.error("Quiz Engine: Missing required element #" + requiredIds[i]);
        return false;
      }
    }
    return true;
  }

  if (!validateElements()) {
    console.error("Quiz Engine: Required elements missing. Quiz will not initialize.");
    return;
  }

  // ============================================
  // Core Functions
  // ============================================

  /**
   * Get current page index
   */
  function getCurrentPageIndex() {
    return pageOrder.indexOf(quizState.currentPage);
  }

  /**
   * Update the progress bar based on current page
   */
  function updateProgress() {
    // Progress bar removed from UI
    return;
  }

  /**
   * Show a specific page with animation
   */
  function showPage(pageName, direction = "forward") {
    if (quizState.isTransitioning) return;
    quizState.isTransitioning = true;

    const currentPageEl = document.querySelector(".quiz-page.active");
    const nextPageEl = document.getElementById(`page-${pageName}`);

    if (!nextPageEl) {
      quizState.isTransitioning = false;
      return;
    }

    const isForward = direction === "forward";

    // Animate current page out
    gsap.to(currentPageEl, {
      opacity: 0,
      scale: 0.98,
      y: isForward ? -20 : 20,
      duration: 0.35,
      ease: "power2.inOut",
      onComplete: () => {
        currentPageEl.classList.remove("active");
        currentPageEl.style.display = "none";

        // Prepare next page
        nextPageEl.style.display = "";
        nextPageEl.classList.add("active");
        gsap.set(nextPageEl, {
          opacity: 0,
          scale: 0.98,
          y: isForward ? 20 : -20,
        });

        // Animate next page in
        gsap.to(nextPageEl, {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.45,
          ease: "power2.out",
          onComplete: () => {
            quizState.currentPage = pageName;
            quizState.isTransitioning = false;
            updateProgress();

            // Animate option cards staggered entrance
            const cards = nextPageEl.querySelectorAll(".quiz-option");
            gsap.fromTo(
              cards,
              { opacity: 0, y: 30 },
              {
                opacity: 1,
                y: 0,
                duration: 0.4,
                stagger: 0.08,
                ease: "back.out(1.7)",
                delay: 0.1,
              },
            );
          },
        });
      },
    });
  }

  /**
   * Handle option card selection
   */
  function handleOptionSelection(card, optionGroup) {
    if (quizState.isTransitioning) return;

    const page = card.closest(".quiz-page");
    const cardsInPage = page.querySelectorAll(".quiz-option");

    // Remove previous selection
    cardsInPage.forEach((c) => c.classList.remove("selected"));

    // Add selection with animation
    gsap.to(card, {
      scale: 0.96,
      duration: 0.1,
      ease: "power2.out",
      onComplete: () => {
        card.classList.add("selected");
        gsap.to(card, {
          scale: 1,
          duration: 0.3,
          ease: "back.out(1.7)",
        });
      },
    });

    // Store the selection
    const value = card.dataset.value;
    const score = parseInt(card.dataset.points);

    switch (optionGroup) {
      case "identity":
        quizState.user_type = value;
        quizState.user_type_score = score;
        // Enable continue button
        elements.continueStage.disabled = false;
        gsap.to(elements.continueStage, {
          opacity: 1,
          duration: 0.3,
        });
        break;
      case "stage":
        quizState.business_stage = value;
        quizState.business_stage_score = score;
        elements.continueBudget.disabled = false;
        gsap.to(elements.continueBudget, {
          opacity: 1,
          duration: 0.3,
        });
        break;
      case "budget":
        quizState.budget_tier = value;
        quizState.budget_tier_score = score;
        elements.getResults.disabled = false;
        gsap.to(elements.getResults, {
          opacity: 1,
          duration: 0.3,
        });
        break;
    }
  }

  /**
   * Navigate to next page
   */
  function goToNextPage() {
    const currentIndex = getCurrentPageIndex();
    const nextPage = pageOrder[currentIndex + 1];

    if (nextPage === "processing") {
      showProcessingScreen();
    } else if (nextPage) {
      showPage(nextPage, "forward");
    }
  }

  /**
   * Navigate to previous page
   */
  function goToPreviousPage() {
    const currentIndex = getCurrentPageIndex();
    const prevPage = pageOrder[currentIndex - 1];

    if (prevPage) {
      showPage(prevPage, "backward");
    }
  }

  /**
   * Show processing screen with animation
   */
  function showProcessingScreen() {
    quizState.isTransitioning = true;

    const currentPageEl = document.querySelector(".quiz-page.active");

    // Animate current page out
    gsap.to(currentPageEl, {
      opacity: 0,
      scale: 0.98,
      y: -20,
      duration: 0.35,
      ease: "power2.inOut",
      onComplete: () => {
        currentPageEl.classList.remove("active");
        currentPageEl.style.display = "none";

        // Show processing page
        elements.pageProcessing.style.display = "";
        elements.pageProcessing.classList.add("active");
        gsap.set(elements.pageProcessing, { opacity: 0, scale: 0.95 });

        gsap.to(elements.pageProcessing, {
          opacity: 1,
          scale: 1,
          duration: 0.5,
          ease: "power2.out",
          onComplete: () => {
            quizState.currentPage = "processing";
            updateProgress();

            // Animate processing bar
            const steps = [
              { text: "Evaluating business requirements...", progress: 25 },
              { text: "Analyzing growth potential...", progress: 50 },
              { text: "Calculating investment tier...", progress: 75 },
              { text: "Generating recommendations...", progress: 100 },
            ];

            let stepIndex = 0;
            const processInterval = setInterval(() => {
              if (stepIndex < steps.length) {
                try {
                  elements.processingText.textContent = steps[stepIndex].text;
                  elements.processingBar.style.width = `${steps[stepIndex].progress}%`;
                } catch (e) {
                  console.error("Processing step error:", e);
                }
                stepIndex++;
              } else {
                clearInterval(processInterval);
                // Show results
                setTimeout(() => {
                  try {
                    showResultsPage();
                  } catch (e) {
                    console.error("Show results error:", e);
                  }
                }, 500);
              }
            }, 600);
          },
        });
      },
    });
  }

  /**
   * Calculate total score and show results
   */
  function calculateAndShowResults() {
    quizState.total_score =
      quizState.user_type_score +
      quizState.business_stage_score +
      quizState.budget_tier_score;

    showProcessingScreen();
  }

  /**
   * Determine result tier based on score
   */
  function getResultTier(score) {
    if (score >= 8) return scoreConfig.resultTiers.high;
    if (score >= 5) return scoreConfig.resultTiers.mid;
    if (score >= 3) return scoreConfig.resultTiers.starter;
    return scoreConfig.resultTiers.low;
  }

  /**
   * Display results page
   */
  function showResultsPage() {
    const totalScore = quizState.total_score;
    const tier = getResultTier(totalScore);

    // Populate result values
    elements.resultBusinessType.textContent =
      scoreConfig.user_type_labels[quizState.user_type] || "—";

    elements.resultStage.textContent =
      scoreConfig.business_stage_labels[quizState.business_stage] || "—";

    elements.resultBudget.textContent =
      scoreConfig.budget_tier_labels[quizState.budget_tier] || "—";

    // Populate tier recommendation
    elements.tierTitle.textContent = tier.tier;
    elements.tierDescription.textContent = tier.description;
    elements.tierCtaText.textContent = tier.cta;
    elements.tierCtaButton.href = tier.ctaLink;

    // Generate feature list
    elements.tierFeatures.innerHTML = tier.features
      .map(
        (feature) => `
      <div class="tier-feature">
        <svg class="w-5 h-5 text-xenon-cyan shrink-0" fill="currentColor" viewBox="0 0 24 24">
          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
        </svg>
        <span>${feature}</span>
      </div>
    `,
      )
      .join("");

    // Hide processing, show results
    elements.pageProcessing.classList.remove("active");
    elements.pageProcessing.style.display = "none";

    elements.pageResults.style.display = "";
    elements.pageResults.classList.add("active");
    gsap.set(elements.pageResults, { opacity: 0, y: 30, scale: 0.97 });

    gsap.to(elements.pageResults, {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.6,
      ease: "power2.out",
      onComplete: () => {
        quizState.currentPage = "results";
        quizState.isTransitioning = false;
        updateProgress();

        // Animate result cards staggered
        gsap.fromTo(
          elements.pageResults.querySelectorAll(".result-card"),
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.4,
            stagger: 0.1,
            ease: "back.out(1.7)",
            delay: 0.2,
          },
        );

        // Animate tier card
        gsap.fromTo(
          elements.pageResults.querySelector(".tier-recommendation-card"),
          { opacity: 0, y: 30, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.5,
            ease: "back.out(1.7)",
            delay: 0.4,
          },
        );
      },
    });
  }

  /**
   * Restart quiz
   */
  function restartQuiz() {
    // Reset state
    quizState.currentPage = "identity";
    quizState.user_type = null;
    quizState.user_type_score = 0;
    quizState.business_stage = null;
    quizState.business_stage_score = 0;
    quizState.budget_tier = null;
    quizState.budget_tier_score = 0;
    quizState.total_score = 0;

    // Reset selections
    document.querySelectorAll(".quiz-option.selected").forEach((card) => {
      card.classList.remove("selected");
    });

    // Disable continue buttons
    elements.continueStage.disabled = true;
    elements.continueBudget.disabled = true;
    elements.getResults.disabled = true;
    gsap.set(
      [elements.continueStage, elements.continueBudget, elements.getResults],
      {
        opacity: 0.5,
      },
    );

    // Progress bar removed from UI
    // elements.progressBar.style.width = "0%";

    // Hide all pages
    document.querySelectorAll(".quiz-page").forEach((page) => {
      page.classList.remove("active");
      page.style.display = "none";
    });

    // Show identity page
    elements.pageIdentity.style.display = "";
    elements.pageIdentity.classList.add("active");
    gsap.set(elements.pageIdentity, { opacity: 0, scale: 0.97, y: 20 });

    gsap.to(elements.pageIdentity, {
      opacity: 1,
      scale: 1,
      y: 0,
      duration: 0.6,
      ease: "power2.out",
      delay: 0.2,
      onComplete: () => {
        quizState.isTransitioning = false;

        // Animate option cards
        const cards = elements.pageIdentity.querySelectorAll(".quiz-option");
        gsap.fromTo(
          cards,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.4,
            stagger: 0.08,
            ease: "back.out(1.7)",
            delay: 0.1,
          },
        );
      },
    });
  }

  // ============================================
  // Event Listeners
  // ============================================
  function initEventListeners() {
    // Identity option clicks
    elements.identityOptions.forEach((card) => {
      card.addEventListener("click", () =>
        handleOptionSelection(card, "identity"),
      );
    });

    // Stage option clicks
    elements.stageOptions.forEach((card) => {
      card.addEventListener("click", () =>
        handleOptionSelection(card, "stage"),
      );
    });

    // Budget option clicks
    elements.budgetOptions.forEach((card) => {
      card.addEventListener("click", () =>
        handleOptionSelection(card, "budget"),
      );
    });

    // Continue buttons
    elements.continueStage.addEventListener("click", () =>
      showPage("stage", "forward"),
    );
    elements.continueBudget.addEventListener("click", () =>
      showPage("budget", "forward"),
    );
    elements.getResults.addEventListener("click", calculateAndShowResults);

    // Back buttons
    elements.backToIdentity.addEventListener("click", () =>
      showPage("identity", "backward"),
    );
    elements.backToStage.addEventListener("click", () =>
      showPage("stage", "backward"),
    );

    // Restart quiz
    elements.restartQuiz.addEventListener("click", restartQuiz);

    // Keyboard navigation
    document.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        const activePage = document.querySelector(".quiz-page.active");
        if (!activePage) return;

        const continueBtn = activePage.querySelector(
          ".continue-btn:not(:disabled)",
        );
        if (continueBtn) {
          continueBtn.click();
        }
      }
    });
  }

  // ============================================
  // Initialize
  // ============================================
  function init() {
    // Ensure only identity page is visible initially
    document.querySelectorAll(".quiz-page").forEach((page) => {
      if (page.id !== "page-identity") {
        page.classList.remove("active");
        page.style.display = "none";
      }
    });

    // Set initial button states
    gsap.set(
      [elements.continueStage, elements.continueBudget, elements.getResults],
      {
        opacity: 0.5,
      },
    );

    initEventListeners();
    updateProgress();

    // Animate first page entrance
    gsap.fromTo(
      elements.pageIdentity,
      { opacity: 0, scale: 0.96, y: 30 },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.7,
        ease: "power2.out",
        delay: 0.2,
        onComplete: () => {
          // Animate option cards staggered entrance
          gsap.fromTo(
            elements.identityOptions,
            { opacity: 0, y: 30 },
            {
              opacity: 1,
              y: 0,
              duration: 0.4,
              stagger: 0.08,
              ease: "back.out(1.7)",
              delay: 0.1,
            },
          );
        },
      },
    );

    console.log("Xenon Studios Quiz Engine initialized");
  }

  // Start when DOM is ready
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
