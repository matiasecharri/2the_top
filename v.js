const $containerCards = document.querySelector(".main-card-container");
const $searchBar = document.getElementById("searchbar");
const $containerCheckboxes = document.getElementById("checkbox-container");
const $fragment = document.createDocumentFragment();
const activeCategories = [];
let checkeds = [];
let userText; //Hacer que checkbox tengan en cuenta el userText al tocar, es decir que si tenia escrito "REY" y chequeo duelist deberia mostrarme SOLO a reyna.

const discardErrors = array => {
  const filtered = array.filter(character => character.role !== null);
  return filtered;
};

const generateCategories = array => {
  const repeatedCategories = array.map(character => character.role.displayName);
  const unrepeatedCategories = [...new Set(repeatedCategories)];
  return unrepeatedCategories;
};

const renderCharacters = array => {
  $containerCards.innerHTML = "";
  array.forEach(agent => {
    const $card = document.createElement("div");
    $card.classList.add("card");

    const $imgContainer = document.createElement("div");
    $imgContainer.classList.add("card-img");
    $imgContainer.style.setProperty(
      "background-image",
      `url(${agent.background})`
    );

    const $img = document.createElement("img");
    $img.src = agent.fullPortrait;

    const $description = document.createElement("div");
    $description.classList.add("card-info");

    const $characterName = document.createElement("h2");
    $characterName.innerText = agent.displayName;

    $imgContainer.appendChild($img);

    $card.appendChild($imgContainer);

    $fragment.appendChild($card);
  });
  $containerCards.appendChild($fragment);
};

const renderCheckbox = array => {
  array.forEach(category => {
    const $label = document.createElement("label");
    $label.innerText = category;
    const $checkbox = document.createElement("input");
    $checkbox.type = "checkbox";
    $checkbox.dataset.id = category;
    $label.appendChild($checkbox);
    $fragment.appendChild($label);
  });
  $containerCheckboxes.appendChild($fragment);
};

const checkboxActions = array => {
  $containerCheckboxes.addEventListener("change", event => {
    event.preventDefault();
    if (event.target.matches("input")) {
      if (!activeCategories.includes(event.target.dataset.id)) {
        activeCategories.push(event.target.dataset.id);
      } else {
        const categoryToDelete = activeCategories.findIndex(
          category =>
            category === event.target.dataset.id &&
            event.target.checked === false
        );
        activeCategories.splice(categoryToDelete, 1);
      }
      const arrayCheckeds = array.filter(character => {
        if (activeCategories.includes(character.role.displayName)) {
          return character;
        }
      });
      if (activeCategories.length !== 0) {
        checkeds = arrayCheckeds;
        renderCharacters(arrayCheckeds);
      } else {
        renderCharacters(array);
        checkeds = arrayCheckeds;
      }
    }
  });
};

const searchBarActions = array => {
  $searchBar.addEventListener("input", event => {
    userText = event.target.value.toLowerCase();
    if (activeCategories.length !== 0) {
      const filteredAndChecked = checkeds.filter(character => {
        return character.displayName.toLowerCase().includes(userText);
      });
      renderCharacters(filteredAndChecked);
    } else {
      const filteredArray = array.filter(character => {
        return character.displayName.toLowerCase().includes(userText);
      });
      renderCharacters(filteredArray);
    }
  });
};

const consumeApi = async () => {
  try {
    const response = await fetch("https://valorant-api.com/v1/agents");
    if (!response.ok) {
      throw {
        message: response.statusText || "Something went wrong...",
        status: response.status,
      };
    }
    const data = await response.json();
    const agentsBugged = data.data;
    const agents = discardErrors(agentsBugged);
    const categories = generateCategories(agents);
    renderCheckbox(categories);
    renderCharacters(agents);
    checkboxActions(agents);
    searchBarActions(agents);
  } catch (error) {
    console.warn(error);
  }
};

consumeApi();
