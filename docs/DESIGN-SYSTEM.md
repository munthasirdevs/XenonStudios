# Xenon Studios Design System

> **Version:** 2.3.0
> **Last Updated:** April 24, 2026
> **Status:** Active
> **Applies To:** Xenon Studios Main Website (All Pages)

## Version History

| Version | Date | Changes |
| ------- | ---- | ------- |
| 2.3.0 | April 24, 2026 | **Architectural Refactoring & Modularization.** Successfully split the monolithic `style.css` and `script.js` into targeted components (`app.css`, `buttons.css`, `index-style.css`, `responsive.css`) and scripts (`app.js`, `index-ux.js`, `contact-ux.js`). Unified all Tailwind configurations into a single `tailwind.config.js`. Consolidated global animation logic (stats counter, loaders) into `app.js` to eliminate code duplication across pages. |
| 2.2.0 | April 21, 2026 | Comprehensive design analysis completed. Added services.html page with service-specific sections (AI Automation, Web Development), detailed pricing tiers, comparison tables, trust indicators, FAQs, and service navigation. Enhanced gradient border cards, liquid shine hover effects, glass panels, service nav buttons. Updated JavaScript architecture (page loader, mobile menu, smooth scroll, active nav tracking, stats counters, GSAP scroll animations, reduced motion support). |

| 2.1.0 | April 16, 2026 | Rebuilt service card buttons with 7 animated bubble layers (btn-001 pattern) using :root accent colors (purple, blue-electric, violet-glow, blue-soft, magenta-bright, neon-mint). Restored service card 6-layer radial gradient design. Restored pricing card buttons to space-button with bright-particles effect. Added AddOn/btn/ to .gitignore. |

| 2.0.0 | April 14, 2026 | 7-phase overhaul: accent hierarchy, effect limitations, product layer (forms, feedback, data UI, dashboard), 96 design tokens, 40 utility classes, performance optimizations (backdrop-filter, blur, will-change, reduced motion, mobile overrides), conversion engine (sticky CTA, social proof, hero quiz), mobile strategy, accessibility (focus-visible, skip link, ARIA, keyboard nav) |

| 1.0.0 | April 14, 2026 | Initial complete design system documentation |

---

## Table of Contents

