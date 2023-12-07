//HTML elements declaration.
const d = document;
const $table = d.querySelector(".content-characters");
const $form = d.querySelector(".crud-form");
const $title = d.querySelector(".crud-title");
const $fragment = d.createDocumentFragment();
const $sendButton = d.getElementById("send");
const $cancelEditButton = d.getElementById("cancelEdit");
const regex = {
  regexname: /^[A-Za-zÀ-ÖØ-öø-ÿ\s'-]+$/,
  regexinfo: /^(?![\s\d]+$).+$/,
  regexurl:
    /(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z]{2,}(\.[a-zA-Z]{2,})(\.[a-zA-Z]{2,})?\/[a-zA-Z0-9]{2,}|((https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z]{2,}(\.[a-zA-Z]{2,})(\.[a-zA-Z]{2,})?)|(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}(\.[a-zA-Z0-9]{2,})?/,
};
let externalData;
let isEditing = false;
let isEditingId;

//Printer funtionality, is going to print the cards based on the array.
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

//-------------------------🐼------------------------------------//
/*CRUD - POST*/
const createCharacter = async id => {
  try {
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: id,
        name: $form[0].value,
        info: $form[1].value,
        isAlive: $form[2].value,
        hasCromo: $form[3].value,
        photo: $form[4].value,
      }),
    };
    const response = await fetch(
      "http://localhost:5000/cyberpunk-characters",
      options
    );
    if (!response.ok) {
      throw {
        message:
          response.statusText ||
          `The character with the id ${id} was not created`,
        status: response.status,
      };
    }
  } catch (error) {
    console.warn(error);
  }
};

/*CRUD - PUT*/
const updateCharacter = async id => {
  const options = {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: $form[0].value,
      info: $form[1].value,
      isAlive: $form[2].value,
      hasCromo: $form[3].value,
      photo: $form[4].value,
    }),
  };
  const response = await fetch(
    `http://localhost:5000/cyberpunk-characters/${id}`,
    options
  );
};

/*CRUD - DELETE*/
const deleteCharacter = async id => {
  try {
    const options = {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    };
    const response = await fetch(
      `http://localhost:5000/cyberpunk-characters/${id}`,
      options
    );
    if (!response.ok) {
      throw {
        message: `🚬ERROR when trying to delete the character with the ID: ${id}`,
        response: response.status,
      };
    }
  } catch (error) {
    console.warn(error);
  }
};
//-------------------------🐼------------------------------------//

//Button that will trigger the CRUD POST
const createButtonActions = () => {
  $sendButton.addEventListener("click", event => {
    if (isEditing === true) {
      return;
    }
    event.preventDefault();
    if (!regex.regexname.test($form[0].value)) {
      return;
    }
    if (!regex.regexinfo.test($form[1].value)) {
      return;
    }
    if ($form[2].value === "") {
      return;
    }
    if ($form[3].value === "") {
      return;
    }
    if (!regex.regexurl.test($form[4].value)) {
      return;
    }
    const arrayIds = externalData.map(character => {
      return character.id;
    });
    const newId = Math.max(...arrayIds) + 1;
    createCharacter(newId);
  });
};

//Button that will trigger the CRUD PUT
const editButtonActions = () => {
  $table.addEventListener("click", event => {
    if (event.target.classList.contains("edit")) {
      if (isEditing === false) {
        const $editButtons = document.querySelectorAll(".edit");
        $editButtons.forEach(button => {
          button.classList.add("button-disabled");
        });
        $cancelEditButton.classList.add("showing");
        $title.innerText =
          "EDITING: " + event.target.dataset.name.toUpperCase();
        isEditingId = event.target.dataset.id;
        $form[0].value = event.target.dataset.name;
        $form[1].value = event.target.dataset.info;
        $form[2].value = event.target.dataset.isAlive;
        $form[3].value = event.target.dataset.hasCromo;
        $form[4].value = event.target.dataset.photo;
        isEditing = true;
        return;
      }
    }
  });
};

const cancelEditButton = () => {
  $cancelEditButton.addEventListener("click", event => {
    event.preventDefault();
    if (isEditing === true) {
      const $editButtons = document.querySelectorAll(".edit");
      $editButtons.forEach(button => {
        button.classList.remove("button-disabled");
      });
      $cancelEditButton.classList.remove("showing");
      $title.innerText = "ADD CHARACTER";
      isEditing = false;
      $form[0].value = "";
      $form[1].value = "";
      $form[2].value = "";
      $form[3].value = "";
      $form[4].value = "";
      return;
    }
  });
};

const sendEditButtonActions = () => {
  $sendButton.addEventListener("click", event => {
    event.preventDefault();
    if (isEditing === false) {
      return;
    }
    updateCharacter(isEditingId);
  });
};

//Buttons that will trigger the CRUD DELETE
const deleteButtonActions = () => {
  $table.addEventListener("click", event => {
    if (event.target.classList.contains("delete")) {
      const idToDelete = event.target.dataset.id;
      deleteCharacter(idToDelete);
    }
  });
};

//Consuming API
const consumeApi = async () => {
  try {
    const response = await fetch("http://localhost:5000/cyberpunk-characters");
    const data = await response.json();
    externalData = data;
    /*Handling errors*/
    if (!response.ok) {
      throw {
        message: response.statusText || "🚬 Oops Something happend!",
        status: response.status,
      };
    }
    /*Actions if everything goes OK!*/
    printer(data);
    createButtonActions();
    sendEditButtonActions();
    editButtonActions();
    deleteButtonActions();
    cancelEditButton();
  } catch (error) {
    console.warn(error);
  }
};
consumeApi();

setInterval(() => {
  console.log(isEditing);
}, 1200);
