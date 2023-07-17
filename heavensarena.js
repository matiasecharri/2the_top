//HA1

// 1)
console.warn(
  "👁️ Programa una función que cuente el número de caracteres de una cadena de texto."
);
const stringCounter = (item) => {
  if (typeof item === "string") {
    console.log(`${item} tiene "${item.length}" caracteres.`);
  } else if (typeof item === "number" || typeof item === "boolean") {
    let xToString = item.toString();
    console.log(
      `${xToString}: tiene "${xToString.length}" caracteres era un numero/booleano y es ahora un string.`
    );
  } else if (typeof item === "object") {
    const keySearcher = Object.keys(item);
    console.log(`Esto era un objeto con "${keySearcher.length}" propiedades.`);
  } else {
    console.warn("No ingresaste nada papito o es un tipo de dato no válido.");
  }
};
stringCounter("Cuenta estos caracteres");
stringCounter(31231312);
stringCounter({
  nombre: "Manolito",
  edad: 24,
  feliz: true,
  almuerzo: ["Gambas", "Peras", "Maranjas"],
});

console.warn(
  "👁️ Programa una función que te devuelva el texto recortado según el número de caracteres indicados"
);
// 2

const wordBlade = (word, corte1, corte2) => {
  let cuttedWord = word.toString().slice(corte1, corte2);
  if (typeof cuttedWord === "string") {
    return cuttedWord;
  } else {
    console.log("No puedo cortar eso");
  }
};

console.log(wordBlade("Oso Feliz Atacandote", 0, 10));

console.log(wordBlade(2131231232132131232321365, 0, 1));
console.log(
  wordBlade(
    ["Piedra gigante", "Interior de la piedra", "Diamante", "Veneno"],
    37,
    45
  )
);

// 3)
console.warn(
  "👁️ Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter"
);

const wordSeparator = (word, separator) => {
  if (typeof word === "string") {
    let wordToArray = word.split(separator);
    console.log(wordToArray);
  } else {
    console.warn("Se esperaba una cadena de texto.");
  }
};
wordSeparator("Ready for tomorrow", " ");

// 4)
console.warn(
  "👁️Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo."
);

const wordRepeater = (word, repeat) => {
  if (repeat === 0) {
    console.error("Repetir un numero 0 veces no tiene sentido.");
  } else if (typeof repeat === "number" && typeof word === "string") {
    for (let i = 0; i < repeat; i++) {
      console.log(`Tu palabra ${word} se repitio ${i} vez/veces.`);
    }
  } else {
    console.clear() +
      console.warn(`Debes ingresar una palabra y un número, en ese orden.`);
  }
};

wordRepeater("xD", 2);

//HA2
// 5)
console.warn(
  "👁️ Programa una función que invierta las palabras de una cadena de texto, pe"
);

const reverseMaker = (item) => {
  typeof item !== "string"
    ? console.warn("Ingresa una cadena de texto")
    : console.log(item.split("").reverse().join(""));
};

reverseMaker("Yo no lo descargo porque ya lo tengo");

// 6)
console.warn(
  "👁️ Programa una función para contar el número de veces que se repite una palabra en un texto largo"
);
const wordRepeatedCount = (texto, palabraRepetida) => {
  if (typeof texto !== "string" || typeof palabraRepetida !== "string") {
    console.warn("Debes ingresar un texto y la palabra que quieras consultar.");
  } else {
    let arrayMode = texto.toLowerCase().split(" ");
    let contadorRepeticiones = 0;
    for (let i = 0; i < arrayMode.length; i++) {
      if (arrayMode[i] === palabraRepetida.toLowerCase()) {
        contadorRepeticiones++;
      }
    }
    console.log(
      `Tu palabra "${palabraRepetida}" se repite: ${contadorRepeticiones} veces en el texto.`
    );
  }
};
wordRepeatedCount(
  "Pablito clavo un clavito que clavito clavo pablito",
  "pablito"
);
// 7)
console.warn(
  "👁️ Programa una función que valide si una palabra o frase dada, es un palíndromo"
);
const palindromIdentificator = (item) => {
  if (typeof item !== "string") {
    console.warn("Por favor ingresa una palabra.");
  } else {
    let palabraInicial = item;
    let palabraAComparar = item.split("").reverse("").join("");
    palabraInicial.toLowerCase() === palabraAComparar.toLowerCase()
      ? console.log(`La palabra ${item} es un palíndromo.`)
      : console.log(`La palabra ${item} no es un palindromo.`);
  }
};
palindromIdentificator("Bob");
palindromIdentificator("Ada");

