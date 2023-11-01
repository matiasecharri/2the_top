//✅Llamada a los elementos HTML
const $container = document.getElementById("container");
const $searchBar = document.getElementById("searchBar");

//✅Esta función se usa para imprimir un array X.
const impresora = array => {
  array.forEach(elemento => {
    $container.innerHTML += `<div class="container-card">
    <img src="${elemento.photo}" alt="${elemento.name}" >
    <div class="container-card_description">
        <h2>${elemento.name}</h2>
        <p>${elemento.description}</p>
    </div>
</div>`;
  });
};

//✅Esta función se usa para dar funcionalidad a la barra de busqueda.
const searchBar = array => {
  $searchBar.addEventListener("keyup", event => {
    console.log(event);
  });
};

//✅Esta funcion se usa para obtener la API y llamar a las funciones.
const consumiendoApi = async () => {
  const getData = await fetch(
    "https://my-json-server.typicode.com/matiasecharri/nippon-bites/products"
  );
  const arraySushi = await getData.json();
  impresora(arraySushi);
  searchBar();
};

consumiendoApi();
