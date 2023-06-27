//ADD
const pluser = (num1, num2) => {
  return num1 + num2;
};

let resultado = pluser(85, 4);
console.log("👇 This is the plus function");
console.log(`Your result is ${resultado}.`);

//EVEN & ODD, USING AN OBJECT TO RETURN 2 DIFFERENT ARRAYS ;)
const randomNumbers = [
  2, 434, 65765, 6, 24, 100, 22, 23, 7, 4, 17, 8, 29, 12, 31, 16, 23, 6, 39, 10,
  21, 14, 35, 2, 27, 18, 33, 22, 37,
];

const numberClasifier = (array) => {
  const oddNumbers = [];
  const evenNumbers = [];
  const numberPackager = {
    oddNumbers,
    evenNumbers,
  };
  array.filter((x) => {
    if (x % 2 === 0) {
      evenNumbers.push(x);
    }
    if (x % 2 !== 0) {
      oddNumbers.push(x);
    }
  });
  return numberPackager;
};
console.log("👇 This is the even/odd function");
console.log(numberClasifier(randomNumbers));

//Vocal Counter
//ARRAY DE VOCALES, PALABRA A CONTAR, LOOP, CONTADOR DE LETRAS
const vocalCounter = (word) => {
  const vocals = ["a", "e", "i", "o", "u"];
  let counterCount = 0;
  for (let i = 0; i < word.length; i++) {
    const caracter = word[i].toLowerCase();
    if (vocals.includes(caracter)) {
      counterCount++;
    }
  }
  return counterCount;
};
console.log("👇 This is the vocalCounter function");
console.log(`Your word has: ${vocalCounter("pAAAasdn")} vocals.`);

// Encuentra el número más grande: Escribe una función que reciba un array de números y devuelva el número más grande.
//Necesito un array, un recorrido, un array a clasificar
const numerosArray = [8, 5, 10, 11, 45654];
const bigFinder = (array) => {
  const theBigOne = array.sort((a, b) => b - a);
  const finalNumber = theBigOne[0];
  return finalNumber;
};
console.log("👇 This is the big number function");
console.log(`The biggest number is: ${bigFinder(numerosArray)}.`);

// Invertir una cadena: Escribe una función que reciba una cadena de texto y devuelva una nueva cadena con los caracteres invertidos.

let whereAreTheTurtles = "Where are the turtles?";
const reverseFlash = (text) => {
  let textToArray = text.split("");
  let reversing = textToArray.reverse();
  let backToText = reversing.join("");
  return backToText;
};
console.log("👇 This is the string reverse function");
console.log(
  `Your word/phrase BUT reversed is: ${reverseFlash(whereAreTheTurtles)}.`
);

// Verificar palíndromo: Escribe una función que reciba una cadena de texto y determine si es un palíndromo (se lee igual de izquierda a derecha y de derecha a izquierda).

// Calcular factorial: Escribe una función que reciba un número y calcule su factorial (el producto de todos los números enteros positivos desde 1 hasta ese número).

// Eliminar duplicados: Escribe una función que reciba un array y elimine los elementos duplicados, devolviendo un nuevo array sin duplicados.
//new Set

// Comprobar número primo: Escribe una función que reciba un número y determine si es un número primo (es divisible únicamente por 1 y por sí mismo).

// Contar palabras: Escribe una función que reciba una cadena de texto y devuelva el número de palabras que contiene.

// Ordenar números: Escribe una función que reciba un array de números y devuelva un nuevo array con los números ordenados de menor a mayor.

