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
  let paqueteDeNumeros = [numerosImpares, numerosPares];
  return paqueteDeNumeros;
}

const arrayDePares = impresoraDeNumeros(arrayDeNumeros)[1];
console.log(arrayDePares);

//FUNCION FLECHA//

const saluditos = function () {
  console.log("oda");
};
saluditos();

const saluditos1 = () => {
  console.log("oda");
};
saluditos1();

const saluditos2 = (nombre) => console.log(`oda ${nombre}`);
saluditos2("matias");

const obj = {
  name: "John",
  sayHello: () => {
    console.log(`Hello, ${obj.name}!`); // `this` se refiere al objeto `obj`

    const innerArrow = () => {
      console.log(`Hola, ${obj.name}!`); // `this` también se refiere al objeto `obj`
    };

    innerArrow();
  },
};

obj.sayHello(); // Salida: Hello, John! \n Hola, John!

//POO
/* 
Clases - Modelo a seguir
Objetos - Instancia de una CLASE-
  Atributos - Es una caracteristica o propiedad del objeto (son variables dentro de un objeto)
  Metodos - Son las acciones que un objeto puede realizar (funciones dentro de un objeto)
*/

function CyberWareConstructor(name, bodypart, price, functionality) {
  //ATRIBUTOS, VARIABLES DENTRO DE OBJETOS
  this.name = name;
  this.bodypart = bodypart;
  this.price = price;
  this.functionality = functionality;
}
// FUNCIONES METODO COMPARTIDO EVITANDO EL DESPERDICIO DE RECURSOS
CyberWareConstructor.prototype.call = function () {
  console.log(
    `item_selected: ${this.name} - bodypart: ${this.bodypart} - price: ${this.price} - ${this.functionality}`
  );
};
CyberWareConstructor.prototype.slots = function () {
  if (this.bodypart === null) {
    console.log(`Your slot is empty.`);
  } else {
    console.log(`You need an empty space in the ${this.bodypart} slot.`);
  }
};

const item01 = new CyberWareConstructor(
  "sandevistan",
  "column",
  28000,
  "upgrade"
);
const item02 = new CyberWareConstructor("mantis_blades", null, 16000, "weapon");

item01.call();
item02.call();
item01.slots();
item02.slots();

/*CONSTRUCTOR*/
function AnimalCreator(especie, edad, sonido) {
  this.especie = especie;
  this.edad = edad;
  this.sonido = sonido;
}
/*METODOS PARA EL CONSTRUCTOR*/
AnimalCreator.prototype.hablar = function () {
  console.log(this.sonido);
};

/*HERENCIA PROTOTIPICA*/
function CatCreator(especie, edad, sonido, raza) {
  this.super = AnimalCreator;
  this.super(especie, edad, sonido);
  this.raza = raza;
}

/*CAT CREATOR ESTA HEREDANDO EL PROTOTIPO DE ANIMAL CREATOR*/
CatCreator.prototype = new AnimalCreator();
CatCreator.prototype.constructor = CatCreator;

/*CREACIONES*/
const perro = new AnimalCreator("canino", 2, "Guauu Guauu");
const sphynxCat = new CatCreator("felino", 4, "Miaauuu", "Sphynx");
console.log(sphynxCat);
sphynxCat.hablar();

//Funcion Constructora
function HumanCreator(etnia, edad) {
  this.etnia = etnia;
  this.edad = edad;
}
//Agregando Metodos al Prototipo
HumanCreator.prototype.respiracion = function () {
  console.log("Estoy respirando, soy un humano");
};
//Creando un nuevo humano
const humano1 = new HumanCreator("Africana", 33);
console.log(humano1);
humano1.respiracion();
//Creando un nuevo Asiatico el cual herederá las propiedades, metodos y el prototipo de HumanCreator
function AsianCreator(etnia, edad, pais) {
  this.super = HumanCreator;
  this.super(etnia, edad);
  this.pais = pais;
}
//Aclaramos que el prototypo de AsianCreator va a ser una nueva instancia de HumanCreator
AsianCreator.prototype = new HumanCreator();
//Especificamos que el constructor va a ser AsianCreator porque de lo contrario heredaria el constructor de HumanCreator
AsianCreator.prototype.constructor = AsianCreator;

