const $inputText = document.getElementById("textField");
const $buttonSend = document.getElementById("send");
const $containerToDos = document.getElementById("scroll-content");
const $whiteButton = document.getElementById("whitePoint");
const $pinkButton = document.getElementById("pinkPoint");
const $whiteModal = document.getElementById("whiteModal");
const $darkLightButton = document.getElementById("themeChanger");
const $main = document.getElementById("main");
const $bgImage = document.getElementById("bgImage");
const $mainContainer = document.getElementById("mainContainer");
const $autoThemeButton = document.getElementById("themeAuto");
let isDarkMode = false;
const arrayToDos = [];

const printer = array => {
  $containerToDos.innerHTML = "";
  array.forEach(element => {
    $containerToDos.innerHTML += `
    <div class="card-to-do-list" id=${element.id}>
    <div class="internal-container">
        <p>${element.content} </p>
    </div>
    </div>`;
  });
};

const toDoObjectCreation = () => {
  arrayToDos.push({ content: $inputText.value, id: new Date().getTime() });
};

const toDoRender = () => {
  $buttonSend.addEventListener("click", event => {
    if ($inputText.value === "") {
      return;
    }
    toDoObjectCreation();
    printer(arrayToDos);
    $inputText.value = "";
  });
};

const toDoRenderKey = () => {
  $inputText.addEventListener("keypress", event => {
    if ($inputText.value === "") {
      return;
    }
    if (event.key === "Enter") {
      toDoObjectCreation();
      printer(arrayToDos);
      $inputText.value = "";
    }
  });
};

const appearWhiteModal = () => {
  $whiteButton.addEventListener("click", event => {
    $whiteModal.classList.toggle("modalAppear");
  });
};

const fullWidthWindow = () => {
  $pinkButton.addEventListener("click", event => {
    $mainContainer.classList.toggle("full-width");
    $buttonSend.classList.toggle("increase-width");
  });
};

const themeChecker = () => {
  isDarkMode === false
    ? ($main.classList.add("darkMain"),
      $bgImage.classList.add("darkImage"),
      ($darkLightButton.innerText = "Light Mode"),
      (isDarkMode = true),
      localStorage.setItem("theme", true))
    : ($main.classList.remove("darkMain"),
      $bgImage.classList.remove("darkImage"),
      ($darkLightButton.innerText = "Dark Mode"),
      (isDarkMode = false),
      localStorage.setItem("theme", false));
};

const buttonDarkLight = () => {
  $darkLightButton.addEventListener("click", event => {
    themeChecker();
  });
};

const storageChecker = () => {
  let theme;
  if (localStorage.getItem("theme") !== null) {
    theme = JSON.parse(localStorage.getItem("theme"));
    if (theme === true) {
      isDarkMode = false;
      themeChecker();
      return;
    }
    if (theme === false) {
      isDarkMode = true;
      themeChecker();
      return;
    }
  }
};

storageChecker();
toDoRenderKey();
toDoRender();
appearWhiteModal();
fullWidthWindow();
buttonDarkLight();
