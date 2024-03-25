const d = document
const $templateCard =  d.querySelector(".template-pk").content;
const $fragment = d.createDocumentFragment();
const $main = d.querySelector("main")
const $nextButton = document.getElementById("next")
const $prevButton = document.getElementById("prev")

let offset = 0
let limit
const offsetIncrease = 20

const renderCards = (array, container) => {
array.forEach(pokemon => {
    const $img = $templateCard.querySelector(".card_img")
    const $title = $templateCard.querySelector(".card_title")
    $img.src = pokemon.sprites.front_default
    $img.alt = pokemon.name
    $title.innerText = `${pokemon.name[0].toUpperCase() + pokemon.name.slice(1)}`

    const $clone = d.importNode($templateCard, true);
    $fragment.appendChild($clone);
})
container.innerHTML = ""
container.appendChild($fragment)
}

const getData = async () => {
  try {
    const res = await fetch(
      `https://pokeapi.co/api/v2/pokemon/?limit=20&offset=${offset}`
    );
    if (!res.ok) {
      throw new Error(`${res.status} First fetch failed 🚬`);
    }
    
    const data = await res.json();
    limit = data.count
    const pokemons = data.results;
    /*🚀 General fetch finished 🚀*/

    const individualURL = pokemons.map(async pokemon => {
        try {
            const url = await fetch(pokemon.url)
            if(!url.ok){
                throw new Error(`${url.status} Individual fetch failed 🚬`)
            }
            return url.json()
        } catch (err) {
            console.warn(err)
        }
    })

   const individualInfo = await Promise.all(individualURL)
   console.log(individualInfo)
   renderCards(individualInfo, $main)

  } catch (err) {
    console.error(err)
  }
};

getData();


$nextButton.addEventListener("click", event => {
    if(offset >= limit - offsetIncrease){
        return
    }
    offset += offsetIncrease
    getData()
})

$prevButton.addEventListener("click", event => {
    if (offset === 0){
        return
    }
    offset -= offsetIncrease
    getData()
})