/* ═══════════════════════════════════════
   ROBÓTICA SUSTENTÁVEL — main.js
   Projeto Integrador · Liga Steam / ArcelorMittal · 2026
═══════════════════════════════════════ */

/* ── Animação de entrada nas seções (Intersection Observer) ── */
const observerOptions = {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visivel');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.stat-card, .check-item, .badge').forEach(el => {
    el.classList.add('fade-in');
    observer.observe(el);
});