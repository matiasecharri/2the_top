///-------------------------FRAGMENT VERSION RENDER SPEED INCREASED-----------------------///
//COMENTAR EL CODIGO, PENSAR EN AGREGAR TRANSICIONES, SEGURAMENTE ES ALGO COMO BEFORELOADING Y METER UN DIV
import { arrayFruitsX } from "/Dom/08_FRUITS/arrays.js";

const $main = document.querySelector("main");
const $containerCards = document.getElementById("containerCards");
const $searchBar = document.getElementById("searchBar");
const $userPanel = document.getElementById("userPanelX");
const $led = document.getElementById("ledLight");

const arrayFruits = arrayFruitsX;
let userText = "";
let isSomethingChecked = false;

const printer = (array, container, nombre, imagen) => {
  $led.classList.remove("led-red");
  const fragment = document.createDocumentFragment();
  array.forEach(elemento => {
    const cardDiv = document.createElement("div");
    cardDiv.classList.add("cardFruits");

    const filterDiv = document.createElement("div");
    filterDiv.classList.add("filter");
    cardDiv.appendChild(filterDiv);

    const buttonCardPlus = document.createElement("button");
    buttonCardPlus.classList.add("addToCart");
    buttonCardPlus.innerHTML = `<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
    width="40%"  viewBox="0 0 45.402 45.402"
    xml:space="preserve">
 <g>
   <path d="M41.267,18.557H26.832V4.134C26.832,1.851,24.99,0,22.707,0c-2.283,0-4.124,1.851-4.124,4.135v14.432H4.141
     c-2.283,0-4.139,1.851-4.138,4.135c-0.001,1.141,0.46,2.187,1.207,2.934c0.748,0.749,1.78,1.222,2.92,1.222h14.453V41.27
     c0,1.142,0.453,2.176,1.201,2.922c0.748,0.748,1.777,1.211,2.919,1.211c2.282,0,4.129-1.851,4.129-4.133V26.857h14.435
     c2.283,0,4.134-1.867,4.133-4.15C45.399,20.425,43.548,18.557,41.267,18.557z"/>
 </g>
 </svg>`;
    const buttonCardMinus = document.createElement("button");
    buttonCardMinus.classList.add("deleteFromCart");
    buttonCardMinus.innerHTML = `<svg width=40%  viewBox="0 -12 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns">
    
    <title>minus</title>
    <desc>Created with Sketch Beta.</desc>
    <defs>

</defs>
    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">
        <g id="Icon-Set-Filled" sketch:type="MSLayerGroup" transform="translate(-414.000000, -1049.000000)">
            <path d="M442,1049 L418,1049 C415.791,1049 414,1050.79 414,1053 C414,1055.21 415.791,1057 418,1057 L442,1057 C444.209,1057 446,1055.21 446,1053 C446,1050.79 444.209,1049 442,1049" id="minus" sketch:type="MSShapeGroup">

</path>
        </g>
    </g>
</svg>`;
    cardDiv.appendChild(buttonCardPlus);
    cardDiv.appendChild(buttonCardMinus);

    const pElement = document.createElement("p");
    pElement.textContent = elemento[nombre].toUpperCase();
    cardDiv.appendChild(pElement);

    const imgElement = document.createElement("img");
    imgElement.src = elemento[imagen];
    imgElement.alt = elemento[nombre];
    cardDiv.appendChild(imgElement);

    fragment.appendChild(cardDiv);
  });

  container.innerHTML = "";
  container.appendChild(fragment);
};

const uiSounds = file => {
  let uiSound = new Audio(file);
  uiSound.play();
};

const searching = array => {
  $searchBar.addEventListener("keyup", event => {
    $containerCards.innerHTML = "";
    userText = event.target.value.toLowerCase();
    const filteredArray = array.filter(element => {
      return element.name.toLowerCase().includes(userText);
    });

    if (filteredArray.length !== 0) {
      $led.classList.remove("led-red");
    }
    if (filteredArray.length === 0) {
      $containerCards.innerHTML = `<span class="traditionalClass">SORRY WE DON'T HAVE THAT!</span>`;
      $led.classList.add("led-red");
    } else {
      printer(filteredArray, $containerCards, "name", "image");
      imageModal();
    }

    $searchBar.addEventListener("input", event => {
      if (event.target.value === "") {
        $led.classList.remove("led-red");
      }
      $containerCards.innerHTML = "";
      event.target.value === ""
        ? printer(array, $containerCards, "name", "image")
        : null;
      imageModal();
    });
  });
};

const imageModal = () => {
  const imagesCards = document.querySelectorAll("#containerCards img");

  imagesCards.forEach(img => {
    img.addEventListener("click", event => {
      uiSounds("/Dom/08_FRUITS/assets/sounds/ui-click.wav");
      const clickedImage = event.target;
      const fruitName = clickedImage.alt;
      const fruitData = arrayFruits.find(x => x.name === fruitName);
      if (fruitData) {
        const modal = document.createElement("div");
        modal.id = "modal";
        modal.innerHTML = `
          <img src="${clickedImage.src}" alt="${clickedImage.alt}">
          <div class="modalDiv">
          <p class="modalP"><span>Origin:</span> ${fruitData.origin}</p>
          <p class="modalP"><span>Description:</span> ${fruitData.description}</p>
          </div>
        `;

        $main.appendChild(modal);

        modal.addEventListener("click", x => {
          uiSounds("/Dom/08_FRUITS/assets/sounds/ui-close.wav");
          $main.removeChild(modal);
        });
      }
    });
  });
};

const createUnrepeatedList = (array, property) => {
  const types = array.map(x => {
    return x[property];
  });
  const noDuplicated = new Set(...[types]);
  const arrayNoDuplicated = [...noDuplicated];
  return arrayNoDuplicated;
};

const types = createUnrepeatedList(arrayFruits, "type");

const printer2 = (array, container) => {
  const fragment = document.createDocumentFragment();
  array.forEach(element => {
    const label = document.createElement("label");
    label.classList.add("custom-checkbox");
    label.setAttribute("for", element);

    label.innerHTML = `
      ${element}
      <input type="checkbox" id="${element}" name="${element}" value="${element}">
      <span class="checkmark"></span>
    `;

    fragment.appendChild(label);
  });

  container.innerHTML = "";
  container.appendChild(fragment);
};

printer(arrayFruits, $containerCards, "name", "image");
printer2(types, $userPanel);
imageModal();

const $checkboxes = document.querySelectorAll(".custom-checkbox");
const unrepeatedCategories = new Set();

$checkboxes.forEach(checkbox => {
  checkbox.addEventListener("change", event => {
    let activeCheckbox = event.target.value;
    event.target.checked
      ? unrepeatedCategories.add(activeCheckbox)
      : unrepeatedCategories.delete(activeCheckbox);
    const arrayOfActiveCheckbox = [...unrepeatedCategories];
    const filterByCheck = arrayFruits.filter(x => {
      return arrayOfActiveCheckbox.includes(x.type);
    });
    if (filterByCheck.length !== 0) {
      $containerCards.innerHTML = "";
      printer(filterByCheck, $containerCards, "name", "image");
      searching(filterByCheck);
      imageModal();
      isSomethingChecked = true;
    } else {
      $searchBar.value = "";
      $containerCards.innerHTML = "";
      searching(arrayFruits);
      printer(arrayFruits, $containerCards, "name", "image");
      imageModal();
      isSomethingChecked = false;
    }
    $searchBar.addEventListener("input", x => {
      if (isSomethingChecked === true) {
        printer(filterByCheck, $containerCards, "name", "image");
      }
    });
  });
});

searching(arrayFruits);
