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
  return { content: content, id: new Date().getTime(), isCompleted: false };
};

//TaskPusher se encarga de pushear los objetos creados por toDoObjectCreator al array que queramos.
const taskPusher = (array, toDoObject) => {
  array.push(toDoObject);
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
    deleteButton.textContent = "DELETE!";

    const editButton = document.createElement("button");
    editButton.classList.add("edit");
    editButton.textContent = "EDIT!";

    cardDiv.appendChild(contentPara);
    cardDiv.appendChild(deleteButton);
    cardDiv.appendChild(editButton);

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

//Ejecucion del codigo
const execution = () => {
  try {
    sendButtonActions();
  } catch (error) {
    console.log(error);
  }
};

execution();
