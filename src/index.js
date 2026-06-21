// ===========================
// Navbar scroll effect
// ===========================
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("bg-white/80", "backdrop-blur-md", "shadow-md", "border-gray-200/20");
    navbar.classList.remove("bg-white/95", "border-transparent");
  } else {
    navbar.classList.remove("bg-white/80", "backdrop-blur-md", "shadow-md", "border-gray-200/20");
    navbar.classList.add("bg-white/95", "border-transparent");
  }
});

// ===========================
// Mobile menu toggle
// ===========================
const menuBtn = document.getElementById("mobile-menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
const hamburgerTop = document.getElementById("hamburger-top");
const hamburgerMid = document.getElementById("hamburger-mid");
const hamburgerBot = document.getElementById("hamburger-bot");
let isMenuOpen = false;

function toggleMenu() {
  isMenuOpen = !isMenuOpen;
  menuBtn.setAttribute("aria-expanded", isMenuOpen);

  if (isMenuOpen) {
    // Open menu
    mobileMenu.style.maxHeight = mobileMenu.scrollHeight + "px";
    mobileMenu.style.opacity = "1";

    // Animate hamburger to X
    hamburgerTop.style.transform = "translateY(8px) rotate(45deg)";
    hamburgerMid.style.opacity = "0";
    hamburgerBot.style.transform = "translateY(-8px) rotate(-45deg)";
  } else {
    // Close menu
    mobileMenu.style.maxHeight = "0";
    mobileMenu.style.opacity = "0";

    // Reset hamburger
    hamburgerTop.style.transform = "";
    hamburgerMid.style.opacity = "1";
    hamburgerBot.style.transform = "";
  }
}

menuBtn.addEventListener("click", toggleMenu);

// Close mobile menu when a link is clicked
mobileMenu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    if (isMenuOpen) {
      toggleMenu();
    }
  });
});

// Close mobile menu on window resize to desktop
window.addEventListener("resize", () => {
  if (window.innerWidth >= 1024 && isMenuOpen) {
    toggleMenu();
  }
});

// ===========================
// Scroll Reveal Animation (Intersection Observer)
// ===========================
document.addEventListener("DOMContentLoaded", () => {
  const revealSections = document.querySelectorAll("section:not(#hero)");

  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          observer.unobserve(entry.target); // Stop observing once revealed
        }
      });
    },
    {
      threshold: 0.08, // Trigger when 8% of the section is visible
      rootMargin: "0px 0px -50px 0px", // Trigger slightly before it comes fully into view
    }
  );

  revealSections.forEach((section) => {
    section.classList.add("reveal");
    revealObserver.observe(section);
  });
});
