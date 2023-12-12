const $containerCards = document.querySelector(".main-card-container");
const $searchBar = document.getElementById("searchbar");
const $containerCheckboxes = document.getElementById("checkbox-container");
const $fragment = document.createDocumentFragment();
const checkedCategories = [];

const printer = array => {
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

const searchingBrokenAgents = array => {
  const filteredArray = array.filter(agent => agent.role !== null);
  return filteredArray;
};

const createCheckboxList = array => {
  const roles = array.map(agent => agent.role.displayName);
  const unrepeatedList = [...new Set(roles)];
  return unrepeatedList;
};

const renderCheckbox = array => {
  array.forEach(category => {
    const $checkBox = document.createElement("input");
    $checkBox.type = "checkbox";
    $checkBox.dataset.id = category;

    const $label = document.createElement("label");
    $label.classList.add("fix-style");
    $label.textContent = category;

    const $fragment = document.createDocumentFragment();
    $fragment.appendChild($checkBox);
    $fragment.appendChild($label);

    $containerCheckboxes.appendChild($fragment);
  });
};

const checkActions = array => {
  $containerCheckboxes.addEventListener("click", event => {
    if (event.target.matches("input")) {
      if (event.target.checked === true) {
        if (!checkedCategories.includes(event.target.dataset.id))
          checkedCategories.push(event.target.dataset.id.toLowerCase());
        const arrayChequeados = array.filter(agent => {
          if (
            checkedCategories.includes(agent.role.displayName.toLowerCase())
          ) {
            return agent;
          }
        });
        if (arrayChequeados.length !== 0) {
          printer(arrayChequeados);
        }
      }

      if (event.target.checked === false) {
        const categoryToDelete = checkedCategories.indexOf(
          event.target.dataset.id
        );
        checkedCategories.splice(categoryToDelete, 1);
        const arrayChequeados = array.filter(agent => {
          if (
            checkedCategories.includes(agent.role.displayName.toLowerCase())
          ) {
            return agent;
          }
        });
        if (arrayChequeados.length !== 0) {
          printer(arrayChequeados);
        } else {
          printer(array);
        }
      }
    }
  });
};

const crossedFilter = array => {
  let userText;
  $searchBar.addEventListener("keyup", event => {
    userText = event.target.value.toLowerCase();
    const filteredText = array.filter(agent => {
      return agent.displayName.toLowerCase().includes(userText.toLowerCase());
    });
    if (checkedCategories.length === 0) {
      printer(filteredText);
    } else {
      const filteredTextAndChecks = array.filter(agent => {
        if (
          checkedCategories.includes(agent.role.displayName.toLowerCase()) &&
          agent.displayName.toLowerCase().includes(userText.toLowerCase())
        ) {
          return agent;
        }
      });
      printer(filteredTextAndChecks);
    }
  });
};

const getData = async () => {
  try {
    const response = await fetch("https://valorant-api.com/v1/agents");
    if (!response.ok) {
      throw {
        message:
          response.statusText || "Something went wrong, cant get the agents!",
        status: response.status,
      };
    }
    const data = await response.json();
    const agents = data.data;
    const newArray = searchingBrokenAgents(agents);
    const checkboxes = createCheckboxList(newArray);
    printer(newArray);
    renderCheckbox(checkboxes);
    checkActions(newArray);
    crossedFilter(newArray);
  } catch (error) {
    console.warn(error);
  }
};

getData();
