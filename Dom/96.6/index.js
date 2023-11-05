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

//🍥This function is used to print objects as cards from an array.
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

//🍥This function is used to create an object with 2 properties and after that is going to push the object to arrayToDo.
const toDoObjectCreation = () => {
  arrayToDos.push({ content: $inputText.value, id: new Date().getTime() });
};

//🍥 This function is used to call toDoObjectCreation() and then printing arrayToDos()
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

//🍥 This function is the same as toDoRender but with the ENTER KEY.
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
