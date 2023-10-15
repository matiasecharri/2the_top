export default function darkModeButtonStorage (){
const $elements = document.querySelectorAll(".data-dark");
const $buttonOnOff = document.querySelector(".darkModeButton");
let mode = JSON.parse(localStorage.getItem("darkMode"));
console.log(mode);

const isDarkMode = () => {
  if (mode === true) {
    $elements.forEach((element) => {
      element.classList.add("darkOn");
      return;
    });
  }
};

const buttonDarkLight = () => {
  $buttonOnOff.addEventListener("click", (event) => {
    $elements.forEach((element) => {
      if (
        element.classList.contains("data-dark") &&
        element.classList.contains("darkOn") === false
      ) {
        element.classList.add("darkOn");
        localStorage.setItem("darkMode", true);
      } else {
        element.classList.remove("darkOn");
        localStorage.setItem("darkMode", false);
      }
    });
  });
};

const dissapearButton = () => {
  window.addEventListener("scroll", (event) => {
    if (window.scrollY < 100) {
      $buttonOnOff.classList.remove("hiddenIs");
    } else {
      $buttonOnOff.classList.add("hiddenIs");
      return;
    }
  });
};
buttonDarkLight();
isDarkMode();
dissapearButton();
}