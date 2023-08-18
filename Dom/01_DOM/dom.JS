//⚡61. DOM 1
document.title = "navigator/pg_machine_test"
const textReader = (text) => {
  speechSynthesis.speak(new SpeechSynthesisUtterance(text));
};
textReader("avanzas");

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
  console.log(document.getSelection().toString());
}, 3000);

//----------------------------------------------------------------------------------------------------------//

// ⚡62. DOM 2 - getElementById, querySelector, querySelectorAll
const $button = document.getElementById("buttonStart");
const $body = document.getElementById("body");
const $img = document.querySelector("img");
const $anchors = document.querySelectorAll("a");
const $imgsWithClass = document.querySelectorAll(".imageClass");

console.log($button);
console.log($body);
console.log($img);
console.log($anchors);
console.log($imgsWithClass);

//----------------------------------------------------------------------------------------------------------//

// ⚡63. DOM 3 - Attributes - Data-Attributes

//🔍Obtener atributos del documento HTML, Lenguaje:
console.log(document.documentElement.getAttribute("lang"));
//🔍Get attribute es bastante optimo porque es especifico.
console.log(document.querySelector(".link-dom").getAttribute("href"));

//✏️Modificar una propiedad del HTML:
document.documentElement.lang = "es";
console.log(document.documentElement.getAttribute("lang"));
//Tambien se puede con SET
document.documentElement.setAttribute("lang", "es-ESP");
console.log(document.documentElement.getAttribute("lang"));

//✏️ Setear atributos en elementos especificos.
const $linkDom = document.querySelector(".link-dom");
$linkDom.setAttribute("target", "blank");
$linkDom.setAttribute("rel", "noopener");
$linkDom.setAttribute(
  "href",
  "http://127.0.0.1:5500/Dom/00_DOM_NAV/navigator.html"
);

//Preguntar si existe un atributo.
console.log($linkDom.hasAttribute("target"));
//Remover atributo.
$linkDom.removeAttribute("target");
console.log($linkDom.hasAttribute("target"));
//Tambien sirve para data attributes, es lo mismo.
$linkDom.setAttribute("data-description", "document object model? Dominic Dom");
console.log($linkDom.getAttribute("data-description"));

//----------------------------------------------------------------------------------------------------------//

// ⚡64. DOM 4 - Styles and CSS Variables

// 👹STYLES:
//-----------setProperty podemos modificar estilos, se escribe igual que el CSS--//

$linkDom.style.setProperty("text-decoration", "none"),
  $linkDom.style.setProperty("color", "white"),
  $linkDom.style.setProperty("position", "absolute"),
  $linkDom.style.setProperty("top", "50px"),
  $linkDom.style.setProperty("left", "50px"),
  $linkDom.style.setProperty("font-family", "monospace"),
  $linkDom.style.setProperty("opacity", "0.75"),
  $linkDom.style.setProperty("font-size", "18px"),
  $linkDom.style.setProperty("width", "100%"),
  $linkDom.style.setProperty("z-index", "999"),
  //-----------Acceder a los estilos del elemento custom:
  console.log($linkDom.style);
//---------- Acceder aTodos los estilos, incluso los default:
console.log(getComputedStyle($linkDom));

// 👹CSS VARS:
const $html = document.documentElement; //Guardamos el HTML en una var para que sea más comodo.
const $bodyX = document.body; //Guardamos el BODY

let violetColor = getComputedStyle($html).getPropertyValue("--color4");
let greenLimeColor = getComputedStyle($html).getPropertyValue("--color2");
let font1 = getComputedStyle($html).getPropertyValue("--font1");

$linkDom.style.setProperty("font-family", font1);
$bodyX.style.setProperty("background-color", violetColor);
$linkDom.style.setProperty("border-bottom", `1px solid ${greenLimeColor}`);

//----------------------------------------------------------------------------------------------------------//


// ⚡65. DOM 4 - CSS Classes









//----------------🌆TEST MACHINE--------------//

