const cardContainer = document.getElementById("card-container");
const loadMoreButton = document.getElementById("load-more");
let page = 1; // Página inicial de la API
const perPage = 4; // Cantidad de tarjetas a cargar por página

// Función para cargar tarjetas desde la API
async function loadCards() {
  const apiUrl = `https://my-json-server.typicode.com/matiasecharri/nippon-bites/products?_page=${page}&_limit=${perPage}`;

  const response = await fetch(apiUrl);
  const data = await response.json();

  data.forEach(product => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
                <img src="${product.photo}" alt="${product.name}">
                <h2>${product.name}</h2>
                <p>${product.description}</p>
                <p>Price: $${product.pricex5}</p>
            `;

    cardContainer.appendChild(card);
  });

  // Incrementa el número de página para cargar la siguiente página en la próxima solicitud
  page++;
}

// Función para observar cuando el botón "Cargar más" está en el viewport
function handleIntersection(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // El botón "Cargar más" está en el viewport, así que carga más tarjetas
      loadCards();
    }
  });
}

// Configuración del Intersection Observer
const observer = new IntersectionObserver(handleIntersection, {
  threshold: 0.1,
});
observer.observe(loadMoreButton);

// Carga las primeras tarjetas al cargar la página
loadCards();
