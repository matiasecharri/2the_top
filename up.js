//Necesito RECORRER una PALABRA y sus POSICIONES para determinar si tiene VOCALES
const detector = (palabra) => {
  const vocales = ["a", "e", "i", "o", "u"];
  let contador = 0;
  for (let index = 0; index < palabra.length; index++) {
    const letra = palabra[index].toLowerCase();
    if (vocales.includes(letra)) {
      contador++;
    }
  }
  return contador;
};

console.log(detector("dfdsfds"))
