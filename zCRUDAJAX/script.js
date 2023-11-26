const d = document;
const $table = d.querySelector(".content-characters");
const $form = d.querySelector(".crud-form");
const $title = d.querySelector(".crud-title");
const $fragment = document.createDocumentFragment();

const loading = htmlElement => {
  const $loader = `<div class="banter-loader">
    <div class="banter-loader__box"></div>
    <div class="banter-loader__box"></div>
    <div class="banter-loader__box"></div>
    <div class="banter-loader__box"></div>
    <div class="banter-loader__box"></div>
    <div class="banter-loader__box"></div>
    <div class="banter-loader__box"></div>
    <div class="banter-loader__box"></div>
    <div class="banter-loader__box"></div>
  </div>`;
  htmlElement.innerHTML = $loader;
};

const printing = array => {
  array.forEach(character => {
    const $card = d.createElement("div");
    $card.classList.add("card");

    const $overlay = d.createElement("div");
    $overlay.classList.add("overlay");

    const $image = d.createElement("img");
    $image.setAttribute("src", character.photo);

    const $cardInfo = d.createElement("div");
    $cardInfo.classList.add("card-info");

    const $characterTitle = d.createElement("h2");
    $characterTitle.innerText = character.name;

    const $p1 = d.createElement("p");
    const $p2 = d.createElement("p");
    let cromo;
    let alive;
    character.hasCromo === true ? (cromo = "Yes") : (cromo = "No");
    character.isAlive === true ? (alive = "Yes") : (alive = "No");
    $p1.innerText = `Cromo: ${cromo} - Is Alive: ${alive}`;
    $p2.innerText = character.info;

    const $buttonsDiv = d.createElement("div");
    $buttonsDiv.classList.add("card-buttons");
    const $buttonEdit = d.createElement("button");
    const $buttonDelete = d.createElement("button");
    $buttonEdit.innerText = "EDIT";
    $buttonDelete.innerText = "DELETE";

    $card.appendChild($image);
    $card.appendChild($overlay);
    $cardInfo.appendChild($characterTitle);
    $cardInfo.appendChild($p1);
    $cardInfo.appendChild($p2);
    $card.appendChild($cardInfo);
    $buttonsDiv.appendChild($buttonEdit);
    $buttonsDiv.appendChild($buttonDelete);
    $card.appendChild($buttonsDiv);

    $fragment.appendChild($card);
  });
  $table.innerHTML = "";
  $table.appendChild($fragment);
};

const getData = async () => {
  const response = await fetch("http://localhost:5000/cyberpunk-characters");
  const data = await response.json();
  printing(data);
};

loading($table);

setTimeout(() => {
  getData().then(() => {
    setTimeout(() => {
      const $cards = document.querySelectorAll(".card");
      $cards.forEach(card => {
        card.classList.add("card-auxiliar");
      });
      const $overlay = document.querySelectorAll(".overlay");
      $overlay.forEach(overlay => {
        overlay.classList.add("overout");
      });
    }, 100);
  });
}, 300);
