///-------------------------INNERHTML VERSION LOW RENDER SPEED-----------------------///
// import { arrayFruitsX } from "/Dom/08_FRUITS/arrays.js";
// const $main = document.querySelector("main");
// const $containerCards = document.getElementById("containerCards");
// const $searchBar = document.getElementById("searchBar");
// const $userPanel = document.getElementById("userPanelX");
// let isSomethingChecked = false;

// const arrayFruits = arrayFruitsX;
// let userText = "";

// const printer = (array, container, nombre, imagen) => {
//   array.forEach(elemento => {
//     container.innerHTML += `<div class="cardFruits">
// <div class="filter"></div>
// <p>${elemento[nombre].toUpperCase()}</p>
// <img src="${elemento[imagen]}" alt="${elemento[nombre]}">
// </div>`;
//   });
// };

// const searching = array => {
//   $searchBar.addEventListener("keyup", event => {
//     $containerCards.innerHTML = "";
//     userText = event.target.value.toLowerCase();
//     const filteredArray = array.filter(element => {
//       return element.name.toLowerCase().includes(userText);
//     });
//     filteredArray.length === 0
//       ? ($containerCards.innerHTML = `<span class="traditionalClass">SORRY WE DON'T HAVE THAT!</span>`)
//       : printer(filteredArray, $containerCards, "name", "image");
//     imageModal();

//     $searchBar.addEventListener("input", event => {
//       $containerCards.innerHTML = "";
//       event.target.value === ""
//         ? printer(array, $containerCards, "name", "image")
//         : null;
//       imageModal();
//     });
//   });
// };

// const imageModal = () => {
//   const imagesCards = document.querySelectorAll("#containerCards img");

//   imagesCards.forEach(img => {
//     img.addEventListener("click", event => {
//       const clickedImage = event.target;
//       const fruitName = clickedImage.alt;

//       // Buscamos la descripción y origen de la fruta en arrayFruits
//       const fruitData = arrayFruits.find(x => x.name === fruitName);
//       if (fruitData) {
//         const modal = document.createElement("div");
//         modal.id = "modal";
//         modal.innerHTML = `
//           <img src="${clickedImage.src}" alt="${clickedImage.alt}">
//           <div class="modalDiv">
//           <p class="modalP"><span>Origin:</span> ${fruitData.origin}</p>
//           <p class="modalP"><span>Description:</span> ${fruitData.description}</p>
//           </div>
//         `;

//         $main.appendChild(modal);

//         modal.addEventListener("click", x => {
//           $main.removeChild(modal);
//         });
//       }
//     });
//   });
// };

// const createUnrepeatedList = (array, property) => {
//   const types = array.map(x => {
//     return x[property];
//   });
//   const noDuplicated = new Set(...[types]);
//   const arrayNoDuplicated = [...noDuplicated];
//   return arrayNoDuplicated;
// };
// const types = createUnrepeatedList(arrayFruits, "type");

// const printer2 = (array, container) => {
//   array.forEach(element => {
//     container.innerHTML += `<label class="custom-checkbox" for="${element}">${element}
//     <input type="checkbox" id="${element}" name="${element}" value="${element}">
//     <span class="checkmark"></span>
// </label>`;
//   });
// };

// printer(arrayFruits, $containerCards, "name", "image");
// printer2(types, $userPanel);
// imageModal();

// const $checkboxes = document.querySelectorAll(".custom-checkbox");
// const unrepeatedCategories = new Set();

// $checkboxes.forEach(checkbox => {
//   checkbox.addEventListener("change", event => {
//     let activeCheckbox = event.target.value;
//     event.target.checked
//       ? unrepeatedCategories.add(activeCheckbox)
//       : unrepeatedCategories.delete(activeCheckbox);
//     const arrayOfActiveCheckbox = [...unrepeatedCategories];
//     const filterByCheck = arrayFruits.filter(x => {
//       return arrayOfActiveCheckbox.includes(x.type);
//     });
//     if (filterByCheck.length !== 0) {
//       $containerCards.innerHTML = "";
//       printer(filterByCheck, $containerCards, "name", "image");
//       searching(filterByCheck);
//       imageModal();
//       isSomethingChecked = true;
//     } else {
//       $searchBar.value = "";
//       $containerCards.innerHTML = "";
//       searching(arrayFruits);
//       printer(arrayFruits, $containerCards, "name", "image");
//       imageModal();
//       isSomethingChecked = false;
//     }
//     $searchBar.addEventListener("input", x => {
//       if (isSomethingChecked === true) {
//         printer(filterByCheck, $containerCards, "name", "image");
//       }
//     });
//   });
// });

// searching(arrayFruits);
///-------------------------FRAGMENT VERSION RENDER SPEED INCREASED-----------------------///
import { arrayFruitsX } from "/Dom/08_FRUITS/arrays.js";

const $main = document.querySelector("main");
const $containerCards = document.getElementById("containerCards");
const $searchBar = document.getElementById("searchBar");
const $userPanel = document.getElementById("userPanelX");

const arrayFruits = arrayFruitsX;
let userText = "";
let isSomethingChecked = false;

const printer = (array, container, nombre, imagen) => {
  const fragment = document.createDocumentFragment();
  array.forEach(elemento => {
    const cardDiv = document.createElement("div");
    cardDiv.classList.add("cardFruits");

    const filterDiv = document.createElement("div");
    filterDiv.classList.add("filter");
    cardDiv.appendChild(filterDiv);

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

const searching = array => {
  $searchBar.addEventListener("keyup", event => {
    $containerCards.innerHTML = "";
    userText = event.target.value.toLowerCase();
    const filteredArray = array.filter(element => {
      return element.name.toLowerCase().includes(userText);
    });
    filteredArray.length === 0
      ? ($containerCards.innerHTML = `<span class="traditionalClass">SORRY WE DON'T HAVE THAT!</span>`)
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
