const $main = document.getElementById("main");
const $sendButton = document.getElementById("newLottery");

const personajes = ["Michael", "Dwight", "Jim", "Pam", "Angela", "Tobby"];

const newLottery = array => {
  const winnerNumber = Math.floor(Math.random() * array.length);
  const winner = array[winnerNumber];
  return winner;
};

const renderWinner = () => {
  $main.innerHTML = "";
  $main.innerHTML = `The winner is ${newLottery(personajes)}`;
};

$sendButton.addEventListener("click", renderWinner);

document.addEventListener("DOMContentLoaded", event => {
  const $paragraphs = document.querySelectorAll("p");

  $paragraphs.forEach(element => {
    if (window.innerWidth <= 767) {
      element.style.setProperty("font-size", "20px");
    }
  });
});
