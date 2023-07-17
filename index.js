/* DOM Elements */
const darkButton = document.getElementById('dark-btn');
const lightButton = document.getElementById('light-btn');
let header = document.getElementById('head');
const body = document.body;

/* Apply cached theme on reload */

const theme = localStorage.getItem('theme');

if (theme) {
  body.classList.add(theme);
}

/* Event Listeners */

darkButton.addEventListener('click', () => {
  body.classList.replace('light', 'dark');
  header.innerHTML = "Dark Mode";
  localStorage.setItem('theme', 'dark');
});

lightButton.addEventListener('click', () => {
  body.classList.replace('dark', 'light');
  header.innerHTML = "Light Mode";
  localStorage.setItem('theme', 'light');
});
