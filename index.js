/* DOM Elements */
const darkButton = document.getElementById('dark-btn');
const lightButton = document.getElementById('light-btn');
const body = document.body;

/* Apply cached theme on reload */

const theme = localStorage.getItem('theme');

if (theme) {
  body.classList.add(theme);
}

/* Event Listeners */

darkButton.addEventListener('click', () => {
  body.classList.replace('light', 'dark');
  localStorage.setItem('theme', 'dark');
});

lightButton.addEventListener('click', () => {
  body.classList.replace('dark', 'light');
  localStorage.setItem('theme', 'light');
});
