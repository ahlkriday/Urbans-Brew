/**
 * THE BISTRO ANIMATION ENGINE
 * Handles the "Paced" reveal of cinematic elements and gallery shapes.
 */

const scrollReveal = () => {
    const reveals = document.querySelectorAll('.reveal');
    
    reveals.forEach((element, index) => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150; // Triggers when element is 150px into view

        if (elementTop < windowHeight - elementVisible) {
            // EXPERT TIP: We use a timeout based on the index to create a "staggered" 
            // entry effect, which gives the site its premium "paced" feel.
            setTimeout(() => {
                element.classList.add('active');
            }, index % 5 * 100); // Staggers every 5th element by 100ms
        }
    });
};

// Initial check on load (for elements already in the viewport)
window.addEventListener('load', scrollReveal);

// Check on every scroll event
window.addEventListener('scroll', scrollReveal);

// OPTIONAL: Smooth header transition on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.padding = '15px 5%';
        navbar.style.background = 'rgba(10, 10, 10, 0.98)';
    } else {
        navbar.style.padding = '25px 5%';
        navbar.style.background = 'rgba(10, 10, 10, 0.95)';
    }
});