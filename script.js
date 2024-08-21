// Add event listener to navigation links
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();
        document.querySelector(event.target.hash).scrollIntoView({ behavior: 'smooth' });
    });
});
