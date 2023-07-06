//HA1
// 1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.
// 2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".
// 3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].
// 4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.

const wordCounter = (word) => {
  if (typeof word === "string") {
    return `${word} tiene ${word.length} caracteres.`
  } else if(typeof word === "number"){
      let numberToString = word.toString()
      return `${numberToString} tiene ${numberToString.length} caracteres y ahora es un string xD.`     
   } else {
    return `${word} deberia ser una cadena de texto.`
  }
};

console.log(wordCounter("hola2"))
console.log(wordCounter(789789789))

