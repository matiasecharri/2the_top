const $cointainer = document.getElementById("container");
const $searchBar = document.getElementById("searchBar");

const printer = array => {
  $cointainer.innerHTML = "";
  array.forEach(element => {
    $cointainer.innerHTML += `
    <div class="container-card">
<img src="${element.photo}" alt="${element.name}">
<div class="container-card_description">
    <h2>${element.name}</h2>
    <p>Price per 5 units: ${element.pricex5} USD.-</p>
    <p>${element.description}</p>
</div>
</div>`;
  });
};

const searchBar = array => {
  let userText;
  $searchBar.addEventListener("keyup", event => {
    userText = event.target.value.toLowerCase();
    console.log(userText);
    const filteredArray = array.filter(element => {
      return element.name.toLowerCase().includes(userText);
    });
    filteredArray.length !== 0
      ? printer(filteredArray)
      : ($cointainer.innerHTML = `<p style="color:black">Item not Found</p>`);
  });

  $searchBar.addEventListener("input", event => {
    event.target.value === "" ? printer(array) : null;
  });
};

const app = async () => {
  const getData = await fetch(
    "https://my-json-server.typicode.com/matiasecharri/nippon-bites/products"
  );
  const data = await getData.json();
  console.log(data);

  searchBar(data);
  printer(data);
};
app();
