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
    `Hola, te saluda ${e.target.className}, el click lo originó ${e.target.className}`
  );
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

// $linkEventos.addEventListener("click", e => {
//   alert("Nippon Bitus was Avoided");
//   e.preventDefault(); //Evita la accion por defecto que tenga un elemento, en este caso evita el HREF.
//   e.stopPropagation();
// });

// $divsEventos.forEach(div => {
//   div.addEventListener("click", flujoEventos);
// });

// ⚡76. DOM 16 Event Delegation.

document.addEventListener("click", (e) => {
  if (e.target.matches("#eventos-flujo a")) {
    alert(`event from Document! ${e.target}`);
    e.preventDefault();
    return;
  }
  if (e.target.matches("#eventos-flujo div")) {
    flujoEventos(e);
  }
});

// ⚡77. BOM 17 Properties, events, resize, DOMContentLoad

window.addEventListener("resize", (e) => {
  console.clear()
  console.log("----------RESIZED---------")
  console.log(window.innerHeight);
  console.log(window.innerWidth);
  console.log(window.outerHeight);
  console.log(window.outerWidth);
});

window.addEventListener("scroll", (e) =>{
  console.clear()
  console.log("----------SCROLL---------")
  console.log(window.scrollX)
  console.log(window.scrollY)
})

window.addEventListener("DOMContentLoaded", (e) =>{
  console.clear()
  console.log("----------SCREEN---------")
  console.log(window.screenX)
  console.log(window.screenY)
})

// ⚡78. BOM 18 Methods
const $openWinButton = document.getElementById("openW")
const $closeWinButton = document.getElementById("closeW")
const $printWinButton = document.getElementById("printW")

let ventana
$openWinButton.addEventListener("click", (x)=>{
 ventana = window.open("/")
})

$closeWinButton.addEventListener("click", (x)=>{
ventana.close()
})

$printWinButton.addEventListener("click", (x)=>{
  window.print()
})
