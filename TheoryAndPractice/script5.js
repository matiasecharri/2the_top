// ✅THIS----------------------------------------------------//

this.nombre =
  "🌍Global Context, en este caso estamos en el this Global, es decir en el de window.";
console.log(this); //Sin contexto window es el contexto.
console.log(this === window);

function imprimir() {
  console.log(this.nombre);
}
imprimir();

const obj = {
  nombre:
    "🤖Object Context: en este caso this se encuentra dentro de un objeto, es por eso que hace referencia a ese contexto.",
  imprimir,
};

obj.imprimir();

const obj3 = {
  nombre: "Object Context 3",
  imprimir: () => {
    console.log(this.nombre);
  },
};

obj3.imprimir();
//La arrow function no crea un scope propio, por eso es que salta directamente a al contexto en el que fue creado el objeto, en este caso obj3 fue creado en global.

function Persona(nombre) {
  this.nombre = nombre;
  return function () {
    console.log(this.nombre);
  };
}
//Lo que pasa aca es que la function esta creando un nuevo scope, ya que no es arrow, y como internamente no tiene la propiedad nombre busca el this global.
let jimHalpert = new Persona("🤖Object Context: Jim Halpert");
jimHalpert();

//-----------------------------//
function Persona2(nombre) {
  this.nombre = nombre;
  return () => {
    console.log(this.nombre);
  };
}
//Entonces lo solucionamos con una arrow function la cual no va a crear un nuevo scope y directamente va a recibir el this de su entorno.
let jimHalpertArrow = new Persona2("🤖Object Context: Jim Halpert Arrow");
jimHalpertArrow();
