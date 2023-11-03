//Transformar estoen una interfaz de utilidades, con calculadora, reloj, precio del bitcxoin, etc, a su vez con un menu desplegable que pemita a los usuarios volver a poner las cosas y a su vez que el circulo ROJO las borre, ademas que ssea drag and drop, a su vezz que pregunte el nombre y tenga saludo
const $inputText = document.getElementById("textField");
const $buttonSend = document.getElementById("send");
const $containerList = document.getElementById("containerToDo");
const $whiteButton = document.getElementById("whitePoint");
const $containerrAll = document.querySelector(".container");

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
    $containerList.innerHTML += `  <div class="container-item">
    <div class="item" id="${element.id}">
        <p>${element.content} </p>
    </div>
</div>`;
  });
};

const toDoCreator = () => {
  $buttonSend.addEventListener("click", event => {
    if ($inputText.value === "") {
      return;
    }
    const userInput = $inputText.value;
    inputText(userInput);
    $inputText.value = "";
    console.log(toDoArray);
    printer(toDoArray);
  });
};

const toDoCreatorKey = () => {
  $inputText.addEventListener("keypress", event => {
    if (event.key === "Enter") {
      const userInput = $inputText.value;
      inputText(userInput);
      $inputText.value = "";
      console.log(toDoArray);
      printer(toDoArray);
    }
  });
};

const widthChanger = () => {
  $whiteButton.addEventListener("click", event => {
    $containerrAll.classList.toggle("expanded");
  });
};

toDoCreatorKey();
toDoCreator();
widthChanger();
