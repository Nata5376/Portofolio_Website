/* ============================================================
   SATRIA GILANG ARGANATA — PORTFOLIO SCRIPTS
   ============================================================ */

'use strict';

/* ---- LOADER ---- */
(function initLoader() {
  const loader = document.getElementById('loader');
  const loaderText = document.querySelector('.loader-text');

  const messages = ['Initializing...', 'Loading assets...', 'Almost ready...'];
  let msgIdx = 0;
  const interval = setInterval(() => {
    msgIdx = (msgIdx + 1) % messages.length;
    if (loaderText) loaderText.textContent = messages[msgIdx];
  }, 600);

  window.addEventListener('load', () => {
    clearInterval(interval);
    setTimeout(() => {
      loader.classList.add('hidden');
      document.body.style.overflow = '';
    }, 400);
  });

  document.body.style.overflow = 'hidden';
})();

/* ---- NAVBAR SCROLL + ACTIVE HIGHLIGHT ---- */
(function initNavbar() {
  const navbar  = document.getElementById('navbar');
  const links   = document.querySelectorAll('.nav-link');
  const sections = Array.from(document.querySelectorAll('section[id]'));

  function updateNav() {
    const scrolled = window.scrollY > 40;
    navbar.classList.toggle('scrolled', scrolled);

    let current = '';
    for (const sec of sections) {
      if (window.scrollY >= sec.offsetTop - 120) current = sec.id;
    }
    links.forEach(l => {
      l.classList.toggle('active', l.getAttribute('href') === `#${current}`);
    });
  }

  window.addEventListener('scroll', updateNav, { passive: true });
  updateNav();
})();

/* ---- HAMBURGER MENU ---- */
(function initHamburger() {
  const btn   = document.getElementById('hamburger');
  const menu  = document.getElementById('navLinks');
  if (!btn || !menu) return;

  btn.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    btn.setAttribute('aria-expanded', open);
  });

  menu.querySelectorAll('.nav-link').forEach(l =>
    l.addEventListener('click', () => menu.classList.remove('open'))
  );
})();

/* ---- THEME TOGGLE ---- */
(function initTheme() {
  const toggle = document.getElementById('themeToggle');
  const icon   = document.getElementById('themeIcon');
  const html   = document.documentElement;

  const saved = localStorage.getItem('theme') || 'dark';
  html.setAttribute('data-theme', saved);
  icon.className = saved === 'dark' ? 'fas fa-moon' : 'fas fa-sun';

  toggle.addEventListener('click', () => {
    const next = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', next);
    icon.className = next === 'dark' ? 'fas fa-moon' : 'fas fa-sun';
    localStorage.setItem('theme', next);
  });
})();

/* ---- TYPING ANIMATION ---- */
(function initTyping() {
  const el = document.getElementById('typingText');
  if (!el) return;

  const phrases = [
    'Data Science Student',
    'Data Analyst Enthusiast',
    'Web Developer',
    'Machine Learning Learner',
    'Big Data Explorer',
  ];

  let phraseIdx = 0;
  let charIdx   = 0;
  let deleting  = false;
  let paused    = false;

  function tick() {
    const phrase = phrases[phraseIdx];

    if (!deleting) {
      el.textContent = phrase.slice(0, ++charIdx);
      if (charIdx === phrase.length) { deleting = true; paused = true; }
    } else {
      el.textContent = phrase.slice(0, --charIdx);
      if (charIdx === 0) {
        deleting = false;
        phraseIdx = (phraseIdx + 1) % phrases.length;
      }
    }

    let delay = deleting ? 50 : 80;
    if (paused) { paused = false; delay = 1800; }

    setTimeout(tick, delay);
  }

  tick();
})();

/* ---- HERO CANVAS — DATA GRID ---- */
(function initCanvas() {
  const canvas = document.getElementById('gridCanvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let W, H, cols, rows, dots;
  const SPACING = 40;

  function resize() {
    W = canvas.width  = canvas.offsetWidth;
    H = canvas.height = canvas.offsetHeight;
    cols = Math.ceil(W / SPACING) + 2;
    rows = Math.ceil(H / SPACING) + 2;
    buildDots();
  }

  function buildDots() {
    dots = [];
    for (let c = 0; c < cols; c++) {
      for (let r = 0; r < rows; r++) {
        dots.push({
          x: c * SPACING,
          y: r * SPACING,
          baseR: Math.random() < 0.12 ? 1.8 : 0.8,
          r: 0,
          phase: Math.random() * Math.PI * 2,
          speed: 0.003 + Math.random() * 0.004,
        });
      }
    }
  }

  let t = 0;
  function draw() {
    ctx.clearRect(0, 0, W, H);
    t += 1;

    for (const d of dots) {
      d.r = d.baseR * (0.5 + 0.5 * Math.sin(t * d.speed + d.phase));
      const alpha = 0.15 + 0.5 * Math.sin(t * d.speed + d.phase) * 0.3;
      const isDark = document.documentElement.getAttribute('data-theme') !== 'light';
      ctx.fillStyle = isDark
        ? `rgba(99, 102, 241, ${alpha})`
        : `rgba(79, 70, 229, ${alpha})`;
      ctx.beginPath();
      ctx.arc(d.x, d.y, Math.max(d.r, 0), 0, Math.PI * 2);
      ctx.fill();
    }

    requestAnimationFrame(draw);
  }

  window.addEventListener('resize', resize);
  resize();
  draw();
})();

/* ---- SCROLL REVEAL ---- */
(function initReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('revealed');
          }, 60);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
  );

  document.querySelectorAll('[data-reveal]').forEach(el => observer.observe(el));
})();

/* ---- SKILL BARS ---- */
(function initSkillBars() {
  const bars = document.querySelectorAll('.skill-fill[data-width]');
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const bar = entry.target;
          const w = bar.getAttribute('data-width');
          setTimeout(() => { bar.style.width = `${w}%`; }, 200);
          observer.unobserve(bar);
        }
      });
    },
    { threshold: 0.5 }
  );
  bars.forEach(bar => observer.observe(bar));
})();

/* ---- BACK TO TOP ---- */
(function initBackToTop() {
  const btn = document.getElementById('backToTop');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 400);
  }, { passive: true });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
})();

/* ---- SMOOTH SCROLL for anchor links ---- */
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', (e) => {
    const target = document.querySelector(link.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});
