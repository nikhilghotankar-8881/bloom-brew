# 🌸 Bloom & Brew | Premium Flower Shop & Artisanal Café

Welcome to the official repository for **Bloom & Brew**, a luxury boutique website blending the timeless elegance of high-end floral artistry with the cozy warmth of a specialty coffee house.

Designed with an **Apple & Starbucks Reserve-level aesthetic**, this production-ready web application delivers a seamless, glassmorphic experience featuring dynamic floating petal animations, interactive catalog filtering, responsive masonry gallery, instant bouquet order & table reservation forms, and full dark mode support.

---

## 🎨 Color Palette & Design Tokens

| Token Name | Hex Code | Purpose / Usage |
| :--- | :--- | :--- |
| **Blush Pink** | `#FADADD` | Primary Brand Soft Accent & Shimmer |
| **Lavender** | `#CDB4DB` | Secondary Floral Highlight & Scrollbar |
| **Cream** | `#FFF8F0` | Light Mode Primary Background |
| **Soft Peach** | `#FFD8BE` | Soft Warm Glow & Card Hover Borders |
| **Sage Green** | `#A3B18A` | Natural Botanical Accent & Primary CTA |
| **Sage Dark** | `#588157` | High-contrast Accent & Button Gradients |
| **Dark Charcoal**| `#3D3D3D` | Primary Body Typography |
| **Espresso Dark**| `#2C1A1D` | Deep Heading Color & Footer Background |

---

## 💻 Tech Stack

- **Core**: HTML5 (Semantic), CSS3 (Custom Variables), JavaScript (ES6 Modules)
- **UI Framework**: Bootstrap 5.3
- **Animations & Effects**: GSAP 3.12, AOS (Animate On Scroll), Canvas Particle Physics
- **Components**: Swiper.js 10 (Testimonials Carousel)
- **Icons & Typography**: Font Awesome 6 Pro, Google Fonts (*Playfair Display* & *Poppins*)

---

## 🌟 Key Features

1. **Sticky Glassmorphism Navbar**: Includes active scroll-spy link tracking, search/cart quick triggers, theme switcher (Dark/Light), and mobile drawer menu.
2. **Interactive Canvas Petals Engine**: Physics-based floating flower petals drifting smoothly across the hero section.
3. **Dual Category Catalog & Menu**:
   - **Flower Collection**: Filterable by Bouquets, Wedding, Birthday, Luxury Roses, Event Decor, and Custom Box.
   - **Café Menu**: Filterable by Signature Coffees, Botanical Teas, Gourmet Pastries, and Breakfast items.
4. **Masonry Photo Gallery**: Instagram-inspired media grid with filter tabs and lightbox viewer.
5. **Interactive Booking Forms**: Live validated forms for ordering custom flower arrangements and reserving café tables.
6. **Dark Mode Theme Switcher**: Persistent theme toggling with `localStorage` memory.
7. **Performance & Accessibility**: Optimized image loading (`loading="lazy"`), semantic HTML5 tags, ARIA attributes, clean scroll progress indicator, custom cursor, and back-to-top widget.

---

## 📁 Directory Structure

```
bloom-brew/
├── index.html                  # Master Single-Page HTML App
├── css/
│   ├── style.css               # Design System, Root Tokens, Utilities, Components
│   ├── responsive.css          # Breakpoints (Mobile, Tablet, Laptop, Desktop)
│   └── animations.css          # Keyframes, Petal Effects, Glass Hover Shimmer
├── js/
│   ├── main.js                 # Theme Switcher, Filter Tabs, Forms, Cursor, Scrollspy
│   └── animation.js            # Canvas Petals Engine, GSAP Timelines, AOS, Swiper
├── images/
│   ├── hero/                   # High-res Hero, About & Experience visuals
│   ├── flowers/                # Flower arrangement showcases
│   ├── cafe/                   # Artisanal coffee, teas, pastries photos
│   ├── gallery/                # Masonry gallery images
│   ├── testimonials/           # Customer avatar photos
│   └── icons/                  # SVG icons & branding
└── README.md                   # Project Documentation
```

---

## 🚀 Quick Start / Local Development

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/bloom-brew.git
   cd bloom-brew
   ```

2. **Open in Browser**:
   - Simply double-click `index.html` or serve using Live Server in VS Code / IDE.

---

## 📜 License

Distributed under the **MIT License**. See `LICENSE` for more information.
