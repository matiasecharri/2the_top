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
  let counter = 0;
  textToArray.forEach((x) => {
    if (x.toLowerCase() === word.toLowerCase()) {
      counter++;
    }
    return counter;
  });

  counter > 0
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
//----------------------------------------------------------------------------------------------------------

console.warn(
  `👁️ Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5`
);

const easyPatronDeleter = (
  text = "",
  deletePatron = "",
  replace = undefined
) => {
  if (text === "" || deletePatron === "" || replace === undefined) {
    console.warn("Al fields are needed.");
    return;
  }
  if (typeof text !== "string" || typeof replace !== "string") {
    console.error("text and replace needs to be a string");
    return;
  }

  const newText = text.replace(deletePatron, replace);
  console.log(newText);
};
easyPatronDeleter("xyzHow xyzyou xyzdoing?", /xyz/gi, "");

console.warn(
  `👁️ Programa una función que obtenga un numero aleatorio entre 501 y 600.`
);

//----------------------------------------------------------------------------------------------------------

const randomNumberGen = (number = "") => {
  if (number === "") {
    console.warn("Enter a number to randomize!");
    return;
  }
  if (typeof number !== "number") {
    console.error("😲 Whoops ERROR: Only numbers allowed.");
    return;
  }
  while (number < 500 || number > 600) {
    number = Math.round(Math.random() * 1000);
  }
  console.log(`New random: 🎉${number}`);
};
randomNumberGen(23213);
//----------------------------------------------------------------------------------------------------------

console.warn(
  `👁️ Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true`
);

const palindromicNumber = (number = "") => {
  if (number === "") {
    console.warn("Please enter a number!");
    return;
  }
  if (typeof number !== "number") {
    console.error("Number NEEDS to be Number data type.");
    return;
  }
  if (Math.sign(number) === -1) {
    console.error("Only natural numbers are allowed.");
    return;
  }
  const reversedNumber = Number(number.toString().split("").reverse().join(""));
  reversedNumber === number
    ? console.log(`The number "${number}" is a palindromic number!`)
    : console.log(`The number "${number}" is NOT a palindromic number!`);
};
palindromicNumber(252);

//------------------------------------------1️⃣ to 1️⃣0️⃣------------------------------------------//

//------------------------------------------1️⃣1️⃣ to 2️⃣1️⃣------------------------------------------//

console.warn(
  `👁️ Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7)
   devolverá true)`
);

const esPrimo = (numero = 0) => {
  if (numero === 0) {
    console.warn("Numero no puede ser 0.");
    return;
  }
  if (typeof numero !== "number") {
    console.error("Numero tiene que ser de tipo number.");
    return;
  }
  if (Math.sign(numero) === -1) {
    console.error("Numero no puede ser negativo.");
    return;
  }

  for (let i = 2; i < numero; i++) {
    let esDivisible = false;
    if (numero % i === 0) {
      esDivisible = true;
      console.log(`"${numero}" no es primo.`);
      return;
    } else {
      console.log(`"${numero}" es primo.`);
      return;
    }
  }
};
esPrimo(3);
//----------------------------------------------------------------------------------------------------------

console.warn(
  `👁️ Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar.)`
);

const evenOdd = (number = "") => {
  if (number === "") {
    console.warn("Please enter a number.");
    return;
  }
  if (typeof number !== "number") {
    console.error("Only numbers allowed.");
    return;
  }
  number % 2 === 0
    ? console.log(`The number ${number} is even.`)
    : console.log(`The number ${number} is odd.`);
};
evenOdd(10);
//----------------------------------------------------------------------------------------------------------

console.warn(
  `👁️ Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F)`
);

const gradeConverter = (grades = "", scale = "") => {
  if (grades === "" || scale === "") {
    console.warn("Please enter grades and scale.");
    return;
  }
  if (typeof grades !== "number") {
    console.error("Grades need to be a number.");
    return;
  }
  if (typeof scale !== "string") {
    console.error("Scale need to be a string.");
    return;
  }

  if (scale.toLowerCase() !== "c" && scale.toLowerCase() !== "f") {
    console.warn("Enter C for Celsius and F for Farenheit.");
    return;
  }
  if (scale.toLowerCase() === "c") {
    const conversion1 = (grades * 1.8 + 32).toFixed(1);
    console.log(`${grades}C is equal to ${conversion1}F.`);
  } else if (scale.toLowerCase() === "f") {
    const conversion2 = ((grades - 32) / 1.8).toFixed(1);
    console.log(`${grades}F is equal to ${conversion2}C.`);
  }
};
gradeConverter(8.6, "C");
//----------------------------------------------------------------------------------------------------------

