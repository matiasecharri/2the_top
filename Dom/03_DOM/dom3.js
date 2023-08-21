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
