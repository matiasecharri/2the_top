const url = window.location.search.slice(6, 19);
console.log(url);
const $main = document.querySelector("main");

$main.innerHTML = `Este es el TO-DO número ${url}`;
