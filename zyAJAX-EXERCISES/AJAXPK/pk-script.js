const d = document;
const $templateCard = d.querySelector(".template-pk").content;
const $fragment = d.createDocumentFragment();
const $main = d.querySelector("main");
const $nextButton = document.getElementById("next");
const $prevButton = document.getElementById("prev");

/* Is also possible and easier to use previous and next from the response*/
let offset = 0;
let limit;
const pokemonsPerPage = 12;
const offsetIncrease = 12;

const renderCards = (array, container) => {
  array.forEach(pokemon => {
    const $img = $templateCard.querySelector(".card_img");
    const $title = $templateCard.querySelector(".card_title");
    const $anchor = $templateCard.querySelector(".card_anchor");

    $anchor.href = `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`;
    $img.src = pokemon.sprites.front_default;
    $img.alt = pokemon.name;
    $title.innerText = `${
      pokemon.name[0].toUpperCase() + pokemon.name.slice(1)
    }`;

    const $clone = d.importNode($templateCard, true);
    $fragment.appendChild($clone);
  });
  setTimeout(() => {
    container.innerHTML = "";
    container.appendChild($fragment);
  }, 550);
};

const renderSkeletons = () => {
  const skeletons = new Array(offsetIncrease).fill(null);
  const $skeletonsHTML = skeletons.map(
    () => `
  <div class="skeleton">
    <div class="skeleton-img"></div>
    <div class="skeleton-details">
      <div class="skeleton-line"></div>
      <div class="skeleton-line"></div>
      <div class="skeleton-line"></div>
      <div class="skeleton-line"></div>
    </div>
  </div>
`
  );
  $main.innerHTML = $skeletonsHTML;
};

const renderLoader = () => {
  $main.innerHTML = `<div class="loader"></div>`;
};

const getData = async () => {
  try {
    const res = await fetch(
      `https://pokeapi.co/api/v2/pokemon/?limit=${pokemonsPerPage}&offset=${offset}`
    );
    if (!res.ok) {
      throw new Error(`${res.status} First fetch failed 🚬`);
    }
    const data = await res.json();
    limit = data.count;

    const pokemons = data.results;
    /*🚀 General fetch finished 🚀*/

    const individualURL = pokemons.map(async pokemon => {
      try {
        const url = await fetch(pokemon.url);
        if (!url.ok) {
          throw new Error(`${url.status} Individual fetch failed 🚬`);
        }
        return url.json();
      } catch (err) {
        console.warn(err);
      }
    });

    const individualInfo = await Promise.all(individualURL);
    console.log(individualInfo);
    renderCards(individualInfo, $main);
  } catch (err) {
    console.error(err);
  }
};

$nextButton.addEventListener("click", event => {
  if (offset >= limit - offsetIncrease) {
    return;
  }
  renderSkeletons();
  offset += offsetIncrease;
  getData();
});

$prevButton.addEventListener("click", event => {
  if (offset === 0) {
    return;
  }
  renderSkeletons();
  offset -= offsetIncrease;
  getData();
});

getData();