// 8)
console.warn(
  `👁️ Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5`
);
const patronDeleter = (caracteres, expresionRegular, reemplazo) => {
  if (
    typeof caracteres === "string" &&
    typeof reemplazo !== "undefined" &&
    typeof expresionRegular !== "undefined"
  ) {
    console.log(caracteres.replace(expresionRegular, reemplazo));
  } else {
    console.warn(
      "Ingresa una cadena de texto, una expresión regular y tu caracter o caracteres que usaras para reemplazar."
    );
  }
};

patronDeleter("xyz1, xyz2, xyz3, xyz4 y xyz5", /xyz/gi, "");
patronDeleter(
  "cyberponkoko1, cyberponkoko2, cyberponkoko3, cyberponkoko4 y cyberponkoko5",
  /ponkoko/gi,
  "punk"
);

/*18) en lugar del RegExp podemos usar una característica relativamente nueva de JS:
    return text.replaceAll(pattern, '');*/

//HA3
// 9)
console.warn(
  `👁️ Programa una función que obtenga un numero aleatorio entre 501 y 600.`
);
const randomizer501600n = () => {
  let rnumber = 0;
  while (rnumber < 501 || rnumber > 600) {
    rnumber = Math.round(Math.random() * 1000);
  }
  return rnumber;
};
console.log(`🎲 Nuevo numero aleatorio: ${randomizer501600n()}✨`);

let blueButton = document.getElementById("blui");
blueButton.addEventListener("click", (x) => {
  console.log(`🎲 Nuevo numero aleatorio: ${randomizer501600n()}✨`);
});

//10)
console.warn(
  `👁️ Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true`
);

const numberCapicua = (numero) => {
  if (typeof numero !== "number") {
    console.warn("Ingresa un numero");
  } else {
    let numeroModificado = Math.round(
      numero.toString().split("").reverse().join("")
    );
    numero !== numeroModificado
      ? console.log(`El numero "${numero}" NO es capicua.`)
      : console.log(`El numero "${numero}" SI es capicua.`);
  }
};

numberCapicua(222);
numberCapicua(24);

//11
console.warn(
  `👁️ Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n)`
);

const factorial = (numero = undefined) => {
  if (numero === undefined) return console.warn("Ingresa un número.");
  if (typeof numero !== "number")
    return console.error(`El valor "${numero}" no es un número.`);
  if (numero === 0) return console.error("El número no puede ser 0.");
  if (Math.sign(numero) === -1)
    return console.error("El número no puede ser negativo");
  let factorial = 1;
  for (let i = numero; i > 1; i--) {
    factorial *= i;
  }
  return console.info(`El factorial de ${numero} es ${factorial}.`);
};

factorial(4);

//HA4
//12
console.warn(
  `👁️ Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true)`
);

const primoDetector = (numero = 0) => {
  if (numero === 0) {
    console.error("El numero no puede ser 0.");
  } else if (typeof numero !== "number") {
    console.warn("Por favor ingresa un número.");
  } else if (Math.sign(numero) === -1) {
    console.error(
      `El numero "${numero}" es negativo, ingresa un número natural.`
    ); // ✅ FIN DE VALIDACIÓN
  } else {
    let divisible = false;
    let seDividePor = [];
    for (let i = 2; i < numero; i++) {
      if (numero % i === 0) {
        divisible = true;
        seDividePor.push(i);
      }
    }
    if (divisible === true) {
      console.log(
        `El numero "${numero}" no es primo ya que dividido por ${seDividePor} es su resto es 0.`
      );
    } else {
      console.log(`El numero "${numero}" es primo.`);
    }
  }
};

primoDetector(3);

//13
console.warn(
  `👁️ Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar.)`
);

const oddEvenDetector = (numero) => {
  if (typeof numero !== "number") {
    console.warn("Ingresa un número.");
    // ✅ FIN DE VALIDACIÓN
  } else {
    numero % 2 === 0
      ? console.log(`El numero "${numero}" es par.`)
      : console.log(`El numero "${numero}" es impar.`);
  }
};
oddEvenDetector(5);
oddEvenDetector(2);
// 14)
console.warn(
  `👁️ Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F)`
);

