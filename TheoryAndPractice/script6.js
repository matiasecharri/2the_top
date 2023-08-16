// ✅CALL,APPLY,BIND-------------------------------------//
this.lugar = "🌍Contexto: Global";

function saludarLugar(saludo, aQuien) {
  console.log(`${saludo} ${aQuien} estamos en ${this.lugar}`);
}

saludarLugar();

const obj = {
  lugar: "🌆Contexto: Objeto",
};

//Con call y apply pasamos el contexto en el cual queremos que se aplique el this, muy util, opcionalmente pueden incluir parametros.

//🦜Call recibe parametros con coma.
saludarLugar.call(obj, "Aloha", "Alfred");
//🦜Apply recibe parametros como array.
saludarLugar.apply(obj, ["Adios", "Alfred"]);
//🦜Si pasaramos null aterrizamos al contexto global.
saludarLugar.apply(null, ["Adios", "Alfred"]);

//⚡ BIND NOS PERMITE ENLAZAR
const persona = {
  nombre: "Jon",
  saludar: function () {
    console.log(`Hello ${this.nombre}!`);
  },
  edad: 48,
  frase: function () {
    console.log(
      `Esta es la frase de ${this.nombre} de ${this.edad} años, si la lees es que estás enlanzando con un bind.`
    );
  },
};
persona.saludar();

const persona2 = {
  nombre: "The Copycat",
  saludar: persona.saludar.bind(persona),
  copiarFrase: persona.frase.bind(persona),
};
//Enlazamos el contexto a persona con el .bind
persona2.saludar();
persona2.copiarFrase();

console.log(crypto.randomUUID());

// ✅JSON----JAVASCRIPT OBJECT NOTATION --------//
//Formato ligero de intercambio de datos, funciona para comunicarse entre diferentes lenguajes.

console.log("[1,2,3, {}, true, 19]");
//✅JSON.parse() le da formato al TEXTO PLANO, volviendolo reconocible por JS.
console.log(JSON.parse("[1,2,3, {}, true, 19]"));
console.log(JSON.parse("null"));
//✅JSON.stringify() hace lo contrario, transforma un OBJECT o algo  hecho en JS en texto plano.
const fruits = ["mango", "banana", "coco"];
console.log(JSON.stringify(fruits));
console.log("<----------SEPARADOR");
//🦜Ejemplo: Transformamos un objeto con STRINGIFY y luego lo recuperamos con PARSE.

const jsonPerson = {
  name: "Dwight Schrute",
  age: 39,
  profession: ["Seller", "Farmer"],
  hobbies: ["Farming", "Paintball", "Sheriff"],
};

let stringifiedPerson = JSON.stringify(jsonPerson);
console.log(stringifiedPerson);

let parsedPerson = JSON.parse(stringifiedPerson);
console.log(parsedPerson);

