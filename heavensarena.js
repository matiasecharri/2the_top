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
wordSeparator("Ready for tomorrow", "");

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

wordRepeater("xD", 10);