//Agregamos nuevo metodo al prototipo AsianCreator
AsianCreator.prototype.soyAsiatico = function () {
  console.log(`Vengo de ${this.pais}`);
};

const japones1 = new AsianCreator("asiatico", 40, "Japon, Osaka");
console.log(japones1);

japones1.respiracion();
japones1.soyAsiatico();

// Nueva función constructora basada en AsianCreator
function KoreanCreator(pais, ciudad) {
  this.super = AsianCreator;
  this.super("asiático", 30, pais);
  this.ciudad = ciudad;
}

// Herencia del prototipo de AsianCreator
KoreanCreator.prototype = new AsianCreator();
KoreanCreator.prototype.constructor = KoreanCreator;

// Nuevo método específico de KoreanCreator
KoreanCreator.prototype.soyCoreano = function () {
  console.log("Soy coreano de " + this.ciudad);
};

// Crear una instancia de KoreanCreator
const coreano1 = new KoreanCreator("Corea del Sur", "Seúl");
console.log(coreano1);

coreano1.respiracion(); // Método heredado de HumanCreator a través de AsianCreator
coreano1.soyAsiatico(); // Método heredado de AsianCreator
coreano1.soyCoreano(); // Método específico de KoreanCreator

//CREANDO UNA CELULA
function LifeGenerator(cells, age) {
  this.cells = cells;
  this.age = age;
}

LifeGenerator.prototype.respirando = function () {
  console.log(`Soy un organismo ${this.cells}, estoy respirando`);
};

const vida1 = new LifeGenerator("pluricelular", 0);
console.log(vida1);
vida1.respirando();

//CREANDO UN PRIMATE
function EvolveGenerator(cells, age, specie) {
  this.super = LifeGenerator;
  this.super(cells, age);
  this.specie = specie;
}

EvolveGenerator.prototype = new LifeGenerator();
EvolveGenerator.prototype.constructor = EvolveGenerator;
EvolveGenerator.prototype.action = function () {
  console.log(`Paso tiempo, pude evolucionar, mi especie es ${this.specie}`);
};

const animal1 = new EvolveGenerator("pluricelular", 7, "primate");
console.log(animal1);
animal1.respirando();
animal1.action();

//CREANDO UN HUMANO
function BecomeHuman(cells, age, specie, skill) {
  this.super = EvolveGenerator;
  this.super(cells, age, specie);
  this.skill = skill;
}

BecomeHuman.prototype = new EvolveGenerator();
BecomeHuman.prototype.constructor = BecomeHuman;
BecomeHuman.prototype.skilling = function () {
  console.log(
    `Mi evolución transcurre muy rápido, ahora que soy ${this.specie} soy capaz de ${this.skill}`
  );
};

const human1 = new BecomeHuman("pluricelular", 40, "humano", "hacer fuego");
console.log(human1);
human1.respirando();
human1.action();
human1.skilling();

//CREANDO UN CYBORG

function BecomeCyborg(cells, age, specie, skill, skill2) {
  this.super = BecomeHuman;
  this.super(cells, age, specie, skill);
  this.skill2 = skill2;
}

BecomeCyborg.prototype = new BecomeHuman();
BecomeCyborg.prototype.constructor = BecomeCyborg;
BecomeCyborg.prototype.newskill = function () {
  console.log(
    `La evolución no se detuvo aparentemente ahora soy un ${this.specie} y soy capaz de ${this.skill2}`
  );
};

const cyborg1 = new BecomeCyborg(
  "pluricelular",
  65,
  "cyborg",
  "hacer fuego",
  "ralentizar el tiempo"
);
console.log(cyborg1);
cyborg1.respirando();
cyborg1.action();
cyborg1.skilling();
cyborg1.newskill();

//CREANDO UNA MÁQUINA

