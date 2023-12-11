const $containerCards = document.querySelector(".main-card-container");
const $searchBar = document.getElementById("searchbar");
const $containerCheckboxes = document.getElementById("checkboxes");
const $fragment = document.createDocumentFragment();

const searchingBrokenAgents = array => {
  const filteredArray = array.filter(agent => agent.role !== null);
  return filteredArray;
};

const printer = array => {
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
    printer(newArray);
    console.log(newArray);
  } catch (error) {
    console.warn(error);
  }
};

getData();
