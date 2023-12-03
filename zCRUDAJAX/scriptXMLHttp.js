const d = document;
const $table = d.querySelector(".content-characters");
const $form = d.querySelector(".crud-form");
const $title = d.querySelector(".crud-title");
const $sendButton = d.getElementById("send");
const $h1 = d.querySelector("h1");
$h1.innerText = "EDGERUNNERS CRUD API REST AJAX XMLHTTP";
const $fragment = d.createDocumentFragment();

const printing = array => {
  if (array.length === 0) {
    return;
  }
  array.forEach(character => {
    const $card = d.createElement("div");
    $card.classList.add("card");
    $card.classList.add("card-help");
    const $overlay = d.createElement("div");

    const $image = d.createElement("img");
    $image.setAttribute("src", character.photo);
    $image.setAttribute("alt", `A photo of ${character.name}.`);
    $image.onerror = () => {
      console.warn(
        `${character.name} photo has a problem and is loading the default picture.`
      );
      $image.setAttribute("src", "/zCRUDAJAX/failedToLoad.jpg");
    };
    const $cardInfo = d.createElement("div");
    $cardInfo.classList.add("card-info");

    const $characterTitle = d.createElement("h2");
    $characterTitle.innerText = character.name;

    const $p1 = d.createElement("p");
    const $p2 = d.createElement("p");
    let cromo;
    let alive;
    character.hasCromo === "true" ? (cromo = "Yes") : (cromo = "No");
    character.isAlive === "true" ? (alive = "Yes") : (alive = "No");
    if (character.isAlive === "null") {
      alive = "Maybe...";
    }
    $p1.innerText = `Cromo: ${cromo} - Is Alive: ${alive}`;
    $p2.innerText = character.info;

    const $buttonsDiv = d.createElement("div");
    $buttonsDiv.classList.add("card-buttons");
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
    $card.appendChild($overlay);
    $cardInfo.appendChild($characterTitle);
    $cardInfo.appendChild($p1);
    $cardInfo.appendChild($p2);
    $card.appendChild($cardInfo);
    $buttonsDiv.appendChild($buttonEdit);
    $buttonsDiv.appendChild($buttonDelete);
    $card.appendChild($buttonsDiv);
    $fragment.appendChild($card);
  });
  $table.innerHTML = "";
  $table.appendChild($fragment);
};

const ajax = options => {
  let { url, method, success, error, data } = options;

  const request = new XMLHttpRequest();

  request.addEventListener("readystatechange", event => {
    if (request.readyState !== 4) return;
    if (request.status >= 200 && request.status < 300) {
      const json = JSON.parse(request.responseText);
      success(json);
    } else {
      const message = request.statusText || "An error happend";
      error(`⚠️${message} ${request.status}`);
    }
  });

  request.open(method || "GET", url);
  request.setRequestHeader("Content-type", "application/json;charset=utf-8");
  request.send(JSON.stringify(data));
};

const getAllCharacters = () => {
  ajax({
    url: "http://localhost:5000/cyberpunk-characters",
    method: "GET", //If the user doesnt specifies a method is going to apply GET as default (line 24)
    success: json => {
      console.log(json);
      const characters = json;
      printing(characters);
    },
    error: err => {
      console.warn(err);
      document.title = "⚠️ERROR!";
      const $errorOnDocument = document.createElement("p");
      $errorOnDocument.innerText = err.toUpperCase();
      $table.style.setProperty("justify-content", "center");
      $table.style.setProperty("align-items", "center");
      $errorOnDocument.style.setProperty("font-size", "3rem");
      $errorOnDocument.style.setProperty("color", "red");
      $table.appendChild($errorOnDocument);
      $title.style.setProperty("color", "red");
      $title.innerText = "⚠️ERROR SOMETHING HAPPEND";
    },
    data: null, //Not needed
  });
};

d.addEventListener("DOMContentLoaded", getAllCharacters);
