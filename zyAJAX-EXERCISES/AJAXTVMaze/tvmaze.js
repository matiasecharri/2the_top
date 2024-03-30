const d = document;
const $inputSearch = d.getElementById("search-bar");
const $templateCard = d.querySelector(".template-movie").content;
const $container = d.querySelector(".movie-container");
const $fragment = d.createDocumentFragment();

const autoSearch = "batman";
let link = `https://api.tvmaze.com/search/shows?q=${autoSearch}`;

const renderLoader = () => {
  $container.innerHTML = `
    <div class="loader">
    <span class="bar"></span>
    <span class="bar"></span>
    <span class="bar"></span>
    </div>`;
};

const renderNoResults = () => {
  $container.innerHTML = `
    <p> Whoops.. No results found!</p>`;
};

const printer = (array, container) => {
  if (array.length < 1) {
    renderNoResults();
    return;
  }

  array.forEach(show => {
    const $img = $templateCard.querySelector(".card_img");
    const $title = $templateCard.querySelector(".card_title");
    const $anchor = $templateCard.querySelector(".card_anchor");

    $title.innerText = show.show.name;
    $img.src = show.show.image
      ? show.show.image.medium
      : "https://manybackgrounds.com/images/hd/starry-night-sky-dark-aesthetic-ro6a8cda8gg0zoil.jpg";
    $img.alt = show.show.name;
    $anchor.href = show.show.url ? show.show.url : "#";
    console.log(show.show);

    const $clone = d.importNode($templateCard, true);
    $fragment.appendChild($clone);
  });
  setTimeout(() => {
    container.innerHTML = "";
    container.appendChild($fragment);
    setTimeout(() => {
      const $cards = d.querySelectorAll(".movie-card");
      $cards.forEach(card => {
        card.classList.add("opacity-on");
      });
    }, 100);
  }, 400);
};

const getData = async () => {
  try {
    const response = await fetch(link);

    if (!response.ok) {
      throw new Error(
        `Something went wrong: ${response.status} ${
          response.statusText || "fix it!"
        }`
      );
    }

    const data = await response.json();
    printer(data, $container);
  } catch (error) {
    console.warn(error);
  }
};

$inputSearch.addEventListener("keypress", event => {
  let query = event.target.value;
  link = `https://api.tvmaze.com/search/shows?q=${query}`;
  if (event.key === "Enter" && query !== "") {
    renderLoader();
    getData();
  }
});

getData();
