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

//-----------------------------PROMISES------------------------------//

//RESOLVE is the POSITIVE return - REJECT is the NEGATIVE return.
function squarePromise(value) {
  if (typeof value !== "number") {
    return Promise.reject(
      //En caso de error voy a usar el constructor Promise con el metodo REJECT, lo bueno es que aplica a toda la promise.
      `😲ERROR, the value "${value}" is not a number.`
    );
  }
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        value: value,
        result: value * value, //🕯️ Siempre SQUAREPROMISE en caso de RESOLVE retorna un OBJETO.
      });
    }, Math.random() * 2000);
  });
}
/*THEN is the NEXT BLOCK TO EXECUTE after the first promise is acomplished.
CATCH is going to CAPTURE THE ERROR if the promise throws an error.

✅😲 Es importante entender que gracias al uso de THEN sin importar que el MATH RANDOM
este en juego SIEMPRE SE RESPETA EL ORDEN ya que el THEN (ENTONCES) se encarga de eso.*/

squarePromise(4)
  .then((object) => {
    //🕯️ Cargamos el THEN pasandole com oargumento el OBJETO
    console.log("Promise Starts");
    console.log(object);
    return squarePromise(8); //Retorno que después de este then lo próximo es repetir la function pero con 8
  })
  .then((object) => {
    console.log(object);
    return squarePromise(16); //Asi puedo ir concatenando THENs infinitamente
  })
  .then((object) => {
    //Para concatenar un THEN siempre debemos pasar adentro una function.
    console.log("HELLO GUYS");
    console.log(object);
    return squarePromise(32);
  })
  .then((object) => {
    console.log(object);
    return squarePromise("STRING"); //Se interrumpe nuestra promesa ya que esto no pasa la validación.
  })
  .then((object) => {
    console.log(object);
    console.log("Promise Ends");
  })
  .catch((err) => console.log(err)); //Aca manejamos el error del principio en caso de que la promesa sea REJECTED.

//-----------------------------ASYNC AWAIT------------------------------//
// //Aca tenemos un tema y es que squarePromise() al tener el setTimeOut es asincrono y en cambio el console.log que hacemos es
// sincrono, entoces puede ocurrir que para cuando hacemos el console log no tengamos listo el valor, es por eso que usamos AWAIT
//De esta forma evitamos usar then then then

const asyncDeclared = async () => {
  try {
    console.log("✅ Async function starts");
    let obj = await squarePromise(15); //Gracias al AWAIT nuestro console log esperara a tener el valor antes de mostrarlo.
    console.log("Waiting for the promise...");
    console.log(obj);
    console.log("Waiting for the promise...");
    obj = await squarePromise("xd");
    console.log(obj);
  } catch (error) {
    console.error(error); //Seguimos obteniendo el error desde el REJECT
  }
};

asyncDeclared();
//-----------------------------SYMBOLS -----------------------------//
//Suele usarse como propiedades únicas dentro de los objetos PROPIEDADES PRIVADAS.
let id = Symbol(1);
let id2 = Symbol(1);
console.log("😲SYMBOLS HERE");
console.log(id === id2); //Retorna FALSE porque si bien ambos son 1 son SYMBOLS.

//-----------------------------------------------------------------------------//

const NOMBRE = Symbol("Name");
const SALUDAR = Symbol("Saludo");
const persona = {
  [NOMBRE]: "IrvingSymbol", //Se lo llama entre [] para referirse a el
  edad: 999,
};

persona.NOMBRE = "George"; //No afecta al SYMBOL por más que se llamen NOMBRE los dos
console.log(persona.NOMBRE);
console.log(persona[NOMBRE]); //Se lo llama entre [] para referirse a el
persona[SALUDAR] = function () {
  console.log(
    `Hola!  mi nombre SYMBOL es ${this[NOMBRE]} y mi nombre normal es ${this.NOMBRE}.`
  );
};
persona[SALUDAR]();

console.log("---------------------------------");
console.log(Object.getOwnPropertySymbols(persona)); //Busca los SYMBOLS dentro del objeto ya que no salen al iterarse con un BUCLE NORMAL.

//-----------------------------SETS -----------------------------//
//Esta estructura de datos puede ser muy interesante para almacenar cosas unica, por ejemplo correos electronicos.

const ARRAY_NAMES = [
  "Mike",
  "Jim",
  "Kevin",
  "Pam",
  "Dwight",
  "Dwight",
  "Pam",
  "Jim",
  "Toby",
];
console.log(ARRAY_NAMES);
const SET_NAMES = new Set([...ARRAY_NAMES]); //Transformamos el array original en un SET borra los duplicados.
SET_NAMES.add("Angela"); //Podemos agregar nuevos elementos gracias .add
SET_NAMES.add("Angela"); //Por más que agreguemos 2 veces el mismo elemento NO ADMITE duplicados.
SET_NAMES.add("Daryl");
SET_NAMES.delete("Toby"); //Borra un elemento especifico, bastante interesante
console.log(SET_NAMES.has("Toby")) //True o false en base a 
console.log(SET_NAMES);
console.log(SET_NAMES.size); //En vez de .length podemos usar size para saber la longitud

// SET_NAMES.clear(); //Vacía el SET totalmente

console.log("🕯️ El array que hicimos con array from")
const SET_TO_ARRAY = Array.from(SET_NAMES).sort()
console.log(SET_TO_ARRAY)
console.log("🕯️ El array que hicimos con spread operator")
const SORTED_ARRAY = [...SET_NAMES].sort(); //Volvemos a transformarlo en un ARRAY.
console.log(SORTED_ARRAY);
console.log("✅ Mismo resultado en los dos, prefier el Spread operator")