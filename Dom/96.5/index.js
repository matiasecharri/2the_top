//Transformar estoen una interfaz de utilidades, con calculadora, reloj, precio del bitcxoin, etc, a su vez con un menu desplegable que pemita a los usuarios volver a poner las cosas y a su vez que el circulo ROJO las borre, ademas que ssea drag and drop, a su vezz que pregunte el nombre y tenga saludo
const $inputText = document.getElementById("textField");
const $buttonSend = document.getElementById("send");
const $containerList = document.getElementById("containerToDo");

const toDoArray = [];

const inputText = (text = "") => {
  if (text === "") {
    return;
  }
  toDoArray.push({
    content: text,
    id: new Date().getTime(),
  });
};

const printer = array => {
  $containerList.innerHTML = "";
  array.forEach(element => {
    $containerList.innerHTML += `
    <div class="item" id="${element.id}">
    <p>"${element.content}"</p>
</div>`;
  });
};

const toDoCreator = () => {
  $buttonSend.addEventListener("click", event => {
    const userInput = $inputText.value;
    inputText(userInput);
    $inputText.value = "";
    console.log(toDoArray);
    printer(toDoArray);
  });
};

toDoCreator();
