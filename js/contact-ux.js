document.addEventListener('DOMContentLoaded', () => {
    const budgetInput = document.getElementById('budget');
    const budgetValue = document.getElementById('budget-value');
    const budgetTrack = document.getElementById('budget-track');

    if (budgetInput && budgetValue && budgetTrack) {
        const updateBudget = () => {
            const val = parseInt(budgetInput.value);
            const min = parseInt(budgetInput.min);
            const max = parseInt(budgetInput.max);

            // Format value with commas
            const formattedVal = val.toLocaleString();

            // Update text display
            if (val >= max) {
                budgetValue.textContent = `$${formattedVal}+`;
                budgetValue.classList.add('text-xenon-cyan');
            } else {
                budgetValue.textContent = `$${formattedVal}`;
                budgetValue.classList.remove('text-xenon-cyan');
            }

            // Update visible track width
            const percent = ((val - min) / (max - min)) * 100;
            budgetTrack.style.width = `${percent}%`;

            // Add a little glow pulse on change
            budgetTrack.style.filter = `brightness(${1 + (percent / 200)}) drop-shadow(0 0 ${percent / 10}px rgba(0, 242, 255, 0.4))`;
        };

        budgetInput.addEventListener('input', updateBudget);
        updateBudget(); // Initialize state
    }

    // Service Selection Logic
    const serviceButtons = document.querySelectorAll('.service-selection-btn');
    serviceButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Check if it's already active
            const isActive = btn.classList.contains('bg-xenon-cyan/10');

            if (isActive) {
                // Deactivate
                btn.classList.remove('border-xenon-cyan', 'text-xenon-cyan', 'bg-xenon-cyan/10');
                btn.classList.add('border-white/20', 'text-gray-300');
            } else {
                // Activate
                btn.classList.add('border-xenon-cyan', 'text-xenon-cyan', 'bg-xenon-cyan/10');
                btn.classList.remove('border-white/20', 'text-gray-300');

                // Add a small scale animation
                btn.style.transform = 'scale(0.95)';
                setTimeout(() => btn.style.transform = '', 100);
            }
        });
    });

    // Footer Accordion (Mobile)
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

                // Close others
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

    initFooterAccordion();

    // (initStatsCounter removed, now handled in global app.js)
});
