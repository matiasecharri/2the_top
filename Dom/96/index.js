//HTML Elements
const $cointainer = document.getElementById("container");
const $searchBar = document.getElementById("searchBar");

//PRINTER (Used to print arrays on X container.)
const printer = (array, container) => {
  // Fragment to construct elements
  const fragment = document.createDocumentFragment();

  array.forEach(element => {
    //Div creation
    const cardDiv = document.createElement("div");
    cardDiv.className = "container-card";

    //Img creation
    const img = document.createElement("img");
    img.src = element.photo;
    img.alt = element.name;

    //Description container
    const descriptionDiv = document.createElement("div");
    descriptionDiv.className = "container-card_description";

    //h2 and p creation
    const h2 = document.createElement("h2");
    h2.textContent = element.name;

    const priceParagraph = document.createElement("p");
    priceParagraph.textContent = `Price per 5 unit: ${element.pricex5} USD.-`;

    const descriptionParagraph = document.createElement("p");
    descriptionParagraph.textContent = element.description;

    // Adding elements to description container
    descriptionDiv.appendChild(h2);
    descriptionDiv.appendChild(priceParagraph);
    descriptionDiv.appendChild(descriptionParagraph);

    // Adding image and description to main card
    cardDiv.appendChild(img);
    cardDiv.appendChild(descriptionDiv);

    // Adding card to fragment
    fragment.appendChild(cardDiv);
  });

  // Limpiar el contenido del contenedor
  container.innerHTML = "";

  // Adjuntar el fragmento completo al contenedor
  container.appendChild(fragment);
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
      : (container.innerHTML = `<p>Item not Found</p>`);
  });

  input.addEventListener("input", event => {
    if (event.target.value === "") printer(array, container);
  });
};

//API Fetching and function invocation.
const app = async () => {
  try {
    const getData = await fetch(
      "https://my-json-server.typicode.com/matiasecharri/nippon-bites/products"
    );
    const data = await getData.json();

    searchBar(data, $cointainer, $searchBar);
    printer(data, $cointainer);
  } catch (error) {
    console.warn("Something is not working..." + error);
  }
};
app();
