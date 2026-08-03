/**
 * Bloom & Brew - Animation Engine JavaScript
 * GSAP Timelines, AOS Init, Floating Petals Particle Physics & Swiper Carousel
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  /* ------------------------------------------------------------------------
   * 1. AOS (Animate On Scroll) Initialization
   * ------------------------------------------------------------------------ */
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out-cubic',
      once: true,
      mirror: false,
      offset: 120
    });
  }

  /* ------------------------------------------------------------------------
   * 2. Swiper.js Testimonials Slider Setup
   * ------------------------------------------------------------------------ */
  if (typeof Swiper !== 'undefined' && document.querySelector('.testimonial-swiper')) {
    new Swiper('.testimonial-swiper', {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      autoplay: {
        delay: 4500,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        768: {
          slidesPerView: 2,
        },
        1200: {
          slidesPerView: 3,
        }
      }
    });
  }

  /* ------------------------------------------------------------------------
   * 3. GSAP Hero & Scroll Animations
   * ------------------------------------------------------------------------ */
  if (typeof gsap !== 'undefined') {
    // Hero Section Reveal Timeline
    const heroTl = gsap.timeline();

    heroTl.from('.hero-tagline', {
      opacity: 0,
      y: -30,
      duration: 0.8,
      ease: 'power3.out'
    })
    .from('.hero-title', {
      opacity: 0,
      y: 40,
      duration: 1,
      ease: 'power3.out'
    }, '-=0.4')
    .from('.hero-description', {
      opacity: 0,
      y: 30,
      duration: 0.8,
      ease: 'power3.out'
    }, '-=0.6')
    .from('.hero-cta-group', {
      opacity: 0,
      y: 20,
      duration: 0.8,
      ease: 'power3.out'
    }, '-=0.4');
  }

  /* ------------------------------------------------------------------------
   * 4. Animated Number Counters (Statistics Section)
   * ------------------------------------------------------------------------ */
  const statNumbers = document.querySelectorAll('.stat-number[data-count]');
  let counted = false;

  window.addEventListener('scroll', () => {
    const statsSection = document.getElementById('about');
    if (!statsSection) return;

    const sectionPos = statsSection.getBoundingClientRect().top;
    const screenPos = window.innerHeight / 1.3;

    if (sectionPos < screenPos && !counted) {
      counted = true;
      statNumbers.forEach(counter => {
        const target = +counter.getAttribute('data-count');
        const speed = 200; // lower is faster

        const updateCount = () => {
          const count = +counter.innerText;
          const inc = target / speed;

          if (count < target) {
            counter.innerText = Math.ceil(count + inc);
            setTimeout(updateCount, 15);
          } else {
            counter.innerText = target + "+";
          }
        };

        updateCount();
      });
    }
  });

  /* ------------------------------------------------------------------------
   * 5. Canvas Floating Petals Particle Physics Engine
   * ------------------------------------------------------------------------ */
  const canvas = document.getElementById('petals-canvas');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    window.addEventListener('resize', () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    });

    const numPetals = 35;
    const petals = [];
    const colors = ['#FADADD', '#CDB4DB', '#FFD8BE', '#FFF8F0'];

    class Petal {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * width;
        this.y = Math.random() * -height;
        this.size = Math.random() * 12 + 8;
        this.speedY = Math.random() * 1.5 + 0.8;
        this.speedX = Math.random() * 1 - 0.5;
        this.rotation = Math.random() * 360;
        this.rotationSpeed = (Math.random() - 0.5) * 2;
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.opacity = Math.random() * 0.7 + 0.3;
      }

      update() {
        this.y += this.speedY;
        this.x += Math.sin(this.y * 0.01) + this.speedX;
        this.rotation += this.rotationSpeed;

        if (this.y > height + 20) {
          this.reset();
        }
      }

      draw() {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate((this.rotation * Math.PI) / 180);
        ctx.globalAlpha = this.opacity;

        ctx.beginPath();
        ctx.fillStyle = this.color;
        // Draw delicate flower petal path
        ctx.moveTo(0, 0);
        ctx.bezierCurveTo(-this.size / 2, -this.size / 2, -this.size, this.size / 3, 0, this.size);
        ctx.bezierCurveTo(this.size, this.size / 3, this.size / 2, -this.size / 2, 0, 0);
        ctx.fill();

        ctx.restore();
      }
    }

    // Initialize Petals
    for (let i = 0; i < numPetals; i++) {
      petals.push(new Petal());
    }

    // Render Loop
    function renderPetals() {
      ctx.clearRect(0, 0, width, height);
      petals.forEach(petal => {
        petal.update();
        petal.draw();
      });
      requestAnimationFrame(renderPetals);
    }

    renderPetals();
  }
});
