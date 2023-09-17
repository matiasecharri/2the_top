// CASO1:
// Searchbar ON
// CASO2:
// 1+ Checkbox ON
// CASO3:
// Searchbar ON + 1+CHECKBOX ON
// CASO4:
// All OFF
import { arrayFruitsX } from "/Dom/08_FRUITS/arrays.js";
const $main = document.querySelector("main");
const $containerCards = document.getElementById("containerCards");
const $searchBar = document.getElementById("searchBar");
const $userPanel = document.getElementById("userPanelX");

const arrayFruits = arrayFruitsX;
let userText = "";

const printer = (array, container, nombre, imagen) => {
  array.forEach(elemento => {
    container.innerHTML += `<div class="cardFruits">                                  
<div class="filter"></div>                                   
<p>${elemento[nombre].toUpperCase()}</p>
<img src="${elemento[imagen]}" alt="${elemento[nombre]}">
</div>`;
  });
};

const searching = array => {
  $searchBar.addEventListener("keyup", event => {
    $containerCards.innerHTML = "";
    userText = event.target.value.toLowerCase();
    const filteredArray = array.filter(element => {
      return element.name.toLowerCase().includes(userText);
    });
    filteredArray.length === 0
      ? ($containerCards.innerHTML = `<span class="traditionalClass">SORRY WE DON'T HAVE THAT FRUIT</span>`)
      : printer(filteredArray, $containerCards, "name", "image");
    imageModal();

    $searchBar.addEventListener("input", event => {
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
      const clickedImage = event.target;
      const fruitName = clickedImage.alt;

      // Buscamos la descripción y origen de la fruta en arrayFruits
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
  array.forEach(element => {
    container.innerHTML += `<label class="custom-checkbox" for="${element}">${element}
    <input type="checkbox" id="${element}" name="color" value="${element}">
    <span class="checkmark"></span>
</label>`;
  });
};

printer(arrayFruits, $containerCards, "name", "image");
printer2(types, $userPanel);
searching(arrayFruits);
imageModal();

const $checkboxes = document.querySelectorAll(".custom-checkbox");
let pushedCategories = [];

$checkboxes.forEach(checkbox => {
  checkbox.addEventListener("change", event => {
    if (!event.target.checked) {
      $containerCards.innerHTML = "";
      pushedCategories = [];
      searching(arrayFruits);
      imageModal();
    }
    if (event.target.checked) {
      pushedCategories.push(event.target.id);
      if (pushedCategories.includes(event.target.id)) {
        let tropicalArray = arrayFruits.filter(x => {
          return pushedCategories.includes(x.type);
        });
        console.log(pushedCategories);

        $containerCards.innerHTML = "";
        printer(tropicalArray, $containerCards, "name", "image");
        searching(tropicalArray);
        imageModal();
      }
    } else {
      printer(arrayFruits, $containerCards, "name", "image");
      searching(arrayFruits);
      imageModal();
    }
  });
});