//Habbo bebe
/*
console.log("👇 This is the Habbo translator function");
const habboBebe = (word) => {
  let palabraTransformada = word.toLowerCase().split("");
  arrayHabbo = palabraTransformada.map((x) => {
    if (x === "o") {
      return "u";
    } else if (x === "l") {
      return "d";
    } else {
      return x;
    }
  });
  let arrayFiltrado = arrayHabbo.filter((x) => {
    if (x !== "h") {
      return x;
    }
  });
  let habboBebeWord = arrayFiltrado.join("");
  return habboBebeWord;
};

alert(`Habrá querido decir: ${habboBebe(prompt())}`);

const toby = {
  name: "Toby",
  lastName: "Flenderson",
  age: 41,
  hobbies: ["Being a boring person", "Anti-fun", "Silence"],
  married: false,
  contact: {
    email: "tobydundermifflin@gmail.com",
    twitter: "@tobyflender",
    movil: null,
  },
  getFired: () => {
    console.log("You are fired Toby");
  },
  identity: function () {
    console.log(
      `Hi my name is ${this.name} ${this.lastName} and this is my email :) ${
        this.contact.email
      } sometimes people say that Im ${this.hobbies[1].toLowerCase()} but I just enjoy the ${this.hobbies[2].toLowerCase()} :)`
    );
  },
};

toby.identity();

console.log(Object.keys(toby));

let edad = 17;
let eresMayor = edad >= 18 ? "Eres mayor de edad" : "Eres menor de edad";
console.log(eresMayor);

let dia = 2;
switch (dia) {
  case 0:
    console.log("Domingo");
    break;
  case 1:
    console.log("Lunes");
    break;
  case 2:
    console.log("Martes");
    break;
  default:
    console.log("No tenemos ese día");
    break;
}

try {
  let nombre1 = prompt();
  if (!isNaN(nombre1)) {
    alert("nombre1 needs to be a string");
    throw new Error("nombre1 needs to be a string");
  }
  console.log(nombre1);
} catch (error) {
  console.log(error);
} */

const frutitas = [
  "Manzana",
  "Plátano",
  "Naranja",
  "Uva",
  "Fresa",
  "Piña",
  "Mango",
  "Sandía",
  "Pera",
  "Melón",
  "Kiwi",
  "Durazno",
  "Cereza",
  "Limón",
  "Mandarina",
  "Pomelo",
  "Ciruela",
  "Guayaba",
  "Frambuesa",
  "Coco",
  "Papaya",
  "Granada",
  "Mora",
  "Lichi",
  "Maracuyá",
  "Melocotón",
  "Higo",
  "Morera",
  "Acerola",
  "Grosella",
  "Zarzamora",
  "Carambola",
  "Pitahaya",
  "Guanábana",
  "Cactus",
  "Níspero",
  "Pepino",
  "Pepino de mar",
  "Pera espinosa",
  "Caqui",
  "Anón",
  "Chirimoya",
  "Rambután",
  "Tamarindo",
  "Mangostán",
  "Lulo",
  "Zapote",
  "Cereza de Barbados",
  "Mamey",
  "Guayaba de Costa Rica",
  "Arándano",
  "Frambuesa negra",
  "Huckleberry",
  "Grosella negra",
  "Guinda",
  "Acerola",
  "Níspero",
  "Chabacano",
  "Nectarina",
  "Carambola",
  "Cereza de invierno",
  "Feijoa",
  "Uchuva",
  "Membrillo",
  "Guava",
  "Mandarina Clementina",
  "Pera asiática",
  "Granadilla",
  "Pomelo rosa",
  "Pera de agua",
  "Mango verde",
  "Lima",
  "Grosella espinosa",
  "Caqui persimón",
  "Arándano rojo",
  "Lima kaffir",
  "Baya de saúco",
  "Frambuesa dorada",
  "Grosella dorada",
  "Melón piel de sapo",
  "Lima persa",
  "Mora de Logan",
  "Grosella blanca",
  "Chirimoya",
  "Naranjilla",
  "Zapote negro",
  "Melón calameño",
  "Lima de los cítricos",
  "Mora de Boysen",
  "Membrillo chino",
  "Mamey sapote",
  "Kiwi dorado",
  "Tamarillo",
  "Grosella china",
  "Ciruela claudia",
  "Lima de hierba",
  "Marula",
  "Mango de azúcar",
  "Membrillo japonés",
  "Mora silvestre",
];

