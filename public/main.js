// Mobile menu toggle
const btn = document.getElementById('menuBtn');
const nav = document.getElementById('nav');
const menuIcon = btn.querySelector('svg');

btn?.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('hidden');
  nav.classList.toggle('flex');
  nav.classList.toggle('flex-col');
  nav.classList.toggle('absolute');
  nav.classList.toggle('top-16');
  nav.classList.toggle('left-0');
  nav.classList.toggle('right-0');
  nav.classList.toggle('bg-brand-dark');
  nav.classList.toggle('p-4');


  btn.setAttribute('aria-expanded', String(!isOpen));
  if (isOpen) {
    menuIcon.innerHTML = `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>`;
  } else {
    menuIcon.innerHTML = `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>`;
  }
});

// Set footer year
const yearEl = document.getElementById('year');
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}
