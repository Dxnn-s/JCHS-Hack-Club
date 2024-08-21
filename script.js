// Smooth Scroll Animation for Navigation Links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Fade In Effect on Page Load
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});
