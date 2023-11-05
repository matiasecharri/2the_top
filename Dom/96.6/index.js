//Object APP good practice for dom elements and global states.
// const app = {
//   $inputText,
//   $buttonSend,
//   $containerToDos,
// };

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
const regex = /[aeiouAEIOUbcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]/;
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

//🍥Creates toDoObjects with 3 properties, the content (equal to $inputText.value), completed always false at the start and an id.
const toDoObjectCreator = content => {
  return {
    content: content,
    completed: false,
    id: new Date().getTime(),
  };
};

//🍥Push objects to an array.
const taskPusher = (array, toDoObject) => {
  array.push(toDoObject);
};

//🍥 All the actions realized by clicking the sendButton.
const sendButtonActions = () => {
  $buttonSend.addEventListener("click", event => {
    if (regex.test($inputText.value) === false) {
      $inputText.classList.add("bounce");
      setTimeout(() => {
        $inputText.classList.remove("bounce");
      }, 1000);
      $inputText.value = "";
      return;
    }
    taskPusher(arrayToDos, toDoObjectCreator($inputText.value));
    printer(arrayToDos);
    $inputText.value = "";
  });
};

//🍥 Same as sendButtonActions but with the ENTER KEY.
const enterKeyActions = () => {
  $inputText.addEventListener("keypress", event => {
    if (event.key === "Enter") {
      if (regex.test($inputText.value) === false) {
        $inputText.classList.add("bounce");
        setTimeout(() => {
          $inputText.classList.remove("bounce");
        }, 1000);
        $inputText.value = "";
        return;
      }
      taskPusher(arrayToDos, toDoObjectCreator($inputText.value));
      printer(arrayToDos);
      $inputText.value = "";
    }
  });
};

//🍥 Appear and dissapears the modal (linked to the whitebutton)
const appearWhiteModal = () => {
  $whiteButton.addEventListener("click", event => {
    $whiteModal.classList.toggle("modalAppear");
  });
};

//🍥 Extends the width of the toDoWindow (linked to the pínkbutton)
const fullWidthWindow = () => {
  $pinkButton.addEventListener("click", event => {
    $mainContainer.classList.toggle("full-width");
    $buttonSend.classList.toggle("increase-width");
  });
};

//🍥 Checker and setter of the theme.
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

//🍥 All the actions realized by clicking the themeButton.
const buttonThemeActions = () => {
  $darkLightButton.addEventListener("click", event => {
    themeChecker();
  });
};

//🍥 If the localstorage is not empty, sets the theme saved by the user.
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

//🍥 Execution of every functionalitie.
const execution = () => {
  try {
    storageChecker();
    sendButtonActions();
    enterKeyActions();
    appearWhiteModal();
    fullWidthWindow();
    buttonThemeActions();
  } catch (error) {
    console.error(error);
  }
};

execution();
