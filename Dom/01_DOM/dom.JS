//⚡61. DOM 1
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
$linkDom.setAttribute("href", "http://127.0.0.1:5500/00NoJS/divs.html");
//Preguntar si existe un atributo.
console.log($linkDom.hasAttribute("target"))
//Remover atributo.
$linkDom.removeAttribute("target")
console.log($linkDom.hasAttribute("target"))
//Tambien sirve para data attributes, es lo mismo.
$linkDom.setAttribute("data-description", "document object model? Dominic Dom")
console.log($linkDom.getAttribute("data-description"))















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
        }, i * 50);
      }
    }, 20000);
    setTimeout(() => {
      $body.innerHTML = `<div class="xd">
      <p>05</p></div>`;
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
        }, i * 20);
      }
    }, 25000);
  }
};

$button.addEventListener("click", () => {
  $body.innerHTML = `<button id="buttonStart2">the only way to stop the process is closing the window</button>`;
  const $button2 = document.getElementById("buttonStart2");
  $button2.addEventListener("click", () => {
    $body.innerHTML = `<button id="buttonStart3" class="bh">start test</button>`;
    const $button3 = document.getElementById("buttonStart3");
    $button3.addEventListener("click", () => {
      textReader("INICIALIZANDO.");
      looper();
    });
  });
});

//----------------🌆TEST MACHINE--------------//
