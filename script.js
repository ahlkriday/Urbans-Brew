/**
 * THE COFFEE BISTRO - CORE ENGINE
 * Handles: Scroll Animations, Theme Management, and UI Logic
 */

// 1. SCROLL REVEAL ANIMATION
// Uses Intersection Observer for high-performance scroll triggers
const revealCallback = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
            // Stop observing once shown to save resources
            observer.unobserve(entry.target); 
        }
    });
};

const revealOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px" // Triggers slightly before element enters view
};

const revealObserver = new IntersectionObserver(revealCallback, revealOptions);

// Initialize observers on all elements with .reveal class
document.addEventListener("DOMContentLoaded", () => {
    const revealElements = document.querySelectorAll(".reveal");
    revealElements.forEach(el => revealObserver.observe(el));
});


// 2. THEME MANAGEMENT (DARK / LIGHT MODE)
const themeToggle = document.getElementById("themeToggle");

const toggleTheme = () => {
    const isLight = document.body.classList.toggle("light-mode");
    // Save state to local storage for persistent experience
    localStorage.setItem("bistro-theme", isLight ? "light" : "dark");
};

// Apply saved theme on page load
const applySavedTheme = () => {
    const savedTheme = localStorage.getItem("bistro-theme");
    if (savedTheme === "light") {
        document.body.classList.add("light-mode");
    }
};

if (themeToggle) {
    themeToggle.addEventListener("click", toggleTheme);
}

// Ensure theme is applied as soon as DOM is ready
applySavedTheme();


// 3. NAV SCROLL EFFECT
// Adds a subtle shadow/background change to navbar when scrolling
window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
        navbar.style.boxShadow = "0 4px 20px rgba(0,0,0,0.3)";
    } else {
        navbar.style.boxShadow = "none";
    }
});