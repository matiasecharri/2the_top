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

function calcularDoble(numero, callback) {
  const resultado = numero * 2;
  callback(resultado); // Llamando al callback con el resultado como argumento
}

// Definición del callback
function imprimirResultado(resultado) {
  console.log('El resultado es:', resultado);
}

// Llamando a la función calcularDoble con el callback imprimirResultado
calcularDoble(5, imprimirResultado); // Salida: El resultado es: 10