console.warn(
  `👁️ Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800`
);
const discountCalculator = (price = "", discount = "") => {
  if (price === "" || discount === "") {
    console.warn("Please enter the price of the product and the discount.");
    return;
  }
  if (typeof price !== "number" || typeof discount !== "number") {
    console.error("Price and discount needs to be a number.");
    return;
  }
  if (Math.sign(price) === -1 || Math.sign(discount) === -1) {
    console.error(`ERROR: Cant be a negative number.`);
    return;
  }

  const discounting = (price * discount) / 100;
  const finalPrice = price - discounting;
  console.info(
    `The discount is: $${discounting}, the final price of the product is: $${finalPrice}.`
  );
};
discountCalculator(200, 20);
//----------------------------------------------------------------------------------------------------------

console.warn(
  `👁️ Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).`
);

const dateEstimator = (date = "") => {
  if (date === "") {
    console.warn("Please enter a date.");
    return;
  }
  if (!(date instanceof Date)) {
    console.error("Only Date format allowed.");
    return;
  }

  let yearGap = new Date().getTime() - date.getTime();
  let milisecondYears = 1000 * 60 * 60 * 24 * 365;
  let humanYears = Math.round(yearGap / milisecondYears);

  if (Math.sign(humanYears) === -1) {
    console.log(
      `${Math.abs(humanYears)} years left until we reach ${date.getFullYear()}.`
    );
    return;
  } else if (Math.sign(humanYears) === 1) {
    console.log(`${humanYears} years have passed since ${date.getFullYear()}.`);
    return;
  } else if (Math.sign(humanYears) === 0) {
    console.log(`${date.getFullYear()} is the present year!`);
  }
};
dateEstimator(new Date(2077, 4, 11));
//----------------------------------------------------------------------------------------------------------

console.warn(
  `👁️Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.`
);
const letterCounter = (text = "") => {
  if (text === "") {
    console.warn("Rejected empty text.");
    return;
  }
  if (typeof text !== "string") {
    console.error("Rejected not a string.");
    return;
  }
  const regexVocal = /[aeiouAEIOU]/;
  const regexConsonant = /[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]/;
  let vocalCounter = 0;
  let consonantCounter = 0;
  text.split("").filter((x) => {
    if (regexVocal.test(x) === true) {
      vocalCounter++;
    } else if (regexConsonant.test(x) === true) {
      consonantCounter++;
    }
  });
  console.log(
    `Your text has: ${vocalCounter} vocals, and ${consonantCounter} consonants.`
  );
};
letterCounter("HolaaaaAX%$$$$$$");

//----------------------------------------------------------------------------------------------------------

console.warn(
  `👁️Programa una función que valide que un texto sea un nombre válido, pe. miFuncion("Jonathan MirCha") devolverá verdadero.`
);
const nameValidator = (name = "") => {
  if (name === "") {
    console.warn("Rejected empty name.");
    return;
  }
  if (typeof name !== "string") {
    console.error("Rejected not a string.");
    return;
  }
  const nameRegex = /^[A-ZÁÉÍÓÚa-záéíóú]{1,15} [A-ZÁÉÍÓÚa-záéíóú]{1,15}$/;
  nameRegex.test(name)
    ? console.info(`The name ${name} is valid! ✅`)
    : console.error(
        `The name ${name} is NOT valid!, valid format example: "Matias Echarri"`
      );
};
nameValidator("George Clooney");
//----------------------------------------------------------------------------------------------------------

console.warn(
  `👁️Programa una función que valide que un texto sea un email válido, pe. miFuncion("jonmircha@gmail.com") devolverá verdadero.`
);

const mailValidator = (mail = "") => {
  if (mail === "") {
    console.warn("Rejected empty mail.");
    return;
  }
  if (typeof mail !== "string") {
    console.error("Rejected not a string.");
    return;
  }
  const mailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  mailRegex.test(mail)
    ? console.info(`The mail ${mail} is valid! ✅`)
    : console.error(
        `The mail ${mail} is NOT valid!, valid format example: "matiasecharri@hotmail.com"`
      );
};
mailValidator("Papadopulus33@gmail.com");
//----------------------------------------------------------------------------------------------------------