const celsiusFarehneit = (unidad, grados) => {
  if (unidad.toUpperCase() !== "F" && unidad.toUpperCase() !== "C") {
    console.warn(`Debes ingresar una unidad válida "F" o "C"`);
  } else if (typeof grados !== "number") {
    console.warn(`Debes ingresar los grados como números!`);
    // ✅ FIN DE VALIDACIÓN
  } else {
    if (unidad.toUpperCase() === "F") {
      const celcius = Math.round((grados - 32) / 1.8);
      console.log(`Tus ºF${grados} equivalen a ºC${celcius}`);
    } else if (unidad.toUpperCase() === "C") {
      const farehneit = Math.round(grados * 1.8 + 32);
      console.log(`Tus ºC${grados} equivalen a ºF${farehneit}`);
    }
  }
};
celsiusFarehneit("f", 150);
//HA5
// 15)
console.warn(
  `👁️ Programa una función para convertir números de base binaria a decimal y viceversa, pe. miFuncion(100,2) devolverá 4 base 10.)`
);
const binarioADecimal = (numero, formato) => {
  if (formato.toLowerCase() === "binario") {
    let arrayNumero = numero.toString().split("");
    let transformacionBinario = [];

    for (let i = 0; i < arrayNumero.length; i++) {
      if (arrayNumero[i] === "0" || arrayNumero[i] === "1") {
        transformacionBinario.push(parseInt(arrayNumero[i]));
      } else {
        console.log("Número binario inválido");
        return;
      }
    }

    let suma = 0;
    let exponente = transformacionBinario.length - 1;

    for (let i = 0; i < transformacionBinario.length; i++) {
      suma += transformacionBinario[i] * Math.pow(2, exponente);
      exponente--;
    }

    console.log(suma);
  } else if (formato.toLowerCase() === "decimal") {
    let binario = "";
    let num = parseInt(numero);

    if (isNaN(num)) {
      console.log("Número decimal inválido");
      return;
    }

    if (num === 0) {
      binario = "0";
    } else {
      while (num > 0) {
        binario = (num % 2) + binario;
        num = Math.floor(num / 2);
      }
    }

    console.log(binario);
  } else {
    console.log("Formato no válido");
  }
};

binarioADecimal(11010, "binario"); // Salida: 26
binarioADecimal(26, "decimal"); // Salida: 11010

// 16)
console.warn(
  `👁️ Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800`
);

const descuento = (numero, descuento) => {
  try {
    if (typeof numero !== "number" || typeof descuento !== "number") {
      console.warn("Debes ingresar números.");
    } else if (Math.sign(numero) === -1 || Math.sign(descuento) === -1) {
      console.warn("No se permiten números negativos.");
    } else {
      let descontando = (numero * descuento) / 100;
      let productoConDescuento = numero - descontando;
      console.log(
        `Tu producto de $${Math.round(
          numero
        )} tendrá un descuento del ${Math.round(
          descuento
        )}%. Precio final: $${Math.round(productoConDescuento)} 💸🤑.`
      );
    }
  } catch (error) {
    console.error("Error inesperado:", error);
  }
};

descuento(1000, 20);

// 17)
console.warn(
  `👁️ Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).`
);
// //MY VERSION (ONLY YEARS)
// const cuantoPaso = (fecha) => {
//   if (typeof fecha !== "number") {
//     console.warn(
//       "Por favor ingresa el año que quieres comparar con el año actual."
//     );
//   } else {
//     const currentYear = new Date().getFullYear();
//     const añosPasados = currentYear - fecha;
//     if (
//       Math.sign(fecha) === 1 &&
//       fecha <= currentYear &&
//       fecha !== currentYear
//     ) {
//       console.info(
//         `Desde ${fecha} hasta el año actual (${currentYear}) pasaron: ${añosPasados} años.`
//       );
//     } else if (fecha > currentYear) {
//       const futureYear = fecha - currentYear;
//       console.info(
//         `Tomando de referencia ${currentYear} para el año ${fecha} faltan ${futureYear} años.`
//       );
//     } else if (currentYear === fecha) {
//       console.info(
//         `Estamos en ${currentYear} y lo estas comparando con ${fecha}, ¡Es el mismo año!.`
//       );
//     } else {
//       console.info(
//         `Desde el año ${fecha} A.C hasta el año actual (${currentYear}) pasaron: ${añosPasados} años.`
//       );
//     }
//   }
// };

// cuantoPaso(-2000);
// cuantoPaso(2077);

// MIRCHA VERSION

