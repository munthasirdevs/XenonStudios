/**
 * XENON STUDIOS - Quiz Engine
 * Multi-Step Agency Qualification System
 * Lead qualification + scoring + routing engine
 */

(function () {
    'use strict';

    // ============================================
    // Global State
    // ============================================
    const quizState = {
        currentPage: 1,
        totalPages: 3,
        user_type: null,
        user_type_score: 0,
        business_stage: null,
        business_stage_score: 0,
        budget_tier: null,
        budget_tier_score: 0,
        total_score: 0,
        isTransitioning: false
    };

    // ============================================
    // Scoring Configuration
    // ============================================
    const scoreConfig = {
        user_type_labels: {
            'saas': 'SaaS / Tech Startup',
            'ecommerce': 'E-commerce Brand',
            'business': 'Business / Company',
            'clinic': 'Clinic / Professional Service',
            'agency': 'Agency / Creator'
        },
        business_stage_labels: {
            'starting': 'Starting — Building Foundation',
            'growing': 'Growing — Scaling Leads & Conversions',
            'scaling': 'Scaling — Full Automation & Systems'
        },
        budget_tier_labels: {
            '300-1000': '$300 – $1,000',
            '1000-3000': '$1,000 – $3,000',
            '3000-10000': '$3,000 – $10,000',
            '10000-plus': '$10,000+'
        },
        resultTiers: {
            high: {
                minScore: 8,
                tier: 'High-Ticket Strategy Call',
                description: 'You\'re ready for a full-scale digital transformation. Let\'s build an automated growth system that 10Xs your revenue.',
                cta: 'Book Strategy Call',
                ctaLink: 'https://wa.link/lx0res'
            },
            mid: {
                minScore: 5,
                maxScore: 7,
                tier: 'Pro / Scale Package',
                description: 'You\'re in a strong growth phase. Our Pro Package will accelerate your leads, conversions, and marketing infrastructure.',
                cta: 'View Pro Package',
                ctaLink: '../../index.html#services'
            },
            starter: {
                minScore: 3,
                maxScore: 4,
                tier: 'Starter Package',
                description: 'Perfect foundation to begin your digital journey. We\'ll build your online presence and set up core marketing systems.',
                cta: 'Get Started',
                ctaLink: '../../index.html#contact'
            },
            low: {
                maxScore: 2,
                tier: 'Free Resources & Templates',
                description: 'Start with our free resources to validate your idea. When you\'re ready to scale, we\'ll be here to build your growth engine.',
                cta: 'Access Free Resources',
                ctaLink: '../../index.html#services'
            }
        }
    };

    // ============================================
    // DOM Elements
    // ============================================
    const elements = {
        pages: document.querySelectorAll('.quiz-page'),
        progressBar: document.querySelector('.progress-bar'),
        currentStep: document.querySelector('.current-step'),
        optionCards: document.querySelectorAll('.option-card'),
        nextBtns: document.querySelectorAll('.next-btn'),
        backBtns: document.querySelectorAll('.back-btn'),
        processingScreen: document.querySelector('.processing-screen'),
        resultContent: document.querySelector('.result-content'),
        userTypeValue: document.querySelector('.user-type-value'),
        businessStageValue: document.querySelector('.business-stage-value'),
        budgetTierValue: document.querySelector('.budget-tier-value'),
        recommendationTier: document.querySelector('.recommendation-tier'),
        recommendationDescription: document.querySelector('.recommendation-description'),
        resultCtaBtn: document.querySelector('.result-cta-btn'),
        resultCtaText: document.querySelector('.cta-btn-text')
    };

    // ============================================
    // Core Functions
    // ============================================

    /**
     * Update the progress bar based on current page
     */
    function updateProgress() {
        const progress = (quizState.currentPage / quizState.totalPages) * 100;
        elements.progressBar.style.width = `${progress}%`;
        elements.currentStep.textContent = quizState.currentPage;
    }

    /**
     * Handle option card selection
     */
    function handleCardSelection(card) {
        if (quizState.isTransitioning) return;

        const page = card.closest('.quiz-page');
        const cardsInPage = page.querySelectorAll('.option-card');

        // Remove previous selection in this page
        cardsInPage.forEach(c => c.classList.remove('selected'));

        // Add click animation
        gsap.to(card, {
            scale: 0.95,
            duration: 0.1,
            ease: 'power2.out',
            onComplete: () => {
                card.classList.add('selected');
                gsap.to(card, {
                    scale: 1,
                    duration: 0.3,
                    ease: 'back.out(1.7)'
                });
            }
        });

        // Store the selection based on current page
        const value = card.dataset.value;
        const score = parseInt(card.dataset.score);

        switch (quizState.currentPage) {
            case 1:
                quizState.user_type = value;
                quizState.user_type_score = score;
                break;
            case 2:
                quizState.business_stage = value;
                quizState.business_stage_score = score;
                break;
            case 3:
                quizState.budget_tier = value;
                quizState.budget_tier_score = score;
                break;
        }

        // Enable the next button
        const nextBtn = page.querySelector('.next-btn');
        if (nextBtn) {
            nextBtn.disabled = false;
        }
    }

    /**
     * Navigate to the next page
     */
    function nextPage() {
        if (quizState.isTransitioning) return;

        const currentPageEl = document.querySelector(`.quiz-page[data-page="${quizState.currentPage}"]`);
        const isLastPage = quizState.currentPage === quizState.totalPages;

        if (isLastPage) {
            // Calculate score and show results
            calculateAndShowResults();
            return;
        }

        quizState.isTransitioning = true;

        const nextPageNum = quizState.currentPage + 1;
        const nextPageEl = document.querySelector(`.quiz-page[data-page="${nextPageNum}"]`);

        // Animate current page out
        gsap.to(currentPageEl, {
            opacity: 0,
            scale: 0.98,
            y: -20,
            duration: 0.4,
            ease: 'power2.inOut',
            onComplete: () => {
                currentPageEl.classList.remove('active');
                currentPageEl.classList.add('exit');

                // Prepare next page
                nextPageEl.classList.add('active');
                gsap.set(nextPageEl, { opacity: 0, scale: 0.98, y: 20 });

                // Animate next page in
                gsap.to(nextPageEl, {
                    opacity: 1,
                    scale: 1,
                    y: 0,
                    duration: 0.5,
                    ease: 'power2.out',
                    onComplete: () => {
                        currentPageEl.classList.remove('exit');
                        quizState.currentPage = nextPageNum;
                        quizState.isTransitioning = false;
                        updateProgress();

                        // Reset next button state
                        const nextBtn = nextPageEl.querySelector('.next-btn');
                        if (nextBtn) nextBtn.disabled = true;
                    }
                });
            }
        });
    }

    /**
     * Navigate to the previous page
     */
    function previousPage() {
        if (quizState.isTransitioning || quizState.currentPage <= 1) return;

        quizState.isTransitioning = true;

        const currentPageEl = document.querySelector(`.quiz-page[data-page="${quizState.currentPage}"]`);
        const prevPageNum = quizState.currentPage - 1;
        const prevPageEl = document.querySelector(`.quiz-page[data-page="${prevPageNum}"]`);

        // Animate current page out
        gsap.to(currentPageEl, {
            opacity: 0,
            scale: 0.98,
            y: 20,
            duration: 0.4,
            ease: 'power2.inOut',
            onComplete: () => {
                currentPageEl.classList.remove('active');
                currentPageEl.classList.add('exit');

                // Prepare previous page
                prevPageEl.classList.add('active');
                gsap.set(prevPageEl, { opacity: 0, scale: 0.98, y: -20 });

                // Animate previous page in
                gsap.to(prevPageEl, {
                    opacity: 1,
                    scale: 1,
                    y: 0,
                    duration: 0.5,
                    ease: 'power2.out',
                    onComplete: () => {
                        currentPageEl.classList.remove('exit');
                        quizState.currentPage = prevPageNum;
                        quizState.isTransitioning = false;
                        updateProgress();

                        // Re-enable next button if there's a selection
                        const nextBtn = prevPageEl.querySelector('.next-btn');
                        const hasSelection = prevPageEl.querySelector('.option-card.selected');
                        if (nextBtn && hasSelection) {
                            nextBtn.disabled = false;
                        }
                    }
                });
            }
        });
    }

    /**
     * Calculate total score and determine result tier
     */
    function calculateTotalScore() {
        quizState.total_score = quizState.user_type_score +
            quizState.business_stage_score +
            quizState.budget_tier_score;
        return quizState.total_score;
    }

    /**
     * Determine which result tier the user falls into
     */
    function getResultTier(totalScore) {
        if (totalScore >= 8) return scoreConfig.resultTiers.high;
        if (totalScore >= 5) return scoreConfig.resultTiers.mid;
        if (totalScore >= 3) return scoreConfig.resultTiers.starter;
        return scoreConfig.resultTiers.low;
    }

    /**
     * Populate and display results
     */
    function displayResults(tier) {
        // Populate summary values
        elements.userTypeValue.textContent = scoreConfig.user_type_labels[quizState.user_type] || '—';
        elements.businessStageValue.textContent = scoreConfig.business_stage_labels[quizState.business_stage] || '—';
        elements.budgetTierValue.textContent = scoreConfig.budget_tier_labels[quizState.budget_tier] || '—';

        // Populate recommendation
        elements.recommendationTier.textContent = tier.tier;
        elements.recommendationDescription.textContent = tier.description;
        elements.resultCtaText.textContent = tier.cta;
        elements.resultCtaBtn.href = tier.ctaLink;
    }

    /**
     * Calculate score and show results with processing animation
     */
    function calculateAndShowResults() {
        quizState.isTransitioning = true;

        const currentPageEl = document.querySelector(`.quiz-page[data-page="${quizState.currentPage}"]`);
        const resultPageEl = document.querySelector('.quiz-page[data-page="result"]');

        // Calculate score
        const totalScore = calculateTotalScore();
        const tier = getResultTier(totalScore);

        // Animate current page out
        gsap.to(currentPageEl, {
            opacity: 0,
            scale: 0.96,
            duration: 0.5,
            ease: 'power2.inOut',
            onComplete: () => {
                currentPageEl.classList.remove('active');

                // Update progress to 100%
                elements.progressBar.style.width = '100%';
                elements.currentStep.textContent = '✓';

                // Show result page with processing animation
                resultPageEl.classList.add('active');
                gsap.fromTo(resultPageEl,
                    { opacity: 0, scale: 0.98 },
                    { opacity: 1, scale: 1, duration: 0.6, ease: 'power2.out' }
                );

                // Show processing animation for 2.5 seconds
                setTimeout(() => {
                    // Animate processing screen out
                    gsap.to(elements.processingScreen, {
                        opacity: 0,
                        y: -30,
                        scale: 0.95,
                        duration: 0.5,
                        ease: 'power2.inOut',
                        onComplete: () => {
                            elements.processingScreen.classList.add('hidden');

                            // Populate results
                            displayResults(tier);

                            // Show result content
                            elements.resultContent.classList.remove('hidden');
                            gsap.fromTo(elements.resultContent,
                                { opacity: 0, y: 40, scale: 0.96 },
                                {
                                    opacity: 1,
                                    y: 0,
                                    scale: 1,
                                    duration: 0.7,
                                    ease: 'power2.out',
                                    onComplete: () => {
                                        quizState.isTransitioning = false;

                                        // Animate result cards staggered
                                        const resultCards = elements.resultContent.querySelectorAll('.result-card');
                                        gsap.fromTo(resultCards,
                                            { opacity: 0, y: 20 },
                                            {
                                                opacity: 1,
                                                y: 0,
                                                duration: 0.5,
                                                stagger: 0.1,
                                                ease: 'back.out(1.7)',
                                                delay: 0.2
                                            }
                                        );

                                        // Animate recommendation card
                                        gsap.fromTo(elements.resultContent.querySelector('.recommendation-card'),
                                            { opacity: 0, y: 30, scale: 0.95 },
                                            {
                                                opacity: 1,
                                                y: 0,
                                                scale: 1,
                                                duration: 0.6,
                                                ease: 'back.out(1.7)',
                                                delay: 0.5
                                            }
                                        );

                                        // Animate CTA button
                                        gsap.fromTo(elements.resultCtaBtn,
                                            { opacity: 0, y: 20, scale: 0.9 },
                                            {
                                                opacity: 1,
                                                y: 0,
                                                scale: 1,
                                                duration: 0.5,
                                                ease: 'back.out(1.7)',
                                                delay: 0.7
                                            }
                                        );

                                        // Animate back link
                                        gsap.fromTo(elements.resultContent.querySelector('.back-to-site'),
                                            { opacity: 0 },
                                            {
                                                opacity: 1,
                                                duration: 0.4,
                                                delay: 0.9
                                            }
                                        );
                                    }
                                }
                            );
                        }
                    });
                }, 2500);
            }
        });
    }

    // ============================================
    // Event Listeners
    // ============================================

    function initEventListeners() {
        // Option card clicks
        elements.optionCards.forEach(card => {
            card.addEventListener('click', () => handleCardSelection(card));
        });

        // Next button clicks
        elements.nextBtns.forEach(btn => {
            btn.addEventListener('click', nextPage);
        });

        // Back button clicks
        elements.backBtns.forEach(btn => {
            btn.addEventListener('click', previousPage);
        });

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                const activePage = document.querySelector('.quiz-page.active');
                const nextBtn = activePage?.querySelector('.next-btn');
                if (nextBtn && !nextBtn.disabled) {
                    nextPage();
                }
            }
        });
    }

    // ============================================
    // Initialize
    // ============================================
    function init() {
        initEventListeners();
        updateProgress();

        // Animate first page entrance
        const firstPage = document.querySelector('.quiz-page[data-page="1"]');
        if (firstPage) {
            gsap.fromTo(firstPage,
                { opacity: 0, scale: 0.96, y: 30 },
                { opacity: 1, scale: 1, y: 0, duration: 0.7, ease: 'power2.out', delay: 0.2 }
            );
        }

        // Log state for debugging
        console.log('Xenon Studios Quiz Engine initialized');
    }

    // Start when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();
