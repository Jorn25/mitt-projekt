// Hämta element
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

// Lyssna på klick på hamburgermenyn
menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

// Lyssna på klick **i hela navLinks**, men filtrera bara länkar
navLinks.addEventListener('click', (e) => {
  if (e.target.tagName === 'A') {
    navLinks.classList.remove('show'); // Stänger menyn när en länk klickas
  }
});
