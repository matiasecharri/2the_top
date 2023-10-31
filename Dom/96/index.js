//HTML Elements
const $cointainer = document.getElementById("container");
const $searchBar = document.getElementById("searchBar");

//PRINTER (Used to print arrays on X container.)
const printer = (array, container) => {
  container.innerHTML = "";
  array.forEach(element => {
    container.innerHTML += `
    <div class="container-card">
<img src="${element.photo}" alt="${element.name}">
<div class="container-card_description">
    <h2>${element.name}</h2>
    <p>Price per 5 unit: ${element.pricex5} USD.-</p>
    <p>${element.description}</p>
</div>
</div>`;
  });
};

//FILTER (Used to provide functionalities to the input search.)
const searchBar = (array, container, input) => {
  let userText;
  input.addEventListener("keyup", event => {
    userText = event.target.value.toLowerCase();
    console.log(userText);
    const filteredArray = array.filter(element => {
      return element.name.toLowerCase().includes(userText);
    });
    filteredArray.length !== 0
      ? printer(filteredArray, $cointainer)
      : (container.innerHTML = `<p style="color:black">Item not Found</p>`);
  });

  input.addEventListener("input", event => {
    if (event.target.value === "") printer(array, container);
  });
};

//API Fetching and function invocation.
const app = async () => {
  const getData = await fetch(
    "https://my-json-server.typicode.com/matiasecharri/nippon-bites/products"
  );
  const data = await getData.json();

  searchBar(data, $cointainer, $searchBar);
  printer(data, $cointainer);
};
app();
