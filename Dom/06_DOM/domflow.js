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
  console.log("----------RESIZED---------")
  console.log(window.innerHeight);
  console.log(window.innerWidth);
  console.log(window.outerHeight);
  console.log(window.outerWidth);
});

window.addEventListener("scroll", (e) =>{
  console.log("----------SCROLL---------")
  console.log(window.scrollX)
  console.log(window.scrollY)
})

window.addEventListener("DOMContentLoaded", (e) =>{
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
// ⚡79. BOM 19 Objects: URL, History, Navigator.    
console.log("****LOCATION**RELACIONADO AL LINK*****")
console.log(location) //Objeto location
console.log(location.origin) //Nos dice la direccion el origen
console.log(location.protocol) // Protocolo http
console.log(location.host) // Host
console.log(location.hostname) // Nombre del host
console.log(location.port) //puerto
console.log(location.href) //link completo
console.log(location.hash) //Detecta el valor de la url luego de un hash #
console.log(location.search) //Detecta valores por URL luego de ?param, ?nombre=jon&apellido=bolton
console.log(location.pathname) //Path
//location.reload() Recarga la ventana
console.log("****HISTORY**RELACIONADO AL HISTORIAL****")
console.log(window.history) //Cuantas paginas podemos retroceder
console.log(window.history.length) //Length de cuantas paginas vimos
//console.log(window.history.back(2)) //Ir paginas atras
//console.log(window.history.forward(3)) // Ir paginas adelante
//console.log(window.history.go(-1)) // Lo mismo que los de arriba pero todo en uno
console.log("**NAVIGATOR** RELACIONADO AL USUARIO, UBICACION DISPOSITIVO")
console.log(navigator)
console.log(navigator.userAgent)
console.log(navigator.connection)
console.log(navigator.geolocation)
console.log(navigator.mediaDevices)
console.log(navigator.geolocation)
console.log(navigator.onLine)
console.log(navigator.serviceWorker)
console.log(navigator.storage)
console.log(navigator.usb)








