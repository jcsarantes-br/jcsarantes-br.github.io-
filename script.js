/* ===== ANO ATUAL NO RODAPÉ ===== */
document.getElementById('anoAtual').textContent = new Date().getFullYear();

/* ===== MENU MOBILE ===== */
const navToggle = document.getElementById('navToggle');
const navList = document.getElementById('navList');

navToggle.addEventListener('click', () => {
  const isOpen = navList.classList.toggle('is-open');
  navToggle.setAttribute('aria-expanded', isOpen);
});

/* Fecha o menu ao clicar em um link (mobile) */
document.querySelectorAll('.nav__link').forEach(link => {
  link.addEventListener('click', () => {
    navList.classList.remove('is-open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

/* ===== SCROLL SUAVE COM COMPENSAÇÃO DO HEADER ===== */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;

    const target = document.querySelector(targetId);
    if (!target) return;

    e.preventDefault();
    const headerAltura = document.querySelector('.header').offsetHeight;
    const targetPosicao = target.getBoundingClientRect().top + window.pageYOffset - headerAltura;

    window.scrollTo({ top: targetPosicao, behavior: 'smooth' });
  });
});

/* ===== ANIMAÇÃO DE ENTRADA DAS SEÇÕES ===== */
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.section, .card, .job, .edu__item').forEach(el => {
  el.classList.add('hidden');
  observer.observe(el);
});