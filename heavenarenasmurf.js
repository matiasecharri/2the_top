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

const arrayReducer = (array = "") => {
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

  const everyValues = array.reduce((accumulator, x) => {
    return accumulator + x;
  }, 0);

  const finalPromedy = (everyValues / array.length).toFixed(1);
  return finalPromedy;
};
console.log(arrayReducer(array2));

//------------------------------------------2️⃣2️⃣ to 2️⃣4️⃣------------------------------------------//
// La clase recibirá un objeto al momento de instanciarse con los siguentes datos: id de la película en IMDB, titulo, director, año de estreno, país o países de origen, géneros y calificación en IMBD.
//   - Todos los datos del objeto son obligatorios. // DONE 😲
//   - Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y los
//      7 restantes números. / DONE 😲
//   - Valida que el título no rebase los 100 caracteres. / DONE 😲
//   - Valida que el director no rebase los 50 caracteres. / DONE 😲
//   - Valida que el año de estreno sea un número entero de 4 dígitos. / DONE 😲
//   - Valida que el país o paises sea introducidos en forma de arreglo. / DONE 😲
//   - Valida que los géneros sean introducidos en forma de arreglo. / DONE 😲
//   - Valida que los géneros introducidos esten dentro de los géneros
//      aceptados*. / DONE 😲
//   - Crea un método estático que devuelva los géneros aceptados*. / DONE 😲
//   - Valida que la calificación sea un número entre 0 y 10 pudiendo ser
//     decimal de una posición./ / DONE 😲
//   - Crea un método que devuelva toda la ficha técnica de la película. / DONE 😲
//   - Apartir de un arreglo con la información de 3 películas genera 3
//     instancias de la clase de forma automatizada e imprime la ficha técnica
//     de cada película.

// * Géneros Aceptados: Action, Adult, Adventure, Animation, Biography, Comedy, Crime, Documentary ,Drama, Family, Fantasy, Film Noir, Game-Show, History, Horror, Musical, Music, Mystery, News, Reality-TV, Romance, Sci-Fi, Short, Sport, Talk-Show, Thriller, War, Western.

class MovieGenerator {
  constructor(
    id = "",
    title = "",
    director = "",
    year = "",
    country = "",
    genres = "",
    rank = ""
  ) {
    const aceptedGenres = [
      "Action",
      "Adult",
      "Adventure",
      "Animation",
      "Biography",
      "Comedy",
      "Crime",
      "Documentary",
      "Drama",
      "Family",
      "Fantasy",
      "Film Noir",
      "Game-Show",
      "History",
      "Horror",
      "Musical",
      "Music",
      "Mystery",
      "News",
      "Reality-TV",
      "Romance",
      "Sci-Fi",
      "Short",
      "Sport",
      "Talk-Show",
      "Thriller",
      "War",
      "Western",
    ];
    const regexID = /^[A-Za-z]{2}\d{7}$/;
    const regexYear = /^\d{4}$/;
    const regexRating = /^(10(\.0)?|[0-9](\.[0-9])?)$/;

    if (
      id === "" ||
      title === "" ||
      director === "" ||
      year === "" ||
      country === "" ||
      genres === "" ||
      rank === ""
    ) {
      console.warn("All parameters are required.");
      return;
    }
    if (regexID.test(id) === false) {
      console.error("Wrong ID format, 2 letters and 7 numbers are required.");
      return;
    }
    if (title.length > 100 || title.length <= 3) {
      console.error("Title needs to be 3 character to 100.");
      return;
    }
    if (director.length > 50 || director.length <= 4) {
      console.error("Title needs to be 4 character to 100.");
      return;
    }

    if (regexYear.test(year) === false) {
      console.error("Year length needs to be 4 and cant be negative.");
      return;
    }

    if (!(country instanceof Array)) {
      console.error("Country/Countries need to be an Array.");
      return;
    }

    if (!(genres instanceof Array)) {
      console.error("Genre/Genres need to be an Array.");
      return;
    }

    let acepted;
    genres.filter((x) => {
      if (!aceptedGenres.includes(x)) {
        acepted = false;
      }
      return acepted;
    });
    if (acepted === false) {
      console.error(
        `Some genres are not allowed, check allowed genres with the static method: "check", MovieGenerator.check(). `
      );
      return;
    }

    if (regexRating.test(rank) === false) {
      console.error(
        "Ranking needs to be a number between 1/10, can have 1 decimal."
      );
      return;
    }

    this.id = id;
    this.title = title;
    this.director = director;
    this.year = year;
    this.country = country;
    this.genres = genres;
    this.rank = rank;
  }
  static check() {
    console.info(
      "Action",
      "Adult",
      "Adventure",
      "Animation",
      "Biography",
      "Comedy",
      "Crime",
      "Documentary",
      "Drama",
      "Family",
      "Fantasy",
      "Film Noir",
      "Game-Show",
      "History",
      "Horror",
      "Musical",
      "Music",
      "Mystery",
      "News",
      "Reality-TV",
      "Romance",
      "Sci-Fi",
      "Short",
      "Sport",
      "Talk-Show",
      "Thriller",
      "War",
      "Western"
    );
  }
  fullMovieInfo() {
    console.table(`
     ID: ${this.id},
     TITLE: ${this.title},
     DIRECTOR: ${this.director},
     YEAR: ${this.year},
     COUNTRY: ${this.country},
     GENRE: ${this.genres},
     RANKING: ${this.rank}`);
  }
}

MovieGenerator.check();

const movieArray = [
  {
    id: "IN1234567",
    title: "Inception",
    director: "Christopher Nolan",
    year: 2010,
    country: ["Japan", "Canada", "Etc"],
    genres: ["Action", "Drama"],
    rank: 8.8,
  },
  {
    id: "BT1234567",
    title: "Batman Begins",
    director: "Christopher Nolan",
    year: 2005,
    country: ["United States"],
    genres: ["Action", "Drama"],
    rank: 8.2,
  },
  {
    id: "BT1234567",
    title: "Batman Dark Knight Rises",
    director: "Christopher Nolan",
    year: 2008,
    country: ["United States"],
    genres: ["Action", "Drama"],
    rank: 9,
  },
];

const ConstructedMovies = [];
movieArray.forEach((x) => {
  const { id, title, director, year, country, genres, rank } = x;
  const createdByConstructor = new MovieGenerator(
    id,
    title,
    director,
    year,
    country,
    genres,
    rank
  );
  ConstructedMovies.push(createdByConstructor);
});

ConstructedMovies.forEach((x) => {
  x.fullMovieInfo();
});

const [inceptionX, batman1, batman2] = ConstructedMovies;
console.log(inceptionX);

const sortedByRank = ConstructedMovies.sort((a, b) => {
  return b.rank - a.rank;
});
console.log(sortedByRank);
