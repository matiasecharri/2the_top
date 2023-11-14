const $inputTexto = document.getElementById("inputTexto");
const $botonEnviar = document.getElementById("botonEnviar");
const $contenedor = document.getElementById("container");
const regex =
  /[aeiouAEIOUbcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZあ-んア-ン]/;

//Necesito que al apretar el botón enviar se cree una carta, la cual tiene que tener como contenido lo que el usuario tenga en ese momento en el inputText

const arrayToDo = JSON.parse(localStorage.getItem("toDoArray")) || [];

//🧠 INICIA MODELO 🧠//
//Crea los objetos To-Do
const crearObjetoToDo = contenido => {
  return {
    contenido: contenido,
    id: new Date().getTime(),
    realizado: false,
  };
};

//Pushear objetos a arrayToDo
const pushearObjeto = (array, objeto) => {
  array.push(objeto);
};

//👁️INICIA LA VISTA👁️//
const imprimirToDos = array => {
  if (array.length === 0) {
    $contenedor.innerHTML = "No tenes to-dos negrita";
    return;
  }
  $contenedor.innerHTML = "";
  array.forEach(objeto => {
    $contenedor.innerHTML += `
    <div class="card-todo" id= ${objeto.id}>
    <p>${objeto.contenido}</p>
    <button class="delete">DELETE!</button>
    <button class="edit">EDIT!</button>
    </div>
    `;
  });
};

//🕹️INICIA CONTROLADOR🕹️//
//Acciones del botón enviar
const accionesBtnEnviar = () => {
  $botonEnviar.addEventListener("click", evento => {
    if (!regex.test($inputTexto.value)) {
      console.error("Llenalo pelotudo");
      return;
    }
    pushearObjeto(arrayToDo, crearObjetoToDo($inputTexto.value));
    imprimirToDos(arrayToDo);
    localStorage.setItem("toDoArray", JSON.stringify(arrayToDo));
    $inputTexto.value = "";
  });
};

accionesBtnEnviar();
imprimirToDos(arrayToDo);
