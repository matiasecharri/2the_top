document.title = "navigator/pg_new_things";
// ⚡65. DOM 4 - CSS Classes



const $card = document.querySelector(".card");
console.log($card.classList);
console.log($card.className);
console.log($card.classList.contains("card"));

$card.classList.add("noHeight");

//Funciona como interruptor, si tiene la clase la saca sino la pone.
let cardDisruption = setInterval(() => {
  $card.classList.toggle("transition");
}, 1000);

let cardCleaner = setTimeout(() => {
  $card.innerHTML = `<h2>ACTIONS_REQUIRED</h2>`;
  $card.classList.replace("noHeight", "heightValue");
}, 1000);

