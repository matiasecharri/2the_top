/* 🌎 HTML Variables declaration, regex, globalStates */
const d = document;
const $table = d.querySelector(".content-characters");
const $form = d.querySelector(".crud-form");
const $title = d.querySelector(".crud-title");
const $fragment = d.createDocumentFragment();
const $sendButton = d.getElementById("send");

const regex = {
  regexname: /^[A-Za-zÀ-ÖØ-öø-ÿ\s'-]+$/,
  regexinfo: /^(?![\s\d]+$).+$/,
  regexurl:
    /(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z]{2,}(\.[a-zA-Z]{2,})(\.[a-zA-Z]{2,})?\/[a-zA-Z0-9]{2,}|((https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z]{2,}(\.[a-zA-Z]{2,})(\.[a-zA-Z]{2,})?)|(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}(\.[a-zA-Z0-9]{2,})?/,
};
const globalStates = {
  userIsEditing: false,
  editId: null,
};

/* ♻️ Printer function to generate the cards */
const printer = array => {
  array.forEach(character => {
    const $card = d.createElement("div");
    $card.classList.add("card");
    $card.classList.add("card-auxiliar");

    const $image = d.createElement("img");
    $image.src = character.photo;
    $image.alt = character.name;
    $image.onerror = () => {
      console.warn(
        `${character.name} photo has a problem and is loading the default picture.`
      );
      $image.alt = "David Martinez Error Image";
      $image.src = "/zCRUDAJAX/failedToLoad.jpg";
    };

    const $cardInfo = d.createElement("article");
    $cardInfo.classList.add("card-info");

    const $h2 = d.createElement("h2");
    $h2.innerText = character.name;

    const $p1 = d.createElement("p");
    const $p2 = d.createElement("p");

    let alive;
    let cromo;

    if (character.isAlive === "true") {
      alive = "Yes";
    }
    if (character.isAlive === "false") {
      alive = "No";
    }
    if (character.isAlive === "null") {
      alive = "We don't know";
    }
    JSON.parse(character.hasCromo) === "true"
      ? (cromo = "Yes")
      : (cromo = "No");
    if (
      JSON.parse(character.hasCromo) !== "true" &&
      JSON.parse(character.hasCromo) !== "false"
    ) {
      cromo = "We don't know...";
    }

    $p1.innerText = `Cromo: ${cromo} - Is Alive: ${alive}`;
    $p2.innerText = character.info;

    const $buttonContainer = d.createElement("div");
    $buttonContainer.classList.add("card-buttons");

    const $buttonEdit = d.createElement("button");
    const $buttonDelete = d.createElement("button");
    $buttonEdit.innerText = "EDIT";
    $buttonEdit.classList.add("edit");
    $buttonEdit.dataset.id = character.id;
    $buttonEdit.dataset.name = character.name;
    $buttonEdit.dataset.info = character.info;
    $buttonEdit.dataset.isAlive = character.isAlive;
    $buttonEdit.dataset.hasCromo = character.hasCromo;
    $buttonEdit.dataset.photo = character.photo;

    $buttonDelete.innerText = "DELETE";
    $buttonDelete.classList.add("delete");
    $buttonDelete.dataset.id = character.id;

    $card.appendChild($image);
    $cardInfo.appendChild($h2);
    $cardInfo.appendChild($p1);
    $cardInfo.appendChild($p2);
    $card.appendChild($cardInfo);
    $buttonContainer.appendChild($buttonEdit);
    $buttonContainer.appendChild($buttonDelete);
    $card.appendChild($buttonContainer);
    $fragment.appendChild($card);
  });
  $table.appendChild($fragment);
};

/* ♻️ Validator function is used to validate form fields and avoid repeated code */
const validator = () => {
  if (!regex.regexname.test($form[0].value)) {
    return false;
  }
  if (!regex.regexinfo.test($form[1].value)) {
    return false;
  }
  if ($form[2].value === "") {
    return false;
  }
  if ($form[3].value === "") {
    return false;
  }
  if (!regex.regexurl.test($form[4].value)) {
    return false;
  }
};

//----------------------------CRUD-------------------------------///

const POST_character = async () => {
  try {
    //Generating a new id, for a new character, based on the higher ID on the array.
    const getCharacters = await axios.get(
      "http://localhost:5000/cyberpunk-characters"
    );
    const data = getCharacters.data;
    const ids = data.map(character => {
      return character.id;
    });
    const newId = Math.max(...ids) + 1;
    const fakeBody = {
      id: newId,
      name: $form[0].value,
      info: $form[1].value,
      isAlive: $form[2].value,
      hasCromo: $form[3].value,
      photo: $form[4].value,
    };
    //Axios needs the body as second argument when we are using GET, and cant be an object, doesnt need stringify.
    const response = await axios.post(
      "http://localhost:5000/cyberpunk-characters",
      fakeBody,
      {
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error(
      `ERROR: ${error.response.status} ${
        error.response.statusText || "The character was not POSTED 🚬"
      } `
    );
  }
};

const PUT_character = async id => {
  const fakeBody = {
    name: $form[0].value,
    info: $form[1].value,
    isAlive: $form[2].value,
    hasCromo: $form[3].value,
    photo: $form[4].value,
  };
  const response = await axios.put(
    `http://localhost:5000/cyberpunk-characters/${id}`,
    fakeBody,
    {
      headers: { "Content-Type": "application/json" },
    }
  );
};

const DELETE_character = async id => {
  try {
    //Options object is not needed, because axios has his own HTTP common values, and we are not sending data.
    const response = await axios.delete(
      `http://localhost:5000/cyberpunk-characters/${id}`
    );
  } catch (error) {
    console.error(
      `ERROR: ${error.response.status} ${
        error.response.statusText ||
        "error has not custom message, it was cine 🚬"
      } `
    );
  }
};

//----------------------------CRUD-------------------------------///

/* 🕹️ With this function the USER is going to REALIZE a POST, it has 2 validations, userIsEditing to check if the user is on edit mode or not and validator() to check if the form fields are correct */
const userPostActions = () => {
  $sendButton.addEventListener("click", event => {
    event.preventDefault();
    if (globalStates.userIsEditing === true) {
      return;
    }
    if (validator() === false) {
      console.error(
        "🚬 The character was not created, all fields are required."
      );
      return;
    }
    POST_character();
  });
};

/* 🕹️ With this function we are going to manage the isEditing state, turning it "TRUE" or "FALSE" triggered by the edit-btn on the cards, Im using event delegation to avoid bubbles. */
const userActivateEditModeActions = () => {
  $table.addEventListener("click", event => {
    event.preventDefault();
    if (event.target.classList.contains("edit")) {
      const $allEditButtons = document.querySelectorAll(".edit");
      if (globalStates.userIsEditing === false) {
        globalStates.userIsEditing = true;
        globalStates.editId = event.target.dataset.id;
        $title.innerText = `EDITING: ${event.target.dataset.name.toUpperCase()}`;
        $form[0].value = event.target.dataset.name;
        $form[1].value = event.target.dataset.info;
        $form[2].value = event.target.dataset.isAlive;
        $form[3].value = event.target.dataset.hasCromo;
        $form[4].value = event.target.dataset.photo;
        $allEditButtons.forEach(button => {
          button.innerText = "CANCEL EDIT";
          button.classList.add("button-disabled2");
        });
      } else {
        globalStates.userIsEditing = false;
        globalStates.editId = null;
        $title.innerText = "ADD CHARACTER";
        $form[0].value = "";
        $form[1].value = "";
        $form[2].value = "";
        $form[3].value = "";
        $form[4].value = "";
        $allEditButtons.forEach(button => {
          button.innerText = "EDIT";
          button.classList.remove("button-disabled2");
        });
      }
    }
  });
};

/* 🕹️ With this function the USER is going to REALIZE a PUT, it has 2 validations, userIsEditing to check if the user is on edit mode or not and validator() to check if the form fields are correct, it gets the ID from the button dataset. */
const userPutActions = () => {
  $sendButton.addEventListener("click", event => {
    event.preventDefault();
    if (globalStates.userIsEditing === false) {
      return;
    }
    if (validator() === false) {
      console.error(
        "🚬 The character was not created, all fields are required."
      );
      return;
    }
    PUT_character(globalStates.editId);
  });
};

/* 🕹️ With this function the USER is going to REALIZE a DELETE, it gets the ID from the button dataset.*/
const userDeleteActions = () => {
  $table.addEventListener("click", event => {
    event.preventDefault();
    if (event.target.classList.contains("delete")) {
      DELETE_character(event.target.dataset.id);
    }
  });
};

/* ✅ GET petition and all the executions.*/
const getApiData = async () => {
  try {
    const response = await axios.get(
      "http://localhost:5000/cyberpunk-characters"
    );
    const data = response.data;
    printer(data);
    userPostActions();
    userActivateEditModeActions();
    userPutActions();
    userDeleteActions();
  } catch (error) {
    console.error(
      `ERROR: ${error.response.status} ${
        error.response.statusText ||
        "error has not custom message, it was cine 🚬"
      } `
    );
  }
};

getApiData();

//Possible improve, separate logic from listeners
