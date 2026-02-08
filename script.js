const scrollReveal = () => {
    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach((element) => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        if (elementTop < windowHeight - 150) {
            element.classList.add('active');
        }
    });
}
window.addEventListener('scroll', scrollReveal);
window.addEventListener('load', scrollReveal);