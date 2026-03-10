document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Header scroll effect
    const header = document.querySelector('.site-header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.backgroundColor = 'rgba(10, 25, 47, 0.95)';
            header.style.boxShadow = 'var(--shadow-md)';
            header.style.padding = '5px 0';
        } else {
            header.style.backgroundColor = 'rgba(10, 25, 47, 0.85)';
            header.style.boxShadow = 'none';
            header.style.padding = '0';
        }
    });
});
