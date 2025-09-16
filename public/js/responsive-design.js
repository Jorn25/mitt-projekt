/**
 * Enable a responsive navbar toggle.
 */

// Hämta element
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

// Lyssna på klick
menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});
