/**
 * Title: theme.js
 * Author: Walter McCue
 * Date: 10/29/23
 * Description: Script to capture and set the dark/light themes
 */


const btn = document.getElementById("theme-toggle");
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
const setTheme = document.body.classList;
const currentTheme = localStorage.getItem("theme");


// Functions to set either light or dark mode
function setDark() {
  setTheme.toggle("dark-theme");
  btn.innerHTML = `<i class="fa-solid fa-moon"></i>`;
}
function setLight() {
  setTheme.toggle("light-theme");
  btn.innerHTML = `<i class="fa-solid fa-sun" ></i>`;
}


// Sets the current theme upon page load
if (currentTheme == "dark-theme") {
  setDark();
} else if (currentTheme == "light-theme")  {
  setLight();
} else if (prefersDarkScheme.matches) {
  setDark();
} else {
  setLight();
}


// On click event that toggles between themes and saves them to local storage
function themeToggle() {
  setTheme.toggle("light-theme");
  setTheme.toggle("dark-theme");
  if (setTheme == "dark-theme") {
    btn.innerHTML = `<i class="fa-solid fa-moon"></i>`;
    localStorage.clear();
    localStorage.setItem("theme", "dark-theme");
  } else {
    btn.innerHTML = `<i class="fa-solid fa-sun" ></i>`;
    localStorage.clear();
    localStorage.setItem("theme", "light-theme");
  }
}