console.warn(
  `👁️Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25].`
);

const numberArray = [2, 4, 5, 10];
const numberElevator = (array = "", pow = "") => {
  if (array === "" || pow === "") {
    console.warn("Array and Pow cant be empty.");
    return;
  }
  if (!(array instanceof Array)) {
    console.error("Array needs to be an instance of Array.");
    return;
  }

  array.some((x) => {
    if (typeof x !== "number") {
      console.error("Some elements inside the array are not numbers.");
      return;
    }
  });

  if (typeof pow !== "number") {
    console.error("Pow needs to be a number.");
    return;
  }
  const elevatedNumbers = [];
  array.map((x) => {
    elevatedNumbers.push(Math.pow(x, pow));
  });
  return elevatedNumbers;
};
console.log(numberElevator(numberArray, 2));

//----------------------------------------------------------------------------------------------------------

console.warn(
  `👁️Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array, pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60].`
);

const higherAndLower = (array = "") => {
  if (array === "") {
    console.warn("Array cant be empty.");
    return;
  }
  if (!(array instanceof Array)) {
    console.error("Needs to be an array.");
    return;
  }
  array.some((x) => {
    if (typeof x !== "number") {
      console.error("Some elements inside the array are not numbers.");
      return;
    }
  });
  const higherNumber = Math.max(...array);
  const lowerNumber = Math.min(...array);
  console.log(higherNumber);
  console.log(lowerNumber);
};
higherAndLower(numberArray, 2);
//----------------------------------------------------------------------------------------------------------

console.warn(
  `👁️Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el primero almacena los números pares y en el segundo los impares, pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}.`
);
const array2 = [200, 2, 2, 4, 13, 15, 15];
const evenAndOdd = (array = "") => {
  if (array === "") {
    console.warn("Array cant be empty.");
    return;
  }
  if (!(array instanceof Array)) {
    console.error("Needs to be an array.");
    return;
  }
  array.some((x) => {
    if (typeof x !== "number") {
      console.error("Some elements inside the array are not numbers.");
      return;
    }
  });

  const evens = [];
  const odds = [];

  array.filter((x) => {
    x % 2 === 0 ? evens.push(x) : odds.push(x);
  });
  return { evens, odds };
};

console.log(evenAndOdd(numberElevator(numberArray, 2)).evens);
console.log(evenAndOdd(numberElevator(numberArray, 5)).odds);

//------------------------------------------1️⃣1️⃣ to 2️⃣1️⃣------------------------------------------//

//------------------------------------------2️⃣2️⃣ to 2️⃣4️⃣------------------------------------------//

console.warn(
  `👁️Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos, el primero tendrá los numeros ordenados en forma ascendente y el segundo de forma descendiente, pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5]`
);

const arrayOrdenator = (array = "") => {
  if (array === "") {
    console.warn("Array cant be empty.");
    return;
  }
  if (!(array instanceof Array)) {
    console.error("Needs to be an array.");
    return;
  }
  array.some((x) => {
    if (typeof x !== "number") {
      console.error("Some elements inside the array are not numbers.");
      return;
    }
  });
  const arrayAsc = [...array];
  const arrayDesc = [...array];

  arrayAsc.sort((a, b) => a - b);
  arrayDesc.sort((a, b) => b - a);

  return {
    arrayAsc,
    arrayDesc,
  };
};
console.log(arrayOrdenator(array2).arrayAsc);
console.log(arrayOrdenator(array2).arrayDesc);

console.warn(
  `👁️Programa una función que dado un arreglo de elementos, elimine los duplicados, pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true].`
);

const deletingDuplicated = (array = "") => {
  if (array === "") {
    console.warn("Array cant be empty.");
    return;
  }
  if (!(array instanceof Array)) {
    console.error("Needs to be an array.");
    return;
  }
  array.some((x) => {
    if (typeof x !== "number") {
      console.error("Some elements inside the array are not numbers.");
      return;
    }
  });

  const noDuplicated = new Set([...array]);
  console.log(noDuplicated);
};
deletingDuplicated(array2);

console.warn(
  `👁️Programa una función que dado un arreglo de números obtenga el promedio, pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5.`
);
//------------------------------------------2️⃣2️⃣ to 2️⃣4️⃣------------------------------------------//
