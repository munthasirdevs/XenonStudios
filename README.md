# Xenon Studios

> Premium Digital Agency — Websites, Apps, Automation & Growth Systems

A high-performance, dark-mode agency website with GSAP animations, glassmorphism UI, and an integrated multi-step qualification quiz that routes leads based on business type, growth stage, and budget.

---

## 🌐 Live Site

- **Main Site:** `index.html`
- **Quiz System:** `AddOn/quiz/index.html`

---

## ✨ Features

### Main Website

- **Dark Mode Design** — Premium glassmorphism aesthetic with neon cyan & purple accents
- **GSAP Animations** — Smooth scroll-triggered entrance effects on all sections
- **Responsive Layout** — Fully optimized for desktop, tablet, and mobile
- **Service Sections** — Web/App Development, AI Automation, Digital Marketing, Branding, Video Production
- **Pricing Table** — 3-tier packages (Starter, Pro, High-Ticket)
- **Contact Form** — Client inquiry system with validation
- **Particle Background** — Animated floating dots with mouse interaction

### Quiz System (`AddOn/quiz/`)

- **Multi-Step Qualification** — 3-question flow (Identity → Stage → Budget)
- **Scoring Engine** — Identity (1-2) + Stage (1-3) + Budget (1-4) = Total (max 10)
- **Result Routing:**
  - **8-10** → High-Ticket Strategy Call (WhatsApp CTA)
  - **5-7** → Pro Package
  - **3-4** → Starter Package
  - **≤2** → Free Resources
- **GSAP Transitions** — Fade + zoom page animations
- **Processing Screen** — Animated scan rings + progress bar
- **Horizontal Options** — Side-by-side column layout for all choices
- **Particle Background** — DOM-based floating dots with mouse repulsion

---

## 🛠️ Tech Stack

| Layer          | Technology                       |
| -------------- | -------------------------------- |
| **Markup**     | HTML5                            |
| **Styling**    | Custom CSS + Tailwind CSS (Quiz) |
| **Scripting**  | Vanilla JavaScript               |
| **Animations** | GSAP 3.12                        |
| **Icons**      | Material Symbols Outlined        |
| **Fonts**      | Outfit, Space Grotesk, Syne      |
| **Build**      | None (static site)               |

---

## 📁 Project Structure

```
XenonStudios/
├── index.html                  # Main landing page
├── README.md                   # This file
├── .gitignore                  # Git ignore rules
├── .htaccess                   # Apache configuration
├── sw.js                       # Service Worker
├── css/
│   ├── style.css               # Main site styles
│   └── responsive.css          # Mobile responsive overrides
├── js/
│   └── script.js               # Main site interactions
├── images/
│   ├── logo.png
│   ├── xenon-mini-logo.png
│   ├── icon/
│   │   └── whatsapp-icon.svg
│   └── logos/
└── AddOn/
    └── quiz/
        ├── index.html          # Quiz landing page
        ├── css/
        │   └── quiz-style.css  # Quiz-specific styles
        └── js/
            ├── quiz-engine.js  # Quiz logic, scoring, routing
            └── particles.js    # Floating particle background
```

---

## 🚀 Getting Started

### Local Development

No build step required. Simply open `index.html` in a browser:

```bash
# On Windows
start index.html

# On Mac
open index.html

# On Linux
xdg-open index.html
```

### Quiz

Navigate to `AddOn/quiz/index.html` or click **"Get Your Growth Plan"** on the main site hero section.

---

## 🎨 Design System

### Colors

| Token                     | Value     |
| ------------------------- | --------- |
| `--xenon-color-cyan`      | `#00F2FF` |
| `--xenon-color-purple`    | `#7000FF` |
| `--xenon-color-magenta`   | `#9D174D` |
| `--xenon-color-charcoal`  | `#0A0A0C` |
| `--xenon-color-dark-base` | `#141416` |
| `--xenon-color-surface`   | `#232428` |

### Typography

- **Primary:** Outfit (body, buttons)
- **Secondary:** Space Grotesk (numbers, labels)
- **Accent:** Syne (headings, brand)

### Components

- Glassmorphism cards with `backdrop-filter: blur()`
- Neon glow shadows on interactive elements
- Gradient borders using CSS mask technique
- Smooth `cubic-bezier` transitions throughout

---

## 📱 Responsive Breakpoints

| Breakpoint   | Target       | Behavior                       |
| ------------ | ------------ | ------------------------------ |
| `> 1200px`   | Desktop      | Full grid layouts, max width   |
| `768–1200px` | Tablet       | 2-3 column grids               |
| `< 768px`    | Mobile       | Single column, touch-optimized |
| `< 480px`    | Small Mobile | Reduced padding, smaller fonts |

---

## 🧪 Quiz Scoring

### Question 1 — Identity

| Option                 | Points |
| ---------------------- | ------ |
| SaaS / Tech Startup    | 2      |
| E-commerce Brand       | 2      |
| Business / Company     | 1      |
| Clinic / Prof. Service | 1      |
| Agency / Creator       | 2      |

### Question 2 — Growth Stage

| Option       | Points |
| ------------ | ------ |
| Starting Out | 1      |
| Growing Fast | 2      |
| Scaling Up   | 3      |

### Question 3 — Budget

| Option           | Points |
| ---------------- | ------ |
| $300 – $1,000    | 1      |
| $1,000 – $3,000  | 2      |
| $3,000 – $10,000 | 3      |
| $10,000+         | 4      |

---

## 🔧 Customization

### Update Quiz Results

Edit `AddOn/quiz/js/quiz-engine.js` → `scoreConfig.resultTiers` to modify tier names, descriptions, CTAs, and score thresholds.

### Change Colors

Edit CSS variables in:

- `css/style.css` — Main site
- `AddOn/quiz/css/quiz-style.css` — Quiz

### Add New Quiz Options

Add `<button class="quiz-option-card">` elements in `AddOn/quiz/index.html` with `data-value` and `data-points` attributes.

---

## 📄 License

© 2025 Xenon Studios. All rights reserved.
