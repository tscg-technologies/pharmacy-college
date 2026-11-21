/**
 * PHARMACY COLLEGE WEBSITE - CORE JAVASCRIPT
 * Pure Vanilla JavaScript (Zero External Dependencies)
 * Hostinger Static Hosting Optimized
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  /* ==========================================================================
     1. STICKY HEADER & SCROLL EFFECTS
     ========================================================================== */
  const header = document.querySelector('.site-header');
  const backToTopBtn = document.getElementById('backToTopBtn');

  window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY || window.pageYOffset;

    if (header) {
      if (scrollPos > 30) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }

    if (backToTopBtn) {
      if (scrollPos > 350) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
    }
  });

  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  /* ==========================================================================
     2. MOBILE NAVIGATION DRAWER & DROPDOWNS
     ========================================================================== */
  const mobileToggle = document.querySelector('.mobile-nav-toggle');
  const navMenu = document.querySelector('.nav-menu');
  const dropdownItems = document.querySelectorAll('.nav-item-dropdown');

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = navMenu.classList.toggle('open');
      mobileToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      mobileToggle.innerHTML = isOpen 
        ? `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>`
        : `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>`;
    });

    // Close menu when clicking any direct nav link or dropdown sub-link
    navMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        dropdownItems.forEach(drop => drop.classList.remove('open'));
        mobileToggle.setAttribute('aria-expanded', 'false');
        mobileToggle.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>`;
      });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (navMenu.classList.contains('open') && !navMenu.contains(e.target) && !mobileToggle.contains(e.target)) {
        navMenu.classList.remove('open');
        dropdownItems.forEach(drop => drop.classList.remove('open'));
        mobileToggle.setAttribute('aria-expanded', 'false');
        mobileToggle.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>`;
      }
    });
  }

  // Dropdown Toggle Click Event (Mobile accordion + accessible desktop toggle)
  dropdownItems.forEach(dropdown => {
    const toggleBtn = dropdown.querySelector('.dropdown-toggle');
    if (toggleBtn) {
      toggleBtn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        const isOpen = dropdown.classList.contains('open');

        // Close other dropdowns
        dropdownItems.forEach(other => {
          if (other !== dropdown) {
            other.classList.remove('open');
            other.querySelector('.dropdown-toggle')?.setAttribute('aria-expanded', 'false');
          }
        });

        // Toggle current dropdown
        if (isOpen) {
          dropdown.classList.remove('open');
          toggleBtn.setAttribute('aria-expanded', 'false');
        } else {
          dropdown.classList.add('open');
          toggleBtn.setAttribute('aria-expanded', 'true');
        }
      });
    }
  });

  // Close dropdowns when clicking outside or pressing Escape
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.nav-item-dropdown')) {
      dropdownItems.forEach(drop => {
        drop.classList.remove('open');
        drop.querySelector('.dropdown-toggle')?.setAttribute('aria-expanded', 'false');
      });
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      dropdownItems.forEach(drop => {
        drop.classList.remove('open');
        drop.querySelector('.dropdown-toggle')?.setAttribute('aria-expanded', 'false');
      });
    }
  });

  /* ==========================================================================
     3. ACTIVE NAVIGATION LINK HIGHLIGHTING
     ========================================================================== */
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';

  // Highlight direct nav links
  document.querySelectorAll('.nav-link').forEach(link => {
    const href = link.getAttribute('href');
    if (href && (href === currentPath || (currentPath === '' && href === 'index.html'))) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });

  // Highlight dropdown items and activate parent toggle
  document.querySelectorAll('.dropdown-item').forEach(subLink => {
    const href = subLink.getAttribute('href');
    if (href && href === currentPath) {
      subLink.classList.add('active');
      const parentDropdown = subLink.closest('.nav-item-dropdown');
      if (parentDropdown) {
        parentDropdown.querySelector('.dropdown-toggle')?.classList.add('active');
      }
    } else {
      subLink.classList.remove('active');
    }
  });

  /* ==========================================================================
     4. ANIMATED STATISTIC COUNTERS (IntersectionObserver)
     ========================================================================== */
  const statNumbers = document.querySelectorAll('.stat-number');
  
  if (statNumbers.length > 0 && 'IntersectionObserver' in window) {
    const statsObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const targetNum = parseInt(el.getAttribute('data-target'), 10);
          const duration = 2000; // ms
          const startNum = 0;
          const startTime = performance.now();

          function updateCounter(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease-out curve
            const easeOut = 1 - Math.pow(1 - progress, 3);
            const currentVal = Math.floor(easeOut * (targetNum - startNum) + startNum);

            el.textContent = currentVal;

            if (progress < 1) {
              requestAnimationFrame(updateCounter);
            } else {
              el.textContent = targetNum;
            }
          }

          requestAnimationFrame(updateCounter);
          observer.unobserve(el);
        }
      });
    }, { threshold: 0.25 });

    statNumbers.forEach(stat => statsObserver.observe(stat));
  } else {
    // Fallback if observer not supported
    statNumbers.forEach(stat => {
      stat.textContent = stat.getAttribute('data-target') || stat.textContent;
    });
  }

  /* ==========================================================================
     5. SCROLL REVEAL ANIMATIONS
     ========================================================================== */
  const revealElements = document.querySelectorAll('.fade-in-up');
  if (revealElements.length > 0 && 'IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    revealElements.forEach(el => revealObserver.observe(el));
  } else {
    revealElements.forEach(el => el.classList.add('revealed'));
  }

  /* ==========================================================================
     6. INTERACTIVE FAQ ACCORDION
     ========================================================================== */
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question-btn');
    const answer = item.querySelector('.faq-answer');

    if (questionBtn && answer) {
      questionBtn.addEventListener('click', () => {
        const isActive = item.classList.contains('active');

        // Close other items
        faqItems.forEach(otherItem => {
          if (otherItem !== item && otherItem.classList.contains('active')) {
            otherItem.classList.remove('active');
            const otherBtn = otherItem.querySelector('.faq-question-btn');
            const otherAns = otherItem.querySelector('.faq-answer');
            if (otherBtn) otherBtn.setAttribute('aria-expanded', 'false');
            if (otherAns) otherAns.style.maxHeight = null;
          }
        });

        // Toggle current
        if (isActive) {
          item.classList.remove('active');
          questionBtn.setAttribute('aria-expanded', 'false');
          answer.style.maxHeight = null;
        } else {
          item.classList.add('active');
          questionBtn.setAttribute('aria-expanded', 'true');
          answer.style.maxHeight = answer.scrollHeight + 'px';
        }
      });
    }
  });

  /* ==========================================================================
     7. FORM VALIDATION & DEMO SUBMISSION (Admission & Contact)
     ========================================================================== */
  function setupFormValidation(formId, successBannerId) {
    const form = document.getElementById(formId);
    const banner = document.getElementById(successBannerId);

    if (!form) return;

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      let isValid = true;

      // Reset previous states
      form.querySelectorAll('.error-msg').forEach(msg => msg.classList.remove('visible'));
      form.querySelectorAll('.form-input, .form-select, .form-textarea').forEach(input => input.classList.remove('has-error'));
      if (banner) banner.style.display = 'none';

      // 1. Full Name
      const nameInput = form.querySelector('[name="full_name"]');
      if (nameInput) {
        const val = nameInput.value.trim();
        if (val.length < 3 || !/^[a-zA-Z\s.]+$/.test(val)) {
          showError(nameInput, 'Please enter a valid full name (minimum 3 letters)');
          isValid = false;
        }
      }

      // 2. Mobile Phone (Indian 10-digit starting with 6, 7, 8, or 9)
      const phoneInput = form.querySelector('[name="mobile_number"]');
      if (phoneInput) {
        const phoneVal = phoneInput.value.trim().replace(/\D/g, '');
        const phoneRegex = /^[6-9]\d{9}$/;
        if (!phoneRegex.test(phoneVal)) {
          showError(phoneInput, 'Please enter a valid 10-digit Indian mobile number');
          isValid = false;
        }
      }

      // 3. Email Address
      const emailInput = form.querySelector('[name="email_address"]');
      if (emailInput) {
        const emailVal = emailInput.value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailVal)) {
          showError(emailInput, 'Please enter a valid email address');
          isValid = false;
        }
      }

      // 4. Preferred Program (if present)
      const programSelect = form.querySelector('[name="preferred_program"]');
      if (programSelect && (!programSelect.value || programSelect.value === '')) {
        showError(programSelect, 'Please select your preferred pharmacy program');
        isValid = false;
      }

      // 5. Academic Qualification (if present)
      const qualSelect = form.querySelector('[name="academic_qualification"]');
      if (qualSelect && (!qualSelect.value || qualSelect.value === '')) {
        showError(qualSelect, 'Please select your current qualifying background');
        isValid = false;
      }

      // 6. City (if present)
      const cityInput = form.querySelector('[name="city"]');
      if (cityInput && cityInput.value.trim().length < 2) {
        showError(cityInput, 'Please enter your city / location');
        isValid = false;
      }

      if (isValid) {
        // Successful demonstration submission
        if (banner) {
          banner.style.display = 'flex';
          banner.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
        form.reset();
      }
    });

    function showError(inputElement, message) {
      inputElement.classList.add('has-error');
      const errorMsg = inputElement.parentElement.querySelector('.error-msg');
      if (errorMsg) {
        errorMsg.textContent = message;
        errorMsg.classList.add('visible');
      }
    }
  }

  setupFormValidation('admissionEnquiryForm', 'enquirySuccessBanner');
  setupFormValidation('contactEnquiryForm', 'contactSuccessBanner');

  /* ==========================================================================
     8. CAMPUS LIFE GALLERY LIGHTBOX
     ========================================================================== */
  const galleryItems = document.querySelectorAll('.gallery-item');
  const lightboxModal = document.getElementById('lightboxModal');

  if (lightboxModal && galleryItems.length > 0) {
    const lightboxImg = document.getElementById('lightboxImg');
    const lightboxTitle = document.getElementById('lightboxTitle');
    const lightboxCategory = document.getElementById('lightboxCategory');
    const closeBtn = document.getElementById('lightboxClose');
    const prevBtn = document.getElementById('lightboxPrev');
    const nextBtn = document.getElementById('lightboxNext');

    let currentIndex = 0;

    function openLightbox(index) {
      currentIndex = index;
      const item = galleryItems[currentIndex];
      const img = item.querySelector('img');
      const title = item.querySelector('.gallery-caption')?.textContent || 'Campus Gallery';
      const tag = item.querySelector('.gallery-tag')?.textContent || 'Campus Life';

      if (lightboxImg && img) {
        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt;
      }
      if (lightboxTitle) lightboxTitle.textContent = title;
      if (lightboxCategory) lightboxCategory.textContent = tag;

      lightboxModal.classList.add('active');
      document.body.style.overflow = 'hidden';
    }

    function closeLightbox() {
      lightboxModal.classList.remove('active');
      document.body.style.overflow = '';
    }

    function showPrev() {
      currentIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
      openLightbox(currentIndex);
    }

    function showNext() {
      currentIndex = (currentIndex + 1) % galleryItems.length;
      openLightbox(currentIndex);
    }

    galleryItems.forEach((item, index) => {
      item.addEventListener('click', () => openLightbox(index));
    });

    if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
    if (prevBtn) prevBtn.addEventListener('click', showPrev);
    if (nextBtn) nextBtn.addEventListener('click', showNext);

    lightboxModal.addEventListener('click', (e) => {
      if (e.target === lightboxModal) closeLightbox();
    });

    document.addEventListener('keydown', (e) => {
      if (!lightboxModal.classList.contains('active')) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') showPrev();
      if (e.key === 'ArrowRight') showNext();
    });
  }

  /* ==========================================================================
     9. IMAGE LOAD EVENT HANDLER (Hides fallback placeholder cards)
     ========================================================================== */
  document.querySelectorAll('.image-placeholder-container img').forEach(img => {
    function markLoaded() {
      if (img.naturalWidth > 0) {
        img.closest('.image-placeholder-container')?.classList.add('image-loaded');
      }
    }
    if (img.complete && img.naturalWidth > 0) {
      markLoaded();
    } else {
      img.addEventListener('load', markLoaded);
    }
  });
});
