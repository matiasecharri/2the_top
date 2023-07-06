//HA1

// 3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].
// 4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.

// 1) Programa una función que cuente el número de caracteres de una cadena de texto.
const stringCounter = (word) => {
  if (typeof word === "string") {
    return `${word} tiene ${word.length} caracteres.`;
  } else if (typeof word === "number" || typeof word === "object") {
    let numberToString = word.toString();
    return `${numberToString} tiene ${numberToString.length} caracteres y ahora es un string xD.`;
  } else {
    return `${word} deberia ser una cadena de texto.`;
  }
};
console.log(stringCounter("hola2"));
console.log(stringCounter(["perasdasdasds"]));

// 2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".

const wordBlade = (word, corte1, corte2) => {
  let cuttedWord = word.toString().slice(corte1, corte2);
  if (typeof cuttedWord === "string") {
    return cuttedWord;
  } else {console.log("No puedo cortar eso")}
};

console.log(wordBlade("Oso Enojado", 0, 4));
console.log(wordBlade(2312312321, 0, 4));
console.log(wordBlade(["Piedra gigante", "Interior de la piedra", "Oro", "Veneno"], 37, 40));
