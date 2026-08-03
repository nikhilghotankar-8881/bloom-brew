# 🌸 Bloom & Brew — Premium Flower Shop & Artisanal Café

[![GitHub Repository](https://img.shields.io/badge/GitHub-nikhilghotankar--8881%2Fbloom--brew-181717?style=for-the-badge&logo=github)](https://github.com/nikhilghotankar-8881/bloom-brew)
[![Bootstrap 5](https://img.shields.io/badge/Bootstrap-v5.3-7952B3?style=for-the-badge&logo=bootstrap)](https://getbootstrap.com/)
[![GSAP](https://img.shields.io/badge/GSAP-v3.12-88CE02?style=for-the-badge&logo=greensock)](https://greensock.com/gsap/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

> **"Where Flowers Bloom & Coffee Warms the Soul"**

**Bloom & Brew** is a modern, elegant, fully responsive, and portfolio-worthy website built for a luxury botanical boutique and artisanal café. Inspired by high-end aesthetic brands such as **Apple** and **Starbucks Reserve**, this project combines glassmorphic UI design, physics-driven floating petal animations, interactive catalog filtering, online bouquet ordering & café table reservation modules, dark mode support, and comprehensive SEO/accessibility standards.

---

## 🎨 Color Palette & Design Tokens

Curated HSL/Hex color palette tailored for a warm, luxury botanical aesthetic:

| Token Name | Hex Code | Visual Swatch | Purpose / Usage |
| :--- | :---: | :---: | :--- |
| **Blush Pink** | `#FADADD` | 🌸 `[ #FADADD ]` | Primary Soft Accent & Shimmer Highlights |
| **Lavender** | `#CDB4DB` | 🪻 `[ #CDB4DB ]` | Secondary Floral Highlight & Scrollbar Thumb |
| **Cream** | `#FFF8F0` | 🍦 `[ #FFF8F0 ]` | Light Mode Primary Background |
| **Soft Peach** | `#FFD8BE` | 🍑 `[ #FFD8BE ]` | Soft Warm Glow & Card Hover Borders |
| **Sage Green** | `#A3B18A` | 🌿 `[ #A3B18A ]` | Natural Botanical Accent & Primary CTA |
| **Sage Dark** | `#588157` | 🌲 `[ #588157 ]` | High-contrast Accent & Button Gradients |
| **White** | `#FFFFFF` | ⚪ `[ #FFFFFF ]` | Card Backgrounds & Light Highlights |
| **Dark Charcoal**| `#3D3D3D` | 🖤 `[ #3D3D3D ]` | Primary Body Typography |
| **Espresso Dark**| `#2C1A1D` | ☕ `[ #2C1A1D ]` | Deep Headings & Footer Background |

---

## ✒️ Typography System

- **Headings**: [`Playfair Display`](https://fonts.google.com/specimen/Playfair+Display) (Serif) — Elegant, editorial, luxury brand aesthetic.
- **Body**: [`Poppins`](https://fonts.google.com/specimen/Poppins) (Sans-Serif) — Clean, readable, modern geometric structure.

---

## 🛠️ Tech Stack & Dependencies

- **Frontend Core**: HTML5 (Semantic Structure), CSS3 (Custom Variables & Grid/Flexbox), JavaScript (ES6)
- **UI Framework**: Bootstrap 5.3
- **Animations & Effects**:
  - **GSAP 3.12** (Hero Reveal Timelines & Parallax Triggers)
  - **AOS (Animate On Scroll)** (Scroll-driven section entrances)
  - **HTML5 Canvas** (Particle physics floating flower petal engine)
- **Components**: **Swiper.js 10** (Testimonials Slider)
- **Icons & Typography**: Font Awesome 6 Pro, Google Fonts

---

## 🏛️ Website Sections (12 Comprehensive Modules)

1. **Sticky Glassmorphism Navigation**: Active link scrollspy, dark mode toggle, cart quick action, and responsive mobile drawer.
2. **Hero Section**: Fullscreen layout, HTML5 canvas floating flower petals, Playfair Display hero typography, dual CTA buttons ("Shop Flowers" & "Explore Café Menu"), and animated scroll indicator.
3. **About Us & Statistics**: Brand story, eco-farm mission, and animated scroll counters (**10+ Years**, **15,000+ Happy Guests**, **500+ Events**, **100% Fresh Daily**).
4. **Flower Collection**: Filterable catalog (*Bouquets*, *Wedding Flowers*, *Birthday Flowers*, *Luxury Roses*, *Event Decor*, *Custom Orders*) featuring hover zoom cards, star ratings, prices, and instant order triggers.
5. **Café Menu**: Interactive menu showcase (*Signature Coffee*, *Botanical Tea*, *Pastries & Desserts*, *Breakfast*) with pricing and dietary details.
6. **Featured Experience**: Modern split layout celebrating the combination of fresh floral arrangements and specialty coffee brewing.
7. **Masonry Gallery**: Instagram-inspired filterable photo grid with hover overlay preview effects.
8. **Testimonials & Google Reviews**: Glassmorphism Swiper slider showcasing customer reviews and a 4.9/5 star Google Rating score.
9. **Online Ordering & Reservation**: Dual-tabbed interactive form module for custom bouquet ordering and café table reservations with live validation.
10. **Contact Section & Location**: Interactive Google Maps embed, boutique info card, operating hours, phone, email, and social links.
11. **Newsletter & FAQ**: Email subscription form with live alert feedback and a collapsible accordion FAQ section.
12. **Footer**: Luxury multi-column footer with quick links, business info, social channels, copyright, and floating WhatsApp & Back-to-Top widgets.

---

## ✨ Extra Features & Interactivity

- 🌙 **Dark Mode Toggle**: Persistent theme switching saved in `localStorage`.
- 🌸 **Canvas Floating Petals Engine**: Smooth, random physics particle system simulating falling flower petals.
- 🎯 **Custom Cursor**: Dual-ring cursor tracker with smooth spring inertia on interactive elements.
- 📊 **Scroll Progress Bar**: Real-time reading progress bar pinned to the top viewport.
- ⬆️ **Back to Top Widget**: Smooth scroll-to-top floating button.
- 💬 **Floating WhatsApp Button**: Direct click-to-chat action widget.
- ⌛ **Preloader Screen**: Botanical spinning preloader ensuring smooth resource loading.

---

## 📁 Project Folder Structure

```
bloom-brew/
├── index.html                  # Master Single-Page HTML Web App
├── css/
│   ├── style.css               # Design System Tokens, CSS Variables, Core Layout
│   ├── responsive.css          # Screen Breakpoints (Mobile, Tablet, Laptop, Desktop)
│   └── animations.css          # Keyframes, Canvas Petal Physics, Glass Shimmer
├── js/
│   ├── main.js                 # Dark Mode, Scrollspy, Filter Tabs, Form Validation, Cursor
│   └── animation.js            # Canvas Petals Engine, GSAP Timelines, AOS, Swiper Slider
├── images/
│   ├── hero/                   # Hero background, About & Experience visuals
│   ├── flowers/                # Flower arrangement catalog images
│   ├── cafe/                   # Artisanal coffee, teas, pastries photos
│   ├── gallery/                # Masonry gallery images
│   ├── testimonials/           # Customer avatar photos
│   └── icons/                  # SVG icons & branding
└── README.md                   # Complete Documentation
```

---

## 🚀 Quick Start / Local Setup

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/nikhilghotankar-8881/bloom-brew.git
   cd bloom-brew
   ```

2. **Run Locally**:
   - **Option A**: Open `index.html` directly in any web browser.
   - **Option B** (Recommended): Serve via VS Code **Live Server** or Python:
     ```bash
     python -m http.server 8080
     ```
   - Open `http://localhost:8080` in your browser.

---

## ⚡ Performance & SEO Optimizations

- **Lazy Loading**: `loading="lazy"` enabled on all image assets.
- **Compressed Assets**: Images optimized and compressed for fast initial byte transfers (< 200KB per image).
- **SEO Meta Tags**: Included Open Graph (`og:*`), title, meta description, and keywords.
- **Accessibility (a11y)**: Built with semantic HTML5 tags (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`), ARIA labels, and proper color contrast ratios in both light and dark themes.

---

## 📜 License

Distributed under the **MIT License**. See `LICENSE` for more information.

---

<p center>Crafted with 🌸 and ☕ by <strong>Bloom & Brew Studio</strong></p>
