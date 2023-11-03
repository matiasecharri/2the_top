const $inputText = document.getElementById("textField");
const $buttonSend = document.getElementById("send");
const $containerToDos = document.getElementById("scroll-content");

const arrayToDos = [];

const printer = array => {
  $containerToDos.innerHTML = "";
  array.forEach(element => {
    $containerToDos.innerHTML += `
    <div class="card-to-do-list" id=${element.id}>
    <div class="internal-container">
        <p>${element.content} </p>
    </div>
    </div>`;
  });
};

const toDoObjectCreation = () => {
  arrayToDos.push({ content: $inputText.value, id: new Date().getTime() });
};

const toDoRender = () => {
  $buttonSend.addEventListener("click", event => {
    if ($inputText.value === "") {
      return;
    }
    toDoObjectCreation();
    printer(arrayToDos);
    $inputText.value = "";
  });
};

const toDoRenderKey = () => {
  $inputText.addEventListener("keypress", event => {
    if ($inputText.value === "") {
      return;
    }
    if (event.key === "Enter") {
      toDoObjectCreation();
      printer(arrayToDos);
      $inputText.value = "";
    }
  });
};

toDoRenderKey();
toDoRender();
