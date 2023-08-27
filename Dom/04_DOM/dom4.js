import { messages } from "./array.js";
// ⚡69. DOM 8 - Templates HTML
const $opacityProv = document.querySelector(".opacityProvider");
setInterval(() => {
  $opacityProv.classList.toggle("back");
}, 6000);

//---------------------------------------------------------------
const $main = document.getElementById("main");
const $template = document.getElementById("templateCard").content;
const $fragment = document.createDocumentFragment();
//---------------------------------------------------------------

//❄️Los FRAGMENTS van a mejorar el rendimiento de nuestra aplicacion
//ya que se evita pegarle al DOM en cada iteracion, podemos combinarlo con TEMPLATE.

let inserter = $template.querySelector(".textContainer p");

messages.forEach((x, i) => {
  if (x.message.length > 1100) {
    x.message = `<p><span class="error1">ERROR:</span><span class="error2"> Could not generate message ${i}.</span><p>`;
    console.error(`Message in position: "${i}" is too long.`);
  }

  // Buscar la palabra "dermal" y aplicar estilo en línea
  if (x.message.includes("cybernetic implants")) {
    x.message = x.message.replace(
      /cybernetic implants/gi,
      '<span class="highlight">cybernetic implants</span>'
    );
  }

  inserter.innerHTML = x.message;
  let $clone = document.importNode($template, true);
  $fragment.appendChild($clone);
});

$main.appendChild($fragment);

if ($main.lastElementChild.querySelector("div p")) {
  $main.removeChild($main.lastElementChild);
}
