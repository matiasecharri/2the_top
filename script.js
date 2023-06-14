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

const vocalCounter = (palabra) => {
  const vocales = ["a", "e", "i", "o", "u"];
  let cuentaVocales = 0;
  for (let i = 0; i < palabra.length; i++) {
    const caracter = palabra[i].toLowerCase();
    if(vocales.includes(caracter)){
        cuentaVocales ++
    }
  }

  return cuentaVocales;
};

console.log(vocalCounter("holaaaaaaaaaaa"));


// Encuentra el número más grande: Escribe una función que reciba un array de números y devuelva el número más grande.

// Contar vocales: Escribe una función que reciba una cadena de texto y devuelva el número de vocales que contiene.

// Suma de múltiplos: Escribe una función que reciba un número y calcule la suma de todos los múltiplos de 3 y 5 que sean menores que ese número.

// Invertir una cadena: Escribe una función que reciba una cadena de texto y devuelva una nueva cadena con los caracteres invertidos.

// Verificar palíndromo: Escribe una función que reciba una cadena de texto y determine si es un palíndromo (se lee igual de izquierda a derecha y de derecha a izquierda).

// Calcular factorial: Escribe una función que reciba un número y calcule su factorial (el producto de todos los números enteros positivos desde 1 hasta ese número).

// Eliminar duplicados: Escribe una función que reciba un array y elimine los elementos duplicados, devolviendo un nuevo array sin duplicados.

// Comprobar número primo: Escribe una función que reciba un número y determine si es un número primo (es divisible únicamente por 1 y por sí mismo).

// Contar palabras: Escribe una función que reciba una cadena de texto y devuelva el número de palabras que contiene.

// Ordenar números: Escribe una función que reciba un array de números y devuelva un nuevo array con los números ordenados de menor a mayor.