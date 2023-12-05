// MVC
// Modelo -> Se actualiza lo que pasa internamente en la aplicacion
// Vista -> Se actualiza lo que ve la persona
// Controlador -> El intermediario, ejemplo un boton
//EVENT DELEGATION

// https://chat.openai.com/c/ccd5813f-4080-4803-8961-617b755706b4

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
let $buttonsDelete = document.querySelectorAll(".buttonD");

let isDarkMode = false;
const regex =
  /[aeiouAEIOUbcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZあ-んア-ン]/;
let arrayToDos = JSON.parse(localStorage.getItem("toDos")) || [];

// 🍥 This function is used to print objects as cards from an array.
const printer = array => {
  const fragment = document.createDocumentFragment();

  array.forEach(element => {
    const cardContainer = document.createElement("div");
    cardContainer.classList.add("card-to-do-list");

    const actionButtonsContainer = document.createElement("div");
    actionButtonsContainer.classList.add("container-action-buttons");

    const checkboxLabel = document.createElement("label");
    checkboxLabel.classList.add("contx");

    const checkboxInput = document.createElement("input");
    checkboxInput.setAttribute("type", "checkbox");
    checkboxInput.setAttribute("role", "checkbox");
    checkboxInput.setAttribute("tabindex", "0");
    checkboxInput.setAttribute("aria-label", "check and uncheck to-do");
    checkboxInput.id = element.id;
    checkboxLabel.addEventListener("change", checkboxActions);

    const checkmarkDiv = document.createElement("div");
    checkmarkDiv.classList.add("checkmark");

    const celebrateSvg = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "svg"
    );
    celebrateSvg.setAttribute("width", "50");
    celebrateSvg.setAttribute("height", "50");
    celebrateSvg.classList.add("celebrate");

    const polygon1 = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "polygon"
    );
    polygon1.setAttribute("points", "0,0 10,10");

    const polygon2 = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "polygon"
    );
    polygon2.setAttribute("points", "0,25 10,25");

    const polygon3 = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "polygon"
    );
    polygon3.setAttribute("points", "0,50 10,40");

    const polygon4 = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "polygon"
    );
    polygon4.setAttribute("points", "50,0 40,10");

    const polygon5 = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "polygon"
    );
    polygon5.setAttribute("points", "50,25 40,25");

    const polygon6 = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "polygon"
    );
    polygon6.setAttribute("points", "50,50 40,40");

    celebrateSvg.appendChild(polygon1);
    celebrateSvg.appendChild(polygon2);
    celebrateSvg.appendChild(polygon3);
    celebrateSvg.appendChild(polygon4);
    celebrateSvg.appendChild(polygon5);
    celebrateSvg.appendChild(polygon6);

    checkboxLabel.appendChild(checkboxInput);
    checkboxLabel.appendChild(checkmarkDiv);
    checkboxLabel.appendChild(celebrateSvg);

    actionButtonsContainer.appendChild(checkboxLabel);

    const internalContainer = document.createElement("div");
    internalContainer.classList.add("internal-container");

    const contentParagraph = document.createElement("p");
    contentParagraph.textContent = element.content;
    if (element.completed === false) {
      checkboxInput.checked = false;
      contentParagraph.classList.remove("lineT");
    }
    if (element.completed === true) {
      checkboxInput.checked = true;
      contentParagraph.classList.add("lineT");
    }
    internalContainer.appendChild(contentParagraph);

    const deleteButton = document.createElement("button");
    deleteButton.setAttribute("aria-label", "Delete to-do card");
    deleteButton.setAttribute("role", "button");
    deleteButton.setAttribute("tabindex", "0");
    deleteButton.classList.add("buttonD", element.id);

    const deleteSvg = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "svg"
    );
    deleteSvg.setAttribute("viewBox", "0 0 448 512");
    deleteSvg.classList.add("svgIcon");

    const deletePath = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "path"
    );
    deletePath.setAttribute(
      "d",
      "M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"
    );

    deleteSvg.appendChild(deletePath);
    deleteButton.appendChild(deleteSvg);

    cardContainer.appendChild(actionButtonsContainer);
    cardContainer.appendChild(internalContainer);
    cardContainer.appendChild(deleteButton);

    fragment.appendChild(cardContainer);
  });

  $containerToDos.innerHTML = "";
  $containerToDos.appendChild(fragment);
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

