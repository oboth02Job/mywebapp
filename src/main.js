import "./workouts.js";
import "./progress.js";


// Responsive nav menu toggle

  const hamburger = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav-links");

  hamburger.addEventListener("click", () => {
    nav.classList.toggle("active");
  });
