/* =========================================================================
   SGF SOURCING — main.js
   - Language toggle (EN/VI)
   - Smooth scroll for anchor links
   - Scroll-triggered reveals
   - Contact form (Formspree-ready)
   ========================================================================= */

(function () {
  'use strict';

  /* ----- 1. LANGUAGE TOGGLE -------------------------------------------- */
  const STORAGE_KEY = 'sgf-lang';
  const SUPPORTED = ['en', 'vi'];
  const root = document.documentElement;

  function getInitialLang() {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored && SUPPORTED.includes(stored)) return stored;
    const browser = (navigator.language || 'en').slice(0, 2).toLowerCase();
    return browser === 'vi' ? 'vi' : 'en';
  }

  function setLang(lang) {
    if (!SUPPORTED.includes(lang)) return;
    root.setAttribute('lang', lang);
    root.setAttribute('data-lang', lang);
    localStorage.setItem(STORAGE_KEY, lang);

    // Update visual state on toggles
    document.querySelectorAll('.lang-toggle').forEach(toggle => {
      toggle.querySelectorAll('[data-set-lang]').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-set-lang') === lang);
      });
    });

    // Update document title for SEO
    const titleEl = document.querySelector(`title[data-lang="${lang}"]`);
    if (titleEl) document.title = titleEl.textContent;
  }

  function bindLangToggles() {
    document.querySelectorAll('[data-set-lang]').forEach(btn => {
      btn.addEventListener('click', e => {
        e.preventDefault();
        setLang(btn.getAttribute('data-set-lang'));
      });
    });
  }

  /* ----- 2. SMOOTH SCROLL (with sticky-nav offset) --------------------- */
  function bindAnchorScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(link => {
      link.addEventListener('click', e => {
        const href = link.getAttribute('href');
        if (!href || href === '#' || href.length < 2) return;
        const target = document.querySelector(href);
        if (!target) return;
        e.preventDefault();
        const navH = document.querySelector('.nav')?.offsetHeight || 0;
        const top = target.getBoundingClientRect().top + window.scrollY - navH - 8;
        window.scrollTo({ top, behavior: 'smooth' });
      });
    });
  }

  /* ----- 3. SCROLL REVEALS -------------------------------------------- */
  function bindReveals() {
    if (!('IntersectionObserver' in window)) {
      // No observer support → leave everything visible; do NOT add js-ready class
      return;
    }
    // Mark <html> so the reveal CSS rules activate. Until this class is set,
    // .reveal elements stay fully visible (progressive enhancement).
    document.documentElement.classList.add('js-ready');

    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    document.querySelectorAll('.reveal').forEach(el => io.observe(el));
  }

  /* ----- 4. CONTACT FORM ---------------------------------------------- */
  // TODO: REPLACE — set FORM_ENDPOINT to the Formspree URL once provided.
  // Until then the form falls back to a mailto: link.
  const FORM_ENDPOINT = ''; // e.g. 'https://formspree.io/f/xxxxxxxx'
  const FALLBACK_EMAIL = 'Hello@sgfsourcing.com';

  function bindForm() {
    const form = document.getElementById('quote-form');
    if (!form) return;
    const status = form.querySelector('.form-status');

    form.addEventListener('submit', async (e) => {
      e.preventDefault();

      // Honeypot — spam bots fill hidden fields
      if (form.querySelector('[name="website"]').value) return;

      // If no endpoint configured, fall back to mailto
      if (!FORM_ENDPOINT) {
        const data = new FormData(form);
        const lines = [];
        for (const [k, v] of data.entries()) {
          if (k === 'website' || !v) continue;
          lines.push(`${k}: ${v}`);
        }
        const subject = encodeURIComponent('Fresh Coconut — Quote Request');
        const body = encodeURIComponent(lines.join('\n'));
        window.location.href = `mailto:${FALLBACK_EMAIL}?subject=${subject}&body=${body}`;
        showStatus(status, 'success', form);
        return;
      }

      // Real Formspree submission
      try {
        const data = new FormData(form);
        const res = await fetch(FORM_ENDPOINT, {
          method: 'POST',
          body: data,
          headers: { 'Accept': 'application/json' }
        });
        if (res.ok) {
          showStatus(status, 'success', form);
          form.reset();
        } else {
          showStatus(status, 'error', form);
        }
      } catch (err) {
        showStatus(status, 'error', form);
      }
    });
  }

  function showStatus(el, kind, form) {
    if (!el) return;
    el.classList.remove('success', 'error');
    el.classList.add(kind, 'show');
    const lang = root.getAttribute('data-lang') || 'en';
    const messages = {
      success: {
        en: 'Thank you. Our sales team will reply within 24 hours.',
        vi: 'Cảm ơn quý khách. Đội ngũ kinh doanh sẽ phản hồi trong vòng 24 giờ.'
      },
      error: {
        en: 'Something went wrong. Please email Hello@sgfsourcing.com directly.',
        vi: 'Đã có lỗi xảy ra. Vui lòng gửi email trực tiếp đến Hello@sgfsourcing.com.'
      }
    };
    el.textContent = messages[kind][lang] || messages[kind].en;
  }

  /* ----- 5. PRODUCT CAROUSEL ------------------------------------------ */
  function bindCarousels() {
    document.querySelectorAll('[data-carousel]').forEach(root => {
      const track  = root.querySelector('.carousel-track');
      const slides = root.querySelectorAll('.carousel-slide');
      const prev   = root.querySelector('.carousel-prev');
      const next   = root.querySelector('.carousel-next');
      const dots   = root.querySelectorAll('.carousel-dots button');
      if (!track || slides.length === 0) return;

      let idx = 0;
      const max = slides.length - 1;

      function go(n) {
        idx = (n < 0) ? max : (n > max) ? 0 : n;
        track.style.transform = 'translateX(-' + (idx * 100) + '%)';
        dots.forEach((d, i) => d.classList.toggle('is-active', i === idx));
      }

      prev && prev.addEventListener('click', () => go(idx - 1));
      next && next.addEventListener('click', () => go(idx + 1));
      dots.forEach((d, i) => d.addEventListener('click', () => go(i)));

      // Keyboard support when the carousel is focused
      root.tabIndex = 0;
      root.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft')  { e.preventDefault(); go(idx - 1); }
        if (e.key === 'ArrowRight') { e.preventDefault(); go(idx + 1); }
      });

      // Touch / swipe support
      let touchX = null;
      root.addEventListener('touchstart', (e) => { touchX = e.touches[0].clientX; }, { passive: true });
      root.addEventListener('touchend',   (e) => {
        if (touchX === null) return;
        const dx = e.changedTouches[0].clientX - touchX;
        if (Math.abs(dx) > 40) go(dx < 0 ? idx + 1 : idx - 1);
        touchX = null;
      });

      go(0);
    });
  }

  /* ----- 6. INIT ------------------------------------------------------ */
  // Note: the previous version of this file injected a "Menu" hamburger
  // toggle because the nav had 11+ items. The nav was trimmed to 6 items
  // on May 16 2026; items are now rendered inline by CSS — no toggle needed.
  document.addEventListener('DOMContentLoaded', () => {
    setLang(getInitialLang());
    bindLangToggles();
    bindAnchorScroll();
    bindReveals();
    bindForm();
    bindCarousels();
  });
})();