function impresoraDeFrutitas(array1) {
  const citricos = [];
  const lasQueMeGustan = [];
  for (let i = 0; i < array1.length; i++) {
    if (
      array1[i].includes("Naranja") ||
      array1[i].includes("Limón") ||
      array1[i].includes("Pomelo") ||
      array1[i].includes("Lima")
    ) {
      citricos.push(array1[i]);
    } else if (
      array1[i].includes("Marula") ||
      array1[i].includes("Chirimoya") ||
      array1[i] === "Mango"
    ) {
      lasQueMeGustan.push(array1[i]);
    }
  }
  const misFrutas = {
    citricos,
    lasQueMeGustan,
  };
  return misFrutas;
}

//Hacer un array con algunos personajes de the office y que se impriman con un loop un console.log de cada uno que diga
//el personaje es "Nombre del perssonae" SI TENES BOLAS, hace que cuando salga Toby el mensaje sea estas despedido.

const theOffice = [
  "michael",
  "pam",
  "jim",
  "dwight",
  "toby",
  "angela",
  "ryan",
  "kevin",
  "oscar",
  "kelly",
  "meredith",
];
function personajesAMostrar(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === "toby") {
      console.log(`estas despedido ${array[i]}`);
    } else if (array[i] === "kelly" || array[i] === "ryan") {
      console.log(`que personaje pesado es ${array[i]}`);
    } else {
      console.log(`nombre de personaje: ${array[i]}`);
    }
  }
}

//personajesAMostrar(theOffice);

//Hacer otro array con personajes de la vida real que dibella conozca, que se impriman en el conssole log y diga la persona es y su nombre ademas SI TENES BOLAS que las personas que tengan Vodopivec en su nombre se pusheen a un array de Vodopivecs.

const conocidos = [
  "gabriel cabrera",
  "matias angulegui echarri",
  "tamara vodopivec",
  "nicolas vodopivec",
  "rocio vodopivec",
  "sonia casco",
  "carlos vodopivec",
  "nayla vodopivec",
  "camila vodopivec",
  "isaias noche",
  "benjamin shjadksj",
  "claudio angulegui echarri",
  "nadia colaprisca",
  "benjamin maldonado",
  "vex vodopivec",
];
function impresivec(arraivec) {
  const vodopivecs = [];
  for (let i = 0; i < arraivec.length; i++) {
    console.log(`la persona es: ${arraivec[i]}`);
    if (arraivec[i].includes("vodopivec")) {
      vodopivecs.push(arraivec[i]);
    }
  }
  return vodopivecs;
}

const vodos = impresivec(conocidos);
console.log(vodos);

//Los numeros que dividido 2 dan resto 0 son pares, sino son impares

const arrayDeNumeros = [
  5, 8, 4, 6, 10, 20, 11, 15, 18, 19, 22, 456, 13, 17, 199,
];

function impresoraDeNumeros(array) {
  const numerosPares = [];
  const numerosImpares = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      numerosPares.push(array[i]);
    } else {
      numerosImpares.push(array[i]);
    }
  }
  let paqueteDeNumeros = [numerosImpares, numerosPares]
  return paqueteDeNumeros
}



const arrayDePares = impresoraDeNumeros(arrayDeNumeros)[1 ]
console.log(arrayDePares)


//FUNCION FLECHA//

const saluditos = function () {
  console.log("oda")
}
saluditos();

const saluditos1 = () => {
  console.log("oda")
}
saluditos1();


const saluditos2 = nombre => console.log(`oda ${nombre}`);
saluditos2("matias"); 

 
const obj = {
  name: 'John',
  sayHello: () => {
    console.log(`Hello, ${obj.name}!`); // `this` se refiere al objeto `obj`
    
    const innerArrow = () => {
      console.log(`Hola, ${obj.name}!`); // `this` también se refiere al objeto `obj`
    };
    
    innerArrow();
  }
};

obj.sayHello(); // Salida: Hello, John! \n Hola, John!
