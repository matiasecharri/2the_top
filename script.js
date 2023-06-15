//ADD
const pluser = (num1, num2) => {
  return num1 + num2;
};

let resultado = pluser(5, 4);
console.log(resultado);

//EVEN & ODD, USING AN OBJECT TO RETURN 2 DIFFERENT ARRAYS ;)
const randomNumbers = [
  2, 434, 65765, 6, 24, 100, 22, 23, 7, 4, 17, 8, 29, 12, 31, 16, 23, 6, 39, 10,
  21, 14, 35, 2, 27, 18, 33, 22, 37,
];

const numberFilterForEach = (array) => {
  const numberContainer = {
    evenNumbers: [],
    oddNumbers: [],
  };
  array.forEach((x) => {
    if (x % 2 === 0) {
      numberContainer.evenNumbers.push(x);
    } else {
      numberContainer.oddNumbers.push(x);
    }
  });
  return numberContainer;
};
const allDone = numberFilterForEach(randomNumbers);
console.log(allDone);

const numberFilterFilter = (array) => {
  const evenNumbers = array.filter((x) => x % 2 === 0);
  const oddNumbers = array.filter((x) => x % 2 !== 0);

  return { evenNumbers, oddNumbers };
};

const evenNumbers = numberFilterFilter(randomNumbers).evenNumbers;
console.log(evenNumbers);
const oddNumbers = numberFilterFilter(randomNumbers).oddNumbers;
console.log(oddNumbers);

//Vocal Counter

//ARRAY DE VOCALES, PALABRA A CONTAR, LOOP, CONTADOR DE LETRAS
const vocalCounter = (word) => {
  const vocales = ["a", "e", "i", "o", "u"];
  let letterCounter = 0;
  for (let i = 0; i < word.length; i++) {
    const caracter = word[i];
    if (vocales.includes(caracter.toLowerCase())) {
      letterCounter++;
    }
  }
  return letterCounter;
};
console.log(vocalCounter("supercalifragilisticoespialidoso"));

// Encuentra el número más grande: Escribe una función que reciba un array de números y devuelva el número más grande.
//Necesito un array, un recorrido, un array a clasificar
// const numerosArray = [8, 5, 10, 11, 45654];

const numerosArray = [8, 5, 10, 11, 45654, 789, 45646, 121, 2456464];

const theBigNumber = (arrayDeNumeros) => {
  const arrayOrdenado = arrayDeNumeros.sort((a, b) => b - a);
  let bigNumber = arrayOrdenado[0];
  return bigNumber;
};
console.log("DIVISOR, USTED ESTA AQUI");
const finalNumber = theBigNumber(numerosArray);
console.log(finalNumber);

// Suma de múltiplos: Escribe una función que reciba un número y calcule la suma de todos los múltiplos de 3 y 5 que sean menores que ese número.

// Invertir una cadena: Escribe una función que reciba una cadena de texto y devuelva una nueva cadena con los caracteres invertidos.

let whereAreTheTurtles = "Where are the turtles?";
const reverseFlash = (text) => {
  let textToArray = text.split("");
  let reversing = textToArray.reverse();
  let backToText = reversing.join("");
  return backToText;
};
console.log(reverseFlash(whereAreTheTurtles));

// Verificar palíndromo: Escribe una función que reciba una cadena de texto y determine si es un palíndromo (se lee igual de izquierda a derecha y de derecha a izquierda).

// Calcular factorial: Escribe una función que reciba un número y calcule su factorial (el producto de todos los números enteros positivos desde 1 hasta ese número).

// Eliminar duplicados: Escribe una función que reciba un array y elimine los elementos duplicados, devolviendo un nuevo array sin duplicados.
//new Set

// Comprobar número primo: Escribe una función que reciba un número y determine si es un número primo (es divisible únicamente por 1 y por sí mismo).

// Contar palabras: Escribe una función que reciba una cadena de texto y devuelva el número de palabras que contiene.

// Ordenar números: Escribe una función que reciba un array de números y devuelva un nuevo array con los números ordenados de menor a mayor.
