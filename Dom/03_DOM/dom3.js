// ⚡66. DOM 5 - Text & HTML
const $html = document.documentElement;
const $domP = document.getElementById("whatIsDom");
const font2 = getComputedStyle($html).getPropertyValue("--font2");
let text = `<p> In web development, the term "DOM" stands for Document Object Model. It is a programming interface that represents the structure of a web page as a tree-like structure of objects, where each object corresponds to an element or a component within the HTML, XML, or XHTML document.
<br><br>The DOM provides a way for programs, usually scripts written in languages like JavaScript, to dynamically interact with and manipulate the content, structure, and style of a web page. This enables developers to create interactive and dynamic web experiences by accessing and modifying the DOM elements and their properties in real-time, allowing changes to be reflected immediately in the user's browser without requiring a full page reload.<br><br>The DOM plays a crucial role in modern web development by bridging the gap between the static markup of a web page and the dynamic interactions users expect from web applications</p>`;
$domP.style.setProperty("font-family", font2);
$domP.style.setProperty("font-weight", "300");
$domP.style.setProperty("color", "white");
$domP.style.setProperty("opacity", "0.8");
$domP.style.setProperty("width", "95%");

$domP.innerText = text; //Deprecated DONT USE 🚧.
$domP.textContent = text; //Useful just for PLAIN TEXT, example: WHATSAPP ✅
// $domP.outerHTML = text; //Useful for HTML format code. Replaces only DOM content ✅ //No obtiene los estilos de arriba
$domP.innerHTML = text; //Useful for HTML format code. Replaces HTML from DOM ✅

//----------------------------------------------------------------------------------------------------------------------------------

// ⚡66. DOM 6 - Traversing, se enfoca a los elementos HTML y seleccionarlos, no confundir firstElementChild con firstChild, ya que firstElementChild hace referencia al elemento HTML (tags) y firstChild a los NODOS.
const $mainP = document.querySelector(".main");
console.log($mainP.children); //Accedemos a todos los hijos
console.log($mainP.children[1]); //Accedemos a un hijo especifico
console.log($mainP.firstElementChild); //Accedemos a su primer hijo
console.log($mainP.lastElementChild); //Accedemos a su primer hijo
console.log($mainP.parentElement); //Accedemos a su elemento padre
console.log($mainP.previousElementSibling); //Accedemos a hermano anterior
console.log($mainP.nextElementSibling); //Accedemos a hermano siguiente
console.log($mainP.children[0].closest("p")); //Método para buscar al elemento más cercano al que queramos referirnos.

//----------------------------------------------------------------------------------------------------------------------------------

// ⚡67. DOM 7 - Creating ELEMENTS and FRAGMENTS. //FORMAS DE CREAR ELEMENTOS
const stylingIgnore = () => {
  $figCaption.style.setProperty("margin-top", "20px");
  $figCaption.style.setProperty("color", "#a5a4ac");
  $figCaption.style.setProperty("font-family", font2);
};

//✅Forma MUY LENTA pero correcta, creando nodos y luego haciendolos aparecer. 🤔createEleement + appendChild
//1️⃣ CREAMOS LOS NODOS
const $figure = document.createElement("figure");
const $img = document.createElement("img");
const $figCaption = document.createElement("figcaption");
const $figCapText = document.createTextNode(
  "This text is generated by createTextNode"
);
const $mainDeposit = document.getElementById("main");

//2️⃣ ESPECIFICAMOS el nodo que queremos agregar y donde, en este caso insertamos una img, caption y text dentro de un figure.
$figure.appendChild($img);
$figure.appendChild($figCaption);
$figCaption.appendChild($figCapText);
$mainDeposit.appendChild($figure);
stylingIgnore();

//❌Forma NOOO! muy correcta por vulnerabilidades y lentitud. 🤔INNERHTML
const $figure2 = document.createElement("figure");
$figure2.innerHTML = `<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqbB74z2GX8K9rd5wE6rmDZONS2SWcXiznAbcRUxM&s" alt="Foca">`;
$mainDeposit.appendChild($figure2);

//Tambien podemos obtener elementos dentro de lo que insertamos y modificarlos:
const $imgSrc = $figure2.querySelector("img");
$imgSrc.style.setProperty("width", "35px");

//✅Forma EFECTIVA 🤔document.CreateDocumentFragment()

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
  "001",
  "0001",
];

const $ul3 = document.createElement("ul"); //Creamos un UL
const $fragment = document.createDocumentFragment(); // Creamos un FRAGMENT

months.forEach((x) => {
  const $li = document.createElement("li"); //Creamos un LI
  $li.textContent = x; //Hacemos que el contenido de dicho LI sea cada elemento del ARRAY
  $fragment.appendChild($li); //Hacemos que los LI aparezcan en el fragment
  $li.style.setProperty("color", "rgb(165,164,172)"); //Estilos
  $li.style.setProperty("list-style", "none");
});

$ul3.appendChild($fragment); //Colocamos el fragment dentro del UL.
document.body.appendChild($ul3); //Colocamos el UL (que dentro tiene el fragment) dentro de donde queramos.