function BecomeMachine(cells, age, specie, skill, skill2, final) {
  this.super = BecomeCyborg;
  this.super(cells, age, specie, skill, skill2);
  this.final = final;
}

BecomeMachine.prototype = new BecomeCyborg();
BecomeMachine.prototype.constructor = BecomeMachine;
BecomeMachine.prototype.theEnd = function () {
  console.log(
    `Parece que hasta acá llegó mi evolución, hace tiempo que no necesito ${this.skill} o ${this.skill2}... Termine siendo ${this.specie} y soy capaz de ${this.final}, hasta la próxima :)`
  );
};

const machine1 = new BecomeMachine(
  "pluricelular",
  100,
  "maquina",
  "hacer fuego",
  "ralentizar el tiempo",
  "lo que sea"
);
console.log(machine1);
machine1.respirando();
machine1.action();
machine1.skilling();
machine1.newskill();
machine1.theEnd();

//////////////////////CLASSES Y HERENCIA DE CLASSES /////////////

///CREANDO LA CELULA///

class Celula {
  constructor(nombre, organismo) {
    this.nombre = nombre;
    this.organismo = organismo;
  }
  vivir() {
    console.log(`Mi nombre es ${this.nombre} y soy un/a ${this.organismo}`);
  }
  static info(){
    console.log(`Este es un metodo estático heredado de célula, como veras no tengo propiedades: ${this.nombre}`)
  }
}

const vidaDwight = new Celula("Dwight", "Celula");
console.log(vidaDwight);
vidaDwight.vivir();

///CREANDO UN SIMIO A PARTIR DE LA CELULA///

class Simio extends Celula {
  constructor(nombre, organismo, accion0) {
    super(nombre, organismo);
    this.accion0 = accion0;
  }
  realizandoAccion0() {
    console.log(`Evolucioné ahora puedo ${this.accion0.toLowerCase()}.`);
  }
}

const simioDwight = new Simio("Dwight", "Primate", "Pelar Bananas");
console.log(simioDwight);
simioDwight.vivir();
simioDwight.realizandoAccion0();

///CREANDO UN HUMANO A PARTIR DEL SIMIO///

class Human extends Simio {
  constructor(nombre, organismo, accion0, accion1) {
    super(nombre, organismo, accion0);
    this.accion1 = accion1;
  }
  realizandoAccion1() {
    console.log(
      `Sigo siendo ${this.nombre}, pero ahora soy un ${
        this.organismo
      } y lo que hago es ${this.accion1.toLowerCase()}.`
    );
  }
}

const humanDwight = new Human(
  "Dwight",
  "Humano",
  "Pelar Bananas",
  "Trabajar en ventas"
);
console.log(humanDwight);
humanDwight.vivir();
humanDwight.realizandoAccion0();
humanDwight.realizandoAccion1();

///CREANDO UN CYBORG A PARTIR DEL HUMANO///

class Cyborg extends Human {
  constructor(nombre, organismo, accion0, accion1, accion2) {
    super(nombre, organismo, accion0, accion1);
    this.accion2 = accion2;
  }
  realizandoAccion0() {
    console.log(`Olvide esto luego de haberme convertido en ${this.organismo}`);
  }
  realizandoAccion2() {
    this.organismo.toLowerCase().includes("cyborg")
      ? console.log(
          `Mi evolución continua constantemente ahora soy un ${this.organismo.toLowerCase()} y ademas de ${this.accion1.toLowerCase()} también me encargo de ${this.accion2.toLowerCase()}.`
        )
      : console.log("Parametros Invalidos");
  }
}

const cyborgDwight = new Cyborg(
  "Dwight",
  "Cyborg",
  "Pelar Bananas",
  "Trabajar en ventas",
  "Proteger la ecología"
);

console.log(cyborgDwight);
cyborgDwight.vivir();
cyborgDwight.realizandoAccion0();
cyborgDwight.realizandoAccion1();
cyborgDwight.realizandoAccion2();

Cyborg.info()
