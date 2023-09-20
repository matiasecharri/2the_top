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

    const buttonCard = document.createElement("button");
    buttonCard.classList.add("addToCart");
    buttonCard.innerHTML = ` <svg height="60%" width="800px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
    viewBox="0 0 300.003 300.003" xml:space="preserve">
 <g>
   <g>
     <path d="M150,0C67.159,0,0.001,67.159,0.001,150c0,82.838,67.157,150.003,149.997,150.003S300.002,232.838,300.002,150
       C300.002,67.159,232.839,0,150,0z M213.281,166.501h-48.27v50.469c-0.003,8.463-6.863,15.323-15.328,15.323
       c-8.468,0-15.328-6.86-15.328-15.328v-50.464H87.37c-8.466-0.003-15.323-6.863-15.328-15.328c0-8.463,6.863-15.326,15.328-15.328
       l46.984,0.003V91.057c0-8.466,6.863-15.328,15.326-15.328c8.468,0,15.331,6.863,15.328,15.328l0.003,44.787l48.265,0.005
       c8.466-0.005,15.331,6.86,15.328,15.328C228.607,159.643,221.742,166.501,213.281,166.501z"/>
   </g>
 </g>
 </svg>`;
    cardDiv.appendChild(buttonCard);

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
