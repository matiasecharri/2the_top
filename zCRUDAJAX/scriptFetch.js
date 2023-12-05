//HTML elements declaration.
const d = document;
const $table = d.querySelector(".content-characters");
const $form = d.querySelector(".crud-form");
const $title = d.querySelector(".crud-title");
const $fragment = d.createDocumentFragment();
const $sendButton = d.getElementById("send");

//Printer funtionality, is going to print the cards based on the array.
const printer = array => {
  array.forEach(character => {
    const $card = d.createElement("div");
    $card.classList.add("card");
    $card.classList.add("card-auxiliar");

    const $image = d.createElement("img");
    $image.src = character.photo;
    $image.alt = character.name;

    const $cardInfo = d.createElement("article");
    $cardInfo.classList.add("card-info");

    const $h2 = d.createElement("h2");
    $h2.innerText = character.name;

    const $p1 = d.createElement("p");
    const $p2 = d.createElement("p");
    $p1.innerText = `Cromo: ${character.cromo} - Is Alive: ${character.isAlive}`;
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

//CRUD - DELETE
const characterDELETE = async id => {
  try {
    const response = await fetch(
      `http://localhost:5000/cyberpunk-character/${id}`,
      {
        method: "DELETE",
      }
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

//Buttons that will trigger the CRUD DELETE
const deleteActions = () => {
  $table.addEventListener("click", event => {
    if (event.target.classList.contains("delete")) {
      const idToDelete = event.target.dataset.id;
      characterDELETE(idToDelete);
    }
  });
};

//Consuming API
const consumeApi = async () => {
  try {
    const response = await fetch("http://localhost:5000/cyberpunk-characters");
    const data = await response.json();
    /*Handling errors*/
    if (!response.ok) {
      throw {
        message: response.statusText || "🚬 Oops Something happend!",
        status: response.status,
      };
    }
    /*Actions if everything goes OK!*/
    printer(data);
    deleteActions();
  } catch (error) {
    console.warn(error);
  }
};
consumeApi();
