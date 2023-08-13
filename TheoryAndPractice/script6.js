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

//Call recibe parametros con coma.
saludarLugar.call(obj, "Aloha", "Alfred");
//Apply recibe parametros como array.
saludarLugar.apply(obj, ["Adios", "Alfred"]);;
//Si pasaramos null aterrizamos al contexto global.
saludarLugar.apply(null, ["Adios", "Alfred"]);;