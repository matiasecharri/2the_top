const d = document;
const $table = d.querySelector(".content-characters");
const $form = d.querySelector(".crud-form");
const $title = d.querySelector(".crud-title");
const $fragment = d.createDocumentFragment();
const $sendButton = d.getElementById("send");

const regex = {
  regexname: /^[A-Za-zÀ-ÖØ-öø-ÿ\s'-]+$/,
  regexurl:
    /(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z]{2,}(\.[a-zA-Z]{2,})(\.[a-zA-Z]{2,})?\/[a-zA-Z0-9]{2,}|((https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z]{2,}(\.[a-zA-Z]{2,})(\.[a-zA-Z]{2,})?)|(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}(\.[a-zA-Z0-9]{2,})?/,
};

//🚬 This function creates a loader, needs a HTML element as an argument.
const loading = htmlElement => {
  const $loader = `<div class="banter-loader">
    <div class="banter-loader__box"></div>
    <div class="banter-loader__box"></div>
    <div class="banter-loader__box"></div>
    <div class="banter-loader__box"></div>
    <div class="banter-loader__box"></div>
    <div class="banter-loader__box"></div>
    <div class="banter-loader__box"></div>
    <div class="banter-loader__box"></div>
    <div class="banter-loader__box"></div>
  </div>`;
  htmlElement.innerHTML = $loader;
};

//🚬 This function prints an array, needs an array as an argument.
const printing = array => {
  array.forEach(character => {
    const $card = d.createElement("div");
    $card.classList.add("card");

    const $overlay = d.createElement("div");
    $overlay.classList.add("overlay");

    const $image = d.createElement("img");
    $image.setAttribute("src", character.photo);

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
    $buttonDelete.innerText = "DELETE";

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

//🚬 This function captures and creates a new object based in the form, needs a dynamicID as an argument.
const captureForm = dynamicID => {
  return {
    id: dynamicID,
    name: $form[0].value || "Unknown",
    info: $form[1].value || "Maybe he was V?",
    isAlive: $form[2].value || "We don't know...",
    hasCromo: $form[3].value || "We don't know...",
    photo:
      $form[4].value ||
      "https://www.destructoid.com/wp-content/uploads/2023/09/cyberpunk-edgerunners-episode-010-adam-smasher.jpg",
  };
};

//🚬 This function realizes a POST request to create a new character.
const createNewCharacter = async () => {
  const response = await fetch("http://localhost:5000/cyberpunk-characters");
  const data = await response.json();
  const ids = data.map(character => {
    return character.id;
  });
  const newId = Math.max(...ids) + 1;
  const datosFormulario = captureForm(newId);
  const url = "http://localhost:5000/cyberpunk-characters"; // Reemplaza con la URL correcta del servidor

  try {
    const respuesta = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // Establece el tipo de contenido a JSON
      },
      body: JSON.stringify(datosFormulario), // Convierte los datos en una cadena JSON y envíalos en el cuerpo de la solicitud
    });

    if (respuesta.ok) {
      // La solicitud se completó con éxito
      const respuestaJson = await respuesta.json(); // Si esperas una respuesta JSON
      console.log(respuestaJson); // Hacer algo con la respuesta del servidor
    } else {
      throw new Error("Error en la solicitud POST");
    }
  } catch (error) {
    console.error(error); // Manejar errores
  }
};

//🚬 This function realizes SEND BUTTON ACTIONS.
const sendButtonActions = () => {
  $sendButton.addEventListener("click", event => {
    event.preventDefault();
    if (!regex.regexname.test($form[0].value)) {
      $form[0].classList.add("denegated");
      $form[0].placeholder =
        "⚠️Character name is required and needs to be valid.";
      return;
    } else {
      $form[0].classList.remove("denegated");
    }
    if (!regex.regexname.test($form[1].value)) {
      $form[1].classList.add("denegated");
      $form[1].placeholder =
        "⚠️Character info is required and needs to be valid.";
      return;
    } else {
      $form[1].classList.remove("denegated");
    }
    if ($form[2].value === "") {
      $form[2].classList.add("denegated");
      return;
    } else {
      $form[2].classList.remove("denegated");
    }
    if ($form[3].value === "") {
      $form[3].classList.add("denegated");
      return;
    } else {
      $form[3].classList.remove("denegated");
    }
    if (!regex.regexurl.test($form[4].value)) {
      $form[4].classList.add("denegated");
      $form[4].value = "";
      $form[4].placeholder = "⚠️Photo URL is required and needs to be valid.";
      return;
    } else {
      $form[4].classList.remove("denegated");
    }
    createNewCharacter();
  });
};

//🚬 Fetching and printing.
const getData = async () => {
  const response = await fetch("http://localhost:5000/cyberpunk-characters");
  const data = await response.json();
  printing(data);
};

loading($table);
sendButtonActions();

setTimeout(() => {
  getData().then(() => {
    setTimeout(() => {
      const $cards = document.querySelectorAll(".card");
      $cards.forEach(card => {
        card.classList.add("card-auxiliar");
      });
      const $overlay = document.querySelectorAll(".overlay");
      $overlay.forEach(overlay => {
        overlay.classList.add("overout");
      });
    }, 100);
  });
}, 300);
