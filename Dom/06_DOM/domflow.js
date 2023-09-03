// ⚡74. DOM 14 EVENT FLOW AND BUBBLES
//Hay dos maneras en como se va propagando un evento, por defecto la propagacion se da desde el elemento mas interno al mas externo, a esto se llama fase de buburja, en el siguiente ejemplo el evento se propaga desde 3 hasta 1.
const $divsEventos = document.querySelectorAll("#eventos-flujo div");
const $linkEventos = document.querySelector("#eventos-flujo a");
console.log($divsEventos);
console.log($linkEventos);

// ⚡75. DOM 15 stopPropagation & preventDefault
const flujoEventos = function (e) {
  if (e.target.className === "tres") {
    console.log("3️⃣");
  }
  console.log(
    `Hola, te saluda ${this.className}, el click lo originó ${e.target.className}`
  );
  e.stopPropagation(); //Evita que se propague el evento
};

//Agregando el parametro opcional "TRUE", damos vuelta la burbuja, y entonces pasa expandirse del mas externo al mas interno, se llama fase de captura.
// $divsEventos.forEach(div => {
//   //Fase de burbuja:
//   //   div.addEventListener("click", flujoEventos);
//   //Fase de captura:
//   //   div.addEventListener("click", flujoEventos, true);
//   //Tambien podemos enviar un objeto como tercer parmetro, lo cual nos da más opciones:
//   div.addEventListener("click", flujoEventos, {
//     capture: false,
//     once: false,
//   });
// });

$linkEventos.addEventListener("click", e => {
  alert("Nippon Bitus was Avoided");
  e.preventDefault(); //Evita la accion por defecto que tenga un elemento, en este caso evita el HREF.
  e.stopPropagation();
});

// ⚡75. DOM 14 Propagation, Prevent.

$divsEventos.forEach(div => {
  //Fase de burbuja:
  //   div.addEventListener("click", flujoEventos);
  //Fase de captura:
  //   div.addEventListener("click", flujoEventos, true);
  //Tambien podemos enviar un objeto como tercer parmetro, lo cual nos da más opciones:
  div.addEventListener("click", flujoEventos, {
    capture: false,
    once: false,
  });
});

// ⚡76. DOM 14 EVENT FLOW AND BUBBLES
// document.addEventListener("click", e => {
//   if (e.target.matches("#eventos-flujo a")) {
//     alert(`event from Document! ${e.target}`);
//     e.preventDefault();
//     return;
//   }
//   if (e.target.matches("#eventos-flujo div")) {
//     flujoEventos(e);
//   }
// });