//🍥Searchs the delete buttons and adds the addEventListener to delete.
const deleteActions = () => {
  $buttonsDelete.forEach(boton => {
    boton.addEventListener("click", event => {
      console.log(boton);
      const filterArray = arrayToDos.filter(toDo => {
        if (!boton.classList.contains(toDo.id)) {
          return toDo;
        }
      });

      arrayToDos = filterArray;
      localStorage.setItem("toDos", JSON.stringify(arrayToDos));
      printer(arrayToDos);
      soundPlayer("/Dom/96.6/ui1.wav");
      updateButtons();
      noToDosCase();
    });
  });
};

//🍥Searchs the delete buttons and adds the addEventListener to checkbox.
const checkboxActions = event => {
  const checkbox = event.target;
  arrayToDos.forEach(toDo => {
    if (Number(checkbox.id) === toDo.id && checkbox.checked === false) {
      toDo.completed = false;
      localStorage.setItem("toDos", JSON.stringify(arrayToDos));
      printer(arrayToDos);
      // updateButtons();
      return;
    }

    if (Number(checkbox.id) === toDo.id && checkbox.checked === true) {
      toDo.completed = true;
      localStorage.setItem("toDos", JSON.stringify(arrayToDos));
      printer(arrayToDos);
      // updateButtons();
      return;
    }
  });
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
      soundPlayer("/Dom/96.6/ui3.wav");
      return;
    }
    taskPusher(arrayToDos, toDoObjectCreator($inputText.value));
    printer(arrayToDos);
    soundPlayer("/Dom/96.6/ui2.wav");
    localStorage.setItem("toDos", JSON.stringify(arrayToDos));
    updateButtons();
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
        soundPlayer("/Dom/96.6/ui3.wav");

        return;
      }
      taskPusher(arrayToDos, toDoObjectCreator($inputText.value));
      localStorage.setItem("toDos", JSON.stringify(arrayToDos));
      printer(arrayToDos);
      soundPlayer("/Dom/96.6/ui2.wav");
      updateButtons();
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
    if (window.innerWidth > 540) {
      $mainContainer.classList.toggle("full-width");
      $buttonSend.classList.toggle("increase-width");
    }
  });
};

const windowCheck = () => {
  window.addEventListener("resize", event => {
    window.innerWidth < 540
      ? ($mainContainer.classList.remove("full-width"),
        $buttonSend.classList.remove("increase-width"))
      : null;
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

  if (localStorage.getItem("toDos") !== null) {
    arrayToDos = JSON.parse(localStorage.getItem("toDos"));
  }
};

//🍥 Updates buttons in the DOM.
const updateButtons = () => {
  $buttonsDelete = document.querySelectorAll(".buttonD");
  console.log("Buttons updated, actions updated");
  deleteActions();
};

//🍥 Used this if there are not to-dos pending
const noToDosCase = () => {
  if (arrayToDos.length !== 0) {
    return;
  }
  $containerToDos.innerHTML = `<div class="fillEmptySpace message1">
  <p>It seems that there are no pending to-dos! <br>
       <span style="background-color: #f3f36d;">Use <span
         style="font-weight: 500; ">Create!</span> or press <span
         style="font-weight: 500;">Enter</span> to
        appoint a new to-do...</span>
     </p>
  </div>
  
  `;
  const $message1 = document.querySelector(".message1");

  setTimeout(() => {
    $message1.classList.add("show");
  }, 100);
};

//🍥 Used this if there are not to-dos pending
const soundPlayer = file => {
  let uiSound = new Audio(file);
  uiSound.volume = 0.1;
  uiSound.play();
};

//🍥 Execution of every functionalitie.
const execution = () => {
  try {
    storageChecker();
    sendButtonActions();
    enterKeyActions();
    appearWhiteModal();
    fullWidthWindow();
    windowCheck();
    buttonThemeActions();
    if (arrayToDos.length === 0) {
      noToDosCase();
    } else {
      printer(arrayToDos);
      updateButtons();
    }
  } catch (error) {
    console.error(error);
  }
};

execution();
