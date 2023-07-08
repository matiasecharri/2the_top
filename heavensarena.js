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
  )
    console.log(caracteres.replace(expresionRegular, reemplazo));
  else {
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