const calcularAnios = (fecha = undefined) => {
  if (fecha === undefined) {
    return console.warn("No ingresaste la fecha.");
  } else if (!(fecha instanceof Date)) {
    return console.error("No es una fecha válida.");
  }

  let hoyMenosFecha = new Date().getTime() - fecha.getTime(); //Milisegundos dia usuario - Milisegundos dia actual
  let aniosEnMs = 1000 * 60 * 60 * 24 * 365;
  let aniosHumanos = Math.floor(hoyMenosFecha / aniosEnMs); //Dividimos el reusltado de la fecha actual - la fecha que ingresso el usuario por 1000 * 60 * 60 * 24 * 365; de esta forma lo pasamos a años

  if (Math.sign(aniosHumanos) === -1) {
    console.info(
      `Faltan ${Math.abs(aniosHumanos)} años para el ${fecha.getFullYear()}.`
    );
  } else if (Math.sign(aniosHumanos) === 1) {
    console.info(
      `Han pasado ${Math.abs(
        aniosHumanos
      )} años desde el ${fecha.getFullYear()} A.C.`
    );
  } else if (Math.sign(aniosHumanos) === 0) {
    console.info(`¡Estamos en el mismo año!`);
  }
};
calcularAnios(new Date(2049, 4, 11));
//HA6
// 18)
console.warn(
  `👁️Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.`
);
const letterClasifier = (word = "") => {
  if (word === "") {
    console.warn("No ingresaste el texto... 🥴");
  } else if (typeof word !== "string") {
    console.error("Se espera que ingreses texto y no otras cosas 🤡");
  } else {
    const vocals = ["a", "e", "i", "o", "u"];
    let vocalCounter = 0;
    const regex = /^[a-zA-Z]+$/;
    let consonantCounter = 0;
    let arrayWord = word.split("");
    arrayWord.filter((x) => {
      if (vocals.includes(x.toLowerCase())) {
        vocalCounter++;
      } else if (regex.test(x)) {
        consonantCounter++;
      }
    });
    console.info(
      `"${word}" incluye ${vocalCounter} vocales y ${consonantCounter} consonantes 🤓`
    );
  }
};

letterClasifier("MUY BUENAS a todos chavales");

// 19)
console.warn(
  `👁️Programa una función que valide que un texto sea un nombre válido, pe. miFuncion("Jonathan MirCha") devolverá verdadero.`
);
const nameValidator = (word = "") => {
  let switcherX = false;
  const nameRegex =
    /^[A-ZÁÉÍÓÚÜÑ][a-zA-ZÁÉÍÓÚÜÑ]{1,29} [A-ZÁÉÍÓÚÜÑ][a-zA-ZÁÉÍÓÚÜÑ]{1,20}$/;
  if (word === "") {
    console.warn("Parece que te olvidaste la palabra...😵");
  } else if (typeof word !== "string") {
    console.error(
      "Entiendo que quieras probar cosas pero solo se admiten palabras 🤪"
    );
  } else {
    if (nameRegex.test(word)) {
      console.log(`El nombre "${word}" es válido ✅`);
      return (switcherX = true);
    } else {
      console.log(
        `El nombre "${word}" es inválido 🤮. Debe contener:  • Iniciales en mayúsculas, • 1 Nombre y 1 Apellido separados, se aceptan tildes. No puede contener: • Caracteres que no sean letras, • Más de 20 caracteres`
      );
      return (switcherX = false);
    }
  }
};
console.log(nameValidator("Arnold Schwarzenegger"));

// 20)
console.warn(
  `👁️Programa una función que valide que un texto sea un email válido, pe. miFuncion("jonmircha@gmail.com") devolverá verdadero.`
);

const emailValidator = (email = "") => {
  if (email === "") {
    console.warn("Olvidaste ingresar tu email! 🤓");
  } else if (typeof email !== "string") {
    console.error("Se espera que el email sea una cadena de texto 😧");
  } else {
    const regexMail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    regexMail.test(email)
      ? console.info(`Tu email ${email} es válido! ✅`)
      : console.info(
          `Gracias por tu interés. Parece que la dirección de correo electrónico que proporcionaste no cumple con los requisitos necesarios. Asegúrate de ingresar una dirección de correo electrónico válida siguiendo el formato usuario@dominio.com 💡 `
        );
  }
};
emailValidator("matiasecharri@hotmail.com");
//HA7

// 21)
console.warn(
  `👁️Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25].`
);

const numerosTest = [-10, 0, 1, 2, 5, 8, 100, 40, 9, 12];