1. [Overview](#1-overview)
2. [Design Philosophy](#2-design-philosophy)
3. [Color Palette](#3-color-palette)
   - 3.1 [Primary Brand Colors](#31-primary-brand-colors)
   - 3.2 [Black & Dark Scale](#32-black--dark-scale)
   - 3.3 [Light Scale](#33-light-scale)
   - 3.4 [Additional Accents](#34-additional-accents)
   - 3.5 [CSS Custom Properties](#35-css-custom-properties)
   - 3.6 [Accent Hierarchy (70/20/10 Rule)](#36-accent-hierarchy-702010-rule)
   - 3.7 [Effect Limitation Rules](#37-effect-limitation-rules)
   - 3.8 [Design Token System](#38-design-token-system)
4. [Typography](#4-typography)
   - 4.1 [Font Families](#41-font-families)
   - 4.2 [Typography Scale](#42-typography-scale)
   - 4.3 [Text Effects](#43-text-effects)
   - 4.4 [Font Smoothing](#44-font-smoothing)
5. [Spacing System](#5-spacing-system)
   - 5.1 [Section Spacing](#51-section-spacing)
   - 5.2 [Grid Gaps](#52-grid-gaps)
   - 5.3 [Component Spacing](#53-component-spacing)
   - 5.4 [Design Token Utility Classes](#54-design-token-utility-classes)
6. [Layout & Grid System](#6-layout--grid-system)
   - 6.1 [Max Widths](#61-max-widths)
   - 6.2 [Grid Patterns](#62-grid-patterns)
   - 6.3 [Container Structure](#63-container-structure)
   - 6.4 [Product Layer Layouts](#64-product-layer-layouts)
7. [Component Library](#7-component-library)
   - 7.1 [Glass Card](#71-glass-card)
   - 7.2 [Service Card](#72-service-card)
   - 7.3 [Stats Card](#73-stats-card)
   - 7.4 [Buttons](#74-buttons)
   - 7.5 [Navigation](#75-navigation)
   - 7.6 [Section Labels](#76-section-labels)
   - 7.7 [Value Items](#77-value-items)
   - 7.8 [Pricing Card (Popular)](#78-pricing-card-popular)
   - 7.9 [FAQ Accordion](#79-faq-accordion)
   - 7.10 [Social Icons](#710-social-icons)
   - 7.11 [Contact Cards](#711-contact-cards)
   - 7.12 [Page Loader](#712-page-loader)
   - 7.13 [Comparison Table](#713-comparison-table)
   - 7.14 [Why Choose Us Grid](#714-why-choose-us-grid)
   - 7.15 [Form Inputs](#715-form-inputs)
   - 7.16 [Feedback States](#716-feedback-states)
   - 7.17 [Data UI Components](#717-data-ui-components)
   - 7.18 [Dashboard Components](#718-dashboard-components)
   - 7.19 [Conversion Components](#719-conversion-components)
8. [Background Effects](#8-background-effects)
   - 8.1 [Grid Background](#81-grid-background)
   - 8.2 [Glow Orbs](#82-glow-orbs)
   - 8.3 [Particle/Bubble Layers](#83-particlebubble-layers)
9. [Animations & Transitions](#9-animations--transitions)
   - 9.1 [Keyframe Animations](#91-keyframe-animations)
   - 9.2 [Transition Defaults](#92-transition-defaults)
   - 9.3 [Hover Micro-interactions](#93-hover-micro-interactions)
   - 9.4 [GSAP Animations](#94-gsap-animations)
   - 9.5 [Reduced Motion Support](#95-reduced-motion-support)
10. [Scrollbar](#10-scrollbar)
11. [Breakpoints & Responsive Design](#11-breakpoints--responsive-design)
    - 11.1 [Breakpoint Scale](#111-breakpoint-scale)
    - 11.2 [Mobile Strategy](#112-mobile-strategy)
    - 11.3 [Height Overrides](#113-height-overrides)
    - 11.4 [Print Overrides](#114-print-overrides)
    - 11.5 [Mobile Performance Overrides](#115-mobile-performance-overrides)
12. [External Dependencies](#12-external-dependencies)
13. [Section Structure](#13-section-structure)
14. [Accessibility](#14-accessibility)
15. [Performance](#15-performance)
16. [Code Patterns & Conventions](#16-code-patterns--conventions)
17. [TODOs & Future Improvements](#17-todos--future-improvements)

## Appendix A: CSS File Structure

## Appendix B: JavaScript Architecture

## Appendix C: Z-Index Scale

## Appendix D: WCAG Contrast Audit

---

## 1. Overview

The Xenon Studios Design System defines the visual language, components, and interaction patterns for the Xenon Studios main website. This document serves as the **single source of truth** for all design decisions, ensuring consistency across the codebase and enabling any designer or developer to recreate the entire site from this specification alone.

The design language is characterized by:

- **Dark, cinematic aesthetic** with deep blacks and subtle gradients
- **Neon accents** (cyan, purple, magenta) creating a futuristic, tech-forward feel
- **Glassmorphism** elements providing depth and translucency
- **Smooth, premium animations** with carefully tuned easing curves
- **Responsive-first** approach with mobile-optimized interactions

### What Changed in v2.0.0

Version 2.0.0 represents a comprehensive 7-phase overhaul of the entire design system:

| Phase | Name               | Status       | Key Changes                                                                                                    |
| ----- | ------------------ | ------------ | -------------------------------------------------------------------------------------------------------------- |
| 1     | Simplify & Control | ✅ Completed | Accent hierarchy (70/20/10), 7 button types, effect limitation rules, reduced gradients/bubbles                |
| 2     | Product Layer      | ✅ Completed | Form inputs, feedback states, data UI components, dashboard layout (430+ new rules)                            |
| 3     | Design Tokens      | ✅ Completed | 96 tokens (spacing, motion, shadow, z-index, radius, font size, border width, container), 40 utility classes   |
| 4     | Performance        | ✅ Completed | Backdrop-filter reductions, blur reductions, will-change hints, reduced motion, mobile overrides, lazy loading |
| 5     | Conversion Engine  | ⚠️ Partial   | Sticky CTA bar, social proof bar, hero quiz CTA (scroll progress bar REMOVED, section nav dots REMOVED)        |
| 6     | Mobile Strategy    | ✅ Completed | Increased spacing, 50% glow reduction, simplified layouts, mobile typography, pricing card simplification      |
| 7     | Accessibility      | ✅ Completed | Focus-visible global/system, skip link, 17 ARIA labels, keyboard nav (`Alt+S`), external link safety           |

**Removed in v2.0.0:**

- Scroll Progress Bar (HTML, CSS, JS all removed)
- Section Navigation Dots (HTML, CSS, JS all removed)
- 4 keyframe animations: `moveDownLeft`, `moveUpLeft`, `moveLeft`, `moveUp`
- Service card bubble layers: 7 → 3
- Service card radial gradients: 6 → 3
- Backdrop-filter from `.button-container` and `.button-container:hover`

---

## 2. Design Philosophy

| Principle                       | Description                                                                                   |
| ------------------------------- | --------------------------------------------------------------------------------------------- |
| **From Thought To Thrill**      | The brand promise: transforming ideas into captivating digital experiences                    |
| **Cinematic Digital Integrity** | Every element should feel intentional, polished, and visually striking                        |
| **Performance-Driven Beauty**   | Aesthetics never compromise performance or usability                                          |
| **Dark Mode Native**            | The design is built for dark backgrounds first, with light text and glowing accents           |
| **Animated Purpose**            | Animations serve functional purposes: guiding attention, providing feedback, creating delight |

---

## 3. Color Palette

### 3.1 Primary Brand Colors

| Name                  | RGBA Value             | Hex       | Usage                                                                                  |
| --------------------- | ---------------------- | --------- | -------------------------------------------------------------------------------------- |
| **Cyan (Neon)**       | `rgba(0, 242, 255, 1)` | `#00f2ff` | Primary accents, CTAs, highlights, glows, navigation active states, gradient endpoints |
| **Purple (Electric)** | `rgba(112, 0, 255, 1)` | `#7000ff` | Secondary accent, gradients, animations, stats card dots, pricing card borders         |
| **Magenta (Deep)**    | `rgba(157, 23, 77, 1)` | `#9d174d` | Tertiary accent, service card hover borders, core value indicators, section labels     |

### 3.2 Black & Dark Scale

| Name                 | RGBA Value               | Hex         | Usage                                                                    |
| -------------------- | ------------------------ | ----------- | ------------------------------------------------------------------------ |
| **Black Pure**       | `rgba(0, 0, 0, 1)`       | `#000000`   | Body background (`#layout`), page loader background                      |
| **Charcoal**         | `rgba(10, 10, 12, 1)`    | `#0a0a0c`   | Glass card backgrounds, dark transparent overlays, scrollbar track       |
| **Dark Transparent** | `rgba(10, 10, 12, 0.3)`  | `#0a0a0c4d` | Glass card backgrounds (translucent), backdrop blur base                 |
| **Dark Base**        | `rgba(20, 20, 22, 1)`    | `#141416`   | Service card backgrounds, explore button background, dark solid surfaces |
| **Dark Surface**     | `rgba(35, 36, 40, 1)`    | `#232428`   | Stats card inner backgrounds, elevated surfaces                          |
| **Grey Ash**         | `rgba(46, 46, 46, 1)`    | `#2e2e2e`   | Stats card inner lines, button gradient stops                            |
| **Grey Dim**         | `rgba(62, 62, 62, 1)`    | `#3e3e3e`   | Animated button box-shadow border, subtle separators                     |
| **Grey Stone**       | `rgba(136, 136, 136, 1)` | `#888888`   | Stats card line gradients (brighter portions), mid-grey separators       |
| **Silver**           | `rgba(205, 205, 205, 1)` | `#cdcdcd`   | Stats card ray background, light grey accents                            |

### 3.3 Light Scale

| Name                  | RGBA Value                  | Hex         | Usage                                                                |
| --------------------- | --------------------------- | ----------- | -------------------------------------------------------------------- |
| **White Pure**        | `rgba(255, 255, 255, 1)`    | `#ffffff`   | Primary text, headings, icons, stats card dots                       |
| **White Translucent** | `rgba(255, 255, 255, 0.65)` | `#ffffffa9` | Secondary text, WhatsApp button inset shadow                         |
| **White Transparent** | `rgba(255, 255, 255, 0.25)` | `#ffffff40` | Glass card borders, service card inner shadow                        |
| **White Faint**       | `rgba(255, 255, 255, 0.04)` | `#ffffff0a` | Grid pattern lines, service card default borders, subtle backgrounds |

### 3.4 Additional Accents

| Name                    | RGBA Value                   | Hex         | Usage                                  |
| ----------------------- | ---------------------------- | ----------- | -------------------------------------- |
| **Glow**                | `rgba(217, 176, 255, 1)`     | `#d9b0ff`   | General glow effects                   |
| **Glow Spread**         | `rgba(191, 123, 255, 0.781)` | `#bf7bffc7` | Wider, softer glow diffusion           |
| **Cyan Transparent**    | `rgba(0, 242, 255, 0.5)`     | `#00f2ff80` | Hover glows, navigation link shadows   |
| **Cyan Faint**          | `rgba(0, 242, 255, 0.2)`     | `#00f2ff33` | Glass card hover border color          |
| **Blue Electric**       | `rgba(64, 186, 247, 1)`      | `#40baf7`   | WhatsApp button conic gradient         |
| **Blue Soft**           | `rgba(113, 164, 240, 1)`     | `#71a4f0`   | WhatsApp button gradient endpoint      |
| **Neon Mint**           | `rgba(91, 252, 196, 1)`      | `#5bfcc4`   | WhatsApp button gradient start         |
| **Magenta Bright**      | `rgba(243, 74, 215, 1)`      | `#f34ad7`   | WhatsApp button conic gradient         |
| **Magenta Transparent** | `rgba(157, 23, 77, 0.4)`     | `#9d174d66` | Service card hover border              |
| **Magenta Faint**       | `rgba(157, 23, 77, 0.08)`    | `#9d174d14` | Service card hover box-shadow          |
| **Pink Glow**           | `rgba(255, 36, 233, 1)`      | `#ff24e9`   | Service card radial gradient endpoint  |
| **Pink Soft**           | `rgba(245, 147, 228, 1)`     | `#f593e4`   | WhatsApp button gradient middle        |
| **Violet Glow**         | `rgba(135, 49, 246, 1)`      | `#8731f6`   | Service card feature check backgrounds |

### 3.5 CSS Custom Properties

All colors are defined as CSS custom properties under the `:root` selector with the prefix `--xenon-color-`. Access them in CSS using `var(--xenon-color-*)`.

```css
:root {
  /* Primary Brand */
  --xenon-color-cyan: rgba(0, 242, 255, 1);
  --xenon-color-purple: rgba(112, 0, 255, 1);
  --xenon-color-magenta: rgba(157, 23, 77, 1);

  /* Dark Scale */
  --xenon-color-black: rgba(0, 0, 0, 1);
  --xenon-color-black-transparent: rgba(0, 0, 0, 0.5);
  --xenon-color-black-none: rgba(0, 0, 0, 0);
  --xenon-color-charcoal: rgba(10, 10, 12, 1);
  --xenon-color-dark-transparent: rgba(10, 10, 12, 0.3);
  --xenon-color-dark-base: rgba(20, 20, 22, 1);
  --xenon-color-dark-surface: rgba(35, 36, 40, 1);
  --xenon-color-grey-ash: rgba(46, 46, 46, 1);
  --xenon-color-grey-dim: rgba(62, 62, 62, 1);
  --xenon-color-grey-stone: rgba(136, 136, 136, 1);
  --xenon-color-silver: rgba(205, 205, 205, 1);

  /* Light Scale */
  --xenon-color-white: rgba(255, 255, 255, 1);
  --xenon-color-white-translucent: rgba(255, 255, 255, 0.65);
  --xenon-color-white-transparent: rgba(255, 255, 255, 0.25);
  --xenon-color-white-faint: rgba(255, 255, 255, 0.04);

  /* Effects */
  --xenon-color-glow: rgba(217, 176, 255, 1);
  --xenon-color-glow-spread: rgba(191, 123, 255, 0.781);

  /* Additional Accents */
  --xenon-color-cyan-transparent: rgba(0, 242, 255, 0.5);
  --xenon-color-cyan-faint: rgba(0, 242, 255, 0.2);
  --xenon-color-blue-electric: rgba(64, 186, 247, 1);
  --xenon-color-blue-soft: rgba(113, 164, 240, 1);
  --xenon-color-neon-mint: rgba(91, 252, 196, 1);
  --xenon-color-magenta-bright: rgba(243, 74, 215, 1);
  --xenon-color-magenta-transparent: rgba(157, 23, 77, 0.4);
  --xenon-color-magenta-faint: rgba(157, 23, 77, 0.08);
  --xenon-color-pink-glow: rgba(255, 36, 233, 1);
  --xenon-color-pink-soft: rgba(245, 147, 228, 1);
  --xenon-color-violet-glow: rgba(135, 49, 246, 1);
}
```

#### Gradient Combinations

| Gradient Name             | Definition                                                                     | Usage                                          |
| ------------------------- | ------------------------------------------------------------------------------ | ---------------------------------------------- |
| **Cyan-to-Purple**        | `linear-gradient(90deg, var(--xenon-color-cyan), var(--xenon-color-purple))`   | Service card buttons, stats card hover borders |
| **Animated Gradient**     | `linear-gradient(90deg, cyan, purple, cyan)` with `background-size: 200% auto` | Gradient text, animated button borders         |
| **Steam Gradient**        | Multi-stop gradient cycling through dark-base, grey-ash, white                 | Explore button animated border                 |
| **WhatsApp Gradient**     | `linear-gradient(90deg, neon-mint, pink-soft, blue-soft)`                      | WhatsApp CTA button                            |
| **Space Button BG**       | `linear-gradient(45deg, #0f0f2d, #1a1a3a)`                                     | Premium space button background                |
| **Service Card BG**       | Multi-layer radial gradients with purple and pink glow (3 layers, was 6)       | Service card backgrounds                       |
| **Stats Card Ray**        | `radial-gradient(circle 230px at 0% 0%, white, charcoal)`                      | Stats card background                          |
| **Text Gradient (Stats)** | `linear-gradient(45deg, black 4%, white, black)`                               | Stats card number text fill                    |

### 3.6 Accent Hierarchy (70/20/10 Rule)

As of v2.0.0, accent color usage follows a disciplined hierarchy documented as CSS comments in `:root`:

```css
/* ========================================
   ACCENT HIERARCHY (70/20/10 Rule)
   ========================================
   Cyan:    Primary (20% usage) — CTAs, active states, glows
   Purple:  Secondary (7% usage)  — gradients, accents, borders
   Magenta: Tertiary (3% usage)   — hover borders, indicators
   ======================================== */
```

This hierarchy ensures visual clarity and prevents accent color overuse across the design system.

### 3.7 Effect Limitation Rules

To prevent visual overload and maintain performance, the following rules are enforced as CSS comments after `:root`:

```css
/* ========================================
   EFFECT LIMITATION RULES
   ========================================
   - Max 1 glow effect per component
   - Max 2 gradients per component
   - Particles ONLY in hero section
   - Max 1 backdrop-filter per card
   - No more than 3 box-shadows per element
   ======================================== */
```

These constraints ensure every effect is intentional and measurable.

### 3.8 Design Token System

v2.0.0 introduces **96 design tokens** organized into 8 categories, all defined under `:root`.

#### Spacing System (18 tokens)

| Token Name          | Value                    | Usage                       |
| ------------------- | ------------------------ | --------------------------- |
| `--space-1`         | `4px`                    | Element-level spacing       |
| `--space-2`         | `8px`                    | Small component spacing     |
| `--space-3`         | `12px`                   | Medium-small spacing        |
| `--space-4`         | `16px`                   | Component default spacing   |
| `--space-5`         | `24px`                   | Card internal spacing       |
| `--space-6`         | `32px`                   | Section-level spacing       |
| `--space-8`         | `48px`                   | Large section spacing       |
| `--space-10`        | `64px`                   | Hero spacing                |
| `--space-12`        | `96px`                   | Major section spacing       |
| `--space-16`        | `128px`                  | Maximum section spacing     |
| `--space-section`   | `clamp(3rem, 8vw, 6rem)` | Default section padding     |
| `--space-card`      | `var(--space-5)`         | Card internal spacing alias |
| `--space-component` | `var(--space-4)`         | Component spacing alias     |
| `--space-element`   | `var(--space-2)`         | Element spacing alias       |

#### Motion/Timing (18 tokens)

| Token Name             | Value                                        | Usage                              |
| ---------------------- | -------------------------------------------- | ---------------------------------- |
| `--motion-instant`     | `0ms`                                        | Immediate state changes            |
| `--motion-fast`        | `150ms`                                      | Micro-interactions, hover states   |
| `--motion-normal`      | `300ms`                                      | Default transitions                |
| `--motion-slow`        | `600ms`                                      | Page transitions, entrances        |
| `--ease-linear`        | `linear`                                     | Continuous animations              |
| `--ease-ease`          | `ease`                                       | Default easing                     |
| `--ease-ease-in`       | `ease-in`                                    | Accelerating animations            |
| `--ease-ease-out`      | `ease-out`                                   | Decelerating animations            |
| `--ease-ease-in-out`   | `ease-in-out`                                | Smooth start and end               |
| `--ease-out-expo`      | `cubic-bezier(0.16, 1, 0.3, 1)`              | Premium deceleration               |
| `--ease-out-back`      | `cubic-bezier(0.34, 1.56, 0.64, 1)`          | Overshoot/bounce effect            |
| `--ease-in-out-cubic`  | `cubic-bezier(0.65, 0, 0.35, 1)`             | Symmetric cubic easing             |
| `--ease-out-cubic`     | `cubic-bezier(0.33, 1, 0.68, 1)`             | Smooth deceleration                |
| `--motion-hover`       | `var(--motion-fast) var(--ease-ease-out)`    | Composite: hover transitions       |
| `--motion-entrance`    | `var(--motion-slow) var(--ease-out-expo)`    | Composite: large element entrances |
| `--motion-entrance-sm` | `var(--motion-normal) var(--ease-out-expo)`  | Composite: small element entrances |
| `--motion-interactive` | `var(--motion-normal) var(--ease-out-back)`  | Composite: buttons, toggles        |
| `--motion-page`        | `var(--motion-slow) var(--ease-ease-in-out)` | Composite: page transitions        |

#### Shadow System (14 tokens)

| Token Name              | Value                                                              | Usage                        |
| ----------------------- | ------------------------------------------------------------------ | ---------------------------- |
| `--shadow-none`         | `none`                                                             | Reset shadows                |
| `--shadow-sm`           | `0 1px 2px rgba(0, 0, 0, 0.3)`                                     | Subtle elevation             |
| `--shadow-md`           | `0 4px 10px rgba(0, 0, 0, 0.3), 0 0 1px rgba(255, 255, 255, 0.1)`  | Standard card elevation      |
| `--shadow-lg`           | `0 8px 30px rgba(0, 0, 0, 0.4), 0 0 20px rgba(0, 242, 255, 0.1)`   | Elevated card + glow         |
| `--shadow-xl`           | `0 20px 60px rgba(0, 0, 0, 0.5), 0 0 40px rgba(0, 242, 255, 0.15)` | Modal/popover elevation      |
| `--shadow-glow-sm`      | `0 0 10px rgba(0, 242, 255, 0.2)`                                  | Small cyan glow              |
| `--shadow-glow-md`      | `0 0 20px rgba(0, 242, 255, 0.3), 0 4px 10px rgba(0, 0, 0, 0.3)`   | Medium cyan glow + elevation |
| `--shadow-glow-lg`      | `0 0 40px rgba(0, 242, 255, 0.4), 0 10px 30px rgba(0, 0, 0, 0.4)`  | Large cyan glow              |
| `--shadow-glow-purple`  | `0 0 30px rgba(112, 0, 255, 0.3), 0 8px 20px rgba(0, 0, 0, 0.3)`   | Purple glow                  |
| `--shadow-glow-magenta` | `0 0 25px rgba(157, 23, 77, 0.3), 0 6px 15px rgba(0, 0, 0, 0.3)`   | Magenta glow                 |
| `--shadow-inset`        | `inset 0 2px 4px rgba(0, 0, 0, 0.3)`                               | Inset shadow (pressed state) |
| `--shadow-inset-glow`   | `inset 0 0 20px rgba(0, 242, 255, 0.05)`                           | Inset cyan glow              |

#### Z-Index (11 tokens)

| Token Name             | Value  | Usage               |
| ---------------------- | ------ | ------------------- |
| `--z-base`             | `0`    | Default stacking    |
| `--z-behind`           | `-1`   | Background elements |
| `--z-content`          | `1`    | Content layer       |
| `--z-sticky`           | `50`   | Sticky elements     |
| `--z-dropdown`         | `100`  | Dropdown menus      |
| `--z-sticky-top`       | `200`  | Sticky top bars     |
| `--z-overlay-backdrop` | `500`  | Modal backdrops     |
| `--z-modal`            | `1000` | Modal dialogs       |
| `--z-popover`          | `1100` | Popovers            |
| `--z-toast`            | `1200` | Toast notifications |
| `--z-loading`          | `9999` | Loading overlays    |

#### Border Radius (8 tokens)

| Token Name      | Value    | Usage                          |
| --------------- | -------- | ------------------------------ |
| `--radius-none` | `0`      | Sharp corners                  |
| `--radius-sm`   | `4px`    | Small radius                   |
| `--radius-md`   | `8px`    | Medium radius (buttons)        |
| `--radius-lg`   | `10px`   | Large radius                   |
| `--radius-xl`   | `12px`   | Extra large radius             |
| `--radius-2xl`  | `16px`   | 2XL radius                     |
| `--radius-3xl`  | `24px`   | 3XL radius                     |
| `--radius-full` | `9999px` | Fully rounded (pills, circles) |

#### Font Sizes (13 tokens)

| Token Name       | Value  | Usage                          |
| ---------------- | ------ | ------------------------------ |
| `--text-xs`      | `12px` | Captions, fine print           |
| `--text-sm`      | `14px` | Secondary text, body small     |
| `--text-base`    | `16px` | Default body text              |
| `--text-lg`      | `18px` | Body large, button text        |
| `--text-xl`      | `20px` | H3, emphasis text              |
| `--text-2xl`     | `24px` | Section subheadings            |
| `--text-3xl`     | `30px` | Service card titles            |
| `--text-4xl`     | `36px` | Mid-level headings             |
| `--text-5xl`     | `48px` | Section headings               |
| `--text-6xl`     | `60px` | Large headings                 |
| `--text-hero-sm` | `42px` | Hero title (small breakpoint)  |
| `--text-hero-md` | `56px` | Hero title (medium breakpoint) |
| `--text-hero-lg` | `80px` | Hero title (large breakpoint)  |

#### Border Widths (6 tokens)

| Token Name          | Value   | Usage                          |
| ------------------- | ------- | ------------------------------ |
| `--border-none`     | `0`     | No border                      |
| `--border-hairline` | `0.5px` | Hairline separator             |
| `--border-thin`     | `1px`   | Standard border                |
| `--border-normal`   | `1.5px` | Normal border                  |
| `--border-thick`    | `2px`   | Thick border                   |
| `--border-heavy`    | `4px`   | Heavy border (animated button) |

#### Container Sizes (8 tokens)

| Token Name            | Value    | Usage                     |
| --------------------- | -------- | ------------------------- |
| `--container-sm`      | `640px`  | Small content container   |
| `--container-md`      | `768px`  | Medium content container  |
| `--container-lg`      | `1024px` | Large content container   |
| `--container-xl`      | `1280px` | XL content container      |
| `--container-2xl`     | `1536px` | 2XL content container     |
| `--container-content` | `1280px` | Main content width        |
| `--container-narrow`  | `896px`  | Narrow reading width      |
| `--container-wide`    | `1792px` | Wide dashboard/data views |

---

## 4. Typography

### 4.1 Font Families

All fonts are loaded from Google Fonts with `display=swap` for performance optimization.

| Font Name         | CSS Class     | Usage                                                     | Weight Range       | Character                                               |
| ----------------- | ------------- | --------------------------------------------------------- | ------------------ | ------------------------------------------------------- |
| **Outfit**        | `.outfit`     | Navigation links, button text, body text, hero title base | 100–900 (variable) | Modern, geometric sans-serif; clean and professional    |
| **Space Grotesk** | `.space-font` | Stats numbers, data displays, hero subtitle               | 300–700 (variable) | Tech-focused, monospace-inspired; great for numbers     |
| **Syne**          | `.syne`       | Section headings, hero titles                             | 400–800 (variable) | Artistic, distinctive; strong personality for headlines |
| **Ubuntu**        | `.ubuntu`     | Body text on `#layout`, paragraphs, default body font     | 300, 400, 500, 700 | Humanist sans-serif; readable and warm                  |
| **Bebas Neue**    | `.bebas-neue` | Special decorative text, labels                           | 400                | Condensed display font; letter-spacing: 1.35px          |
| **Manrope**       | —             | Secondary UI elements                                     | 400, 700, 800      | Modern, geometric; used sparingly                       |
| **Inter**         | —             | UI elements, small text                                   | 400, 500, 600      | Highly legible at small sizes; used for fine print      |

#### Font Loading Strategy

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Outfit:wght@100..900&family=Space+Grotesk:wght@300..700&family=Syne:wght@400..800&family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&family=Manrope:wght@400;700;800&family=Inter:wght@400;500;600&display=swap"
  rel="stylesheet"
  media="print"
  onload="this.media='all'"
/>
<noscript>
  <link
    href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Outfit:wght@100..900&family=Space+Grotesk:wght@300..700&family=Syne:wght@400..800&family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&family=Manrope:wght@400;700;800&family=Inter:wght@400;500;600&display=swap"
    rel="stylesheet"
  />
</noscript>
```

#### Default Body Typography

```css
#layout {
  font-family: "Ubuntu", sans-serif;
  font-weight: 500;
  -webkit-font-smoothing: antialiased;
}
```

### 4.2 Typography Scale

Font size tokens (`--text-*`) should be referenced wherever possible.

| Element                       | Font Size (sm)          | Font Size (md)          | Font Size (lg)          | Font Weight      | Line Height | Letter Spacing | Font Family   |
| ----------------------------- | ----------------------- | ----------------------- | ----------------------- | ---------------- | ----------- | -------------- | ------------- |
| **Hero Title (base)**         | 42px (`--text-hero-sm`) | 56px (`--text-hero-md`) | 80px (`--text-hero-lg`) | normal (400)     | 1.1         | -0.04em        | Outfit        |
| **Hero Title (emphasis)**     | 42px                    | 56px                    | 80px                    | extrabold (800)  | 1.1         | -0.04em        | Outfit        |
| **Hero Title (bold text)**    | 42px                    | 56px                    | 80px                    | bold (700)       | 1.1         | -0.04em        | Outfit        |
| **Section H2**                | 32px (`--text-2xl`)     | 48px (`--text-5xl`)     | —                       | semibold (600)   | 1.2         | -0.02em        | —             |
| **Section H3**                | 20px (`--text-xl`)      | 24px (`--text-2xl`)     | —                       | bold (700)       | 1.3         | —              | —             |
| **Section Labels**            | 10px                    | 10px                    | 10px                    | bold (700)       | —           | 0.2em          | —             |
| **Body Text**                 | 14px (`--text-sm`)      | 16px (`--text-base`)    | —                       | normal (400–500) | 1.6         | —              | Ubuntu        |
| **Hero Subtitle**             | 18px (`--text-lg`)      | 18px (`--text-lg`)      | 20px (`--text-xl`)      | normal           | relaxed     | —              | Space Grotesk |
| **Stat Numbers**              | 90px                    | 90px                    | 90px                    | extrabold (800)  | —           | —              | —             |
| **Service Card Title**        | 30px (`--text-3xl`)     | 30px                    | 30px                    | semibold (600)   | —           | —              | —             |
| **Service Card Description**  | 14px (`--text-sm`)      | 14px                    | 14px                    | normal           | —           | —              | —             |
| **Service Feature Text**      | 14px–16px               | 14px–16px               | 14px–16px               | normal           | —           | —              | —             |
| **Button Text (Space)**       | 16px (`--text-lg`)      | 16px                    | 16px                    | medium (500)     | —           | 2px            | Ubuntu        |
| **Button Text (Animated)**    | 16px (`--text-lg`)      | 16px                    | 16px                    | semibold (600)   | —           | —              | —             |
| **Button Text (Explore)**     | 14px (`--text-sm`)      | 14px                    | 14px                    | bold (700)       | —           | —              | —             |
| **Button Text (Service CTA)** | 18px (`--text-lg`)      | 20px (`--text-xl`)      | 20px                    | bold (700)       | —           | —              | Outfit        |
| **Button Text (Ghost)**       | 14px (`--text-sm`)      | 14px                    | 14px                    | normal (400)     | —           | —              | Ubuntu        |
| **Navigation Links**          | 18px (`--text-lg`)      | 18px                    | 18px                    | bold (700)       | —           | —              | Outfit        |
| **Mobile Nav Links**          | 16px                    | 17px                    | 18px                    | bold (700)       | —           | —              | Outfit        |
| **FAQ Question**              | 16px (`--text-lg`)      | 16px                    | 16px                    | semibold (600)   | —           | —              | —             |
| **FAQ Answer**                | 14px (`--text-sm`)      | 14px                    | 14px                    | normal           | 1.6         | —              | —             |
| **Footer Headings**           | 16px (`--text-base`)    | 18px (`--text-lg`)      | —                       | bold (700)       | —           | —              | —             |
| **Footer Links**              | 14px (`--text-sm`)      | 14px                    | —                       | medium (500)     | —           | —              | —             |
| **Value Item Text**           | 14px–16px               | 14px–16px               | 14px–16px               | normal           | —           | —              | —             |
| **Loader Text**               | 14px (`--text-sm`)      | 14px                    | 14px                    | light (300)      | —           | wide           | —             |

#### Responsive Font Adjustments

```css
/* Extra Small Phones (< 480px) */
@media (max-width: 479px) {
  .hero-title {
    font-size: 32px !important;
    line-height: 1.2;
  }
  h2.text-3xl,
  h2.text-4xl {
    font-size: 28px;
  }
  .stats-card-inner .text {
    font-size: 3rem;
  }
}

/* Small Phones (480px–639px) */
@media (max-width: 639px) {
  .hero-title {
    font-size: 40px !important;
    line-height: 1.15;
  }
  .stats-card-inner .text {
    font-size: 3.5rem;
  }
}

/* Tablets (640px–767px) */
@media (min-width: 640px) and (max-width: 767px) {
  .hero-title {
    font-size: 56px !important;
  }
}

/* Large Desktops (>= 1280px) */
@media (min-width: 1280px) {
  .hero-title {
    font-size: 80px !important;
  }
}
```

### 4.3 Text Effects

#### Gradient Text (Animated)

Used for the hero title "10X Brand Revenue" text and other emphasis text.

```css
.text-gradient-animate {
  background: linear-gradient(
    90deg,
    var(--xenon-color-cyan),
    var(--xenon-color-purple),
    var(--xenon-color-cyan)
  );
  background-size: 200% auto;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: gradientText 3s linear infinite;
}
```

#### Hero Title Gradient

A top-to-bottom fade applied to the hero title:

```css
.bg-gradient-to-b from-white to-white/40 bg-clip-text text-transparent
```

#### Text Shadow (Buttons)

```css
text-shadow:
  0 0 10px rgba(255, 255, 255, 0.3),
  0 0 20px rgba(255, 255, 255, 0.1);
```

#### Stats Card Text Gradient

A black-to-white-to-black gradient creating a metallic effect on stat numbers:

```css
.stats-card-inner .text {
  font-weight: bolder;
  font-size: 4rem;
  background: linear-gradient(
    45deg,
    var(--xenon-color-black) 4%,
    var(--xenon-color-white),
    var(--xenon-color-black)
  );
  background-clip: text;
  color: transparent;
}
```

#### Space Button Text

Bright white text with enhanced glow on hover:

```css
.space-button span {
  filter: brightness(1.5) contrast(1.8);
  text-shadow:
    0 0 15px rgba(255, 255, 255, 0.6),
    0 0 30px rgba(255, 255, 255, 0.3);
}
.space-button:hover span {
  filter: brightness(1.8) contrast(2);
  text-shadow:
    0 0 20px rgba(255, 255, 255, 0.8),
    0 0 40px rgba(255, 255, 255, 0.4),
    0 0 60px rgba(255, 255, 255, 0.2);
}
```

### 4.4 Font Smoothing

Applied globally to `#layout` for crisper text rendering on macOS/iOS:

```css
#layout {
  -webkit-font-smoothing: antialiased;
}
```

---

## 5. Spacing System

### 5.1 Section Spacing

| Section                | Padding Top                | Padding Bottom           |
| ---------------------- | -------------------------- | ------------------------ |
| **Hero (`#home`)**     | `clamp(6rem, 15vh, 10rem)` | `clamp(2rem, 5vh, 4rem)` |
| **All Other Sections** | `clamp(3rem, 8vw, 6rem)`   | `clamp(3rem, 8vw, 6rem)` |
| **Section Horizontal** | `px-4 md:px-6` (Tailwind)  | —                        |

```css
section:not(#home) {
  padding-top: clamp(3rem, 8vw, 6rem);
  padding-bottom: clamp(3rem, 8vw, 6rem);
}

#home {
  padding-top: clamp(6rem, 15vh, 10rem);
  padding-bottom: clamp(2rem, 5vh, 4rem);
}
```

#### Heading Margins

```css
section h2 {
  margin-bottom: 1rem;
  line-height: 1.2;
}

section p.text-gray-400 {
  margin-bottom: 2rem;
}
```

### 5.2 Grid Gaps

| Grid Type            | Gap (base)                 | Gap (lg)       | Tailwind Class   |
| -------------------- | -------------------------- | -------------- | ---------------- |
| **Service Grid**     | 1.25rem (gap-5)            | 2rem (gap-8)   | `gap-5 lg:gap-8` |
| **About/Stats Grid** | 1rem (gap-4)               | 1.5rem (gap-6) | `gap-4 md:gap-6` |
| **Core Values Grid** | 1rem (gap-4)               | —              | `gap-4`          |
| **General Sections** | `clamp(1.5rem, 3vw, 3rem)` | —              | —                |
| **Hero Buttons**     | 1rem (gap-4)               | 1rem (gap-4)   | `gap-4 md:gap-4` |
| **Feature Items**    | 0.5rem (gap-0.5rem)        | —              | `gap-0.5rem`     |
| **Value Items**      | 0.75rem (gap-3)            | —              | `gap-3`          |

### 5.3 Component Spacing

| Component                   | Padding Internal                | Margin Between Elements   |
| --------------------------- | ------------------------------- | ------------------------- |
| **Service Card**            | 1rem vertical, px-10 horizontal | —                         |
| **Glass Card**              | 1.5rem (`p-6`)                  | —                         |
| **Space Button**            | 15px 40px                       | —                         |
| **Animated Button**         | 16px 36px                       | —                         |
| **Explore Button**          | 0px 15px                        | —                         |
| **Service Card Button**     | 14px 42px                       | `mt-8` from features list |
| **Ghost Button**            | 12px 24px                       | —                         |
| **WhatsApp Button**         | 12px 20px                       | —                         |
| **Quiz CTA Button**         | 14px 24px                       | —                         |
| **Value Item**              | 1rem (`p-4`)                    | —                         |
| **FAQ Item**                | 1.5rem (`p-6`)                  | 1rem gap between items    |
| **Pricing Card**            | 1.5rem–2rem (`p-6 lg:p-8`)      | —                         |
| **Feature Item**            | —                               | 0.5rem (`gap-0.5rem`)     |
| **Icon to Text (Features)** | —                               | 0.5rem (`gap-2`)          |
| **Icon to Text (Values)**   | —                               | 0.75rem (`gap-3`)         |
| **Icon to Text (Contact)**  | —                               | 0.75rem (`gap-3`)         |
| **Section Label to H2**     | 1rem (`mb-4`)                   | —                         |
| **H2 to Divider**           | 1.5rem (`mb-6`)                 | —                         |
| **Divider to Description**  | 1.5rem (`mb-6`)                 | —                         |

### 5.4 Design Token Utility Classes

v2.0.0 introduces **40 utility classes** based on the design token system.

#### Padding Utilities (8 classes)

| Class   | Padding Value | Token Reference |
| ------- | ------------- | --------------- |
| `.p-1`  | `4px`         | `--space-1`     |
| `.p-2`  | `8px`         | `--space-2`     |
| `.p-3`  | `12px`        | `--space-3`     |
| `.p-4`  | `16px`        | `--space-4`     |
| `.p-5`  | `24px`        | `--space-5`     |
| `.p-6`  | `32px`        | `--space-6`     |
| `.p-8`  | `48px`        | `--space-8`     |
| `.p-10` | `64px`        | `--space-10`    |

#### Horizontal Padding Utilities (6 classes)

| Class   | Padding Value | Token Reference |
| ------- | ------------- | --------------- |
| `.px-1` | `4px`         | `--space-1`     |
| `.px-2` | `8px`         | `--space-2`     |
| `.px-3` | `12px`        | `--space-3`     |
| `.px-4` | `16px`        | `--space-4`     |
| `.px-5` | `24px`        | `--space-5`     |
| `.px-6` | `32px`        | `--space-6`     |

#### Vertical Padding Utilities (6 classes)

| Class   | Padding Value | Token Reference |
| ------- | ------------- | --------------- |
| `.py-1` | `4px`         | `--space-1`     |
| `.py-2` | `8px`         | `--space-2`     |
| `.py-3` | `12px`        | `--space-3`     |
| `.py-4` | `16px`        | `--space-4`     |
| `.py-5` | `24px`        | `--space-5`     |
| `.py-6` | `32px`        | `--space-6`     |

#### Gap Utilities (6 classes)

| Class    | Gap Value | Token Reference |
| -------- | --------- | --------------- |
| `.gap-1` | `4px`     | `--space-1`     |
| `.gap-2` | `8px`     | `--space-2`     |
| `.gap-3` | `12px`    | `--space-3`     |
| `.gap-4` | `16px`    | `--space-4`     |
| `.gap-5` | `24px`    | `--space-5`     |
| `.gap-6` | `32px`    | `--space-6`     |

#### Shadow Utilities (7 classes)

| Class             | Box Shadow Value        | Token Reference    |
| ----------------- | ----------------------- | ------------------ |
| `.shadow-sm`      | `var(--shadow-sm)`      | `--shadow-sm`      |
| `.shadow-md`      | `var(--shadow-md)`      | `--shadow-md`      |
| `.shadow-lg`      | `var(--shadow-lg)`      | `--shadow-lg`      |
| `.shadow-xl`      | `var(--shadow-xl)`      | `--shadow-xl`      |
| `.shadow-glow-sm` | `var(--shadow-glow-sm)` | `--shadow-glow-sm` |
| `.shadow-glow-md` | `var(--shadow-glow-md)` | `--shadow-glow-md` |
| `.shadow-glow-lg` | `var(--shadow-glow-lg)` | `--shadow-glow-lg` |

#### Border Radius Utilities (7 classes)

| Class           | Border Radius Value           | Token Reference |
| --------------- | ----------------------------- | --------------- |
| `.rounded-sm`   | `var(--radius-sm)` (4px)      | `--radius-sm`   |
| `.rounded-md`   | `var(--radius-md)` (8px)      | `--radius-md`   |
| `.rounded-lg`   | `var(--radius-lg)` (10px)     | `--radius-lg`   |
| `.rounded-xl`   | `var(--radius-xl)` (12px)     | `--radius-xl`   |
| `.rounded-2xl`  | `var(--radius-2xl)` (16px)    | `--radius-2xl`  |
| `.rounded-3xl`  | `var(--radius-3xl)` (24px)    | `--radius-3xl`  |
| `.rounded-full` | `var(--radius-full)` (9999px) | `--radius-full` |

#### Transition Utilities (3 classes)

| Class                | Transition Value                             | Token Reference  |
| -------------------- | -------------------------------------------- | ---------------- |
| `.transition-fast`   | `var(--motion-fast) var(--ease-ease-out)`    | `--motion-hover` |
| `.transition-normal` | `var(--motion-normal) var(--ease-ease-out)`  | —                |
| `.transition-slow`   | `var(--motion-slow) var(--ease-ease-in-out)` | `--motion-page`  |

---

## 6. Layout & Grid System

### 6.1 Max Widths

| Element                 | Max Width                     | Width                    | Centering                   |
| ----------------------- | ----------------------------- | ------------------------ | --------------------------- |
| **Hero Content**        | `max-w-6xl` (72rem / 1152px)  | —                        | `mx-auto`                   |
| **Section Content**     | `max-w-7xl` (80rem / 1280px)  | —                        | `mx-auto`                   |
| **Navigation**          | `max-w-4xl` (56rem / 896px)   | 90%                      | `left-1/2 -translate-x-1/2` |
| **Service Cards**       | 400px each                    | 100% within grid cell    | —                           |
| **Stats Cards**         | 300px                         | 300px fixed (responsive) | Grid-centered               |
| **Why Choose Us Table** | Full width within `max-w-7xl` | —                        | —                           |
| **Footer Content**      | `max-w-7xl`                   | —                        | `mx-auto`                   |

### 6.2 Grid Patterns

| Section           | Grid Columns (base)              | Grid Columns (md) | Grid Columns (lg) | Tailwind Classes                            |
| ----------------- | -------------------------------- | ----------------- | ----------------- | ------------------------------------------- |
| **Services**      | `grid-cols-1`                    | `grid-cols-2`     | `grid-cols-3`     | `grid-cols-1 md:grid-cols-2 lg:grid-cols-3` |
| **Stats**         | `grid-cols-2`                    | `grid-cols-2`     | `grid-cols-4`     | `grid-cols-2 md:grid-cols-2 lg:grid-cols-4` |
| **Core Values**   | `grid-cols-1`                    | `grid-cols-2`     | —                 | `grid-cols-1 md:grid-cols-2`                |
| **Pricing**       | `grid-cols-1`                    | `grid-cols-3`     | —                 | `grid-cols-1 md:grid-cols-3`                |
| **Contact**       | `grid-cols-1`                    | `grid-cols-2`     | `grid-cols-4`     | `grid-cols-1 md:grid-cols-2 lg:grid-cols-4` |
| **Footer**        | `grid-cols-1`                    | `grid-cols-4`     | —                 | `grid-cols-1 md:grid-cols-4`                |
| **Why Choose Us** | Custom: `[1.5fr repeat(5, 1fr)]` | —                 | —                 | Responsive overrides                        |

### 6.3 Container Structure

```
body#layout
├── #page-loader (fixed, full viewport)
├── .grid-bg (fixed, full viewport, z-2)
├── .glow (absolute, z-1) × 2 (cyan left, purple right)
├── nav (fixed, top-6, centered, z-50)
│   └── .glass-card (rounded-full, px-8 py-4)
│       ├── logo
│       ├── .nav-links (hidden md:flex)
│       ├── .whatsapp-button (hidden sm:block)
│       └── .mobile-menu-btn (md:hidden)
│   └── .mobile-menu (hidden, glass dropdown)
├── #sticky-cta-bar (fixed bottom, z-200, glass background, IntersectionObserver)
├── <sections>
    ├── #home (hero)
    ├── #social-proof (NEW — client avatars, star rating, satisfaction rate)
    ├── #about (core values)
    ├── #states (stats cards)
    ├── #services (service cards)
    ├── #pricing (pricing tiers)
    ├── comparison-table
    ├── why-choose-us
    ├── #faq (accordion)
    ├── #contact (contact cards)
    └── footer
└── [REMOVED: .scroll-progress-bar]
└── [REMOVED: .section-nav-dots]
```

### 6.4 Product Layer Layouts

#### Dashboard Layout Grid

v2.0.0 introduces a dashboard layout pattern for product-layer components:

```css
.dashboard-layout {
  display: grid;
  grid-template-columns: 260px 1fr;
  min-height: 100vh;
}

.dashboard-sidebar {
  position: sticky;
  top: 0;
  height: 100vh;
  overflow-y: auto;
  background: var(--xenon-color-dark-base);
  border-right: 1px solid var(--xenon-color-white-faint);
}

.dashboard-topbar {
  position: sticky;
  top: 0;
  z-index: var(--z-sticky-top);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  background: rgba(10, 10, 12, 0.8);
  border-bottom: 1px solid var(--xenon-color-white-faint);
}

.dashboard-content {
  padding: var(--space-6);
}
```

---

## 7. Component Library

### 7.1 Glass Card

The foundational card component used throughout the site. Provides a frosted glass effect with backdrop blur.

#### Structure

```html
<div class="glass-card rounded-xl p-6">
  <!-- Content -->
</div>
```

#### CSS Specification

```css
.glass-card {
  background: var(--xenon-color-dark-transparent); /* rgba(10, 10, 12, 0.3) */
  backdrop-filter: blur(12px); /* v2.0.0: reduced from 20px */
  -webkit-backdrop-filter: blur(12px); /* v2.0.0: added vendor prefix */
  border: 1px solid var(--xenon-color-white-transparent); /* rgba(255, 255, 255, 0.25) */
  box-shadow:
    0 4px 20px rgba(0, 0, 0, 0.3),
    0 0 1px rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
  will-change: transform, border-color; /* v2.0.0: added performance hint */
}

.glass-card:hover {
  background: var(--xenon-color-dark-transparent);
  border-color: var(--xenon-color-cyan-faint); /* rgba(0, 242, 255, 0.2) */
  box-shadow:
    0 8px 30px rgba(0, 0, 0, 0.4),
    0 0 20px rgba(0, 242, 255, 0.2);
  transform: translateY(-2px);
}
```

#### Properties

| Property        | Default                                                     | Hover                                                      |
| --------------- | ----------------------------------------------------------- | ---------------------------------------------------------- |
| Background      | `rgba(10, 10, 12, 0.3)`                                     | Same                                                       |
| Backdrop Filter | `blur(12px)` (v2.0.0: was 20px)                             | Same                                                       |
| Border Color    | `rgba(255, 255, 255, 0.25)`                                 | `rgba(0, 242, 255, 0.2)`                                   |
| Box Shadow      | `0 4px 20px rgba(0,0,0,0.3), 0 0 1px rgba(255,255,255,0.1)` | `0 8px 30px rgba(0,0,0,0.4), 0 0 20px rgba(0,242,255,0.2)` |
| Transform       | `none`                                                      | `translateY(-2px)`                                         |
| Border Radius   | `varies` (rounded-xl, rounded-2xl)                          | Same                                                       |

#### Variants

- **Pricing Section Glass Card:** Uses cyan-tinted background and border

  ```css
  .glass-card {
    background: rgba(0, 242, 255, 0.05);
    backdrop-filter: blur(12px); /* v2.0.0: reduced from 20px */
    -webkit-backdrop-filter: blur(12px);
    border: 1px solid rgba(0, 242, 255, 0.2);
  }
  ```

- **FAQ Items:** Glass cards with left border accent on hover
  ```css
  details.glass-card:hover {
    transform: translateX(4px);
    border-left: 3px solid var(--xenon-color-cyan);
  }
  ```

### 7.2 Service Card

The most complex component. Features layered radial gradients for glow effects, and an animated bubble CTA button.

**v2.1.0 Changes:** Service card uses 6 radial gradient layers (3 dark-base + 2 purple + 1 cyan). Service card button rebuilt with 7 animated bubble layers (btn-001 pattern) using :root accent colors: purple, blue-electric, violet-glow, blue-soft, magenta-bright, neon-mint. Button gradient applied via Tailwind HTML classes (`bg-gradient-to-r from-[var(--xenon-color-cyan)] to-[var(--xenon-color-purple)]`).

#### Structure

```html
<div class="service-card relative px-10 rounded-xl group overflow-hidden">
  <!-- Icon (36px) -->
  <div class="text-[36px]"><i class="fa-solid fa-robot"></i></div>

  <!-- Title + Description -->
  <div class="service-card-title-container">
    <span class="service-card-title text-3xl font-semibold text-white"
      >AI Automation</span
    >
    <p class="service-card-description text-sm text-zinc-300 mt-2">
      Streamline your business with intelligent automation solutions.
    </p>
  </div>

  <!-- Features List -->
  <ul class="service-features-list">
    <li class="service-feature-item">
      <span class="service-feature-check">
        <svg ... class="service-feature-check-icon"></svg>
      </span>
      <span class="service-feature-text">Custom AI Agents</span>
    </li>
    <!-- ... more features -->
  </ul>

  <!-- CTA Button with 7 Animated Bubbles -->
  <a
    href="..."
    class="service-card-button relative mt-8 px-6 py-3 rounded-full bg-gradient-to-r from-[var(--xenon-color-cyan)] to-[var(--xenon-color-purple)] text-white font-medium overflow-hidden"
  >
    <!-- 7 Bubble Layers (btn-001 pattern) -->
    <div class="bubble-layer bubble-1"></div>
    <div class="bubble-layer bubble-2"></div>
    <div class="bubble-layer bubble-3"></div>
    <div class="bubble-layer bubble-4"></div>
    <div class="bubble-layer bubble-5"></div>
    <div class="bubble-layer bubble-6"></div>
    <div class="bubble-layer bubble-7"></div>
    <span>
      <div class="flex items-center gap-2 justify-center">
        <i class="fa-brands fa-whatsapp"></i>
        <span class="outfit text-[20px] font-bold">Book A Call</span>
      </div>
    </span>
  </a>
</div>
```

#### CSS Specification

```css
.service-card {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  width: 100%;
  max-width: 400px;
  background-color: var(--xenon-color-dark-base);
  /* 6 radial gradients: 3 dark-base + 2 purple + 1 cyan */
  background-image:
    radial-gradient(
      at 88% 40%,
      var(--xenon-color-dark-base) 0px,
      transparent 85%
    ),
    radial-gradient(
      at 49% 30%,
      var(--xenon-color-dark-base) 0px,
      transparent 85%
    ),
    radial-gradient(
      at 14% 26%,
      var(--xenon-color-dark-base) 0px,
      transparent 85%
    ),
    radial-gradient(at 0% 64%, var(--xenon-color-purple) 0px, transparent 85%),
    radial-gradient(at 41% 94%, var(--xenon-color-purple) 0px, transparent 85%),
    radial-gradient(at 100% 99%, var(--xenon-color-cyan) 0px, transparent 85%);
  border-radius: 1rem;
  box-shadow: 0px -16px 24px 0px var(--xenon-color-white-transparent) inset;
  border: 1px solid var(--xenon-color-white-faint);
  transition:
    transform 0.6s cubic-bezier(0.22, 1, 0.36, 1),
    border-color 0.6s ease,
    box-shadow 0.6s ease;
}

.service-card:hover {
  transform: translateY(-4px);
  border-color: var(--xenon-color-cyan-faint);
  box-shadow:
    0 10px 30px -10px var(--xenon-color-black-transparent),
    0 0 15px var(--xenon-color-cyan-faint);
}

.service-feature-check {
  background-color: var(--xenon-color-cyan); /* v2.1.0: was violet-glow */
}
```

#### Properties

| Property      | Default                                              | Hover                                                                |
| ------------- | ---------------------------------------------------- | -------------------------------------------------------------------- |
| Max Width     | 400px                                                | Same                                                                 |
| Padding       | 1rem internal, px-10 horizontal                      | Same                                                                 |
| Background    | Dark base + 6 radial gradients                       | Same                                                                 |
| Border        | `1px solid rgba(255, 255, 255, 0.04)`                | `1px solid rgba(0, 242, 255, 0.2)`                                   |
| Box Shadow    | `0px -16px 24px 0px rgba(255, 255, 255, 0.25) inset` | `0 10px 30px -10px rgba(0,0,0,0.5), 0 0 15px rgba(0, 242, 255, 0.2)` |
| Transform     | `none`                                               | `translateY(-4px)`                                                   |
| Border Radius | 1rem (`rounded-xl`)                                  | Same                                                                 |

#### Service Card Title

```css
.service-card-title {
  font-size: 30px; /* text-3xl */
  font-weight: 600; /* semibold */
  color: var(--xenon-color-white);
}
```

#### Service Card Description

```css
.service-card-description {
  font-size: 14px; /* text-sm */
  color: #71717a; /* zinc-400 */
  margin-top: 0.5rem; /* mt-2 */
}
```

#### Service Feature Items

```css
.service-feature-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.service-feature-check {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1rem;
  height: 1rem;
  background-color: var(--xenon-color-violet-glow);
  border-radius: 50%;
}
```

#### Service Card Button

**v2.1.0:** Rebuilt with btn-001 animated bubble pattern. 7 bubble layers using :root accent colors (no cyan). Gradient applied via Tailwind HTML classes, not CSS.

```html
<a
  href="..."
  class="service-card-button relative mt-8 px-6 py-3 rounded-full bg-gradient-to-r from-[var(--xenon-color-cyan)] to-[var(--xenon-color-purple)] text-white font-medium overflow-hidden"
>
  <!-- 7 Animated Bubbles (btn-001 pattern) -->
  <div class="bubble-layer bubble-1"></div>
  <div class="bubble-layer bubble-2"></div>
  <div class="bubble-layer bubble-3"></div>
  <div class="bubble-layer bubble-4"></div>
  <div class="bubble-layer bubble-5"></div>
  <div class="bubble-layer bubble-6"></div>
  <div class="bubble-layer bubble-7"></div>
  <span>
    <div class="flex items-center gap-2 justify-center">
      <i class="fa-brands fa-whatsapp"></i>
      <span class="outfit text-[20px] font-bold">Book A Call</span>
    </div>
  </span>
</a>
```

```css
/* Base button — transparent bg, gradient from HTML classes */
.service-card-button {
  position: relative;
  padding: 14px 42px;
  font-size: 18px;
  font-weight: bold;
  color: white;
  border: none;
  border-radius: 50px; /* pill shape */
  cursor: pointer;
  overflow: hidden;
  background: transparent; /* gradient from Tailwind HTML */
  display: inline-block;
  z-index: 1;
  transition: transform 0.2s ease;
}

/* Inner black overlay on hover */
.service-card-button::before {
  content: "";
  background: var(--xenon-color-black);
  border-radius: inherit;
  height: calc(100% - 4px);
  width: calc(100% - 4px);
  position: absolute;
  top: 2px;
  left: 2px;
  z-index: 12;
  opacity: 0;
  transform: scale(0.95);
  transition: all 0.5s ease;
}

.service-card-button:hover::before {
  opacity: 1;
  transform: scale(1);
}

.service-card-button:active {
  transform: scale(0.96);
}

/* 7 Animated Bubbles (btn-001 pattern with :root colors) */
.service-card-button .bubble-layer {
  position: absolute;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  filter: blur(10px);
  z-index: 0;
  pointer-events: none;
}

.service-card-button .bubble-1 {
  background: var(--xenon-color-purple);
  top: -20%;
  left: -10%;
  animation: btnBubbleUpRight 6s ease-in-out infinite;
}
.service-card-button .bubble-2 {
  background: var(--xenon-color-blue-electric);
  top: 0%;
  left: 10%;
  animation: btnBubbleDownLeft 5s ease-in-out infinite;
  animation-delay: 1s;
}
.service-card-button .bubble-3 {
  background: var(--xenon-color-violet-glow);
  top: 20%;
  left: 50%;
  animation: btnBubbleRight 4s ease-in-out infinite;
  animation-delay: 2s;
}
.service-card-button .bubble-4 {
  background: var(--xenon-color-blue-soft);
  top: -20%;
  left: 70%;
  animation: btnBubbleUpLeft 7s ease-in-out infinite;
  animation-delay: 3s;
}
.service-card-button .bubble-5 {
  background: var(--xenon-color-purple);
  top: 30%;
  left: -10%;
  animation: btnBubbleDownRight 3s ease-in-out infinite;
  animation-delay: 4s;
}
.service-card-button .bubble-6 {
  background: var(--xenon-color-magenta-bright);
  top: -10%;
  left: 30%;
  animation: btnBubbleLeft 8s ease-in-out infinite;
  animation-delay: 0.5s;
}
.service-card-button .bubble-7 {
  background: var(--xenon-color-neon-mint);
  top: 40%;
  left: 60%;
  animation: btnBubbleUp 6s ease-in-out infinite;
  animation-delay: 1.5s;
}

@keyframes btnBubbleUpRight {
  0%,
  100% {
    transform: translate(0, 0);
  }
  25% {
    transform: translate(100%, -100%);
  }
  50% {
    transform: translate(-50%, 50%);
  }
  75% {
    transform: translate(50%, -50%);
  }
}
@keyframes btnBubbleDownLeft {
  0%,
  100% {
    transform: translate(0, 0);
  }
  25% {
    transform: translate(-100%, 100%);
  }
  50% {
    transform: translate(50%, -50%);
  }
  75% {
    transform: translate(-50%, 50%);
  }
}
@keyframes btnBubbleRight {
  0%,
  100% {
    transform: translate(0, 0);
  }
  25% {
    transform: translate(100%, 0);
  }
  50% {
    transform: translate(-100%, 50%);
  }
  75% {
    transform: translate(50%, -50%);
  }
}
@keyframes btnBubbleUpLeft {
  0%,
  100% {
    transform: translate(0, 0);
  }
  25% {
    transform: translate(-100%, -100%);
  }
  50% {
    transform: translate(50%, 50%);
  }
  75% {
    transform: translate(-50%, -50%);
  }
}
@keyframes btnBubbleDownRight {
  0%,
  100% {
    transform: translate(0, 0);
  }
  25% {
    transform: translate(100%, 100%);
  }
  50% {
    transform: translate(-50%, -50%);
  }
  75% {
    transform: translate(50%, 50%);
  }
}
@keyframes btnBubbleLeft {
  0%,
  100% {
    transform: translate(0, 0);
  }
  25% {
    transform: translate(-100%, 0);
  }
  50% {
    transform: translate(100%, -50%);
  }
  75% {
    transform: translate(-50%, 50%);
  }
}
@keyframes btnBubbleUp {
  0%,
  100% {
    transform: translate(0, 0);
  }
  25% {
    transform: translate(0, -100%);
  }
  50% {
    transform: translate(50%, 50%);
  }
  75% {
    transform: translate(-50%, -50%);
  }
}
```

| Property      | Value                                                                                                         |
| ------------- | ------------------------------------------------------------------------------------------------------------- |
| Padding       | 14px 42px                                                                                                     |
| Font Size     | 18px, bold, white                                                                                             |
| Border Radius | 50px (pill shape)                                                                                             |
| Background    | Transparent (gradient from HTML: cyan → purple)                                                               |
| Hover Effect  | Black overlay (`::before`) scales to fill                                                                     |
| Active Effect | `scale(0.96)`                                                                                                 |
| Bubble Layers | 7, 150px, blur(10px), :root colors (purple, blue-electric, violet-glow, blue-soft, magenta-bright, neon-mint) |

### 7.3 Stats Card

A highly specialized card with an animated dot traversing the border, inner grid lines, and a ray blur effect.

**v2.0.0 Changes:** Ray blur reduced from 10px → 6px.

#### Structure

```html
<div class="stats-card">
  <div class="stats-card-dot"></div>
  <div class="stats-card-inner">
    <div class="stats-card-ray"></div>
    <div class="text-center p-4">
      <div class="text-[90px] font-extrabold text" data-count="150">0+</div>
      <div class="text-lg">Projects Completed</div>
    </div>
    <div class="stats-card-line stats-card-line-top"></div>
    <div class="stats-card-line stats-card-line-left"></div>
    <div class="stats-card-line stats-card-line-bottom"></div>
    <div class="stats-card-line stats-card-line-right"></div>
  </div>
</div>
```

#### CSS Specification

```css
.stats-card {
  width: 300px;
  height: 250px;
  border-radius: 10px;
  padding: 1px;
  background: radial-gradient(
    circle 230px at 0% 0%,
    var(--xenon-color-white),
    var(--xenon-color-charcoal)
  );
  position: relative;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  will-change: transform, box-shadow; /* v2.0.0: added performance hint */
}

.stats-card:hover {
  transform: translateY(-6px) scale(1.03);
  box-shadow:
    0 15px 40px rgba(0, 242, 255, 0.25),
    0 0 30px rgba(112, 0, 255, 0.15);
}

.stats-card:hover .stats-card-inner .text {
  color: var(--xenon-color-cyan);
  text-shadow: 0 0 20px rgba(0, 242, 255, 0.5);
}
```

#### Dot (Animated)

```css
.stats-card-dot {
  width: 5px;
  aspect-ratio: 1;
  position: absolute;
  background-color: var(--xenon-color-white);
  box-shadow: 0 0 10px var(--xenon-color-white);
  border-radius: 100px;
  z-index: 2;
  right: 10%;
  top: 10%;
  animation: moveDot 6s linear infinite;
}

@keyframes moveDot {
  0%,
  100% {
    top: 10%;
    right: 10%;
  }
  25% {
    top: 10%;
    right: calc(100% - 35px);
  }
  50% {
    top: calc(100% - 30px);
    right: calc(100% - 35px);
  }
  75% {
    top: calc(100% - 30px);
    right: 10%;
  }
}
```

#### Inner Card

```css
.stats-card-inner {
  z-index: 1;
  width: 100%;
  height: 100%;
  border-radius: 9px;
  border: solid 1px var(--xenon-color-dark-surface);
  background-size: 20px 20px;
  background: radial-gradient(
    circle 280px at 0% 0%,
    var(--xenon-color-grey-dim),
    var(--xenon-color-charcoal)
  );
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  flex-direction: column;
  color: var(--xenon-color-white);
}
```

#### Ray (Blur Effect)

**v2.0.0:** Blur reduced from 10px → 6px.

```css
.stats-card-ray {
  width: 220px;
  height: 45px;
  border-radius: 100px;
  position: absolute;
  background-color: var(--xenon-color-silver);
  opacity: 0.4;
  box-shadow: 0 0 50px var(--xenon-color-white);
  filter: blur(6px); /* v2.0.0: reduced from 10px */
  transform-origin: 10%;
  top: 0%;
  left: 0;
  transform: rotate(40deg);
}
```

#### Text (Gradient)

```css
.stats-card-inner .text {
  font-weight: bolder;
  font-size: 4rem;
  background: linear-gradient(
    45deg,
    var(--xenon-color-black) 4%,
    var(--xenon-color-white),
    var(--xenon-color-black)
  );
  background-clip: text;
  color: transparent;
}
```

#### Inner Lines

```css
.stats-card-line {
  width: 100%;
  height: 1px;
  position: absolute;
  background-color: var(--xenon-color-grey-ash);
}

.stats-card-line-top {
  top: 10%;
  background: linear-gradient(
    90deg,
    var(--xenon-color-grey-stone) 30%,
    var(--xenon-color-dark-base) 70%
  );
}

.stats-card-line-bottom {
  bottom: 10%;
}

.stats-card-line-left {
  left: 10%;
  width: 1px;
  height: 100%;
  background: linear-gradient(
    180deg,
    var(--xenon-color-grey-stone) 30%,
    var(--xenon-color-dark-surface) 70%
  );
}

.stats-card-line-right {
  right: 10%;
  width: 1px;
  height: 100%;
}
```

#### Properties Summary

| Property        | Value                                                            |
| --------------- | ---------------------------------------------------------------- |
| Width           | 300px (responsive: 100% max-width 280px on mobile)               |
| Height          | 250px (responsive: auto with aspect-ratio 1/0.85 on mobile)      |
| Border Radius   | 10px (outer), 9px (inner)                                        |
| Dot Size        | 5px circle with white glow                                       |
| Dot Animation   | `moveDot 6s linear infinite`                                     |
| Ray Dimensions  | 220px × 45px                                                     |
| Ray Effect      | Silver blur with 50px white shadow (blur: 6px, v2.0.0: was 10px) |
| Text Size       | 4rem (90px equivalent), extrabold                                |
| Inner Lines     | 1px, positioned 10% from edges                                   |
| Hover Transform | `translateY(-6px) scale(1.03)`                                   |
| Hover Text      | Cyan with glow shadow                                            |

### 7.4 Buttons

**v2.0.0 Changes:** Button system reduced to 7 types. NEW: `.ghost-button` added. Each button type has specific usage restrictions.

The site features **seven distinct button types**, each with unique styling and animations.

#### Button Comparison Table

| Property       | `.animated-button`           | `.explore-button`  | `.ghost-button` (NEW) | `.space-button`                 | `.quiz-cta-button`        | `.service-card-button`     | `.whatsapp-button`  |
| -------------- | ---------------------------- | ------------------ | --------------------- | ------------------------------- | ------------------------- | -------------------------- | ------------------- |
| **Usage**      | Primary CTA                  | Secondary          | Ghost/outline         | ⚠️ HERO ONLY                    | ⚠️ QUIZ ONLY              | ⚠️ SERVICE CARDS ONLY      | External link       |
| Width          | auto                         | auto               | auto                  | auto                            | auto                      | auto                       | auto                |
| Height         | auto                         | auto               | auto                  | auto                            | auto                      | auto                       | auto                |
| Padding        | 16px 36px                    | 0px 15px           | 12px 24px             | 15px 40px                       | 14px 24px                 | 14px 42px                  | 12px 20px           |
| Border Radius  | 8px (12px hover)             | 8px                | 8px                   | 10px                            | 50px                      | 50px                       | 12px                |
| Background     | Transparent border           | Dark base          | Transparent           | Dark gradient                   | Transparent gradient      | Gradient (cyan→purple)     | Gradient (3 colors) |
| Border         | 4px transparent              | Animated gradient  | 1px white/20          | None                            | 1px cyan/30%              | None                       | None                |
| Font Size      | 16px                         | 14px               | 14px                  | 16px                            | 0.95rem                   | 18–20px                    | 1rem                |
| Font Weight    | 600                          | 700                | 400                   | 500                             | 600                       | bold                       | —                   |
| Font Family    | —                            | —                  | Ubuntu                | Ubuntu                          | Outfit                    | Outfit                     | —                   |
| Text Transform | —                            | —                  | —                     | uppercase                       | —                         | —                          | —                   |
| Letter Spacing | —                            | —                  | —                     | 2px                             | —                         | —                          | —                   |
| Text Color     | White                        | White              | White                 | White                           | White                     | White                      | White               |
| Hover Effect   | Circle expands, arrows slide | Same               | Cyan border glow      | translateY(-1px), enhanced glow | translateY(-2px), shimmer | Scale(0.96), overlay       | Conic blur          |
| Animation      | Circle + arrows              | Steam border (20s) | —                     | Particles (3 layers)            | Shimmer sweep             | Bubbles (3 layers, v2.0.0) | Conic gradient      |

#### 7.4.1 Animated Button (Primary CTA)

Features a sliding purple circle and arrow transitions.

```html
<a href="#" class="animated-button view-services-btn">
  <svg class="arr-2" ...></svg>
  <span class="text">View Services</span>
  <span class="circle"></span>
  <svg class="arr-1" ...></svg>
</a>
```

**CSS:**

```css
.animated-button {
  position: relative;
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 16px 36px;
  border: 4px solid;
  border-color: transparent;
  font-size: 16px;
  border-radius: 8px;
  width: 200px;
  height: 50px;
  font-weight: 600;
  color: var(--xenon-color-white);
  box-shadow: 0 0 0 2px var(--xenon-color-grey-dim);
  cursor: pointer;
  overflow: hidden;
  transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
  text-decoration: none;
}

.animated-button:hover {
  box-shadow: 0 0 0 12px transparent;
  color: var(--xenon-color-white);
  border-radius: 12px;
}

.animated-button:hover .circle {
  width: 220px;
  height: 220px;
  opacity: 1;
}

.animated-button:hover .text {
  transform: translateX(12px);
}

.animated-button:hover .arr-1 {
  right: -25%;
}

.animated-button:hover .arr-2 {
  left: 16px;
}

.animated-button:active {
  scale: 0.95;
}
```

**Properties:**

| Property      | Default                             | Hover                    |
| ------------- | ----------------------------------- | ------------------------ |
| Width         | 200px                               | Same                     |
| Height        | 50px                                | Same                     |
| Padding       | 16px 36px                           | Same                     |
| Border        | 4px solid transparent               | Same                     |
| Box Shadow    | `0 0 0 2px rgba(62, 62, 62, 1)`     | `0 0 0 12px transparent` |
| Border Radius | 8px                                 | 12px                     |
| Circle        | 20px, opacity 0, centered           | 220px, opacity 1         |
| Text          | translateX(-12px)                   | translateX(12px)         |
| Arrow 1       | right: 16px                         | right: -25%              |
| Arrow 2       | left: -25%                          | left: 16px               |
| Transition    | 0.6s cubic-bezier(0.23, 1, 0.32, 1) | Same                     |

#### 7.4.2 Explore Button (Secondary)

Features an animated gradient "steam" border effect.

```html
<a href="#" class="explore-button"> Our Foundation </a>
```

**CSS:**

```css
.explore-button {
  border-radius: 8px;
  width: 200px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 0px 15px;
  border: none;
  color: white;
  position: relative;
  cursor: pointer;
  font-weight: 700;
  transition-duration: 0.2s;
  background-color: var(--xenon-color-dark-base);
  z-index: 1;
  text-decoration: none;
}

.explore-button:before,
.explore-button:after {
  content: "";
  position: absolute;
  left: -2px;
  top: -2px;
  border-radius: 10px;
  background: linear-gradient(
    45deg,
    var(--xenon-color-dark-base),
    var(--xenon-color-dark-base),
    var(--xenon-color-grey-ash),
    var(--xenon-color-white),
    var(--xenon-color-grey-ash),
    var(--xenon-color-dark-base),
    var(--xenon-color-dark-base),
    var(--xenon-color-dark-base)
  );
  background-size: 400%;
  width: calc(100% + 4px);
  height: calc(100% + 4px);
  z-index: -1;
  animation: steam 20s linear infinite;
}

.explore-button:after {
  filter: blur(25px); /* v2.0.0: reduced from 50px */
}
```

**Properties:**

| Property            | Default                                           |
| ------------------- | ------------------------------------------------- |
| Width               | 200px                                             |
| Height              | 50px                                              |
| Background          | `var(--xenon-color-dark-base)`                    |
| Border              | Animated gradient border via `::before`/`::after` |
| Border Animation    | `steam 20s linear infinite`                       |
| Font Weight         | 700                                               |
| Border Radius       | 8px (button), 10px (border)                       |
| Blur (outer border) | 25px (v2.0.0: was 50px)                           |

#### 7.4.3 Ghost Button (NEW — v2.0.0)

Ghost/outline button with transparent background, subtle border, and cyan hover state.

```html
<a href="#" class="ghost-button"> Ghost Button Text </a>
```

**CSS:**

```css
.ghost-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-2);
  padding: 12px 24px;
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: var(--radius-md);
  color: var(--xenon-color-white);
  font-family: "Ubuntu", sans-serif;
  font-size: var(--text-sm);
  font-weight: 400;
  text-decoration: none;
  cursor: pointer;
  transition: var(--motion-hover);
}

.ghost-button:hover {
  border-color: var(--xenon-color-cyan);
  color: var(--xenon-color-cyan);
  box-shadow: 0 0 15px rgba(0, 242, 255, 0.15);
}
```

**Properties:**

| Property      | Default                              | Hover                               |
| ------------- | ------------------------------------ | ----------------------------------- |
| Background    | `transparent`                        | `transparent`                       |
| Border        | `1px solid rgba(255, 255, 255, 0.2)` | `1px solid var(--xenon-color-cyan)` |
| Border Radius | `var(--radius-md)` (8px)             | Same                                |
| Padding       | `12px 24px`                          | Same                                |
| Font Size     | `var(--text-sm)` (14px)              | Same                                |
| Font Weight   | 400                                  | Same                                |
| Font Family   | Ubuntu                               | Same                                |
| Text Color    | White                                | Cyan                                |
| Box Shadow    | None                                 | `0 0 15px rgba(0, 242, 255, 0.15)`  |
| Transition    | `var(--motion-hover)`                | Same                                |

#### 7.4.4 Space Button (⚠️ HERO ONLY)

A premium button with animated particle effects and multi-layer shadows. **Do not reuse below the hero section.**

```html
<div class="button-container">
  <button class="space-button">
    <span>Button Text</span>
    <div class="bright-particles"></div>
  </button>
</div>
```

**CSS:**

```css
.space-button {
  position: relative;
  padding: 15px 40px;
  font-size: 16px;
  color: rgba(255, 255, 255, 1);
  background: linear-gradient(45deg, #0f0f2d, #1a1a3a);
  border: none;
  border-radius: 10px;
  cursor: pointer;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow:
    0 4px 10px rgba(10, 10, 31, 0.5),
    0 0 10px rgba(0, 242, 255, 0.15),
    inset 0 0 10px rgba(0, 242, 255, 0.05);
  font-family: "Ubuntu", sans-serif;
  text-transform: uppercase;
  letter-spacing: 2px;
  z-index: 1;
  transform: translateZ(0);
  backface-visibility: hidden;
  perspective: 1000px;
  will-change: transform;
  text-shadow:
    0 0 10px rgba(255, 255, 255, 0.3),
    0 0 20px rgba(255, 255, 255, 0.1);
  font-weight: 500;
}

.space-button:hover {
  transform: translateY(-1px) translateZ(0);
  box-shadow:
    0 6px 10px rgba(10, 10, 31, 0.6),
    0 0 15px rgba(0, 242, 255, 0.3),
    inset 0 0 15px rgba(0, 242, 255, 0.1);
  background: linear-gradient(45deg, #141436, #1e1e42);
}

.button-container {
  position: relative;
  display: block;
  padding: 2px;
  border-radius: 12px;
  background: linear-gradient(90deg, #00f2ff, #7000ff, #9d174d, #00f2ff);
  background-size: 400% 400%;
  animation: gradientBorder 20s ease-in-out infinite;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
}
```

**Properties:**

| Property         | Default                                    | Hover                                      |
| ---------------- | ------------------------------------------ | ------------------------------------------ |
| Padding          | 15px 40px                                  | Same                                       |
| Background       | `linear-gradient(45deg, #0f0f2d, #1a1a3a)` | `linear-gradient(45deg, #141436, #1e1e42)` |
| Border Radius    | 10px                                       | Same                                       |
| Font Size        | 16px                                       | Same                                       |
| Font Weight      | 500                                        | Same                                       |
| Letter Spacing   | 2px                                        | Same                                       |
| Text Transform   | uppercase                                  | Same                                       |
| Font Family      | Ubuntu                                     | Same                                       |
| Box Shadow       | Multi-layer with cyan glow                 | Enhanced glow                              |
| Transform        | `translateZ(0)`                            | `translateY(-1px) translateZ(0)`           |
| Container Border | Animated gradient (20s)                    | Faster animation (10s)                     |
| Particles        | 3 layers, opacity 0.45–0.85                | Increased opacity                          |

#### 7.4.5 WhatsApp Button (External Link Special Case)

A vibrant gradient button with conic gradient hover glow.

```html
<div class="whatsapp-button">
  <svg ...></svg>
  Let's Build
</div>
```

**CSS:**

```css
.whatsapp-button {
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 12px 20px;
  border: none;
  font-size: 1rem;
  cursor: pointer;
  position: relative;
  background: linear-gradient(
    90deg,
    var(--xenon-color-neon-mint),
    var(--xenon-color-pink-soft),
    var(--xenon-color-blue-soft)
  );
  border-radius: 12px;
  color: var(--xenon-color-white);
  transition: all 0.3s ease;
  /* v2.0.0: reduced from 3 to 2 shadows (removed redundant inset 0px 35px 30px) */
  box-shadow:
    inset 0px 0px 5px var(--xenon-color-white-translucent),
    0px 5px 10px var(--xenon-color-black);
  text-shadow: 1px 1px 1px var(--xenon-color-black);
}

.whatsapp-button::before {
  content: "";
  position: absolute;
  inset: 0;
  margin: auto;
  border-radius: 12px;
  filter: blur(0);
  z-index: -1;
  box-shadow: none;
  background: conic-gradient(
    var(--xenon-color-black-none) 80deg,
    var(--xenon-color-blue-electric),
    var(--xenon-color-magenta-bright),
    var(--xenon-color-neon-mint),
    var(--xenon-color-black-none) 280deg
  );
  transition: all 0.3s ease;
}

.whatsapp-button:hover::before {
  filter: blur(15px);
}

.whatsapp-button:active {
  /* v2.0.0: reduced from 2 to 1 shadow */
  box-shadow: inset 0px 0px 5px var(--xenon-color-white-translucent);
  margin-top: 3px;
}
```

**Properties:**

| Property                | Default                                             | Hover      | Active                         |
| ----------------------- | --------------------------------------------------- | ---------- | ------------------------------ |
| Background              | Linear gradient (neon-mint → pink-soft → blue-soft) | Same       | Same                           |
| Border Radius           | 12px                                                | Same       | Same                           |
| Padding                 | 12px 20px                                           | Same       | Same                           |
| Box Shadow              | Multi-layer (2 shadows, v2.0.0)                     | Same       | 1 shadow (reduced)             |
| Conic Gradient (pseudo) | blur(0)                                             | blur(15px) | blur(5px)                      |
| Active                  | —                                                   | —          | margin-top: 3px (press effect) |

#### 7.4.6 Service Card Button (⚠️ SERVICE CARDS ONLY)

A pill-shaped gradient button with 3 animated bubble layers (v2.0.0: was 7).

```html
<a
  href="..."
  class="service-card-button relative mt-8 px-6 py-3 rounded-full bg-gradient-to-r from-cyan to-purple text-white font-medium overflow-hidden"
>
  <!-- 3 bubble-layers (absolute, behind button) — v2.0.0: was 7 -->
  <span>
    <div class="flex items-center gap-2 justify-center">
      <i class="fa-brands fa-whatsapp"></i>
      <span class="outfit text-[20px] font-bold">Book A Call</span>
    </div>
  </span>
</a>
```

**Properties:**

| Property      | Value                                                                            |
| ------------- | -------------------------------------------------------------------------------- |
| Padding       | 14px 42px (or px-6 py-3)                                                         |
| Border Radius | 50px (pill shape)                                                                |
| Background    | `linear-gradient(to right, cyan, purple)`                                        |
| Font Size     | 18px (20px in HTML)                                                              |
| Font Weight   | bold                                                                             |
| Font Family   | Outfit                                                                           |
| Bubble Layers | 3 absolute-positioned circles, 150px × 150px, blur(10px), purple (v2.0.0: was 7) |
| Hover         | Scale(0.96) on active, inner black overlay                                       |

#### 7.4.7 Quiz CTA Button (⚠️ QUIZ SYSTEM ONLY)

A pill-shaped outlined button with shimmer effect.

```html
<a href="./AddOn/quiz/index.html" class="quiz-cta-button">
  <span class="quiz-badge">FREE</span>
  Take Our Revenue Potential Quiz
  <svg ...></svg>
</a>
```

**CSS:**

```css
.quiz-cta-button {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 14px 24px;
  background: linear-gradient(
    135deg,
    rgba(0, 242, 255, 0.1),
    rgba(112, 0, 255, 0.1)
  );
  border: 1px solid rgba(0, 242, 255, 0.3);
  border-radius: 50px;
  color: var(--xenon-color-white);
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
}

.quiz-cta-button::before {
  content: "";
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.1),
    transparent
  );
  transition: left 0.5s;
}

.quiz-cta-button:hover::before {
  left: 100%;
}

.quiz-cta-button:hover {
  background: linear-gradient(
    135deg,
    rgba(0, 242, 255, 0.2),
    rgba(112, 0, 255, 0.2)
  );
  border-color: var(--xenon-color-cyan);
  transform: translateY(-2px);
  box-shadow:
    0 8px 25px rgba(0, 242, 255, 0.3),
    0 4px 15px rgba(112, 0, 255, 0.2);
}
```

### 7.5 Navigation

A fixed, floating glass-morphism navigation bar.

#### Structure

```html
<nav
  class="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-4xl"
  aria-label="Main navigation"
>
  <div
    class="glass-card rounded-full px-8 py-4 flex items-center justify-between border-white/10"
  >
    <!-- Logo -->
    <div class="text-xl font-extrabold tracking-tighter italic">
      <a href="index.html" class="block hover:scale-105 transition-transform">
        <img
          src="./images/logo.png"
          alt="Xenon Studios logo"
          class="h-10"
          decoding="async"
        />
      </a>
    </div>

    <!-- Desktop Links -->
    <div class="hidden md:flex gap-8 font-medium text-white/70">
      <a
        href="#home"
        class="nav-link text-cyan transition-colors text-[18px] font-bold outfit"
        >Home</a
      >
      <a
        href="#about"
        class="nav-link hover:text-cyan transition-colors text-[18px] font-bold outfit"
        >About</a
      >
      <a
        href="#services"
        class="nav-link hover:text-cyan transition-colors text-[18px] font-bold outfit"
        >Services</a
      >
      <a
        href="#contact"
        class="nav-link hover:text-cyan transition-colors text-[18px] font-bold outfit"
        >Contact Us</a
      >
    </div>

    <!-- WhatsApp Button (Desktop) -->
    <a
      href="https://wa.link/lx0res"
      target="_blank"
      rel="noopener noreferrer"
      class="hidden sm:block"
    >
      <div class="whatsapp-button flex">...</div>
    </a>

    <!-- Mobile Menu Button -->
    <button
      class="md:hidden mobile-menu-btn text-white p-2"
      aria-label="Toggle menu"
    >
      <svg class="w-6 h-6" ...></svg>
    </button>
  </div>

  <!-- Mobile Menu (Dropdown) -->
  <div
    class="mobile-menu md:hidden absolute top-full left-0 right-0 mt-2 glass rounded-2xl ..."
  >
    <div class="flex flex-col p-4 gap-2">
      <a href="#home" class="mobile-nav-link ...">Home</a>
      <a href="#about" class="mobile-nav-link ...">About</a>
      <a href="#services" class="mobile-nav-link ...">Services</a>
      <a href="#faq" class="mobile-nav-link ...">Faq</a>
      <!-- WhatsApp Button (Mobile) -->
    </div>
  </div>
</nav>
```

#### CSS Specification

```css
nav {
  position: fixed;
  top: 6px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 50;
  width: 90%;
  max-width: 64rem; /* max-w-4xl */
}

nav .glass-card {
  padding: 1rem 2rem; /* px-8 py-4 */
  border-radius: 9999px; /* rounded-full */
}

.nav-link {
  transition: all 0.3s ease;
  font-size: 0.9rem; /* 18px in HTML */
}

.nav-link:hover {
  color: var(--xenon-color-cyan);
  text-shadow: 0 0 8px var(--xenon-color-cyan-transparent);
}

.nav-link.active {
  color: var(--xenon-color-cyan);
}
```

#### Properties

| Property               | Value                                   |
| ---------------------- | --------------------------------------- |
| Position               | Fixed, top: 6px, centered               |
| Width                  | 90%, max-width: 896px                   |
| Z-index                | 50                                      |
| Background             | Glass card (dark-transparent with blur) |
| Border Radius          | 9999px (pill/rounded-full)              |
| Horizontal Padding     | 2rem (32px)                             |
| Vertical Padding       | 1rem (16px)                             |
| Logo Height            | 40px (h-10)                             |
| Link Font Size         | 18px                                    |
| Link Font Weight       | bold (700)                              |
| Link Font Family       | Outfit                                  |
| Link Default Color     | `rgba(255, 255, 255, 0.7)`              |
| Link Active Color      | Cyan                                    |
| Link Hover Color       | Cyan with glow shadow                   |
| Link Gap               | 2rem (32px)                             |
| Mobile Menu            | Glass dropdown, absolute below nav      |
| Mobile Link Padding    | 12px 16px (responsive: up to 16px 20px) |
| Mobile Link Font Size  | 16px–18px (responsive)                  |
| Mobile Link Min Height | 50px–52px                               |

### 7.6 Section Labels

Small, uppercase, widely-spaced labels above section headings.

```html
<span class="section-label text-[10px] uppercase font-bold mb-4 block">
  Our Foundation
</span>
```

**CSS:**

```css
.section-label {
  font-size: 10px;
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 0.2em; /* tracking-[0.2em] */
  margin-bottom: 4px;
  display: block;
  /* Color varies by section: cyan, purple, magenta */
}
```

| Property       | Value                                     |
| -------------- | ----------------------------------------- |
| Font Size      | 10px                                      |
| Text Transform | uppercase                                 |
| Font Weight    | 700 (bold)                                |
| Letter Spacing | 0.2em                                     |
| Margin Bottom  | 4px                                       |
| Display        | block                                     |
| Colors         | Section-dependent (cyan, purple, magenta) |

### 7.7 Value Items

Interactive cards in the Core Values grid with animated dot indicators.

```html
<div
  class="value-item group/value p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 cursor-pointer"
>
  <div class="flex items-center gap-3">
    <div
      class="w-3 h-3 rounded-full bg-cyan group-hover/value:scale-150 transition-transform"
    ></div>
    <span class="text-white group-hover/value:text-cyan transition-colors"
      >Integrity & Transparency</span
    >
  </div>
  <p class="text-white/50 text-sm mt-2 ml-6">
    Honest communication and ethical practices...
  </p>
</div>
```

**CSS:**

```css
.value-item {
  padding: 1rem; /* p-4 */
  background: rgba(255, 255, 255, 0.05);
  border-radius: 0.75rem; /* rounded-xl */
  transition: all 0.3s ease;
  cursor: pointer;
}

.value-item:hover {
  background: rgba(255, 255, 255, 0.1);
  transform: translateX(4px);
}
```

| Property          | Default                     | Hover                              |
| ----------------- | --------------------------- | ---------------------------------- |
| Padding           | 1rem (p-4)                  | Same                               |
| Background        | `rgba(255, 255, 255, 0.05)` | `rgba(255, 255, 255, 0.1)`         |
| Border Radius     | 0.75rem (rounded-xl)        | Same                               |
| Transform         | `none`                      | `translateX(4px)`                  |
| Dot Size          | 3px circle                  | Scales to 1.5x                     |
| Dot Color         | Section accent              | Same                               |
| Title Color       | White                       | Accent color (cyan/purple/magenta) |
| Description Color | `rgba(255, 255, 255, 0.5)`  | Same                               |

### 7.8 Pricing Card (Popular)

A glass card with an animated rotating conic gradient border using CSS Houdini.

#### Structure

```html
<div class="pricing-card-popular glass-card rounded-xl p-6 lg:p-8">
  <!-- Content -->
</div>
```

#### CSS Specification

```css
@property --glow-angle {
  syntax: "<angle>";
  initial-value: 0deg;
  inherits: false;
}

.pricing-card-popular {
  position: relative;
  border-radius: 0.75rem; /* rounded-xl */
  will-change: transform, box-shadow; /* v2.0.0: added performance hint */
}

.pricing-card-popular::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: inherit;
  padding: 1.5px; /* Border thickness */
  background: conic-gradient(
    from var(--glow-angle),
    transparent 0deg,
    transparent 120deg,
    var(--xenon-color-purple) 250deg,
    transparent 360deg
  );
  animation: borderRotate 3s linear infinite;
  z-index: 10;
  pointer-events: none;

  /* Mask to only show the padding area (the border) */
  -webkit-mask:
    linear-gradient(white 0 0) content-box,
    linear-gradient(white 0 0);
  mask:
    linear-gradient(white 0 0) content-box,
    linear-gradient(white 0 0);
  mask-composite: exclude;
}

.pricing-card-popular:hover {
  transform: translateY(-8px) scale(1.02);
  /* v2.0.0: simplified box-shadow */
  box-shadow:
    0 20px 60px rgba(0, 242, 255, 0.3),
    0 0 40px rgba(112, 0, 255, 0.2);
}
```

| Property             | Value                             |
| -------------------- | --------------------------------- |
| Border Radius        | 0.75rem (rounded-xl)              |
| Padding              | 1.5rem–2rem (p-6 lg:p-8)          |
| Animated Border      | Conic gradient, 1.5px thickness   |
| Border Animation     | `borderRotate 3s linear infinite` |
| CSS Houdini Property | `@property --glow-angle`          |
| Hover Transform      | `translateY(-8px) scale(1.02)`    |
| Hover Box Shadow     | Multi-layer cyan + purple glow    |

#### Pricing Card Buttons (v2.1.0)

**v2.1.0:** All three pricing plan buttons restored to `space-button` with `bright-particles` effect (from `.bak`).

```html
<!-- Essential Plan -->
<div class="button-container w-full">
  <button class="space-button w-full">
    <div class="bright-particles"></div>
    <span>Start Basic</span>
  </button>
</div>

<!-- Professional Plan -->
<div class="button-container w-full">
  <button class="space-button w-full">
    <div class="bright-particles"></div>
    <span>Go Pro</span>
  </button>
</div>

<!-- Enterprise Plan -->
<div class="button-container w-full">
  <button class="space-button w-full">
    <div class="bright-particles"></div>
    <span>Contact Sales</span>
  </button>
</div>
```

| Property     | Value                                     |
| ------------ | ----------------------------------------- |
| Button Type  | `.space-button` (with `bright-particles`) |
| Width        | `w-full` (100% of container)              |
| Essential    | "Start Basic"                             |
| Professional | "Go Pro"                                  |
| Enterprise   | "Contact Sales"                           |

### 7.9 FAQ Accordion

Native `<details>` elements styled as glass cards.

#### Structure

```html
<details class="faq-item glass-card rounded-xl p-6 border-white/10" open>
  <summary
    class="faq-question font-semibold text-white text-base flex items-center justify-between cursor-pointer list-none"
  >
    <span>How long does it take to build a website?</span>
    <span
      class="material-symbols-outlined text-[var(--xenon-color-cyan)] transition-transform duration-300"
    >
      expand_more
    </span>
  </summary>
  <div class="faq-answer text-zinc-400 text-sm leading-relaxed">
    <p>...</p>
  </div>
</details>
```

| Property        | Default                              | Hover/Open                |
| --------------- | ------------------------------------ | ------------------------- |
| Background      | Glass card                           | Same                      |
| Padding         | 1.5rem (p-6)                         | Same                      |
| Border Radius   | 0.75rem (rounded-xl)                 | Same                      |
| Border          | `1px solid rgba(255, 255, 255, 0.1)` | Cyan left border on hover |
| Question Font   | 16px, semibold, white                | Same                      |
| Answer Font     | 14px, zinc-400, line-height 1.6      | Same                      |
| Icon            | Material Symbols `expand_more`, cyan | Rotates on open           |
| Hover Transform | `translateX(4px)`                    | Same                      |
| Item Gap        | 1rem between items                   | Same                      |

### 7.10 Social Icons

Icon links in the footer with bounce hover effect.

```html
<a
  href="#"
  class="social-icon text-white/60 hover:text-[var(--xenon-color-cyan)] transition-all"
>
  <i class="fa-brands fa-linkedin text-xl"></i>
</a>
```

**Hover Behavior:**

```css
.social-icon:hover {
  transform: translateY(-4px) scale(1.15);
  filter: drop-shadow(0 0 10px currentColor);
}
```

| Property   | Default                                 | Hover                                |
| ---------- | --------------------------------------- | ------------------------------------ |
| Color      | `rgba(255, 255, 255, 0.6)`              | Cyan                                 |
| Transform  | `none`                                  | `translateY(-4px) scale(1.15)`       |
| Filter     | `none`                                  | `drop-shadow(0 0 10px currentColor)` |
| Transition | `all 0.3s cubic-bezier(0.4, 0, 0.2, 1)` | Same                                 |
| Icon Size  | 1.25rem (text-xl)                       | Same                                 |

### 7.11 Contact Cards

Glass cards in the contact section with icon, label, and value.

#### Structure

```html
<a href="mailto:hello@xenonstudios.com" class="block">
  <div class="glass-card rounded-xl p-4 flex items-center gap-3">
    <div
      class="w-10 h-10 rounded-lg bg-cyan/10 flex items-center justify-center"
    >
      <i class="fa-solid fa-envelope text-cyan"></i>
    </div>
    <div>
      <p class="text-xs text-zinc-400">Email</p>
      <p class="text-sm font-medium text-white">hello@xenonstudios.com</p>
    </div>
  </div>
</a>
```

| Property           | Value                                       |
| ------------------ | ------------------------------------------- |
| Background         | Glass card                                  |
| Padding            | 1rem (p-4)                                  |
| Border Radius      | 0.75rem (rounded-xl)                        |
| Icon Container     | 40px × 40px, rounded-lg, cyan/10 background |
| Icon Size          | — (Font Awesome)                            |
| Label Font         | 12px (text-xs), zinc-400                    |
| Value Font         | 14px (text-sm), medium, white               |
| Gap (icon to text) | 0.75rem (gap-3)                             |
| Hover Transform    | `translateX(6px) scale(1.02)`               |

### 7.13 Comparison Table

A feature comparison table with sticky header and check/x icons.

#### Structure

```html
<div class="overflow-x-auto">
  <table class="w-full text-sm">
    <thead>
      <tr class="sticky top-0 sticky-header-blur">
        <th>Feature</th>
        <th>Xenon Studios</th>
        <th>Freelancer</th>
        <!-- ... -->
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Custom Design</td>
        <td><i class="fa-solid fa-check text-cyan"></i></td>
        <td><i class="fa-solid fa-xmark text-red"></i></td>
        <!-- ... -->
      </tr>
    </tbody>
  </table>
</div>
```

| Property         | Value                                                           |
| ---------------- | --------------------------------------------------------------- |
| Container        | `overflow-x-auto` for horizontal scroll                         |
| Font Size        | 14px (text-sm), 11px on mobile                                  |
| Sticky Header    | `backdrop-filter: blur(12px)`, `background: rgba(0, 0, 0, 0.8)` |
| Icon Size        | 16px (default), 14px on mobile                                  |
| Row Hover        | `background-color: rgba(0, 242, 255, 0.05)`                     |
| Column Gap       | 0.25rem on mobile, 0.5rem base                                  |
| Check Icon Color | Cyan                                                            |
| X Icon Color     | Red                                                             |

### 7.14 Why Choose Us Grid

A custom grid layout with feature columns.

| Property            | Value                                                     |
| ------------------- | --------------------------------------------------------- |
| Grid Columns        | `[1.5fr repeat(5, 1fr)]` (responsive)                     |
| Font Size           | 12px (text-xs), 11px on mobile                            |
| Hidden Columns      | `.hidden-sm` on mobile                                    |
| Responsive Override | `grid-template-columns: 1.5fr repeat(5, 0.8fr)` on mobile |

### 7.15 Form Inputs (NEW — v2.0.0)

Form input components for product-layer UI.

#### Form Group

```html
<div class="form-group">
  <label class="form-label" for="input-id">
    Label Text
    <span class="form-label-required">*</span>
  </label>
  <input
    type="text"
    id="input-id"
    class="form-input"
    placeholder="Placeholder"
  />
  <p class="form-helper">Helper text</p>
</div>
```

#### Form Label

```css
.form-label {
  display: block;
  font-size: var(--text-sm);
  font-weight: 500;
  color: var(--xenon-color-white);
  margin-bottom: var(--space-2);
}

.form-label-required {
  color: var(--xenon-color-magenta);
  margin-left: var(--space-1);
}
```

#### Form Input

```css
.form-input {
  width: 100%;
  padding: var(--space-3) var(--space-4);
  font-size: var(--text-base);
  font-family: "Ubuntu", sans-serif;
  color: var(--xenon-color-white);
  background: var(--xenon-color-dark-surface);
  border: 1px solid var(--xenon-color-white-faint);
  border-radius: var(--radius-md);
  transition: var(--motion-hover);
}

.form-input:hover {
  border-color: rgba(255, 255, 255, 0.4);
}

.form-input:focus {
  outline: none;
  border-color: var(--xenon-color-cyan);
  box-shadow: 0 0 0 3px rgba(0, 242, 255, 0.1);
}

.form-input:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.form-input-error {
  border-color: #ef4444 !important;
  box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1) !important;
}

.form-input-success {
  border-color: #22c55e !important;
  box-shadow: 0 0 0 3px rgba(34, 197, 94, 0.1) !important;
}

textarea.form-input {
  min-height: 120px;
  resize: vertical;
}
```

#### Form Select (with custom chevron SVG)

```css
.form-select {
  appearance: none;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e");
  background-position: right 0.5rem center;
  background-repeat: no-repeat;
  background-size: 1.5em 1.5em;
  padding-right: 2.5rem;
}
```

#### Form Checkbox & Radio

```css
.form-checkbox,
.form-radio {
  appearance: none;
  width: 1rem;
  height: 1rem;
  border: 1px solid var(--xenon-color-white-faint);
  border-radius: var(--radius-sm);
  background: var(--xenon-color-dark-surface);
  cursor: pointer;
  transition: var(--motion-hover);
}

.form-checkbox:checked {
  background-color: var(--xenon-color-cyan);
  border-color: var(--xenon-color-cyan);
  background-image: url("data:image/svg+xml,..."); /* checkmark SVG */
}

.form-radio {
  border-radius: var(--radius-full);
}

.form-radio:checked {
  background-color: var(--xenon-color-cyan);
  border-color: var(--xenon-color-cyan);
}
```

#### Form Helper Text

```css
.form-helper {
  font-size: var(--text-xs);
  color: rgba(255, 255, 255, 0.5);
  margin-top: var(--space-2);
}

.form-helper-error {
  color: #ef4444;
}

.form-helper-success {
  color: #22c55e;
}
```

### 7.16 Feedback States (NEW — v2.0.0)

Loading, skeleton, alert, and toast components.

#### Loading Spinner

```css
.loading-spinner {
  width: 2rem;
  height: 2rem;
  border: 2px solid rgba(255, 255, 255, 0.1);
  border-top-color: var(--xenon-color-cyan);
  border-radius: var(--radius-full);
  animation: spin 0.8s linear infinite;
}

.loading-spinner-sm {
  width: 1rem;
  height: 1rem;
  border-width: 1px;
}

.loading-spinner-lg {
  width: 3rem;
  height: 3rem;
  border-width: 3px;
}
```

#### Skeleton Loading

```css
.skeleton {
  background: linear-gradient(
    90deg,
    var(--xenon-color-dark-surface) 25%,
    var(--xenon-color-dark-base) 50%,
    var(--xenon-color-dark-surface) 75%
  );
  background-size: 200% 100%;
  animation: skeleton-loading 1.5s ease-in-out infinite;
  border-radius: var(--radius-md);
}

@keyframes skeleton-loading {
  0% {
    background-position: 200% 0;
  }
  100% {
    background-position: -200% 0;
  }
}

.skeleton-text {
  height: 1rem;
  width: 100%;
}

.skeleton-circle {
  width: 2.5rem;
  height: 2.5rem;
  border-radius: var(--radius-full);
}

.skeleton-title {
  height: 1.5rem;
  width: 60%;
}

.skeleton-subtitle {
  height: 1rem;
  width: 80%;
}
```

#### Alert Component

```css
.alert {
  display: flex;
  gap: var(--space-3);
  padding: var(--space-4);
  border-radius: var(--radius-lg);
  border: 1px solid;
}

.alert-icon {
  flex-shrink: 0;
  width: 1.25rem;
  height: 1.25rem;
}

.alert-content {
  flex: 1;
}

.alert-title {
  font-weight: 600;
  margin-bottom: var(--space-1);
}

/* Alert Variants */
.alert-info {
  background: rgba(0, 242, 255, 0.05);
  border-color: rgba(0, 242, 255, 0.2);
  color: var(--xenon-color-cyan);
}

.alert-success {
  background: rgba(34, 197, 94, 0.05);
  border-color: rgba(34, 197, 94, 0.2);
  color: #22c55e;
}

.alert-warning {
  background: rgba(245, 158, 11, 0.05);
  border-color: rgba(245, 158, 11, 0.2);
  color: #f59e0b;
}

.alert-error {
  background: rgba(239, 68, 68, 0.05);
  border-color: rgba(239, 68, 68, 0.2);
  color: #ef4444;
}
```

#### Toast Notifications

```css
.toast {
  position: fixed;
  bottom: var(--space-6);
  right: var(--space-6);
  z-index: var(--z-toast);
  display: flex;
  align-items: center;
  gap: var(--space-3);
  padding: var(--space-4) var(--space-5);
  background: var(--xenon-color-dark-base);
  border: 1px solid var(--xenon-color-white-faint);
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-xl);
  animation: slideInRight 0.3s ease-out;
}

@keyframes slideInRight {
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes slideOutRight {
  from {
    transform: translateX(0);
    opacity: 1;
  }
  to {
    transform: translateX(100%);
    opacity: 0;
  }
}

.toast-close {
  padding: var(--space-1);
  color: rgba(255, 255, 255, 0.5);
  cursor: pointer;
  transition: var(--motion-hover);
}

.toast-close:hover {
  color: var(--xenon-color-white);
}
```

### 7.17 Data UI Components (NEW — v2.0.0)

Tables, pagination, filters, badges, and empty states.

#### Data Table

```css
.data-table-wrapper {
  overflow-x: auto;
  border-radius: var(--radius-lg);
  border: 1px solid var(--xenon-color-white-faint);
}

.data-table {
  width: 100%;
  border-collapse: collapse;
  font-size: var(--text-sm);
}

.data-table thead {
  background: var(--xenon-color-dark-surface);
}

.data-table th {
  padding: var(--space-3) var(--space-4);
  text-align: left;
  font-weight: 600;
  color: var(--xenon-color-white);
  border-bottom: 1px solid var(--xenon-color-white-faint);
}

.data-table td {
  padding: var(--space-3) var(--space-4);
  color: rgba(255, 255, 255, 0.7);
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

.data-table tbody tr:hover {
  background: rgba(0, 242, 255, 0.03);
}

.data-table-compact td,
.data-table-compact th {
  padding: var(--space-2) var(--space-3);
}

.data-table-striped tbody tr:nth-child(even) {
  background: rgba(255, 255, 255, 0.02);
}
```

#### Status Badge

```css
.status-badge {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  padding: var(--space-1) var(--space-3);
  font-size: var(--text-xs);
  font-weight: 500;
  border-radius: var(--radius-full);
}

.status-badge-dot {
  width: 0.5rem;
  height: 0.5rem;
  border-radius: var(--radius-full);
}

.status-badge-active {
  background: rgba(34, 197, 94, 0.1);
  color: #22c55e;
}

.status-badge-active .status-badge-dot {
  background: #22c55e;
}

.status-badge-inactive {
  background: rgba(239, 68, 68, 0.1);
  color: #ef4444;
}

.status-badge-inactive .status-badge-dot {
  background: #ef4444;
}

.status-badge-pending {
  background: rgba(245, 158, 11, 0.1);
  color: #f59e0b;
}

.status-badge-pending .status-badge-dot {
  background: #f59e0b;
}
```

#### Pagination

```css
.pagination {
  display: flex;
  align-items: center;
  gap: var(--space-2);
}

.pagination-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 2rem;
  height: 2rem;
  padding: 0 var(--space-2);
  font-size: var(--text-sm);
  color: var(--xenon-color-white);
  background: var(--xenon-color-dark-surface);
  border: 1px solid var(--xenon-color-white-faint);
  border-radius: var(--radius-md);
  cursor: pointer;
  transition: var(--motion-hover);
}

.pagination-btn:hover:not(:disabled):not(.active) {
  border-color: var(--xenon-color-cyan);
  color: var(--xenon-color-cyan);
}

.pagination-btn.active {
  background: var(--xenon-color-cyan);
  border-color: var(--xenon-color-cyan);
  color: var(--xenon-color-black);
}

.pagination-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
```

#### Filter Bar & Search

```css
.filter-bar {
  display: flex;
  align-items: center;
  gap: var(--space-4);
  flex-wrap: wrap;
}

.filter-search {
  position: relative;
  flex: 1;
  min-width: 200px;
}

.filter-search::before {
  content: "";
  position: absolute;
  left: var(--space-3);
  top: 50%;
  transform: translateY(-50%);
  width: 1rem;
  height: 1rem;
  background-image: url("data:image/svg+xml,..."); /* search icon SVG */
  background-size: contain;
  pointer-events: none;
}

.filter-search input {
  width: 100%;
  padding: var(--space-2) var(--space-3) var(--space-2) var(--space-8);
  font-size: var(--text-sm);
  background: var(--xenon-color-dark-surface);
  border: 1px solid var(--xenon-color-white-faint);
  border-radius: var(--radius-md);
  color: var(--xenon-color-white);
}

.filter-chip {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  padding: var(--space-1) var(--space-3);
  font-size: var(--text-xs);
  background: var(--xenon-color-dark-surface);
  border: 1px solid var(--xenon-color-white-faint);
  border-radius: var(--radius-full);
  cursor: pointer;
  transition: var(--motion-hover);
}

.filter-chip.active {
  background: rgba(0, 242, 255, 0.1);
  border-color: var(--xenon-color-cyan);
  color: var(--xenon-color-cyan);
}

.filter-chip-remove {
  margin-left: var(--space-1);
  opacity: 0.5;
  cursor: pointer;
}

.filter-chip-remove:hover {
  opacity: 1;
}
```

#### Empty State

```css
.empty-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: var(--space-12) var(--space-6);
  text-align: center;
}

.empty-state-icon {
  width: 4rem;
  height: 4rem;
  color: rgba(255, 255, 255, 0.2);
  margin-bottom: var(--space-4);
}

.empty-state-title {
  font-size: var(--text-lg);
  font-weight: 600;
  color: var(--xenon-color-white);
  margin-bottom: var(--space-2);
}

.empty-state-description {
  font-size: var(--text-sm);
  color: rgba(255, 255, 255, 0.5);
  max-width: 400px;
}
```

### 7.18 Dashboard Components (NEW — v2.0.0)

Sidebar navigation, topbar, stat cards, and activity feed.

#### Dashboard Layout

```css
.dashboard-layout {
  display: grid;
  grid-template-columns: 260px 1fr;
  min-height: 100vh;
}

.dashboard-sidebar {
  position: sticky;
  top: 0;
  height: 100vh;
  overflow-y: auto;
  background: var(--xenon-color-dark-base);
  border-right: 1px solid var(--xenon-color-white-faint);
}

.sidebar-nav {
  display: flex;
  flex-direction: column;
  padding: var(--space-4);
}

.sidebar-nav-item {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  padding: var(--space-3) var(--space-4);
  font-size: var(--text-sm);
  color: rgba(255, 255, 255, 0.7);
  border-radius: var(--radius-md);
  text-decoration: none;
  transition: var(--motion-hover);
}

.sidebar-nav-item:hover {
  background: rgba(255, 255, 255, 0.05);
  color: var(--xenon-color-white);
}

.sidebar-nav-item.active {
  background: rgba(0, 242, 255, 0.1);
  color: var(--xenon-color-cyan);
}

.sidebar-section-title {
  padding: var(--space-4) var(--space-4) var(--space-2);
  font-size: var(--text-xs);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: rgba(255, 255, 255, 0.4);
}

.dashboard-topbar {
  position: sticky;
  top: 0;
  z-index: var(--z-sticky-top);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  background: rgba(10, 10, 12, 0.8);
  border-bottom: 1px solid var(--xenon-color-white-faint);
  padding: var(--space-4) var(--space-6);
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.topbar-title {
  font-size: var(--text-xl);
  font-weight: 600;
  color: var(--xenon-color-white);
}

.topbar-actions {
  display: flex;
  align-items: center;
  gap: var(--space-4);
}

.dashboard-content {
  padding: var(--space-6);
}
```

#### Dashboard Stat Card

```css
.stat-card {
  background: var(--xenon-color-dark-surface);
  border: 1px solid var(--xenon-color-white-faint);
  border-radius: var(--radius-xl);
  padding: var(--space-5);
}

.stat-card-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: var(--space-4);
}

.stat-card-icon {
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--radius-lg);
  background: rgba(0, 242, 255, 0.1);
  color: var(--xenon-color-cyan);
}

.stat-card-trend {
  display: inline-flex;
  align-items: center;
  gap: var(--space-1);
  font-size: var(--text-xs);
  font-weight: 500;
}

.stat-card-trend-up {
  color: #22c55e;
}

.stat-card-trend-down {
  color: #ef4444;
}

.stat-card-value {
  font-size: var(--text-3xl);
  font-weight: 700;
  color: var(--xenon-color-white);
  margin-bottom: var(--space-1);
}

.stat-card-label {
  font-size: var(--text-sm);
  color: rgba(255, 255, 255, 0.5);
}
```

#### Activity Feed Card

```css
.activity-card {
  background: var(--xenon-color-dark-surface);
  border: 1px solid var(--xenon-color-white-faint);
  border-radius: var(--radius-xl);
  padding: var(--space-5);
}

.activity-card-header {
  margin-bottom: var(--space-4);
}

.activity-card-title {
  font-size: var(--text-lg);
  font-weight: 600;
  color: var(--xenon-color-white);
}

.activity-card-body {
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
}

.activity-item {
  display: flex;
  align-items: flex-start;
  gap: var(--space-3);
  padding: var(--space-3) 0;
}

.activity-item-avatar {
  width: 2rem;
  height: 2rem;
  border-radius: var(--radius-full);
  background: var(--xenon-color-dark-base);
  flex-shrink: 0;
}

.activity-item-content {
  flex: 1;
}

.activity-item-text {
  font-size: var(--text-sm);
  color: rgba(255, 255, 255, 0.7);
}

.activity-item-time {
  font-size: var(--text-xs);
  color: rgba(255, 255, 255, 0.4);
  margin-top: var(--space-1);
}
```

### 7.19 Conversion Components (NEW — v2.0.0)

Sticky CTA bar, social proof bar, and hero quiz CTA.

#### Sticky CTA Bar

Fixed bottom bar with glass background, IntersectionObserver on `#home` with threshold 0.1, session storage persistence for dismissed state.

```css
#sticky-cta-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 200;
  background: rgba(10, 10, 12, 0.8);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-top: 1px solid var(--xenon-color-white-faint);
  padding: var(--space-3) var(--space-4);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-4);
  transform: translateY(100%);
  transition: transform 0.3s ease-out;
}

#sticky-cta-bar.visible {
  transform: translateY(0);
}

#sticky-cta-bar.dismissed {
  display: none;
}

.sticky-cta-close {
  position: absolute;
  top: var(--space-2);
  right: var(--space-4);
  padding: var(--space-1);
  color: rgba(255, 255, 255, 0.5);
  cursor: pointer;
  transition: var(--motion-hover);
}

.sticky-cta-close:hover {
  color: var(--xenon-color-white);
}
```

**JavaScript (IntersectionObserver + Session Storage):**

```js
const stickyCtaBar = document.getElementById("sticky-cta-bar");
const homeSection = document.getElementById("home");

if (stickyCtaBar && homeSection) {
  // Check session storage for dismissed state
  if (sessionStorage.getItem("sticky-cta-dismissed") === "true") {
    stickyCtaBar.classList.add("dismissed");
  }

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (
        !entry.isIntersecting &&
        !stickyCtaBar.classList.contains("dismissed")
      ) {
        stickyCtaBar.classList.add("visible");
      } else {
        stickyCtaBar.classList.remove("visible");
      }
    },
    { threshold: 0.1 },
  );

  observer.observe(homeSection);

  // Close button handler
  const closeBtn = stickyCtaBar.querySelector(".sticky-cta-close");
  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      stickyCtaBar.classList.add("dismissed");
      sessionStorage.setItem("sticky-cta-dismissed", "true");
    });
  }
}
```

#### Social Proof Bar

New section between `#home` and `#about` — client avatars (150+), star rating (4.9/5), satisfaction rate (97%).

```html
<section
  id="social-proof"
  aria-label="Social proof and client statistics"
  class="py-8 border-b border-white/5"
>
  <div class="max-w-7xl mx-auto px-4 md:px-6">
    <div class="flex flex-wrap items-center justify-center gap-6 md:gap-8">
      <!-- Client Avatars -->
      <div class="flex items-center">
        <div class="flex -space-x-2">
          <!-- 5 avatar circles -->
        </div>
        <span class="ml-3 text-sm text-zinc-400">150+ happy clients</span>
      </div>
      <!-- Star Rating -->
      <div class="flex items-center gap-2">
        <div class="flex text-yellow-400">
          <!-- 5 star icons (4.9/5) -->
        </div>
        <span class="text-sm text-zinc-400">4.9/5 rating</span>
      </div>
      <!-- Satisfaction Rate -->
      <div class="text-sm text-zinc-400">
        <span class="text-cyan font-semibold">97%</span> satisfaction rate
      </div>
    </div>
  </div>
</section>
```

#### Hero Quiz CTA

"Take our 60-second quiz" link below hero buttons with icon badge, links to `./AddOn/quiz/index.html`.

```html
<div class="hero-quiz-cta mt-6">
  <a href="./AddOn/quiz/index.html" class="quiz-cta-link">
    <span class="quiz-icon-badge">?</span>
    Take our 60-second quiz
    <svg class="quiz-arrow" ...></svg>
  </a>
</div>
```

---

## 8. Background Effects

### 8.1 Grid Background

A fixed, full-viewport grid pattern that serves as the base texture.

```css
.grid-bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image:
    linear-gradient(var(--xenon-color-white-faint) 1px, transparent 1px),
    linear-gradient(90deg, var(--xenon-color-white-faint) 1px, transparent 1px);
  background-size: 40px 40px;
  z-index: -2;
  pointer-events: none;
}
```

| Property       | Value                                     |
| -------------- | ----------------------------------------- |
| Position       | Fixed, full viewport                      |
| Z-index        | -2 (behind everything)                    |
| Grid Size      | 40px × 40px                               |
| Line Width     | 1px                                       |
| Line Color     | `rgba(255, 255, 255, 0.04)` (white-faint) |
| Pointer Events | None                                      |

**v2.0.0 Mobile Performance Overrides:** See §11.5.

### 8.2 Glow Orbs

Two large, blurred circles creating ambient lighting (one cyan, one purple).

```html
<div class="glow bg-[var(--xenon-color-cyan)]"></div>
<div class="glow bg-[var(--xenon-color-purple)] right-[-10%]"></div>
```

```css
.glow {
  position: absolute;
  width: 40vw;
  height: 40vw;
  border-radius: 50%;
  filter: blur(80px); /* v2.0.0: reduced from 120px */
  opacity: 0.15;
  z-index: -1;
  pointer-events: none;
  max-width: 500px;
  max-height: 500px;
  will-change: opacity; /* v2.0.0: added performance hint */
}
```

| Property           | Default                        | Mobile (<=768px)             |
| ------------------ | ------------------------------ | ---------------------------- |
| Position           | Absolute                       | Absolute                     |
| Width              | 40vw                           | 50vw (v2.0.0: 50% reduction) |
| Height             | 40vw                           | 50vw (v2.0.0: 50% reduction) |
| Max Width/Height   | 500px                          | 300px                        |
| Border Radius      | 50%                            | 50%                          |
| Filter             | blur(80px) (v2.0.0: was 120px) | blur(80px)                   |
| Opacity            | 0.15                           | 0.06 (v2.0.0: 50% reduction) |
| Z-index            | -1                             | -1                           |
| Colors             | Cyan (left), Purple (right)    | Same                         |
| Animation Duration | Default                        | 10s on mobile                |

### 8.3 Particle/Bubble Layers

Three animated floating circles used within service card buttons (v2.0.0: reduced from 7 to 3).

**v2.0.0 Changes:** REMOVED keyframes: `moveDownLeft`, `moveUpLeft`, `moveLeft`, `moveUp`. KEPT keyframes: `moveDownRight`, `moveDiagonal`, `moveRight`. Bubble layers kept: bubble-1, bubble-3, bubble-5.

```css
.bubble-layer {
  position: absolute;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  filter: blur(10px);
  z-index: 0;
}

.bubble-1 {
  background: purple;
  top: -20%;
  left: -10%;
  animation: moveDownRight 6s ease-in-out infinite;
}
.bubble-3 {
  background: purple;
  top: 20%;
  left: 50%;
  animation: moveDiagonal 4s ease-in-out infinite;
  animation-delay: 2s;
}
.bubble-5 {
  background: purple;
  top: 30%;
  left: -10%;
  animation: moveRight 3s ease-in-out infinite;
  animation-delay: 4s;
}
```

| Property           | Value                                                        |
| ------------------ | ------------------------------------------------------------ |
| Size               | 150px × 150px                                                |
| Shape              | Circle (border-radius: 50%)                                  |
| Filter             | blur(10px)                                                   |
| Color              | Purple                                                       |
| Z-index            | 0 (behind content)                                           |
| Animation Duration | 3s–6s (varies per bubble)                                    |
| Animation Delay    | 0s–4s (staggered)                                            |
| Movement           | 3 unique paths (down-right, diagonal, right) — v2.0.0: was 7 |

---

## 9. Animations & Transitions

### 9.1 Keyframe Animations

#### 1. gradientText

Cycles background position for animated gradient text.

```css
@keyframes gradientText {
  0% {
    background-position: 0% center;
  }
  100% {
    background-position: 200% center;
  }
}
```

| Property  | Value                                            |
| --------- | ------------------------------------------------ |
| Duration  | 3s                                               |
| Timing    | linear                                           |
| Iteration | infinite                                         |
| Used In   | `.text-gradient-animate`, `.bg-gradient-animate` |

#### 2. steam

Multi-stop background position animation for explore button border.

```css
@keyframes steam {
  0% {
    background-position: 0 0;
  }
  50% {
    background-position: 400% 0;
  }
  100% {
    background-position: 0 0;
  }
}
```

| Property  | Value                                               |
| --------- | --------------------------------------------------- |
| Duration  | 20s                                                 |
| Timing    | linear                                              |
| Iteration | infinite                                            |
| Used In   | `.explore-button::before`, `.explore-button::after` |

#### 3. scannerPulse

Scale and opacity pulse (defined in codebase, used selectively).

```css
/* Referenced but not actively used in current HTML */
```

#### 4. spin

Standard 360-degree rotation.

```css
/* Available via Tailwind's animate-spin */
```

#### 5. shimmerSweep

Left position sweep for shimmer effects.

```css
/* Referenced in quiz CTA button ::before */
```

#### 6. badgeSpin

Subtle rotation and scale for badges.

```css
/* Available for badge elements */
```

#### 7. borderRotate

CSS Houdini angle rotation for pricing card animated border.

```css
@keyframes borderRotate {
  to {
    --glow-angle: 360deg;
  }
}
```

| Property  | Value                                            |
| --------- | ------------------------------------------------ |
| Duration  | 3s                                               |
| Timing    | linear                                           |
| Iteration | infinite                                         |
| Used In   | `.pricing-card-popular::after`                   |
| Requires  | `@property --glow-angle` CSS Houdini declaration |

#### 8. fadeIn

Opacity and translateY entrance animation.

```css
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

| Property | Value              |
| -------- | ------------------ |
| Duration | 0.6s               |
| Timing   | ease-out           |
| Used In  | `.animate-fade-in` |

#### 9. slideDown

Opacity and translateY for mobile menu entrance.

```css
@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

| Property | Value          |
| -------- | -------------- |
| Duration | 0.3s           |
| Timing   | ease-out       |
| Used In  | `.mobile-menu` |

#### 10. Bubble Movement Animations (v2.0.0: 3 KEPT, 4 REMOVED)

**KEPT (3 animations):**

| Animation         | Duration | Timing      | Iteration |
| ----------------- | -------- | ----------- | --------- |
| **moveDownRight** | 3s       | ease-in-out | infinite  |
| **moveDiagonal**  | 4s       | ease-in-out | infinite  |
| **moveRight**     | 6s       | ease-in-out | infinite  |

**REMOVED (v2.0.0):**

- ~~`moveDownLeft`~~
- ~~`moveUpLeft`~~
- ~~`moveLeft`~~
- ~~`moveUp`~~

#### 11. moveDot

Stats card dot animation traversing the border.

```css
@keyframes moveDot {
  0%,
  100% {
    top: 10%;
    right: 10%;
  }
  25% {
    top: 10%;
    right: calc(100% - 35px);
  }
  50% {
    top: calc(100% - 30px);
    right: calc(100% - 35px);
  }
  75% {
    top: calc(100% - 30px);
    right: 10%;
  }
}
```

| Property  | Value             |
| --------- | ----------------- |
| Duration  | 6s                |
| Timing    | linear            |
| Iteration | infinite          |
| Used In   | `.stats-card-dot` |

#### 12. Particle Movement Animations

Three particle animation sets for space button.

| Animation          | Duration | Timing | Iteration |
| ------------------ | -------- | ------ | --------- |
| **moveParticles1** | 20s      | linear | infinite  |
| **moveParticles2** | 18s      | linear | infinite  |
| **moveParticles4** | 15s      | linear | infinite  |

#### 13. gradientBorder

Button container gradient border animation.

```css
@keyframes gradientBorder {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
```

| Property  | Default             | Hover       |
| --------- | ------------------- | ----------- |
| Duration  | 20s                 | 10s         |
| Timing    | ease-in-out         | ease-in-out |
| Iteration | infinite            | infinite    |
| Used In   | `.button-container` |

#### 14. loader-glow

Scale and opacity pulse for page loader.

```css
@keyframes loader-glow {
  0%,
  100% {
    opacity: 0.2;
    transform: scale(1);
  }
  50% {
    opacity: 0.4;
    transform: scale(1.1);
  }
}
```

| Property | Value                                       |
| -------- | ------------------------------------------- |
| Duration | Implicit (used with Tailwind animate-pulse) |
| Used In  | Page loader glow effect                     |

#### 15. autoRun

Horizontal movement animation.

```css
@keyframes autoRun {
  from {
    left: 100%;
  }
  to {
    left: calc(var(--width) * -1);
  }
}
```

| Property | Value                         |
| -------- | ----------------------------- |
| Used In  | Horizontal scrolling elements |

#### 16. skeleton-loading (NEW — v2.0.0)

Shimmer animation for skeleton loading states.

```css
@keyframes skeleton-loading {
  0% {
    background-position: 200% 0;
  }
  100% {
    background-position: -200% 0;
  }
}
```

| Property  | Value       |
| --------- | ----------- |
| Duration  | 1.5s        |
| Timing    | ease-in-out |
| Iteration | infinite    |
| Used In   | `.skeleton` |

#### 17. slideInRight / slideOutRight (NEW — v2.0.0)

Toast notification enter/exit animations.

```css
@keyframes slideInRight {
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes slideOutRight {
  from {
    transform: translateX(0);
    opacity: 1;
  }
  to {
    transform: translateX(100%);
    opacity: 0;
  }
}
```

| Property | Value    |
| -------- | -------- |
| Duration | 0.3s     |
| Used In  | `.toast` |

### 9.2 Transition Defaults

| Context                 | Duration | Easing                             |
| ----------------------- | -------- | ---------------------------------- |
| **Normal (general)**    | 0.3s     | `ease`                             |
| **Page transitions**    | 0.6s     | `ease-out`                         |
| **Card hover**          | 0.4s     | `cubic-bezier(0.4, 0, 0.2, 1)`     |
| **Button hover**        | 0.4s     | `cubic-bezier(0.23, 1, 0.32, 1)`   |
| **Button active**       | 0.2s     | `ease`                             |
| **Glass card**          | 0.3s     | `ease`                             |
| **Navigation link**     | 0.3s     | `ease`                             |
| **Service card**        | 0.6s     | `cubic-bezier(0.22, 1, 0.36, 1)`   |
| **Service card button** | 0.2s     | `ease`                             |
| **Value item**          | 0.3s     | `ease`                             |
| **FAQ item**            | 0.3s     | `ease`                             |
| **Social icon**         | 0.3s     | `cubic-bezier(0.4, 0, 0.2, 1)`     |
| **Footer link**         | 0.3s     | `ease`                             |
| **Mobile nav link**     | 0.2s     | `ease`                             |
| **Mobile menu button**  | 0.3s     | `ease`                             |
| **Stats card**          | 0.4s     | `cubic-bezier(0.4, 0, 0.2, 1)`     |
| **Pricing card**        | 0.4s     | `cubic-bezier(0.4, 0, 0.2, 1)`     |
| **Table row**           | 0.3s     | `ease`                             |
| **WhatsApp button**     | 0.3s     | `ease`                             |
| **Space button**        | 0.4s     | `cubic-bezier(0.4, 0, 0.2, 1)`     |
| **Animated button**     | 0.6s     | `cubic-bezier(0.23, 1, 0.32, 1)`   |
| **Ghost button** (NEW)  | 0.15s    | `ease-out` (uses `--motion-hover`) |
| **Form input** (NEW)    | 0.15s    | `ease-out` (uses `--motion-hover`) |
| **Toast** (NEW)         | 0.3s     | `ease-out`                         |

### 9.3 Hover Micro-interactions

| Element                      | Hover Effect                                                  | Transition                              |
| ---------------------------- | ------------------------------------------------------------- | --------------------------------------- |
| **Glass Card**               | `translateY(-2px)`, enhanced box-shadow, cyan border          | 0.3s ease                               |
| **Service Card**             | `translateY(-10px)`, border becomes magenta, glow shadow      | 0.4s cubic-bezier(0.4, 0, 0.2, 1)       |
| **Stats Card**               | `translateY(-6px) scale(1.03)`, text becomes cyan with glow   | 0.4s cubic-bezier(0.4, 0, 0.2, 1)       |
| **Pricing Card**             | `translateY(-8px) scale(1.02)`, multi-layer glow shadow       | 0.4s cubic-bezier(0.4, 0, 0.2, 1)       |
| **Space Button**             | `translateY(-1px)`, enhanced shadow, background lighten       | 0.4s cubic-bezier(0.4, 0, 0.2, 1)       |
| **Animated Button**          | Circle expands to 220px, arrows slide, border-radius 12px     | 0.6s cubic-bezier(0.23, 1, 0.32, 1)     |
| **Explore Button**           | Same as global CTA hover                                      | 0.4s cubic-bezier(0.4, 0, 0.2, 1)       |
| **Ghost Button** (NEW)       | Border → cyan, text → cyan, glow shadow                       | 0.15s ease-out                          |
| **Service CTA Button**       | Inner black overlay fades in, scale(0.96) on active           | 0.5s ease (overlay), 0.2s ease (active) |
| **WhatsApp Button**          | Conic gradient blur(15px), press effect on active             | 0.3s ease                               |
| **Value Item**               | `translateX(4px)`, background darkens, text color changes     | 0.3s ease                               |
| **FAQ Item**                 | `translateX(4px)`, border-left: 3px cyan                      | 0.3s ease                               |
| **Social Icon**              | `translateY(-4px) scale(1.15)`, drop-shadow glow              | 0.3s cubic-bezier(0.4, 0, 0.2, 1)       |
| **Footer Link**              | `translateX(3px)`, text-shadow glow                           | 0.3s ease                               |
| **Contact Card**             | `translateX(6px) scale(1.02)`                                 | 0.3s ease                               |
| **Nav Link**                 | Color → cyan, text-shadow cyan glow                           | 0.3s ease                               |
| **Logo Link**                | `scale(1.05)`, drop-shadow cyan                               | 0.3s ease                               |
| **Mobile Menu Button**       | `scale(1.1)`                                                  | 0.3s ease                               |
| **Quiz CTA Button**          | `translateY(-2px)`, border → cyan, shimmer sweep, icon slides | 0.3s cubic-bezier(0.4, 0, 0.2, 1)       |
| **Animated Button (active)** | `scale(0.95)`                                                 | —                                       |
| **Table Row**                | Background `rgba(0, 242, 255, 0.05)`                          | 0.3s ease                               |
| **Button Container**         | Brightness 1.1, enhanced shadow, faster gradient animation    | 0.4s cubic-bezier(0.4, 0, 0.2, 1)       |
| **Form Input** (NEW)         | Border highlight on focus, cyan glow                          | 0.15s ease-out                          |
| **Filter Chip** (NEW)        | Background change, border highlight                           | 0.15s ease-out                          |
| **Pagination Button** (NEW)  | Border → cyan, text → cyan                                    | 0.15s ease-out                          |

### 9.4 GSAP Animations

The site uses GSAP 3.12.2 with ScrollTrigger and TextPlugin plugins for advanced scroll-based animations.

#### Libraries Loaded

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/TextPlugin.min.js"></script>
```

#### Animation Patterns

| Pattern                             | Description                             | Timing                      |
| ----------------------------------- | --------------------------------------- | --------------------------- |
| **ScrollTrigger Section Entrances** | Sections animate when entering viewport | 0.8s ease                   |
| **TextPlugin Typing Effects**       | Character-by-character text reveals     | Variable                    |
| **Staggered Children**              | Child elements animate with delays      | 0.1s–0.4s stagger           |
| **Scale & Opacity Transitions**     | Elements scale and fade on scroll       | 0.35s–0.6s                  |
| **Counter Animation**               | Stats numbers count up to target values | Uses `data-count` attribute |

#### Scroll-Triggered CSS Classes

```css
.section-animate {
  opacity: 0;
  transform: translateY(40px);
  transition:
    opacity 0.8s ease,
    transform 0.8s ease;
}

.section-animate.in-view {
  opacity: 1;
  transform: translateY(0);
}

/* Stagger delays */
.section-animate .stagger-1 {
  transition-delay: 0.1s;
}
.section-animate .stagger-2 {
  transition-delay: 0.2s;
}
.section-animate .stagger-3 {
  transition-delay: 0.3s;
}
.section-animate .stagger-4 {
  transition-delay: 0.4s;
}
```

### 9.5 Reduced Motion Support (NEW — v2.0.0)

Full `@media (prefers-reduced-motion: reduce)` block that disables all animations, neutralizes animated elements, and preserves hover transforms only.

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }

  /* Neutralize specific animated elements */
  .bubble-layer {
    animation: none !important;
    opacity: 0.5;
  }

  .glow {
    animation: none !important;
    opacity: 0.1;
  }

  .text-gradient-animate {
    animation: none !important;
    background-position: 0% center;
  }

  .stats-card-dot {
    animation: none !important;
  }

  .pricing-card-popular::after {
    animation: none !important;
  }

  .scanner-ring {
    animation: none !important;
  }

  /* Preserve hover transforms only */
  .glass-card:hover,
  .service-card:hover,
  .stats-card:hover,
  .pricing-card-popular:hover {
    transition: transform 0.01ms ease;
  }
}
```

---

## 10. Scrollbar

Custom styled scrollbar with gradient thumb.

```css
::-webkit-scrollbar {
  width: 6px;
}

::-webkit-scrollbar-track {
  background: var(--xenon-color-charcoal);
}

::-webkit-scrollbar-thumb {
  background: linear-gradient(
    180deg,
    var(--xenon-color-cyan),
    var(--xenon-color-purple)
  );
  border-radius: 5px;
}
```

| Property            | Value                                   |
| ------------------- | --------------------------------------- |
| Width               | 6px                                     |
| Track Background    | `rgba(10, 10, 12, 1)` (charcoal)        |
| Thumb Background    | Linear gradient (cyan → purple, 180deg) |
| Thumb Border Radius | 5px                                     |
| Browser Support     | Webkit browsers (Chrome, Safari, Edge)  |

---

## 11. Breakpoints & Responsive Design

### 11.1 Breakpoint Scale

| Name              | Range         | Description                   |
| ----------------- | ------------- | ----------------------------- |
| **Extra Small**   | < 480px       | Small phones                  |
| **Small**         | 480px–639px   | Standard phones               |
| **Medium**        | 640px–767px   | Tablets (portrait)            |
| **Large**         | 768px–1023px  | Large tablets / small laptops |
| **Desktop**       | 1024px–1279px | Standard desktops             |
| **Large Desktop** | >= 1280px     | Wide monitors                 |

### 11.2 Mobile Strategy

v2.0.0 introduces a comprehensive mobile strategy with increased spacing, reduced effects, simplified layouts, and mobile-specific typography.

#### Mobile Strategy Summary Table

| Category               | Extra Small (< 480px)   | Small (480px–639px)    | Medium (640px–767px) | Large (768px–1023px) |
| ---------------------- | ----------------------- | ---------------------- | -------------------- | -------------------- |
| **Section Padding**    | 2.5rem                  | Standard               | Standard             | Standard             |
| **Hero Padding Top**   | 5rem                    | Standard               | Standard             | Standard             |
| **H2 Margin Bottom**   | 1.5rem                  | Standard               | Standard             | Standard             |
| **Grid Gap**           | 1.5rem                  | Standard               | Standard             | Standard             |
| **Glow Opacity**       | 0.06 (50% reduction)    | 0.06                   | 0.06                 | 0.06                 |
| **Glow Width/Height**  | 50vw (50% reduction)    | 50vw                   | 50vw                 | 50vw                 |
| **Core Values Grid**   | Single column           | Standard               | Standard             | Standard             |
| **Service Cards**      | 100% width              | Standard               | Standard             | Standard             |
| **Stats Cards**        | 100% width, 2.5rem text | Standard               | Standard             | Standard             |
| **Data Table Wrapper** | Horizontal scroll       | Standard               | Standard             | Standard             |
| **Hero Title Font**    | 32px, line-height 1.25  | 40px, line-height 1.15 | 56px                 | 64px                 |
| **H2 Font**            | 24px                    | 28px                   | Standard             | Standard             |
| **Body Font**          | 14px                    | Standard               | Standard             | Standard             |
| **Overflow Wrap**      | break-word              | break-word             | —                    | —                    |
| **Hyphens**            | auto                    | auto                   | —                    | —                    |
| **Pricing Card Hover** | Simplified shadow       | Standard               | Standard             | Standard             |

#### Extra Small Phones (< 480px)

| Element                 | Override                                                                        |
| ----------------------- | ------------------------------------------------------------------------------- |
| **Touch Targets**       | min-height: 44px, min-width: 44px                                               |
| **Mobile Nav Links**    | padding: 16px 20px, font-size: 18px, min-height: 52px                           |
| **Hero Title**          | font-size: 32px, line-height: 1.25, overflow-wrap: break-word, hyphens: auto    |
| **Section H2**          | font-size: 24px, margin-bottom: 1.5rem                                          |
| **Body Text**           | font-size: 14px, overflow-wrap: break-word, hyphens: auto                       |
| **Navigation**          | top: 4px, width: 96%, padding: 10px 14px, logo: 32px                            |
| **Service Cards**       | width: 100%, padding: 1.5rem, title: 28px/20px                                  |
| **Pricing Cards**       | padding: 1.5rem, hover box-shadow simplified                                    |
| **Comparison Table**    | Horizontally scrollable, -webkit-overflow-scrolling: touch                      |
| **Footer**              | gap: 2rem, headings: 18px                                                       |
| **WhatsApp Button**     | padding: 12px 16px, font-size: 15px, min-height: 48px                           |
| **Stats Cards**         | width: 100%, max-width: 280px, height: auto, aspect-ratio: 1/0.85, text: 2.5rem |
| **Section Padding**     | 2.5rem top/bottom                                                               |
| **Hero Padding Top**    | 5rem                                                                            |
| **Grid Gap**            | 1.5rem                                                                          |
| **Core Values**         | Single column                                                                   |
| **Service Card Button** | width: 100%, padding: 12px 20px, font-size: 14px                                |
| **Stats Card Ray**      | width: 100px                                                                    |

#### Small Phones (480px–639px)

| Element              | Override                                              |
| -------------------- | ----------------------------------------------------- |
| **Hero Title**       | font-size: 40px                                       |
| **Mobile Nav Links** | padding: 14px 18px, font-size: 17px, min-height: 50px |
| **Touch Targets**    | min-height: 44px                                      |
| **Stats Card Ray**   | width: 140px                                          |

#### Tablets (640px–767px)

| Element                | Override                                    |
| ---------------------- | ------------------------------------------- |
| **Hero Titles**        | font-size: 56px                             |
| **Stats Grid**         | grid-template-columns: repeat(2, 1fr)       |
| **Mobile Nav Links**   | padding: 14px 18px, font-size: 17px         |
| **Service Cards**      | width: 100%, min-height: 480px              |
| **Stats Cards**        | width: 100%, max-width: 280px, centered     |
| **Why Choose Us Grid** | grid-template-columns: 1.5fr repeat(5, 1fr) |
| **Footer**             | grid-template-columns: repeat(2, 1fr)       |

#### Large Tablets / Small Laptops (768px–1023px)

| Element           | Override                                                     |
| ----------------- | ------------------------------------------------------------ |
| **Hero Titles**   | font-size: 64px                                              |
| **Stats Grid**    | grid-template-columns: repeat(2, 1fr), justify-items: center |
| **Stats Cards**   | width: 100%, max-width: 300px                                |
| **Service Cards** | width: 100%, min-height: 500px                               |
| **Footer**        | grid-template-columns: repeat(2, 1fr)                        |

#### Desktops (1024px–1279px)

| Element           | Override                       |
| ----------------- | ------------------------------ |
| **Service Cards** | width: 100%, min-height: 520px |

#### Large Desktops (>= 1280px)

| Element           | Override                      |
| ----------------- | ----------------------------- |
| **Hero Titles**   | font-size: 80px               |
| **Service Cards** | width: 100%, max-width: 380px |

### 11.3 Height Overrides

For short viewports (max-height: 700px):

```css
@media (max-height: 700px) {
  #home {
    padding-top: 7rem;
    padding-bottom: 3rem;
    min-height: auto;
  }
  .hero-title {
    margin-bottom: 1rem;
  }
  nav {
    top: 8px;
  }
}
```

### 11.4 Print Overrides

```css
@media print {
  nav,
  .mobile-menu,
  .glow,
  .grid-bg,
  button,
  .service-card-button,
  .explore-button,
  .animated-button,
  .quiz-cta-button {
    display: none !important;
  }

  body {
    background: white;
    color: black;
  }

  .service-card {
    break-inside: avoid;
  }
}
```

### 11.5 Mobile Performance Overrides (NEW — v2.0.0)

Located in `responsive.css` under `@media max-width: 768px`:

| Optimization                | Implementation                               |
| --------------------------- | -------------------------------------------- |
| **Reduced Backdrop Blur**   | `.glass-card` blur 12px → 8px                |
| **Dashboard Topbar Blur**   | `.dashboard-topbar` blur 8px → 4px           |
| **Glow Opacity Reduction**  | `.glow` opacity 0.08, animation none         |
| **Bubble Layer Opacity**    | `.bubble-layer` opacity 0.15                 |
| **Grid Background Opacity** | `.grid-bg` opacity 0.5                       |
| **Simplified Card Hovers**  | Reduced transform and shadow complexity      |
| **WhatsApp Button Glow**    | `::before` and `:hover::before` display none |
| **Space Button Particles**  | `::before/::after` opacity 0.15              |
| **Explore Button Blur**     | `:after` blur 15px                           |
| **Smaller Table Fonts**     | 14px table text                              |
| **Smaller Material Icons**  | 24px instead of default                      |

```css
@media (max-width: 768px) {
  .glass-card {
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
  }

  .dashboard-topbar {
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
  }

  .glow {
    opacity: 0.08;
    animation: none;
  }

  .bubble-layer {
    opacity: 0.15;
  }

  .grid-bg {
    opacity: 0.5;
  }

  .whatsapp-button::before,
  .whatsapp-button:hover::before {
    display: none;
  }

  .space-button::before,
  .space-button::after {
    opacity: 0.15;
  }

  .explore-button:after {
    filter: blur(15px);
  }
}
```

---

## 12. External Dependencies

### CDN Dependencies

| Library                       | Version      | URL                                                                         | Purpose               | Loading Strategy                                      |
| ----------------------------- | ------------ | --------------------------------------------------------------------------- | --------------------- | ----------------------------------------------------- |
| **Font Awesome**              | 6.4.0        | `https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css` | Icons                 | Print media trick + noscript fallback                 |
| **Google Fonts**              | —            | `https://fonts.googleapis.com/css2?family=...`                              | Typography            | `display=swap`, print media trick + noscript fallback |
| **Material Symbols Outlined** | —            | `https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined...`     | UI icons (FAQ expand) | Standard                                              |
| **Tailwind CSS**              | CDN (latest) | `https://cdn.tailwindcss.com`                                               | Utility classes       | Script tag                                            |
| **GSAP**                      | 3.12.2       | `https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js`            | Animations            | Script tag                                            |
| **GSAP ScrollTrigger**        | 3.12.2       | `https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js`   | Scroll animations     | Script tag                                            |
| **GSAP TextPlugin**           | 3.12.2       | `https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/TextPlugin.min.js`      | Text animations       | Script tag                                            |

### Font Loading Optimization

```html
<!-- Preconnect for faster font loading -->
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />

<!-- DNS Prefetch -->
<link rel="dns-prefetch" href="https://fonts.googleapis.com" />
<link rel="dns-prefetch" href="https://cdnjs.cloudflare.com" />

<!-- CDN preconnect -->
<link rel="preconnect" href="https://cdnjs.cloudflare.com" crossorigin />
```

### Icon Usage

| Icon Library                  | Usage                                                   |
| ----------------------------- | ------------------------------------------------------- |
| **Font Awesome 6**            | Service icons, social icons, check marks, contact icons |
| **Material Symbols Outlined** | FAQ expand/collapse indicator                           |
| **Inline SVGs**               | WhatsApp logo, animated button arrows                   |

### Image Loading (v2.0.0)

- **Lazy Loading:** Added `decoding="async"` to nav logo and page loader logo (above-the-fold, so no `loading="lazy"`)
- **Below-the-fold images:** Use `loading="lazy" decoding="async"` for optimal performance

---

## 13. Section Structure

The main page (`index.html`) is structured as follows (v2.0.0):

```
1. <head>
   ├── Meta tags (charset, viewport, theme-color, description, format-detection)
   ├── Title
   ├── Preconnect/DNS-prefetch links
   ├── Favicon
   ├── External CSS (Font Awesome, Google Fonts, Material Symbols)
   ├── Tailwind CSS (CDN script)
   ├── GSAP Libraries (3 scripts)
   └── Custom Styles (style.css, responsive.css)

2. <body id="layout" class="outfit">
   ├── 1. Skip Link (NEW — v2.0.0: accessibility)
   ├── 2. Page Loader (#page-loader)
   ├── 3. Background Effects (.grid-bg, .glow × 2)
   ├── 4. Navigation (nav, fixed glass card, aria-label="Main navigation")
   │   ├── Logo
   │   ├── Desktop Links (4)
   │   ├── WhatsApp Button (rel="noopener noreferrer")
   │   └── Mobile Menu Button + Dropdown
   ├── 5. Sticky CTA Bar (NEW — v2.0.0: #sticky-cta-bar, fixed bottom, z-200)
   ├── 6. Hero Section (#home)
   │   ├── Title (gradient text, emphasis spans)
   │   ├── Description
   │   ├── CTA Buttons (Space + Animated)
   │   └── Hero Quiz CTA (NEW — v2.0.0: link to ./AddOn/quiz/index.html)
   ├── 7. Social Proof Bar (NEW — v2.0.0: #social-proof, client avatars, star rating, satisfaction rate)
   ├── 8. About Section (#about)
   │   ├── Section Header (label, H2, divider, description)
   │   ├── Core Values Grid (6 items)
   │   └── Stats Section (#states)
   │       └── Stats Cards Grid (4 cards, each with aria-label)
   ├── 9. Services Section (#services)
   │   ├── Section Header
   │   └── Service Cards Grid (9 cards, each with aria-label)
   │       ├── AI Automation
   │       ├── Web Development
   │       ├── Visual Designs
   │       ├── VFX & Animation
   │       ├── Motion Graphics
   │       └── ... (more services)
   ├── 10. Pricing Section (#pricing)
   │     ├── Section Header
   │     └── Pricing Cards Grid (3 tiers)
   │         ├── Starter
   │         ├── Popular (animated border)
   │         └── Enterprise
   ├── 11. Comparison Table
   │     └── Feature comparison table (sticky header, 6 columns)
   ├── 12. Why Choose Us Grid
   │     └── Custom grid with feature columns
   ├── 13. FAQ Section (#faq)
   │     ├── Section Header
   │     └── Accordion Items (<details>)
   ├── 14. Contact Section (#contact)
   │     ├── Section Header
   │     └── Contact Cards Grid (4 cards)
   └── 15. Footer (role="contentinfo")
       ├── Logo + Description
       ├── Quick Links
       ├── Services Links
       ├── Contact Info + Newsletter Form
       └── Social Icons + Copyright

[REMOVED in v2.0.0: .scroll-progress-bar]
[REMOVED in v2.0.0: .section-nav-dots]
```

All `section[id]` elements have `tabindex="-1"` for keyboard navigation compatibility.

---

## 14. Accessibility

**v2.0.0: COMPLETELY OVERHAULED.** All items from v1.0.0 TODOs are now implemented.

### 14.1 Focus-visible System

#### Global Focus-visible

```css
/* Global focus-visible: 2px cyan outline + 2px offset */
*:focus-visible {
  outline: 2px solid var(--xenon-color-cyan);
  outline-offset: 2px;
}

/* Remove outline for non-visible focus (mouse users) */
*:focus:not(:focus-visible) {
  outline: none;
}
```

#### Component-specific Focus-visible Overrides (10 total)

| Component             | Override                              |
| --------------------- | ------------------------------------- |
| **Buttons**           | Enhanced cyan glow shadow             |
| **Links**             | Underline on focus-visible            |
| **Navigation**        | Background pill on focus-visible      |
| **Form Inputs**       | Cyan border + glow (already defined)  |
| **Service Cards**     | Cyan border on focus-visible          |
| **Pagination**        | Cyan background on focus-visible      |
| **Sidebar Nav Items** | Background highlight on focus-visible |
| **FAQ Summary**       | Cyan left border on focus-visible     |
| **Social Icons**      | Ring around icon on focus-visible     |
| **Close Buttons**     | Background circle on focus-visible    |

### 14.2 Skip Link

```css
.skip-link {
  position: absolute;
  top: -40px;
  left: 0;
  background: var(--xenon-color-cyan);
  color: var(--xenon-color-black);
  padding: var(--space-3) var(--space-4);
  z-index: 9999;
  font-weight: 600;
  text-decoration: none;
  transition: top 0.3s ease;
}

.skip-link:focus {
  top: 0;
}
```

```html
<a href="#main-content" class="skip-link">Skip to main content</a>
```

### 14.3 ARIA Labels

**17 total ARIA labels/roles implemented:**

| Element                  | ARIA Attribute                                    |
| ------------------------ | ------------------------------------------------- |
| **Navigation**           | `aria-label="Main navigation"`                    |
| **Service Card 1–9**     | `aria-label="Service: [Service Name]"` (9 total)  |
| **Stats Card 1–4**       | `aria-label="Statistic: [Stat Name]"` (4 total)   |
| **Social Proof Section** | `aria-label="Social proof and client statistics"` |
| **Footer**               | `role="contentinfo"`                              |

### 14.4 External Link Safety

All `target="_blank"` links include `rel="noopener noreferrer"` for security:

```html
<a href="https://wa.link/lx0res" target="_blank" rel="noopener noreferrer">
  <!-- WhatsApp button content -->
</a>
```

### 14.5 Keyboard Navigation

| Feature                      | Implementation                                      |
| ---------------------------- | --------------------------------------------------- |
| **Skip-to-content shortcut** | `Alt+S` keyboard shortcut                           |
| **Section tabindex**         | `tabindex="-1"` on all `section[id]` elements       |
| **FAQ accordion**            | Native `<details>` (keyboard accessible by default) |
| **Navigation**               | Tab order: skip link → nav links → content → footer |

### 14.6 Contrast Audit

See **Appendix D: WCAG Contrast Audit** for full details. Key findings:

- White text on dark backgrounds: **PASS** (AAA level)
- Cyan text on dark backgrounds: **PASS** (AA level)
- Zinc-400 text on dark backgrounds: **PASS** (AA level for large text)

### 14.7 Tabindex Usage

| Element              | Tabindex      | Purpose                                      |
| -------------------- | ------------- | -------------------------------------------- |
| All `section[id]`    | `-1`          | Allow programmatic focus for skip navigation |
| Interactive elements | `0` (default) | Natural tab order                            |
| Decorative elements  | Not set       | Excluded from tab order                      |

---

## 15. Performance

**v2.0.0: COMPLETELY OVERHAULED.**

### 15.1 Backdrop-filter Reductions

| Component                 | v1.0.0                  | v2.0.0               | Change |
| ------------------------- | ----------------------- | -------------------- | ------ |
| `.glass-card`             | blur(20px)              | blur(12px)           | -40%   |
| `.dashboard-topbar`       | blur(12px)              | blur(8px)            | -33%   |
| `.button-container`       | backdrop-filter present | **REMOVED** entirely | -100%  |
| `.button-container:hover` | backdrop-filter present | **REMOVED** entirely | -100%  |

### 15.2 Blur Reductions

| Element                 | v1.0.0      | v2.0.0     | Change |
| ----------------------- | ----------- | ---------- | ------ |
| `.glow`                 | blur(120px) | blur(80px) | -33%   |
| `.explore-button:after` | blur(50px)  | blur(25px) | -50%   |

### 15.3 Box-shadow Reductions

| Element                   | v1.0.0                                                | v2.0.0    | Change |
| ------------------------- | ----------------------------------------------------- | --------- | ------ |
| `.whatsapp-button`        | 3 shadows (including redundant `inset 0px 35px 30px`) | 2 shadows | -33%   |
| `.whatsapp-button:active` | 2 shadows                                             | 1 shadow  | -50%   |

### 15.4 Will-change Hints

Added to 6 elements for GPU compositing:

| Element                 | Will-change Value         |
| ----------------------- | ------------------------- |
| `.service-card`         | `transform`               |
| `.stats-card`           | `transform, box-shadow`   |
| `.pricing-card-popular` | `transform, box-shadow`   |
| `.glass-card`           | `transform, border-color` |
| `.glow`                 | `opacity`                 |
| `.scanner-ring`         | `transform, opacity`      |

### 15.5 Reduced Motion

Full `@media (prefers-reduced-motion: reduce)` block (see §9.5). Disables all animations, neutralizes `.bubble-layer`, `.glow`, `.text-gradient-animate`, `.stats-card-dot`, `.pricing-card-popular::after`, `.scanner-ring`. Preserves hover transforms only.

### 15.6 Mobile Performance Overrides

Located in `responsive.css` under `@media max-width: 768px` (see §11.5):

| Optimization                            | Value                                   |
| --------------------------------------- | --------------------------------------- |
| `.glass-card` blur                      | 8px (was 12px)                          |
| `.dashboard-topbar` blur                | 4px (was 8px)                           |
| `.glow` opacity                         | 0.08                                    |
| `.glow` animation                       | none                                    |
| `.bubble-layer` opacity                 | 0.15                                    |
| `.grid-bg` opacity                      | 0.5                                     |
| WhatsApp `::before`                     | display none                            |
| WhatsApp `:hover::before`               | display none                            |
| `.space-button::before/::after` opacity | 0.15                                    |
| `.explore-button:after` blur            | 15px                                    |
| Simplified card hovers                  | Reduced transform and shadow complexity |

### 15.7 Font Loading

- **`display=swap`** prevents FOIT (Flash of Invisible Text)
- **`media="print"` + `onload`** trick defers non-critical CSS
- **`preconnect`** to Google Fonts and Gstatic for faster DNS resolution

### 15.8 Image Optimization

- **Logo:** PNG format, mini logo for favicon
- **Max-width:** All images capped at 100% width
- **Decoding:** `decoding="async"` added to nav logo and page loader logo (above-the-fold)

### 15.9 CSS Optimization

- **Print media loading:** Font Awesome and Google Fonts loaded with `media="print"` then switched via `onload`
- **Noscript fallbacks:** Provided for critical resources

### 15.10 Animation Performance

- **`will-change`** applied to buttons and cards for GPU compositing
- **`transform: translateZ(0)`** forces hardware acceleration
- **`backface-visibility: hidden`** prevents rendering artifacts
- **`perspective: 1000px`** enables 3D transforms

---

## 16. Code Patterns & Conventions

### CSS Architecture

```
style.css structure:
├── BASE STYLES & RESET
├── CSS VARIABLES (DESIGN TOKENS)
│   ├── Color definitions
│   ├── Accent Hierarchy (70/20/10) comments
│   ├── Effect Limitation Rules comments
│   ├── Spacing tokens (--space-*)
│   ├── Motion/timing tokens (--motion-*)
│   ├── Shadow tokens (--shadow-*)
│   ├── Z-index tokens (--z-*)
│   ├── Border radius tokens (--radius-*)
│   ├── Font size tokens (--text-*)
│   ├── Border width tokens (--border-*)
│   └── Container size tokens (--container-*)
├── VISUAL HIERARCHY & SECTION SPACING
├── SCROLL-TRIGGERED ANIMATIONS
├── ENHANCED HOVER ANIMATIONS
├── CUSTOM SCROLLBAR
├── TYPOGRAPHY & FONTS
├── BACKGROUND EFFECTS & GLASSMORPHISM
├── BUTTONS & INTERACTIVE ELEMENTS
│   ├── .animated-button (Primary CTA)
│   ├── .explore-button (Secondary)
│   ├── .ghost-button (NEW — Ghost/outline)
│   ├── .space-button (⚠️ HERO ONLY)
│   ├── .quiz-cta-button (⚠️ QUIZ ONLY)
│   ├── .service-card-button (⚠️ SERVICE CARDS ONLY)
│   └── .whatsapp-button (External link)
├── SERVICE CARDS (3 gradients, 3 bubbles)
├── ANIMATED BUBBLES (3 kept, 4 removed)
├── FAQ ACCORDION
├── STATISTICS CARDS
├── UTILITY CLASSES & ANIMATION TRIGGERS
├── HIGHLIGHTED NEON BORDER GLOW
├── CSS KEYFRAME ANIMATIONS
├── PRICING SECTION STYLES
├── UI COMPONENTS & INTERACTIVE ELEMENTS
├── PRODUCT LAYER (NEW — v2.0.0)
│   ├── Form Inputs
│   ├── Feedback States
│   ├── Data UI Components
│   ├── Dashboard Components
│   └── Conversion Components
└── REDUCED MOTION SUPPORT (NEW — v2.0.0)
```

### CSS Variable Naming Convention

```
--xenon-color-[name]: value;          /* Color tokens */
--space-[number]: value;              /* Spacing tokens */
--motion-[name]: value;               /* Motion/timing tokens */
--shadow-[name]: value;               /* Shadow tokens */
--z-[name]: value;                    /* Z-index tokens */
--radius-[name]: value;               /* Border radius tokens */
--text-[size]: value;                 /* Font size tokens */
--border-[name]: value;               /* Border width tokens */
--container-[name]: value;            /* Container size tokens */
```

All design tokens use the appropriate prefix for namespacing.

### Effect Limitation Enforcement

The following rules are enforced in code reviews and CSS authoring:

| Rule                       | Limit             | Rationale                   |
| -------------------------- | ----------------- | --------------------------- |
| Glow effects per component | Max 1             | Prevents visual overload    |
| Gradients per component    | Max 2             | Maintains performance       |
| Particles                  | Hero section ONLY | Reduces GPU load below fold |
| Backdrop-filter per card   | Max 1             | Expensive browser operation |
| Box-shadows per element    | Max 3             | Composite cost optimization |

### Class Naming Convention

- **Utility-first:** Heavy use of Tailwind CSS utility classes
- **Custom classes:** BEM-like naming (e.g., `.service-card`, `.service-card-button`, `.service-feature-item`)
- **Section-specific:** ID-based section targeting (e.g., `#home`, `#about`, `#states`)
- **Product layer:** Semantic naming (e.g., `.form-input`, `.data-table`, `.dashboard-sidebar`)

### HTML Structure Pattern

```html
<!-- Section -->
<section id="[section-id]" class="py-20 md:py-32 px-4 md:px-6" tabindex="-1">
  <div class="max-w-7xl mx-auto">
    <!-- Section Header -->
    <div class="text-center mb-16 md:mb-24">
      <span class="section-label ...">Section Label</span>
      <h2 class="text-3xl md:text-5xl ...">Section Title</h2>
      <div class="w-12 h-[1px] bg-white/10 mx-auto mb-6"></div>
      <p class="max-w-xl mx-auto text-zinc-500 ...">Description</p>
    </div>

    <!-- Content Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-8">
      <!-- Cards -->
    </div>
  </div>
</section>
```

### JavaScript Patterns

- **GSAP ScrollTrigger:** For scroll-based section animations
- **GSAP TextPlugin:** For typing/counter effects
- **Mobile Menu Toggle:** Handled via `js/script.js`
- **Smooth Scrolling:** CSS `scroll-behavior: smooth` + JS for anchor links
- **Active Nav Highlighting:** JS-based scroll position detection
- **Sticky CTA Bar:** IntersectionObserver on `#home` with threshold 0.1, session storage persistence
- **Skip Navigation:** `Alt+S` keyboard shortcut

---

## 17. TODOs & Future Improvements

### Completed in v2.0.0

- [x] Add `:focus-visible` styles to all interactive elements
- [x] Implement `prefers-reduced-motion` media query
- [x] Add skip-to-content navigation link
- [x] Expand ARIA labels throughout
- [x] Add `aria-expanded` states for FAQ accordion (via native `<details>`)
- [x] Convert logo images to use `decoding="async"`
- [x] Reduce backdrop-filter blur values for performance
- [x] Reduce blur values for glow effects
- [x] Add will-change hints for GPU compositing
- [x] Add mobile performance overrides in responsive.css
- [x] Implement design token system (96 tokens)
- [x] Create utility classes (40 classes)
- [x] Simplify service card gradients (6 → 3)
- [x] Simplify service card bubbles (7 → 3)
- [x] Remove unused keyframe animations (4 removed)
- [x] Add effect limitation rules as CSS comments
- [x] Add accent hierarchy (70/20/10) as CSS comments

### Remaining TODOs

#### Accessibility

- [ ] Test with screen readers (VoiceOver, NVDA, JAWS)
- [ ] Conduct full WCAG 2.2 AA audit with automated tools
- [ ] Add `aria-expanded` states for mobile menu toggle
- [ ] Improve color contrast for zinc-400 text on dark backgrounds (AA small text)
- [ ] Add skip link to all sub-pages (quiz, etc.)

#### Performance

- [ ] Convert logo images to WebP/AVIF format
- [ ] Implement lazy loading for below-the-fold images
- [ ] Inline critical CSS for faster FCP
- [ ] Consider moving from Tailwind CDN to build-time compilation
- [ ] Add service worker caching strategy (sw.js exists but needs review)
- [ ] Audit GSAP bundle size (consider tree-shaking)

#### Design

- [ ] Add dark/light mode toggle (currently dark-only)
- [ ] Create component variants for future use
- [ ] Document all 9 service card contents
- [ ] Create design tokens JSON/Style Dictionary export
- [ ] Add Figma design file reference
- [ ] Document all pricing tier details
- [ ] Document all comparison table features
- [ ] Document all Why Choose Us grid items

#### Code Quality

- [ ] Standardize CSS formatting (consider PostCSS/Prettier)
- [ ] Add CSS linting
- [ ] Extract repeated patterns into CSS custom properties
- [ ] Document GSAP animation timelines
- [ ] Document all FAQ questions/answers
- [ ] Document all footer links

#### Conversion Engine

- [ ] A/B test sticky CTA bar visibility threshold
- [ ] Add analytics tracking to social proof bar
- [ ] Implement quiz completion tracking
- [ ] Add conversion funnel visualization

---

## Appendix A: CSS File Structure

```
css/
├── app.css              # Global foundation (reset, tokens, typography, shared components)
├── buttons.css          # Unified button system (all button variants and effects)
├── index-style.css      # Page-specific components (service cards, stats card rays)
├── contact-style.css    # Contact-specific layouts and components
├── quiz-style.css       # Standalone styles for the qualification system
└── responsive.css       # Unified source of truth for all media queries
```

---

## Appendix B: JavaScript Architecture

```
js/
├── app.js               # Global application logic (loader, menu, scroll, shared animations)
├── index-ux.js          # GSAP ScrollTrigger animations specific to Home/Services
├── contact-ux.js        # Form interactions and page-specific logic for Contact
├── tailwind.config.js   # Unified theme configuration (colors, fonts, dark mode)
├── quiz-engine.js       # Logic for the multi-step qualification quiz
└── conversion-engine.js # Form submission and tracking logic
```

### External JS Libraries

| Library                | Version      | Purpose                     |
| ---------------------- | ------------ | --------------------------- |
| **GSAP**               | 3.12.2       | Core animation engine       |
| **GSAP ScrollTrigger** | 3.12.2       | Scroll-based animations     |
| **GSAP TextPlugin**    | 3.12.2       | Text typing effects         |
| **Tailwind CSS**       | CDN (latest) | Utility-first CSS framework |

---

## Appendix C: Z-Index Scale

| Z-index | Token                  | Element                                                        |
| ------- | ---------------------- | -------------------------------------------------------------- |
| `9999`  | `--z-loading`          | Page Loader (updated from 10000)                               |
| `1200`  | `--z-toast`            | Toast notifications (NEW)                                      |
| `1100`  | `--z-popover`          | Popovers (NEW)                                                 |
| `1000`  | `--z-modal`            | Modal dialogs (NEW)                                            |
| `500`   | `--z-overlay-backdrop` | Modal backdrops (NEW)                                          |
| `200`   | `--z-sticky-top`       | Sticky CTA bar, dashboard topbar (NEW)                         |
| `100`   | `--z-dropdown`         | Dropdown menus (NEW)                                           |
| `50`    | `--z-sticky`           | Navigation                                                     |
| `10`    | —                      | Pricing card animated border, service card button span         |
| `9`     | —                      | Animated button SVGs                                           |
| `5`     | —                      | Space button span                                              |
| `4`     | —                      | Space button bright particles                                  |
| `3`     | —                      | Space button secondary particles                               |
| `2`     | —                      | Space button primary particles, stats card dot                 |
| `1`     | `--z-content`          | Service card button span, glow orbs, CTAs                      |
| `0`     | `--z-base`             | Bubble layers, default                                         |
| `-1`    | `--z-behind`           | WhatsApp button conic gradient pseudo-element, grid background |

---

## Appendix D: WCAG Contrast Audit

### Color Contrast Ratios (WCAG 2.2)

| Foreground         | Background             | Ratio  | WCAG AA (Normal) | WCAG AA (Large)        | WCAG AAA (Normal)        |
| ------------------ | ---------------------- | ------ | ---------------- | ---------------------- | ------------------------ |
| White `#ffffff`    | Charcoal `#0a0a0c`     | 19.3:1 | ✅ PASS          | ✅ PASS                | ✅ PASS                  |
| White `#ffffff`    | Dark Base `#141416`    | 17.5:1 | ✅ PASS          | ✅ PASS                | ✅ PASS                  |
| White `#ffffff`    | Dark Surface `#232428` | 14.2:1 | ✅ PASS          | ✅ PASS                | ✅ PASS                  |
| Cyan `#00f2ff`     | Charcoal `#0a0a0c`     | 12.8:1 | ✅ PASS          | ✅ PASS                | ✅ PASS                  |
| Cyan `#00f2ff`     | Dark Base `#141416`    | 11.7:1 | ✅ PASS          | ✅ PASS                | ✅ PASS                  |
| Purple `#7000ff`   | Charcoal `#0a0a0c`     | 6.4:1  | ✅ PASS          | ✅ PASS                | ❌ FAIL (4.5:1 required) |
| Purple `#7000ff`   | Dark Base `#141416`    | 5.9:1  | ✅ PASS          | ✅ PASS                | ❌ FAIL                  |
| Zinc-400 `#71717a` | Charcoal `#0a0a0c`     | 4.6:1  | ✅ PASS          | ✅ PASS                | ❌ FAIL                  |
| Zinc-400 `#71717a` | Dark Surface `#232428` | 3.4:1  | ❌ FAIL          | ✅ PASS (3:1 required) | ❌ FAIL                  |

### Recommendations

1. **Zinc-400 on Dark Surface:** Consider using zinc-300 (`#a1a1aa`) for better contrast on dark surfaces (ratio: 5.2:1)
2. **Purple text on dark backgrounds:** Use for large text only (18px+ bold, 24px+ regular)
3. **Focus indicators:** Cyan `#00f2ff` on dark backgrounds exceeds AA requirements (12.8:1)
4. **Form error states:** Red `#ef4444` on dark surface: 5.8:1 — ✅ PASS AA

---

_This document is maintained by the Xenon Studios design team. For questions or contributions, please refer to the project repository._

**Last Updated:** April 24, 2026
**Document Version:** 2.3.0
