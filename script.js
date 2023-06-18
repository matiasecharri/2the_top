// //ADD
// const pluser = (num1, num2) => {
//   return num1 + num2;
// };

// let resultado = pluser(85, 4);
// console.log("👇 This is the plus function");
// console.log(`Your result is ${resultado}.`);

// //EVEN & ODD, USING AN OBJECT TO RETURN 2 DIFFERENT ARRAYS ;)
// const randomNumbers = [
//   2, 434, 65765, 6, 24, 100, 22, 23, 7, 4, 17, 8, 29, 12, 31, 16, 23, 6, 39, 10,
//   21, 14, 35, 2, 27, 18, 33, 22, 37,
// ];

// const numberClasifier = (array) => {
//   const oddNumbers = [];
//   const evenNumbers = [];
//   const numberPackager = {
//     oddNumbers,
//     evenNumbers,
//   };
//   array.filter((x) => {
//     if (x % 2 === 0) {
//       evenNumbers.push(x);
//     }
//     if (x % 2 !== 0) {
//       oddNumbers.push(x);
//     }
//   });
//   return numberPackager;
// };
// console.log("👇 This is the even/odd function");
// console.log(numberClasifier(randomNumbers));

// //Vocal Counter
// //ARRAY DE VOCALES, PALABRA A CONTAR, LOOP, CONTADOR DE LETRAS
// const vocalCounter = (word) => {
//   const vocals = ["a", "e", "i", "o", "u"];
//   let counterCount = 0;
//   for (let i = 0; i < word.length; i++) {
//     const caracter = word[i].toLowerCase();
//     if (vocals.includes(caracter)) {
//       counterCount++;
//     }
//   }
//   return counterCount;
// };
// console.log("👇 This is the vocalCounter function");
// console.log(`Your word has: ${vocalCounter("pAAAasdn")} vocals.`);

// // Encuentra el número más grande: Escribe una función que reciba un array de números y devuelva el número más grande.
// //Necesito un array, un recorrido, un array a clasificar
// const numerosArray = [8, 5, 10, 11, 45654];
// const bigFinder = (array) => {
//   const theBigOne = array.sort((a, b) => b - a);
//   const finalNumber = theBigOne[0];
//   return finalNumber;
// };
// console.log("👇 This is the big number function");
// console.log(`The biggest number is: ${bigFinder(numerosArray)}.`);

// // Invertir una cadena: Escribe una función que reciba una cadena de texto y devuelva una nueva cadena con los caracteres invertidos.

// let whereAreTheTurtles = "Where are the turtles?";
// const reverseFlash = (text) => {
//   let textToArray = text.split("");
//   let reversing = textToArray.reverse();
//   let backToText = reversing.join("");
//   return backToText;
// };
// console.log("👇 This is the string reverse function");
// console.log(
//   `Your word/phrase BUT reversed is: ${reverseFlash(whereAreTheTurtles)}.`
// );

// // Verificar palíndromo: Escribe una función que reciba una cadena de texto y determine si es un palíndromo (se lee igual de izquierda a derecha y de derecha a izquierda).

// // Calcular factorial: Escribe una función que reciba un número y calcule su factorial (el producto de todos los números enteros positivos desde 1 hasta ese número).

// // Eliminar duplicados: Escribe una función que reciba un array y elimine los elementos duplicados, devolviendo un nuevo array sin duplicados.
// //new Set

// // Comprobar número primo: Escribe una función que reciba un número y determine si es un número primo (es divisible únicamente por 1 y por sí mismo).

// // Contar palabras: Escribe una función que reciba una cadena de texto y devuelva el número de palabras que contiene.

// // Ordenar números: Escribe una función que reciba un array de números y devuelva un nuevo array con los números ordenados de menor a mayor.

// //Habbo bebe
// console.log("👇 This is the Habbo translator function");
// const habboBebe = (word) => {
//   let palabraTransformada = word.toLowerCase().split("");
//   arrayHabbo = palabraTransformada.map((x) => {
//     if (x === "o") {
//       return "u";
//     } else if (x === "l") {
//       return "d";
//     } else {
//       return x;
//     }
//   });
//   let arrayFiltrado = arrayHabbo.filter((x) => {
//     if (x !== "h") {
//       return x;
//     }
//   });
//   let habboBebeWord = arrayFiltrado.join("");
//   return habboBebeWord;
// };

// alert(`Habrá querido decir: ${habboBebe(prompt())}`);

// const toby = {
//   name: "Toby",
//   lastName: "Flenderson",
//   age: 41,
//   hobbies: ["Being a boring person", "Anti-fun", "Silence"],
//   married: false,
//   contact: {
//     email: "tobydundermifflin@gmail.com",
//     twitter: "@tobyflender",
//     movil: null,
//   },
//   getFired: () => {
//     console.log("You are fired Toby");
//   },
//   identity: function () {
//     console.log(
//       `Hi my name is ${this.name} ${this.lastName} and this is my email :) ${
//         this.contact.email
//       } sometimes people say that Im ${this.hobbies[1].toLowerCase()} but I just enjoy the ${this.hobbies[2].toLowerCase()} :)`
//     );
//   },
// };

// toby.identity();

// console.log(Object.keys(toby))




//Re apply-of-concepts
//ADD
const

//EVEN & ODD, USING AN OBJECT TO RETURN 2 DIFFERENT ARRAYS ;)
//Vocal Counter
//ARRAY DE VOCALES, PALABRA A CONTAR, LOOP, CONTADOR DE LETRAS
// Encuentra el número más grande: Escribe una función que reciba un array de números y devuelva el número más grande.
//Necesito un array, un recorrido, un array a clasificar
// Invertir una cadena: Escribe una función que reciba una cadena de texto y devuelva una nueva cadena con los caracteres invertidos.