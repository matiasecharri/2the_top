//✅SYMBOLS -------------------------------------------------//
//Suele usarse como propiedades únicas dentro de los objetos PROPIEDADES PRIVADAS.
let id = Symbol(1);
let id2 = Symbol(2);
console.log("😲SYMBOLS HERE");
console.log(id === id2); //Retorna FALSE porque si bien ambos son 1 son SYMBOLS.

//-----------------------------------------------------------------------------//

const NOMBRE = Symbol("Name");
const SALUDAR = Symbol("Saludo");
const persona = {
  [NOMBRE]: "IrvingSymbol", //Se lo llama entre [] para referirse a el
  edad: 999,
};

persona.NOMBRE = "George"; //No afecta al SYMBOL por más que se llamen NOMBRE los dos
console.log(persona.NOMBRE);
console.log(persona[NOMBRE]); //Se lo llama entre [] para referirse a el
persona[SALUDAR] = function () {
  console.log(
    `Hola!  mi nombre SYMBOL es ${this[NOMBRE]} y mi nombre normal es ${this.NOMBRE}.`
  );
};
persona[SALUDAR]();

console.log("---------------------------------");
Object.getOwnPropertySymbols(persona); //Busca los SYMBOLS dentro del objeto ya que no salen al iterarse con un BUCLE NORMAL.

//✅SETS -------------------------------------------------//
//Esta estructura de datos puede ser muy interesante para almacenar cosas unica, por ejemplo correos electronicos.

const ARRAY_NAMES = [
  "Mike",
  "Jim",
  "Kevin",
  "Pam",
  "Dwight",
  "Dwight",
  "Pam",
  "Jim",
  "Toby",
];
console.log(ARRAY_NAMES);
const SET_NAMES = new Set([...ARRAY_NAMES]); //Transformamos el array original en un SET borra los duplicados.
SET_NAMES.add("Angela"); //Podemos agregar nuevos elementos gracias .add
SET_NAMES.add("Angela"); //Por más que agreguemos 2 veces el mismo elemento NO ADMITE duplicados.
SET_NAMES.add("Daryl");
SET_NAMES.delete("Toby"); //Borra un elemento especifico, bastante interesante
console.log(SET_NAMES.has("Toby")); //True o false en base a
console.log(SET_NAMES);
console.log(SET_NAMES.size); //En vez de .length podemos usar size para saber la longitud

// SET_NAMES.clear(); //Vacía el SET totalmente

console.log("🕯️ El array que hicimos con array from");
const SET_TO_ARRAY = Array.from(SET_NAMES).sort();
console.log(SET_TO_ARRAY);
console.log("🕯️ El array que hicimos con spread operator");
const SORTED_ARRAY = [...SET_NAMES].sort(); //Volvemos a transformarlo en un ARRAY.
console.log(SORTED_ARRAY);
console.log("✅ Mismo resultado en los dos, prefier el Spread operator");

// ✅MAPS ----------------------------------------------------//
//Se usan para guardar elementos relacionados, son iterables
let soyElMapa = new Map();
soyElMapa.set({}, "Maps are WEIRD"); // Pueden tener KEYS que sean objetos, nulls, etc.
soyElMapa.set("pais", "Argentina"); //Es para agregar valores
soyElMapa.set("poblacion", 40000000);
soyElMapa.set("provincia", "La Pampa");
console.log(soyElMapa.size); //Tamaño
console.log(soyElMapa.has("pais")); //Devuelve un boolean dependiendo si tiene o no el valor
console.log(soyElMapa.get("pais")); //Muestra el valor de la propiedad
soyElMapa.set("poblacion", 55000000);
soyElMapa.delete("provincia"); //Borra
console.log(soyElMapa);
//Son ITERABLES
for (let [key, value] of soyElMapa) {
  console.log(`Key: ${key}, Value: ${value}`);
}

//Otra forma de iniciarlos
const soyElMapa2 = new Map([
  ["nombre", "steven map"],
  ["edad", 200],
  [null, "partida 5000 con hillbilly"],
]);

//Destructuración para guardar keys y values en diferentes arrays.
const llavesMapa2 = [...soyElMapa2.keys()];
const valuesMapa2 = [...soyElMapa2.values()];
console.log(llavesMapa2);
console.log(valuesMapa2);

// ✅WEAKSETS ----------------------------------------------------//
//Solo aceptan objetos dentro, deben estar primero en variables, no iterables
const weakS = new WeakSet();
let value1 = { type: 1 };
let value2 = { name: 2 };
let value3 = { name: 2 };

weakS.add(value1);
weakS.add(value2);
weakS.add(value3);

value2 = null;
console.log(weakS);
//Al nulificar uno de sus valores, se va al tacho.

// ✅WEAKMAPS----------------------------------------------------//
//Solo aceptan objetos dentro, deben estar primero en variables, no iterables
const weakM = new WeakMap();
let key1 = {};
let key2 = {};
let key3 = {};

weakM.set(key1, 2);
weakM.set(key2, 4);
weakM.set(key3, 3);
console.log(weakM);

// ✅Iterables & Iteators ----------------------------------------------------//
//Sirve para recorrer cualquier objeto iterable, como: Arrays, maps, sets, strings
const iterable = [1, 2, 3, 4, 5, 88];
const iterator1 = iterable[Symbol.iterator]();
let next = iterator1.next();
while (!next.done) {
  console.log(next.value);
  next = iterator1.next();
}

// ✅GENERATORS ----------------------------------------------------//
// Convierten el codigo de una funcion en un iterable.
function* iterableF() {
  //Se coloca un * para marcar que es iterable.
  yield "Hola"; //Yield marca cada bloque a iterar
  console.log("Hola buenas buenas");
  yield "Again";
  console.log(2 + 2);
  yield "Almost finished";
  console.log("Adios");
}

let iteratorX = iterableF(); //Guardamos en una variable la ejecucion de la fn.
for (let y of iteratorX) {
  console.log(y);
}

const arrDeLoIterado = [...iterableF()]; //Guardamos cada yield en un array.
console.log(arrDeLoIterado);

// ✅PROXIES ----------------------------------------------------//
// const PERSONA = {
//     nombre: "",
//     edad: 0,
//     apellido: "", //Objeto MODELO
//   };
  
//   const MANEJADOR = {
//     set(obj, prop, value) {
//       if (Object.keys(obj).includes(prop)) { //Manejo de validaciones 
//         obj[prop] = value;
//       } else {
//         console.error(`La propiedad ${prop} no existe.`);
//       }
//     },
//   };
  
//   const DIANA = new Proxy(PERSONA, MANEJADOR); //Nueva instancia, muy parecido
//   DIANA.nombre = "Diana";
//   DIANA.edad = 23;
//   DIANA.apellido = "Vodo";
  
//   console.log(DIANA);

  // ✅COMPUTE PROPERTIES IN OBJECTS -----------------------------------//

let aleatorio = Math.round(Math.random() * 100 + 5)
const OBJ_USUARIOS = {
    propiedad: "value", //Propiedad clasica
    [`id_${aleatorio}`]:"random value" //Propiedad dinamica
  }  
console.log(OBJ_USUARIOS)

  const ARRAY_USUARIOS = ["Michael", "Dwight", "Jim", "Pam"]
  ARRAY_USUARIOS.forEach((x, i)=>OBJ_USUARIOS[`id_${i}`] = x)
  //Los corchetes indican que una propiedad se define
  //de forma dinámica.
  console.log(OBJ_USUARIOS)

  
