const toogleSwitch = document.querySelector('input[type="checkbox"]');
const toogleIcon = document.getElementById("toogle__icon");
const sunIcon = toogleIcon.querySelector("i");
console.log(sunIcon);
// switch theme

function darkMode() {
  document.documentElement.setAttribute("data-theme", "dark");
  toogleIcon.children[0].textContent = "Dark Mode";
  sunIcon.classList.replace("fa-sun", "fa-moon");
  localStorage.setItem("theme", "dark");
}

function lightMode() {
  document.documentElement.setAttribute("data-theme", "light");
  toogleIcon.children[0].textContent = "Light Mode";
  sunIcon.classList.replace("fa-moon", "fa-sun");
  localStorage.setItem("theme", "light");
}
function switchTheme(event) {
  let checkedState = event.target.checked;
  if (checkedState) {
    darkMode();
    // document.documentElement.setAttribute("data-theme", "dark");
    // toogleIcon.children[0].textContent = "Dark Mode";
    // sunIcon.classList.replace("fa-sun", "fa-moon");
    // localStorage.setItem("theme", "dark");
  } else {
    //     document.documentElement.setAttribute("data-theme", "light");
    //     toogleIcon.children[0].textContent = "Light Mode";
    //     sunIcon.classList.replace("fa-moon", "fa-sun");
    //     localStorage.setItem("theme", "light");
    lightMode();
  }
}

// Eventlistener Onchange
toogleSwitch.addEventListener("change", switchTheme);

// Local Storage

const currentTheme = localStorage.getItem("theme");
if (currentTheme == "dark") {
  darkMode();
  if ((toogleSwitch.checked = true)) {
  }
} else {
  lightMode();
}
