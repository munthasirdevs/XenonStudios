# Xenon Studios

> Premium Digital Agency — Websites, Apps, Automation & Growth Systems

A high-performance, dark-mode agency website featuring GSAP-powered animations, a glassmorphism design system, and an integrated multi-step qualification engine that routes leads based on business intelligence (Identity → Stage → Budget).

---

## 🌐 Project Pages

- **Home:** `index.html` — Brand overview and core service highlights.
- **Services:** `pages/services.html` — Detailed service breakdown with interactive exclusive accordion FAQs.
- **Quiz:** `pages/quiz.html` — Multi-step lead qualification system.
- **Contact:** `pages/contact.html` — Direct inquiry and consultation booking.

---

## ✨ Key Features

### Modern UI/UX

- **Premium Design System** — Advanced glassmorphism with `backdrop-filter` and neon accent palettes (Cyan, Purple, Magenta).
- **Interactive FAQs** — Exclusive accordion behavior (powered by HTML5 `name` attribute) where only one question remains open at a time, providing a focused "radio-button" style reading experience.
- **"Why Choose Us" Grid** — Dynamic service-driven grid with subtle background glows and hover-triggered accent transitions.
- **Unified Animations** — Centralized GSAP 3.12 engine for scroll-triggered reveals and staggered entrance effects.

### Lead Qualification Engine

- **Scoring System** — Sophisticated logic based on client profile, business maturity, and investment capacity.
- **Dynamic Routing**:
  - **High-Ticket** (8-10 pts) → Direct Strategy Call routing.
  - **Growth/Pro** (5-7 pts) → Custom roadmap and pro packages.
  - **Starter/Starter** (3-4 pts) → Foundational digital setup.
  - **Resource Tier** (≤2 pts) → Automated resource delivery.
- **Animated Progress** — Visual processing screen with scanner rings and real-time calculation feedback.

---

## 🛠️ Tech Stack

| Layer          | Technology                       |
| -------------- | -------------------------------- |
| **Markup**     | HTML5 (Semantic & Accessible)    |
| **Styling**    | Custom Vanilla CSS + Tailwind CSS|
| **Animations** | GSAP 3.12 (ScrollTrigger, Text)  |
| **Scripting**  | Vanilla JavaScript (ES6+)        |
| **Icons**      | Material Symbols & Font Awesome  |
| **Fonts**      | Outfit, Space Grotesk, Syne      |

---

## 📁 Project Structure

```
XenonStudios/
├── index.html                  # Main entry point
├── README.md                   # Project documentation
├── css/
│   ├── app.css                 # Core design system & global tokens
│   ├── buttons.css             # Reusable button component styles
│   ├── quiz-style.css          # Quiz-specific animations & effects
│   └── responsive.css          # Global mobile/tablet overrides
├── js/
│   ├── app.js                  # Site-wide logic & GSAP orchestration
│   ├── quiz-engine.js          # Scoring logic & lead routing
│   └── tailwind.config.js      # Theme & color configuration
├── pages/
│   ├── services.html           # Services & interactive FAQs
│   ├── quiz.html               # Lead qualification flow
│   └── contact.html            # Contact & booking
└── images/                     # Optimized visual assets
```

---

## 🎨 Design System Tokens

### Color Palette

- **Cyan:** `rgba(0, 242, 255, 1)` — Action primary / Links
- **Purple:** `rgba(112, 0, 255, 1)` — Secondary accents
- **Magenta:** `rgba(157, 23, 77, 1)` — High-contrast alerts
- **Surface:** `rgba(20, 20, 22, 1)` — Base container color

### Typography

- **Brand/Headings:** `Syne` (Bold, professional)
- **Body/UI:** `Outfit` (Modern, readable)
- **Data/Labels:** `Space Grotesk` (Technical precision)

---

## 🚀 Development & Deployment

### Local Setup

The project is built as a highly optimized static site. No build process is required:

1. Clone the repository.
2. Open `index.html` in any modern browser.
3. For the best experience, use a local server (e.g., Live Server) to ensure all GSAP scroll triggers initialize correctly.

### Customization

- **FAQ Content**: Update the `<details>` elements in `pages/services.html`. The `name="faq"` attribute automatically handles the exclusive closing logic.
- **Quiz Thresholds**: Modify the `scoreConfig.resultTiers` object in `js/quiz-engine.js`.
- **Styling**: Global tokens are managed in `:root` inside `css/app.css`.

---

## 📝 Recent Updates (April 2026)

### Revenue-Share Pricing Model

All 9 services now feature new revenue-share pricing plans:

| Service | Starter | Growth | Enterprise |
|---------|---------|--------|------------|
| AI Automation | $25k + 10% | $60k + $5k/mo + 12% | $150k + 15% |
| Cybersecurity | $15k + 8% | $45k/yr + 10% | $120k + 12% |
| Digital Marketing | $8k/mo + 10% | $25k/mo + 15% | $60k/mo + 20% |
| Web Development | $48k + 8% | $90k + $12k/mo + 12% | $180k + $15k/mo + 15% |
| VFX & Animation | $45k + 10% | $120k + 12% | $5k/mo + 8% |
| Motion Graphics | $20k + $2k/mo + 8% | $5k/mo + 10% | $45k + 12% |
| Video Editing | $3k/ad + 8% | $7k/mo + 10% | $500/mo + 5% |
| Visual Design | $25k + $3k/mo + 8% | $2.5k/mo + 6% | $45k + 15% |
| E-commerce | $25k + $5k/mo + 10% | $15k/mo + 8% | $12k + $2k/mo + 12% |

### Structural Fixes

- Fixed typo: `material_symbols-outlined` (line ~2278)
- Fixed 8 comparison tables with extra/missing closing divs

---

© 2026 Xenon Studios. High-performance digital architecture.
