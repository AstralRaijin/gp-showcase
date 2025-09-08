document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');
    const observer = new window.IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.15 });

    cards.forEach(card => observer.observe(card));
});
