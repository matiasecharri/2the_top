//⚡61. DOM 1

let sayThis = `seived`;
const textReader = (text) => {
  speechSynthesis.speak(new SpeechSynthesisUtterance(text));
};
textReader(sayThis);

console.log(document);
console.log(document.head);
console.log(document.body);
console.log(document.doctype);
console.log(document.characterSet);
console.log(document.title);
console.log(document.links);
let imagenes = [...document.images]; //Transformando la coleccion HTML en array.
console.log(imagenes);
console.log(document.forms);
console.log(document.styleSheets);
console.log(document.scripts);
setTimeout(() => {
  console.log(document.getSelection().toString())
}, 3000);

document.write("<h2>太陽</h2>")