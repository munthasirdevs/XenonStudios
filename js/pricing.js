// ============================================================================
// BILLING TOGGLE (Monthly/Yearly)
// ============================================================================
const initBillingToggle = () => {
  const toggle = document.getElementById("billing-toggle");
  const knob = document.getElementById("toggle-knob");
  const monthlyLabel = document.getElementById("monthly-label");
  const yearlyLabel = document.getElementById("yearly-label");
  const monthlyPrices = document.querySelectorAll(".price-monthly");
  const yearlyPrices = document.querySelectorAll(".price-yearly");
  const monthlyPeriods = document.querySelectorAll(".period-monthly");
  const yearlyPeriods = document.querySelectorAll(".period-yearly");

  if (!toggle) return;

  let isYearly = false;

  toggle.addEventListener("click", () => {
    isYearly = !isYearly;
    toggle.setAttribute("aria-checked", isYearly);

    if (isYearly) {
      knob.classList.add("translate-x-8");
      monthlyLabel.classList.replace("text-white", "text-white/50");
      yearlyLabel.classList.replace("text-white/50", "text-white");
      monthlyPrices.forEach((p) => p.classList.add("hidden"));
      yearlyPrices.forEach((p) => p.classList.remove("hidden"));
      monthlyPeriods.forEach((p) => p.classList.add("hidden"));
      yearlyPeriods.forEach((p) => p.classList.remove("hidden"));
    } else {
      knob.classList.remove("translate-x-8");
      monthlyLabel.classList.replace("text-white/50", "text-white");
      yearlyLabel.classList.replace("text-white", "text-white/50");
      monthlyPrices.forEach((p) => p.classList.remove("hidden"));
      yearlyPrices.forEach((p) => p.classList.add("hidden"));
      monthlyPeriods.forEach((p) => p.classList.remove("hidden"));
      yearlyPeriods.forEach((p) => p.classList.add("hidden"));
    }
  });
};

// ============================================================================
// PRICING TAB SWITCHING
// ============================================================================
const initPricingTabs = () => {
  const tabButtons = document.querySelectorAll(".pricing-tab-btn");
  const pricingTabContents = document.querySelectorAll(".pricing-tab-content");

  if (!tabButtons.length || !pricingTabContents.length) return;

  const setActiveTab = (btn) => {
    const targetTab = btn.getAttribute("data-pricing");

    tabButtons.forEach((b) => {
      b.classList.remove("active", "text-[var(--xenon-color-cyan)]", "border-[var(--xenon-color-cyan)]/50");
      b.classList.add("text-white/70", "border-white/10");
    });
    btn.classList.remove("text-white/70", "border-white/10");
    btn.classList.add("active", "text-[var(--xenon-color-cyan)]", "border-[var(--xenon-color-cyan)]/50");

    pricingTabContents.forEach((content) => {
      if (content.getAttribute("data-tab") === targetTab) {
        content.classList.remove("hidden");
      } else {
        content.classList.add("hidden");
      }
    });
  };

  tabButtons.forEach((btn) => {
    btn.addEventListener("click", () => setActiveTab(btn));
  });

  setActiveTab(tabButtons[0]);
};

// Initialize on DOM ready
document.addEventListener("DOMContentLoaded", () => {
  initBillingToggle();
  initPricingTabs();
});