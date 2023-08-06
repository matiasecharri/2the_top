console.clear();

//-------------------------------SETTIMEOUT, SETINTERVAL------------------//
// let temp1 = setTimeout(() => {
//   console.log(
//     "In six seconds the interval is going to be stopped by setTimeout."
//   );
// }, 6000);

// let clock = setInterval(() => {
//   console.log(new Date().toLocaleTimeString());
// }, 1000);

// setTimeout(() => {
//   clearTimeout(clock);
// }, 11000);

// let startingNew = setTimeout(() => {
//   console.log("New clock is here!");
//   let clock2 = setInterval(() => {
//     console.log(new Date().toLocaleTimeString());
//   }, 1000);
//   setTimeout(() => {
//     clearInterval(clock2);
//   }, 6000);
// }, 16000);

//-----------------------------CALLBACKS------------------------------//

function playPause(callback, callback2) {
  let estaReproduciendo = true;
  callback(estaReproduciendo);
  callback2(estaReproduciendo);
}

function imprimiendoValor(boolean) {
  console.log(boolean);
}

function message(boolean) {
  if (boolean === true) {
    console.log("Enjoy the music!");
  } else {
    console.log("Is paused :/");
  }
}

playPause(imprimiendoValor, message);


function calcularDoble(numero, callback, callback2) {
  callback(numero * 2); // Llamando al callback con el resultado como argumento
  callback2(numero * 2);
}

// Definición del callback
function imprimirResultado(numeroRecibido) {
  console.log("El resultado es:", numeroRecibido);
}

//Otro Callback
function clasificarResultado(resultado) {
  if (resultado > 4) {
    console.log("El resultado es mayor que 4 porque es " + resultado);
  }
}

// Llamando a la función calcularDoble con el callback imprimirResultado
calcularDoble(5, imprimirResultado, clasificarResultado); // Salida: El resultado es: 10
