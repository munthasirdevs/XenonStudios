# docs/opencode.md - Specification

## 1. Document Purpose

A concise Standard Operating Procedure (SOP) for developers working on Xenon Studios. Acts as a quick-reference guide for day-to-day development tasks, design system patterns, and quality standards.

**Status:** Draft · Pending Review

---

## 2. Project Overview

### 2.1 Tech Stack

| Layer        | Technology                          |
|-------------|-------------------------------------|
| Markup      | HTML5 (Semantic & Accessible)        |
| Styling     | Custom Vanilla CSS + Tailwind CSS     |
| Animations  | GSAP 3.12 (ScrollTrigger, Text)      |
| Scripting   | Vanilla JavaScript (ES6+)             |
| Icons       | Material Symbols & Font Awesome      |
| Fonts       | Outfit, Space Grotesk, Syne, Ubuntu |

### 2.2 File Structure

```
XenonStudios/
├── index.html               # Main entry point
├── README.md               # Project documentation
├── docs/
│   └── opencode.md        # This SOP
├── css/
│   ├── app.css            # Core design system & global tokens
│   ├── buttons.css        # Reusable button component styles
│   └── responsive.css    # Global mobile/tablet overrides
├── js/
│   ├── app.js            # Site-wide logic & GSAP orchestration
│   ├── quiz-ux.js        # Quiz-specific UX logic
│   └── tailwind.config.js
└── pages/
    ├── services.html     # Services & interactive FAQs
    ├── quiz.html         # Lead qualification flow
    └── contact.html      # Contact & booking
```

### 2.3 Key Design Patterns

- **Glassmorphism:** `backdrop-filter: blur() + rgba()` backgrounds
- **Neon Accents:** Cyan (`#00f2ff`), Purple (`#7c12ff`), Magenta (`#9d174d`)
- **GSAP Orchestration:** Single GSAP instance with ScrollTrigger for all scroll animations
- **70/20/10 Rule:** Cyan 20%, Purple 7%, Magenta 3%

---

## 3. Development Workflows

### 3.1 CSS File Organization

| File             | Purpose                                       |
|-----------------|-----------------------------------------------|
| `app.css`        | Core design tokens (:root), global styles, glassmorphism, grid background, glow orbs |
| `buttons.css`    | All button variants (space-button, animated, explore, ghost, WhatsApp) |
| `responsive.css` | Mobile/tablet overrides, reduced motion, performance fixes |

**Rule:** Put global tokens and shared patterns in `app.css`. Put component-specific overrides in their respective files.

### 3.2 Adding a New Service

1. Add service section in `pages/services.html` with proper `id`
2. Add service card to `index.html` Services grid
3. Update navigation links in all pages
4. Use existing service card pattern (see DESIGN- SYSTEM.md §7.2)
5. Update `docs/opencode.md` workflow section

### 3.3 Updating Pricing

1. Locate pricing tier cards in the relevant HTML file
2. Follow the 3-tier revenue-share format: Starter / Growth / Enterprise
3. Use Tailwind pricing card classes from `index- style.css`
4. Sync comparison table with Feature Breakdown format

### 3.4 Modifying Animations

1. Open `js/app.js` — contains all GSAP logic
2. Use ScrollTrigger for scroll-based animations
3. Always respect `prefers-reduced-motion` media query
4. Test locally with a live server for proper ScrollTrigger initialization

### 3.5 Adding a New Page

1. Create new `.html` file in root or `pages/` directory
2. Include required CSS (app.css, buttons.css, responsive.css)
3. Include required JS (app.js, page-specific UX)
4. Add navigation link to all existing pages
5. Follow existing page structure (page loader → nav → content → footer)

---

## 4. Quality Standards

### 4.1 Design Token Quick Reference

**Colors (CSS Custom Properties in :root)**

| Token                         | Value                    |
|-------------------------------|--------------------------|
| `--xenon-color-cyan`           | `rgba(0, 242, 255, 1)`  |
| `--xenon-color-purple`        | `rgba(112, 0, 255, 1)`  |
| `--xenon-color-magenta`        | `rgba(157, 23, 77, 1)`  |
| `--xenon-color-black`          | `rgba(0, 0, 0, 1)`      |
| `--xenon-color-dark-base`     | `rgba(20, 20, 22, 1)`   |
| `--xenon-color-white`         | `rgba(255, 255, 255, 1)`|

**Spacing (--space-*)**

`--space-1` (4px) → `--space-2` (8px) → `--space-3` (12px) → `--space-4` (16px) → `--space-5` (24px) → `--space-6` (32px) → `--space-8` (48px)

**Typography**

| Class         | Font Family    |
|---------------|---------------|
| `.outfit`     | Outfit        |
| `.space-font`  | Space Grotesk |
| `.syne`       | Syne         |
| `.ubuntu`     | Ubuntu       |

### 4.2 Performance Checklist

- [ ] Max 1 glow effect per component
- [ ] Max 2 gradients per component
- [ ] Particles ONLY in hero section
- [ ] Max 1 backdrop-filter per card
- [ ] No more than 3 box-shadows per element
- [ ] Test with mobile viewport (375px)
- [ ] Verify `prefers-reduced-motion` support

### 4.3 Accessibility Requirements

- [ ] All interactive elements have visible focus states
- [ ] ARIA labels on icons and non-text elements
- [ ] Skip navigation link present
- [ ] Color contrast meets WCAG AA (4.5:1 for text)
- [ ] Keyboard navigation functional

### 4.4 Naming Conventions

| Pattern              | Example                      |
|---------------------|------------------------------|
| Section IDs          | `#home`, `#services`, `#pricing` |
| Component Classes   | `.glass-card`, `.service-card`   |
| Button Classes      | `.space-button`, `.animated-button` |
| CSS Custom Props    | `--xenon-color-*`, `--space-*`   |

---

## 5. Quick Commands

| Task                          | Action                                    |
|-------------------------------|-------------------------------------------|
| Test locally                   | Open index.html in browser or use Live Server |
| Add new service                | Copy existing service section, update IDs and content |
| Update design tokens           | Edit `:root` in `css/app.css`            |
| Test animations                 | Run locally, scroll through all sections   |
| Check accessibility            | Use browser DevTools Lighthouse audit     |

---

## 6. Related Documentation

- `docs/DESIGN-SYSTEM.md` — Full design system specification
- `README.md` — Project overview and key features
- `pages/services.ht ml` — Services page implementation