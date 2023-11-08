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
