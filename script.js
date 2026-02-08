// 1. Scroll Reveal Animation 
// This makes sections fade and slide up as you scroll down
const observerOptions = {
  threshold: 0.15, // Trigger when 15% of the section is visible
  rootMargin: "0px 0px -50px 0px" // Slight offset for a smoother feel
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, observerOptions);

// Observe all elements with the 'reveal' class
document.querySelectorAll(".reveal").forEach(el => observer.observe(el));


// 2. Theme Toggle (Dark / Light Mode)
const toggleBtn = document.getElementById("themeToggle");

if (toggleBtn) {
  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
    
    // Optional: Save preference to local storage so it stays on page change
    const isLight = document.body.classList.contains("light-mode");
    localStorage.setItem("theme", isLight ? "light" : "dark");
  });
}

// 3. Load Saved Theme on Page Load
window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "light") {
    document.body.classList.add("light-mode");
  }
});