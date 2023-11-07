//Elementos del DOM que van a ser necearios/array global.
const $inputTexto = document.getElementById("inputTexto");
const $botonEnviar = document.getElementById("botonEnviar");
const $contenedor = document.getElementById("container");
const toDoArray = [];

//Dentro de APP encapsulamos los elementos que vamos a estar usando frecuentemente/globales.
const app = {
  regex: /[aeiouAEIOUbcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]/,
  $inputTexto,
  $botonEnviar,
  $contenedor,
};

//Creamoss los TODO en forma de objeto, otorgandole 3 propiedades, el contenido, un id y si estan completados o no, siempre empezara en falso.
const toDoObjectCreator = content => {
  return { content: content, id: Date.now(), isCompleted: false };
};

//TaskPusher se encarga de pushear los objetos creados por toDoObjectCreator al array que queramos.
const taskPusher = (array, toDoObject) => {
  array.push(toDoObject);
};

// Función para borrar
const deleteToDo = event => {
  const button = event.target;
  const id = Number(button.id);
  const index = toDoArray.findIndex(toDo => toDo.id === id);
  if (index !== -1) {
    toDoArray.splice(index, 1);
    renderToDos(toDoArray);
  }
};

const editToDo = event => {
  const button = event.target;
  toDoArray.forEach(toDo => {
    if (button.classList.contains(toDo.id)) {
      app.$inputTexto.value = toDo.content;
      let hola = prompt("xD");
      toDo.content = hola;
      renderToDos(toDoArray);
    }
  });
};

//Impresion de los objetos en el HTML
const renderToDos = array => {
  const fragment = document.createDocumentFragment(); // Crea un fragmento de documento

  array.forEach(toDoObject => {
    const cardDiv = document.createElement("div");
    cardDiv.classList.add("card-todo");
    cardDiv.id = toDoObject.id;

    const contentPara = document.createElement("p");
    contentPara.textContent = toDoObject.content;

    const deleteButton = document.createElement("button");
    deleteButton.classList.add("delete");
    deleteButton.id = toDoObject.id;
    deleteButton.textContent = "DELETE!";
    deleteButton.addEventListener("click", deleteToDo);

    const editButton = document.createElement("button");
    editButton.classList.add("edit");
    editButton.classList.add(toDoObject.id);
    editButton.textContent = "EDIT!";
    editButton.addEventListener("click", editToDo);

    const link = document.createElement("a");
    link.textContent = "GO";
    link.setAttribute("href", `/Dom/96.7/details.html?todo=${toDoObject.id}`);

    cardDiv.appendChild(contentPara);
    cardDiv.appendChild(deleteButton);
    cardDiv.appendChild(editButton);
    cardDiv.appendChild(link);

    fragment.appendChild(cardDiv); // Agrega el elemento al fragmento
  });

  app.$contenedor.innerHTML = "";

  app.$contenedor.appendChild(fragment);
};

//Acciones que realizara nuestro boton de CREAR nueva tarea.
const sendButtonActions = () => {
  app.$botonEnviar.addEventListener("click", event => {
    if (!app.regex.test(app.$inputTexto.value)) {
      throw new Error("😵‍💫The to-do task cant be empty!");
    }
    taskPusher(toDoArray, toDoObjectCreator(app.$inputTexto.value));
    renderToDos(toDoArray);
    app.$inputTexto.value = "";
  });
};

const execution = () => {
  try {
    sendButtonActions();
  } catch (error) {
    console.log(error);
  }
};

execution();
