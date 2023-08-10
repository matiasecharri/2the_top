// ✅THIS-----------------------------------//

console.log(this)
function imprimir() {
    console.log(this.nombre);
  }
  
  const obj = {
    nombre: "Contexto Objeto",
    imprimir,
  };
  
  obj.imprimir();
  
  const obj2 = {
    nombre: "Contexto Objeto",
    imprimir2: () => {
      console.log(this.nombre);
    },
  };
  
  // obj2.imprimir2()
  //Esto no funciona porque la arrow function se saltea
  //el contexto, ya que se salta el scope
  
  function Persona (nombre){
    this.nombre = nombre
    return () => console.log(this.nombre)
  }
  //En este caso si funciona la funcion flecha, porque al no tener scope propio toma el de
  //su funcion contenedora "Persona", en cambio si usaramos una función
  //clásica tendriamos problemas, porque crearía su propio scope donde NO recibe
  let edgar = new Persona ("Edgar XVI")
  edgar()
  
  // ✅call, apply, bind-----------------------------------//