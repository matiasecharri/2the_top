console.clear();
console.log("HEAVEN ARENA SMURF 🤖");

//------------------------------------------1️⃣ to 1️⃣0️⃣------------------------------------------//

console.warn(
  "👁️ Programa una función que cuente el número de caracteres de una cadena de texto."
);

const characterNumber = (chain = "") => {
  if (chain === "") {
    console.warn("You forget to introduce a string!");
    return;
  }
  if (typeof chain !== "string") {
    console.error("ERROR: Only strings allowed.");
    return;
  }

  console.log(`The string chain: ${chain} has "${chain.length}" characters ✅`);
};

characterNumber("Hello good morning!");
//----------------------------------------------------------------------------------------------------------
console.warn(
  "👁️ Programa una función que te devuelva el texto recortado según el número de caracteres indicados"
);

const katanaText = (word = "", firstCut = "", secondCut = "") => {
  if (word === "") {
    console.warn("You forget to introduce a string!");
    return;
  }
  if (typeof word !== "string") {
    console.error("Expected a string in word.");
    return;
  }
  if (firstCut === "" || secondCut === "") {
    console.warn(
      "You forget to introduce a number at the start and the end of the cut!"
    );
    return;
  }
  if (typeof firstCut !== "number" || typeof secondCut !== "number") {
    console.error("Expected a number in firstCut/secondCut");
    return;
  }
  console.log(`New text chain: ${word.slice(firstCut, secondCut)} ✅`);
};
katanaText("An angry big bear is here", 9, 17);
//----------------------------------------------------------------------------------------------------------
console.warn(
  "👁️ Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter"
);

const stringToArray = (string = "", caracter = undefined) => {
  if (string === "") {
    console.warn("You forget to introduce a string!");
    return;
  }
  if (typeof string !== "string") {
    console.error("String needs to be a text chain");
    return;
  }
  if (caracter === undefined) {
    console.warn("Please separator a separator!");
    return;
  }
  console.log(string.split(caracter));
};
stringToArray("Hello!, how you doing? I hope fine!", "h");

//----------------------------------------------------------------------------------------------------------

console.warn(
  "👁️Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo."
);

const wordRepeater = (word = "", repeater = "") => {
  if (word === "") {
    console.warn("You forget to introduce a word!");
    return;
  }
  if (typeof word !== "string") {
    console.error("String needs to be a text chain.");
    return;
  }
  if (repeater === "") {
    console.warn("You forget to introduce the number of repeats!");
    return;
  }
  if (typeof repeater !== "number") {
    console.error("Repeater needs to be a number.");
    return;
  }
  for (let i = 1; i <= repeater; i++) {
    i < 2
      ? console.log(`${word}, has shooted ${i} bullet.`)
      : console.log(`${word}, has shooted ${i} bullets.`);
  }
};
wordRepeater("Michael Scarn", 3);
//----------------------------------------------------------------------------------------------------------

console.warn(
  "👁️ Programa una función que invierta las palabras de una cadena de texto, pe"
);

const wordInverter = (word = "") => {
  if (word === "") {
    console.warn("You forget to introduce a word!");
    return;
  }
  if (typeof word !== "string") {
    console.error("Word needs to be a text chain.");
    return;
  }
  console.log(word.split("").reverse().join(""));
};
wordInverter("WHERE ARE THE TURTLES?");
//----------------------------------------------------------------------------------------------------------

console.warn(
  "👁️ Programa una función para contar el número de veces que se repite una palabra en un texto largo"
);

const repeatedWordCount = (text = "", word = "") => {
  if (word === "" || text === "") {
    console.warn("You forget to introduce a text or a word to search!");
    return;
  }
  if (typeof word !== "string" || typeof text !== "string") {
    console.error("Both, text and word, needs to be a text chain.");
    return;
  }
  let textToArray = text.split(" ");
  let counter = 1;
  textToArray.filter((x) => {
    if (x.toLowerCase() === word.toLowerCase()) {
      counter++;
    }
    return counter;
  });

  counter >= 1
    ? console.log(`The word "${word}" is repeated "${counter}" times.`)
    : console.log(`The word "${word}" is not repeated.`);
};
repeatedWordCount(
  "HELLO hello hello! how are you friend? im saying hello",
  "hello"
);
//----------------------------------------------------------------------------------------------------------

console.warn(
  "👁️ Programa una función que valide si una palabra o frase dada, es un palíndromo"
);

const wordPalindromeValidator = (word = "") => {
  if (word === "") {
    console.warn("You forget to introduce a word!");
    return;
  }
  if (typeof word !== "string") {
    console.error("Word needs to be a text chain.");
    return;
  }
  let reversedWord = word.split("").reverse().join("");
  reversedWord.toLowerCase() === word.toLowerCase()
    ? console.log(`${word} is a palindrome!`)
    : console.log(`${word} is NOT a palindrome!`);
};
wordPalindromeValidator("Bob");

// console.warn(
//     `👁️ Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5`
//   );


// console.warn(
//     `👁️ Programa una función que obtenga un numero aleatorio entre 501 y 600.`
//   );


// console.warn(
//     `👁️ Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true`
//   );

//------------------------------------------1️⃣ to 1️⃣0️⃣------------------------------------------//
