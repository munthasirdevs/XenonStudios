/**
 * Xenon Studios - Services Page Animations
 * Powered by GSAP & ScrollTrigger
 */

const initServicesAnimations = () => {
    // 1. Register Plugins & Config
    gsap.registerPlugin(ScrollTrigger);

    // Protocol Safety: Prevent ScrollTrigger from probing the window context 
    // too deeply when running on file:// protocol, which triggers CORS warnings.
    ScrollTrigger.config({ 
        limitCallbacks: true,
        autoRefreshEvents: "visibilitychange,DOMContentLoaded,load" // Avoid frequent resize probing
    });

    // 2. Global Defaults
    const sectionSelector = ".service-detail-section";
    const revealScale = 60;
    const revealDuration = 1.2;

    // 3. Section-by-Section Animation Engine
    const sections = gsap.utils.toArray(sectionSelector);

    sections.forEach((section) => {
        // A. Header Reveal (Label, H2, P)
        const header = section.querySelector(".text-center");
        if (header) {
            gsap.from(header.children, {
                scrollTrigger: {
                    trigger: header,
                    start: "top 85%",
                    toggleActions: "play none none reverse",
                },
                y: revealScale / 2,
                opacity: 0,
                duration: revealDuration,
                stagger: 0.15,
                ease: "power3.out",
            });
        }

        // B. Pricing Cards Stagger (Starter, Pro, Enterprise)
        const cards = section.querySelectorAll(".pricing-card");
        if (cards.length > 0) {
            gsap.from(cards, {
                scrollTrigger: {
                    trigger: cards[0], // Trigger when the first card starts coming in
                    start: "top 80%",
                    toggleActions: "play none none reverse",
                },
                y: revealScale,
                opacity: 0,
                duration: 1.2,
                stagger: 0.2,
                ease: "back.out(1.2)",
            });
        }

        // C. Comparison Table Reveal
        const tableContainer = section.querySelector(".overflow-x-auto");
        if (tableContainer) {
            gsap.from(tableContainer, {
                scrollTrigger: {
                    trigger: tableContainer,
                    start: "top 90%",
                    toggleActions: "play none none reverse",
                },
                y: revealScale / 2,
                opacity: 0,
                scale: 0.98,
                duration: 1,
                ease: "power2.out",
            });
        }

        // D. Why Choose & FAQ Interaction (Glass Cards & FAQ items)
        const secondaryItems = section.querySelectorAll(".glass-card, .faq-item");
        if (secondaryItems.length > 0) {
            gsap.from(secondaryItems, {
                scrollTrigger: {
                    trigger: secondaryItems[0],
                    start: "top 85%",
                    toggleActions: "play none none reverse",
                },
                y: revealScale / 1.5,
                opacity: 0,
                duration: 0.8,
                stagger: 0.1,
                ease: "power2.out",
            });
        }
    });

    // 4. Hero Section Special Animation (if present)
    const hero = document.getElementById("main-content");
    if (hero) {
        gsap.from(hero.querySelectorAll(".section-label, h1, p"), {
            opacity: 0,
            y: 30,
            duration: 1,
            stagger: 0.2,
            ease: "power3.out",
            delay: 0.5
        });
    }

    // 5. Navigation Bar Entrance
    gsap.from("nav", {
        y: -100,
        opacity: 0,
        duration: 1,
        ease: "power4.out",
        delay: 0.2
    });
};

// INITIALIZATION
// Ensure everything is loaded before running
window.addEventListener("load", () => {
    // Add a slight delay to ensure browser layout is stable
    setTimeout(initServicesAnimations, 100);
});

// RESHRESH ON RESIZE
// Helps ScrollTrigger recalculate positions if window is resized
let resizeTimeout;
window.addEventListener("resize", () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
        ScrollTrigger.refresh();
    }, 250);
});
