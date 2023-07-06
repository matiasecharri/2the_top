//HA1

// 4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.

// 1) Programa una función que cuente el número de caracteres de una cadena de texto.

const stringCounter = (item) => {
  if (typeof item === "string") {
    console.log(`${item} tiene ${item.length} caracteres.`);
  } else if (typeof item === "number" || typeof item === "boolean") {
    let xToString = item.toString();
    console.log(
      `${xToString} tiene ${xToString.length} caracteres y es ahora un string xD;`
    );
  } else if (typeof item === "object") {
    const keySearcher = Object.keys(item);
    console.log(keySearcher.length);
  } else {
    console.warn("No ingresaste nada papito o es un tipo de dato no válido.");
  }
};
stringCounter("hola2");
stringCounter(31231312);
stringCounter({
  nombre: "Manolito",
  edad: 24,
  feliz: true,
  almuerzo: ["Gambas", "Peras", "Maranjas"],
});

// 2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".

const wordBlade = (word, corte1, corte2) => {
  let cuttedWord = word.toString().slice(corte1, corte2);
  if (typeof cuttedWord === "string") {
    return cuttedWord;
  } else {
    console.log("No puedo cortar eso");
  }
};

console.log(wordBlade("Oso Feliz Atacandote", 0, 4));
console.log(wordBlade(213123123213213123, 0, 1));
console.log(
  wordBlade(
    ["Piedra gigante", "Interior de la piedra", "Diamante", "Veneno"],
    37,
    45
  )
);

// 3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].