const squareCreator = (array = "", potencia) => {
  if (array === "") {
    console.warn("Olvidaste ingresar un array! 🤓");
  } else if (typeof array !== "object" || typeof potencia !== "number") {
    console.warn("Se espera un array y un número!");
  } else {
    const elevados = [];
    array.map((x) => {
      elevados.push(Math.pow(x, potencia));
    });
    return elevados;
  }
};
const numerosElevadosComoGustes = squareCreator(numerosTest, 2);
console.log(numerosElevadosComoGustes);
console.log(Math.min(...numerosTest));

// 22)
console.warn(
  `👁️Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array, pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60].`
);
const minAndMax = (array) => {
  if (array === "") {
    console.warn("Olvidaste ingresar un array! 🤓");
  } else if (typeof array !== "object") {
    console.warn("Se espera un array!");
  } else {
    let minNumber = Math.min(...array);
    let maxNumber = Math.max(...array);
    return [minNumber, maxNumber];
  }
};
console.log(minAndMax(numerosTest));

// 23)
console.warn(
  `👁️Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el primero almacena los números pares y en el segundo los impares, pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}.`
);
const numerosTest2 = [-10, 0, 1, 2, 5, 8, 100, 40, 9, 12];

const evenOddReturner = (array = undefined) => {
  if (array === undefined) {
    return console.warn("No ingreaste nada!");
  }
  if (!(array instanceof Array)) {
    return console.error("El valor que ingresaste no es un Array.");
  }
  if (array.length === 0) {
    return console.error("El array esta vacio");
  }
  for (let x of array) {
    if (typeof x !== "number") {
      return console.error(
        `Te dijimos que el array solo podía tener números y contiene: "${x}".`
      );
    }
  }
  const odds = [];
  const evens = [];
  array.filter((x) => {
    x % 2 === 0 ? evens.push(x) : odds.push(x);
  });
  return { evens, odds };
};

console.log(evenOddReturner(numerosTest2).evens);
console.log(evenOddReturner(numerosTest2).odds);
//HA8
//24
console.warn(
  `👁️Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos, el primero tendrá los numeros ordenados en forma ascendente y el segundo de forma descendiente, pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5]`
);

const arrayDePrueba = [1, 5, 8, 2, 101, 53];

const ordenandoNumeros = (array = undefined) => {
  if (array === undefined) {
    console.warn("No ingresaste nada 🤡");
    return;
  }
  if (!(array instanceof Array)) {
    console.warn(
      "El item ingresado NO es un array, por favor ingresa un array 🤓"
    );
    return;
  }
  if (array.some((x) => typeof x !== "number")) {
    console.error("El array contiene elementos que no son números");
    return;
  }

  const nuevaInstancia = [...array];
  const nuevaInstancia2 = [...array];
  const arrayMayorMenor = nuevaInstancia.sort((a, b) => b - a);
  const arrayMenorMayor = nuevaInstancia2.sort((a, b) => a - b);

  return { arrayMayorMenor, arrayMenorMayor };
};

console.log(ordenandoNumeros(arrayDePrueba).arrayMayorMenor);
console.log(ordenandoNumeros(arrayDePrueba).arrayMenorMayor);

// 25)
console.warn(
  `👁️Programa una función que dado un arreglo de elementos, elimine los duplicados, pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true].`
);
const arrayXd = ["hola", "hola", 2, 3, 2, 8, "buenas", "buenas"];
const unicItems = (array = null) => {
  if (array === null) {
    console.warn("No ingresaste nada! 🤯");
    return;
  }
  if (!(array instanceof Array)) {
    console.warn(
      "El item ingresado NO es un array, por favor ingresa un array 🤓"
    );
    return;
  }
  const arraySeteado = new Set([...array]);
  return arraySeteado;
};
console.log(unicItems(arrayXd));
// 26)
console.warn(
  `👁️Programa una función que dado un arreglo de números obtenga el promedio, pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5.`
);

const calificaciones = [10, 8, 7, 8, 9, 9, 10, 10];
const reductorOfAll = (array = null) => {
  if (array === null) {
    console.warn("No ingresaste nada! 🤭");
    return;
  }
  if (!(array instanceof Array)) {
    console.error("Se espera que ingreses un array de números! 🫠");
    return;
  }
  if (array.some((x) => typeof x !== "number")) {
    console.error("Tu array contiene elementos que NO son números 😵");
    return;
  }

  const sumaDeTodo = array.reduce((accumulator, x) => {
    return accumulator + x;
  }, 0);
  const resultadoRedondeadoA1Decimal = (sumaDeTodo / array.length).toFixed(1);
  return resultadoRedondeadoA1Decimal;
};

console.log(reductorOfAll(calificaciones));