const looper = () => {
  $body.innerHTML = `<div class="xd">
  <p>00</p></div>`;
  for (let i = 0; i < 1000; i++) {
    if (i % 2 === 0) {
      setTimeout(() => {
        $body.innerHTML += `<div class="domDiv">
        <h2>太陽</h2>
      </div>`;
      }, i * 800);
    } else {
      setTimeout(() => {
        $body.innerHTML += `<div class="domDiv2">
        <h2>太陽<br>太陽<br>太陽<br>太陽<br>太陽<br>太陽<br>太陽<br>太陽<br>太陽<br>太陽<br>太陽<br>太陽<br>太陽<br>太陽<br>太陽<br>太陽<br>太陽<br>太陽<br>太陽<br>太陽<br>太陽<br>太陽<br>太陽<br>太陽<br>太陽<br>太陽<br>太陽<br>太陽<br>太陽<br>太陽<br>太陽<br></h2>
      </div>`;
      }, i * 800);
    }
    setTimeout(() => {
      $body.innerHTML = `<div class="xd">
      <p>01</p></div>`;
      $body.appendChild($linkDom);
      if (i % 2 === 0) {
        setTimeout(() => {
          $body.innerHTML += `<div class="domDiv">
           <h2>太陽</h2>
        </div>`;
        }, i * 400);
      } else {
        setTimeout(() => {
          $body.innerHTML += `<div class="domDiv2">
          <h2>太陽<br>太陽<br>太陽<br>太陽<br>太陽<br>太陽<br>太陽<br>太陽<br>太陽<br>太陽<br>太陽<br>太陽<br>太陽<br>太陽<br>太陽<br>太陽<br>太陽<br>太陽<br>太陽<br>太陽<br>太陽<br>太陽<br>太陽<br>太陽<br>太陽<br>太陽<br>太陽<br>太陽<br>太陽<br>太陽<br>太陽<br></h2>
        </div>`;
        }, i * 400);
      }
    }, 5000);

    setTimeout(() => {
      $body.innerHTML = `<div class="xd">
      <p>02</p></div>`;
      $body.appendChild($linkDom);
      if (i % 2 === 0) {
        setTimeout(() => {
          $body.innerHTML += `<div class="domDiv">
          <h2>太陽</h2>
        </div>`;
        }, i * 200);
      } else {
        setTimeout(() => {
          $body.innerHTML += `<div class="domDiv2">
          <h2>太陽<br>太陽<br>太陽<br>太陽<br>太陽<br>太陽<br>太陽<br>太陽<br>太陽<br>太陽<br>太陽<br>太陽<br>太陽<br>太陽<br>太陽<br>太陽<br>太陽<br>太陽<br>太陽<br>太陽<br>太陽<br>太陽<br>太陽<br>太陽<br>太陽<br>太陽<br>太陽<br>太陽<br>太陽<br>太陽<br>太陽<br></h2>
        </div>`;
        }, i * 200);
      }
    }, 10000);

    setTimeout(() => {
      $body.innerHTML = `<div class="xd">
      <p>03</p></div>`;
      $body.appendChild($linkDom);
      if (i % 2 === 0) {
        setTimeout(() => {
          i === 100 ||
          i === 200 ||
          i === 300 ||
          i === 400 ||
          i === 500 ||
          i === 600 ||
          i === 700
            ? ($body.innerHTML += `<div class="domDivAlt">
          <h2>太陽</h2>
        </div>`)
            : ($body.innerHTML += `<div class="domDiv">
          <h2>太陽</h2>
        </div>`);
        }, i * 20);
      } else {
        setTimeout(() => {
          $body.innerHTML += `<div class="domDiv2">
          <h2>太陽<br>太陽<br>太陽<br>太陽<br>太陽<br>太陽<br>太陽<br>太陽<br>太陽<br>太陽<br>太陽<br>太陽<br>太陽<br>太陽<br>太陽<br>太陽<br>太陽<br>太陽<br>太陽<br>太陽<br>太陽<br>太陽<br>太陽<br>太陽<br>太陽<br>太陽<br>太陽<br>太陽<br>太陽<br>太陽<br>太陽<br></h2>
        </div>`;
        }, i * 100);
      }
    }, 15000);
    setTimeout(() => {
      $body.innerHTML = `<div class="xd">
      <p>04</p></div>`;
      $body.appendChild($linkDom);
      if (i % 2 === 0) {
        setTimeout(() => {
          i === 100 ||
          i === 200 ||
          i === 300 ||
          i === 400 ||
          i === 500 ||
          i === 600 ||
          i === 700
            ? ($body.innerHTML += `<div class="domDivAlt">
          <h2>太陽</h2>
        </div>`)
            : ($body.innerHTML += `<div class="domDiv classDanger">
          <h2>太陽</h2>
        </div>`);
        }, i * 20);
      } else {
        setTimeout(() => {
          $body.innerHTML += `<div class="domDiv2 classDanger">
          <h2>太陽<br>太陽<br>太陽<br>太陽<br>太陽<br>太陽<br>太陽<br>太陽<br>太陽<br>太陽<br>太陽<br>太陽<br>太陽<br>太陽<br>太陽<br>太陽<br>太陽<br>太陽<br>太陽<br>太陽<br>太陽<br>太陽<br>太陽<br>太陽<br>太陽<br>太陽<br>太陽<br>太陽<br>太陽<br>太陽<br>太陽<br></h2>
        </div>`;
        }, i * 50);
      }
    }, 20000);
    setTimeout(() => {
      $body.innerHTML = `<div class="xd">
      <p>05</p></div>`;
      $body.appendChild($linkDom);
      if (i % 2 === 0) {
        setTimeout(() => {
          i === 100 ||
          i === 200 ||
          i === 300 ||
          i === 400 ||
          i === 500 ||
          i === 600 ||
          i === 700
            ? ($body.innerHTML += `<div class="domDivAlt">
          <h2>太陽</h2>
        </div>`)
            : ($body.innerHTML += `<div class="domDiv classDanger">
          <h2>太陽</h2>
        </div>`);
        }, i * 20);
      } else {
        setTimeout(() => {
          $body.innerHTML += `<div class="domDiv2 classDanger">
          <h2>太陽<br>太陽<br>太陽<br>太陽<br>太陽<br>太陽<br>太陽<br>太陽<br>太陽<br>太陽<br>太陽<br>太陽<br>太陽<br>太陽<br>太陽<br>太陽<br>太陽<br>太陽<br>太陽<br>太陽<br>太陽<br>太陽<br>太陽<br>太陽<br>太陽<br>太陽<br>太陽<br>太陽<br>太陽<br>太陽<br>太陽<br></h2>
        </div>`;
        }, i * 20);
      }
    }, 25000);
  }
};

$button.addEventListener("click", () => {
  $body.innerHTML = `<button id="buttonStart2">stop the process pressing <b>back</b>, worst scenario close the window</button>`;
  $body.appendChild($linkDom);
  const $button2 = document.getElementById("buttonStart2");
  $button2.addEventListener("click", () => {
    $body.innerHTML = `<button id="buttonStart3" class="bh">start test</button>`;
    $body.appendChild($linkDom);
    const $button3 = document.getElementById("buttonStart3");
    $button3.addEventListener("click", () => {
      textReader("INICIALIZANDO.");
      looper();
      $body.appendChild($linkDom);
    });
  });
});

//----------------🌆TEST MACHINE--------------//
