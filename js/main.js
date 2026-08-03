/**
 * Bloom & Brew - Main JavaScript Application File
 * State Management, Interactive Modules, Theme Switcher, Forms & Navigation
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  /* ------------------------------------------------------------------------
   * 1. Preloader Handler
   * ------------------------------------------------------------------------ */
  const preloader = document.getElementById('preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      setTimeout(() => {
        preloader.style.opacity = '0';
        preloader.style.visibility = 'hidden';
      }, 500);
    });
  }

  /* ------------------------------------------------------------------------
   * 2. Dark Mode / Theme Toggle System
   * ------------------------------------------------------------------------ */
  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  const themeIcon = document.getElementById('theme-icon');
  const currentTheme = localStorage.getItem('bloom_theme') || 'light';

  // Apply initial theme
  document.documentElement.setAttribute('data-theme', currentTheme);
  updateThemeIcon(currentTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      let activeTheme = document.documentElement.getAttribute('data-theme');
      let newTheme = activeTheme === 'dark' ? 'light' : 'dark';

      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('bloom_theme', newTheme);
      updateThemeIcon(newTheme);
    });
  }

  function updateThemeIcon(theme) {
    if (!themeIcon) return;
    if (theme === 'dark') {
      themeIcon.className = 'fas fa-sun';
    } else {
      themeIcon.className = 'fas fa-moon';
    }
  }

  /* ------------------------------------------------------------------------
   * 3. Sticky Navigation & Scroll Progress Bar
   * ------------------------------------------------------------------------ */
  const navbar = document.querySelector('.navbar-bloom');
  const scrollProgress = document.getElementById('scroll-progress');
  const backToTopBtn = document.getElementById('back-to-top');

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollY / docHeight) * 100;

    // Sticky Navbar style
    if (navbar) {
      if (scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }

    // Scroll progress bar
    if (scrollProgress) {
      scrollProgress.style.width = `${scrollPercent}%`;
    }

    // Back to top button visibility
    if (backToTopBtn) {
      if (scrollY > 400) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
    }

    // Active Scrollspy Navigation Highlight
    highlightActiveNav();
  });

  // Back to top click event
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  /* ------------------------------------------------------------------------
   * 4. Active Navigation Link Scrollspy
   * ------------------------------------------------------------------------ */
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link-bloom');

  function highlightActiveNav() {
    let scrollPosition = window.scrollY + 200;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }

  /* ------------------------------------------------------------------------
   * 5. Interactive Flower Collection Filtering
   * ------------------------------------------------------------------------ */
  const flowerFilters = document.querySelectorAll('#flower-filter-nav .btn-filter');
  const flowerItems = document.querySelectorAll('.flower-item-col');

  flowerFilters.forEach(button => {
    button.addEventListener('click', () => {
      flowerFilters.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      const filterValue = button.getAttribute('data-filter');

      flowerItems.forEach(item => {
        if (filterValue === 'all' || item.classList.contains(filterValue)) {
          item.style.display = 'block';
          setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'scale(1)';
          }, 50);
        } else {
          item.style.opacity = '0';
          item.style.transform = 'scale(0.9)';
          setTimeout(() => {
            item.style.display = 'none';
          }, 300);
        }
      });
    });
  });

  /* ------------------------------------------------------------------------
   * 6. Interactive Café Menu Filtering
   * ------------------------------------------------------------------------ */
  const cafeFilters = document.querySelectorAll('#cafe-filter-nav .btn-filter');
  const cafeItems = document.querySelectorAll('.cafe-menu-item-col');

  cafeFilters.forEach(button => {
    button.addEventListener('click', () => {
      cafeFilters.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      const filterValue = button.getAttribute('data-filter');

      cafeItems.forEach(item => {
        if (filterValue === 'all' || item.classList.contains(filterValue)) {
          item.style.display = 'block';
          setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
          }, 50);
        } else {
          item.style.opacity = '0';
          item.style.transform = 'translateY(15px)';
          setTimeout(() => {
            item.style.display = 'none';
          }, 300);
        }
      });
    });
  });

  /* ------------------------------------------------------------------------
   * 7. Interactive Masonry Gallery Lightbox & Filter
   * ------------------------------------------------------------------------ */
  const galleryFilters = document.querySelectorAll('#gallery-filter-nav .btn-filter');
  const galleryItems = document.querySelectorAll('.gallery-item-col');

  galleryFilters.forEach(button => {
    button.addEventListener('click', () => {
      galleryFilters.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      const filterValue = button.getAttribute('data-filter');

      galleryItems.forEach(item => {
        if (filterValue === 'all' || item.classList.contains(filterValue)) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });

  /* ------------------------------------------------------------------------
   * 8. Form Validation & Submissions (Order, Reservation, Contact, Newsletter)
   * ------------------------------------------------------------------------ */
  // Order Form
  const bouquetForm = document.getElementById('bouquet-order-form');
  if (bouquetForm) {
    bouquetForm.addEventListener('submit', (e) => {
      e.preventDefault();
      showFormFeedback(bouquetForm, 'Thank you! Your custom flower bouquet order has been received. Our florist will contact you shortly!');
    });
  }

  // Reservation Form
  const tableForm = document.getElementById('table-reservation-form');
  if (tableForm) {
    tableForm.addEventListener('submit', (e) => {
      e.preventDefault();
      showFormFeedback(tableForm, 'Reservation Confirmed! We look forward to welcoming you to Bloom & Brew.');
    });
  }

  // Contact Form
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      showFormFeedback(contactForm, 'Message sent successfully! We will reply to your inquiry soon.');
    });
  }

  // Newsletter Form
  const newsletterForm = document.getElementById('newsletter-form');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      showFormFeedback(newsletterForm, 'Subscribed! Check your inbox for your 10% discount code.');
    });
  }

  function showFormFeedback(formElement, message) {
    const feedbackBox = document.createElement('div');
    feedbackBox.className = 'alert alert-success alert-dismissible fade show mt-3';
    feedbackBox.role = 'alert';
    feedbackBox.innerHTML = `
      <i class="fas fa-check-circle me-2"></i> ${message}
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    `;
    formElement.appendChild(feedbackBox);
    formElement.reset();

    setTimeout(() => {
      feedbackBox.remove();
    }, 6000);
  }

  /* ------------------------------------------------------------------------
   * 9. Custom Cursor Tracker
   * ------------------------------------------------------------------------ */
  const cursorDot = document.querySelector('.custom-cursor-dot');
  const cursorOutline = document.querySelector('.custom-cursor');

  if (cursorDot && cursorOutline) {
    window.addEventListener('mousemove', (e) => {
      const posX = e.clientX;
      const posY = e.clientY;

      cursorDot.style.left = `${posX}px`;
      cursorDot.style.top = `${posY}px`;

      cursorOutline.animate({
        left: `${posX}px`,
        top: `${posY}px`
      }, { duration: 400, fill: "forwards" });
    });

    const interactiveEls = document.querySelectorAll('a, button, .btn-bloom, .flower-card, .menu-card, .gallery-item');
    interactiveEls.forEach(el => {
      el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
      el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
    });
  }

  /* ------------------------------------------------------------------------
   * 10. Button Ripple Effect
   * ------------------------------------------------------------------------ */
  const rippleButtons = document.querySelectorAll('.btn-bloom');
  rippleButtons.forEach(button => {
    button.addEventListener('click', function(e) {
      const rect = this.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const ripple = document.createElement('span');
      ripple.className = 'ripple';
      ripple.style.left = `${x}px`;
      ripple.style.top = `${y}px`;

      this.appendChild(ripple);
      setTimeout(() => ripple.remove(), 600);
    });
  });
});
