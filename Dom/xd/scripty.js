const $main = document.querySelector("main");
const country = [
  "Argentina",
  "Estados Unidos",
  "Canadá",
  "México",
  "Brasil",
  "Reino Unido",
  "Francia",
  "Alemania",
  "España",
  "Japón",
  "China",
];

const baseUrl = "https://weatherapi-com.p.rapidapi.com/timezone.json?q=";
const apiKey = "f8e7ba9afamsh823ae1cc06ab045p1ab47ejsne534f3bf2854";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": apiKey,
    "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
  },
};

async function fetchDataForCountry(countryName) {
  try {
    const apiUrl = baseUrl + countryName;
    const response = await fetch(apiUrl, options);
    const result = await response.json();
    console.log(`Datos para ${countryName}:`, JSON.stringify(result));
  } catch (error) {
    console.error(`Error al obtener datos para ${countryName}:`, error);
  }
}

// Iterar sobre los países y realizar una solicitud para cada uno
for (const countryName of country) {
  fetchDataForCountry(countryName);
}
