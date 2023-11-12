//Acordate que la arrow function tiene un return implicito
const animalsArray = ["🐶", "🐱", "🐰", "🐦", "🦁", "🐰"];
const animalsByNameArray = [
  "perro",
  "gato",
  "conejito",
  "pájaro",
  "león",
  "conejito",
];

//filter devuelve un nuevo array filtrado con lo que se le pida
const arrayFiltrado = animalsArray.filter(animal => animal !== "🐰");

//map devuelve un array modificado (puede ser el array inicial)
const arrayMapeado = animalsArray.map(animal => (animal = "🐰"));

//find devuelve el primer elemento que coincida con lo que se pide
const primerConejo = animalsArray.find(animal => animal === "🐰");

//findIndex devuelve el índice del primer elemento que coincida.
const posicionConejo = animalsArray.findIndex(animal => animal === "🐰");

//fill rellena TODAS las posiciones de un array con lo que se pida.
const emptyArray = ["", "", "", "", 0, "xd"];
emptyArray.fill("🐰");

//every nos dice si todos los elementos de un array son lo que le pedimos, devuelve un booleano.
const todosConejos = animalsArray.every(animal => animal === "🐰");

//some nos dice si al menos 1 elemento del array coincide con lo que le pedimos, devuelve un booleano.
const algunConejo = animalsArray.some(animal => animal === "🐰");

//reduce nos devuelve todos los elementos acumulados, puede empezar con un valor vacio o el que queramos.
const concatenatedAnimals = animalsArray.reduce((acumulador, animal) => {
  return acumulador + animal;
}, "🐼");

//sort ordena los elementos segun lo que le digamos, CUIDADO MODIFICA EL ARRAY ORIGINAL SI NO LO EVITAMOS.
const animalesOrdenados = [...animalsByNameArray];
animalesOrdenados.sort((a, b) => a.localeCompare(b));

const animalesOrdenadosAlReves = [...animalesOrdenados];
animalesOrdenadosAlReves.sort((a, b) => b.localeCompare(a));

//includes preguntamos si un array incluye un determinado elemento
const incluyeConejo = animalsArray.includes("🐰");

//reverse damos vuelta el array, CUIDADO MODIFICA EL ARRAY ORIGINAL SI NO LO EVITAMOS.
const animalesAlReves = [...animalsArray];
animalesAlReves.reverse();

//shift borramos al primero, CUIDADO MODIFICA EL ARRAY ORIGINAL SI NO LO EVITAMOS.
const borrarAlPrimero = [...animalsArray];
borrarAlPrimero.shift(); //unshift nos agregaria el elemento que queramos (al principio)

//pop borramos al primero, CUIDADO MODIFICA EL ARRAY ORIGINAL SI NO LO EVITAMOS.
const borrarAlUltimo = [...animalsArray];
borrarAlUltimo.pop(); //push nos agregaria el elemento que queramos (al final)

//concat pegamos 2 arrays en un nuevo array.
const pegarArrays = borrarAlPrimero.concat(borrarAlUltimo);
const pegarArrays2 = [...borrarAlPrimero, ...borrarAlUltimo];

//join, transforma el array en string.
const stringAnimales = animalsArray.join("x");

//slice, crear una copia de una parte de un array existente sin modificar el array original.
const arrayRecortado = animalsArray.slice(3, 4);

//splice, es un método que se utiliza para modificar el contenido de un array al agregar, eliminar o reemplazar elementos en el array original.
const emojisConejo = [
  { name: "🐰" },
  { name: "🐰" },
  { name: "🐰" },
  { name: "🐰" },
  { name: "🐰" },
  { name: "🦁" },
  { name: "🐰" },
  { name: "🐰" },
  { name: "🐰" },
  { name: "🐰" },
  { name: "🦁" },
  { name: "🐰" },
  { name: "🐰" },
  { name: "🐰" },
  { name: "🐰" },
  { name: "🐰" },
  { name: "🐰" },
  { name: "🐰" },
  { name: "🐰" },
  { name: "🐰" },
  { name: "🐰" },
  { name: "🐰" },
  { name: "🐰" },
];

const posicionLeon = emojisConejo.findIndex(
  (leon, i) => leon.name === "🦁" && i !== 5
);
const arrayDeUnSoloLeon = emojisConejo.splice(posicionLeon, 1);

//indexOf es adecuado para buscar un valor simple en un array, como un número o una cadena.
const array = [1, 2, 3, 4, 5];
const indice = array.indexOf(3);
