const $inputText = document.getElementById("textField");
const $buttonSend = document.getElementById("send");
const $containerToDos = document.getElementById("scroll-content");
const $whiteButton = document.getElementById("whitePoint");
const $whiteModal = document.getElementById("whiteModal");
const $darkLightButton = document.getElementById("themeChanger");
const $main = document.getElementById("main");
const $bgImage = document.getElementById("bgImage");

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

const themeChecker = () => {
  isDarkMode === false
    ? ($main.classList.add("darkMain"),
      $bgImage.classList.add("darkImage"),
      (isDarkMode = true))
    : ($main.classList.remove("darkMain"),
      $bgImage.classList.remove("darkImage"),
      (isDarkMode = false));
};

const buttonDarkLight = () => {
  $darkLightButton.addEventListener("click", event => {
    themeChecker();
  });
};

toDoRenderKey();
toDoRender();
appearWhiteModal();
buttonDarkLight();
