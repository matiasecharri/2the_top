const d = document;
const $container = d.querySelector(".main-2");
const $templateCard = d.querySelector(".template-pk").content;
const $fragment = d.createDocumentFragment();

const pokemonName = window.location.search.slice(9);
console.log(window.location.search);

const printer = pokemon => {
  const $img = $templateCard.querySelector(".card_img");
  const $title = $templateCard.querySelector(".card_title");
  $img.src = pokemon.sprites.front_default;
  $img.alt = pokemon.name;
  $title.innerText = `${pokemon.name[0].toUpperCase() + pokemon.name.slice(1)}`;

  const $clone = d.importNode($templateCard, true);
  $fragment.appendChild($clone);
  $container.appendChild($fragment);
};

const printAbilities = pokemon => {
  pokemon.abilities.forEach(a => {
    $container.innerHTML += `<h3 style="margin-top: 10px">${
      a.ability.name[0].toUpperCase() + a.ability.name.slice(1)
    }<h3>`;
  });
};

const getPokemon = async () => {
  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
    );

    if (!response.ok) {
      throw new Error(`Something went wrong ${response.status}`);
    }

    const pokemon = await response.json();

    printer(pokemon);
    printAbilities(pokemon);
  } catch (error) {
    console.warn(error);
  }
};

getPokemon();
