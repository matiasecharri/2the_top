console.clear();

//-----------------------------✅SETTIMEOUT, SETINTERVAL------------------//
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

//----------------------------✅CALLBACKS------------------------------//

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

//----------------------------✅PROMISES------------------------------//

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

//---------------------------✅ASYNC AWAIT------------------------------//
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