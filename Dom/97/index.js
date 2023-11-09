const $main = document.getElementById("main");
const $sendButton = document.getElementById("newLottery");

const personajes = [
  "Michael",
  "Dwight",
  "Jim",
  "Pam",
  "Angela",
  "Tobby",
  "Carlitos",
  "Dibella",
  "Jose",
];

const nuevoSorteo = array => {
  const posicionRandom = Math.floor(Math.random() * array.length);
  return array[posicionRandom];
};

$sendButton.addEventListener("click", event => {
  $main.innerHTML = `El ganador es ${nuevoSorteo(personajes)}`;
});
