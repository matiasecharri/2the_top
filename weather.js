const $searchBar = document.querySelector("input");
const $cardContainer = document.querySelector(".card-container");
const $fragment = document.createDocumentFragment();
const regex = {
  noWhiteSpace: /^\s*\S.*$/,
};

const getCity = async city => {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=28fe7b5f9a78838c639143fc517e4343`
    );
    if (!response.ok) {
      console.error(response.status);
      return null;
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

const renderInfo = obj => {
  $cardContainer.innerHTML = "";
  const $card = document.createElement("div");
  $card.classList.add("card");

  const $img = document.createElement("img");

  const $title = document.createElement("h2");
  $title.innerText = obj.name;

  const $description = document.createElement("div");
  $description.classList.add("card__info");

  const $p1 = document.createElement("p");
  $p1.innerText = `Temperature: ${obj.main.temp}°C`;
  const $p2 = document.createElement("p");
  $p2.innerText = `Sensation: ${obj.main.feels_like}`;
  const $p3 = document.createElement("p");
  $p3.innerText = `Pressure: ${obj.main.pressure}`;
  const $p4 = document.createElement("p");
  $p4.innerText = `Max: ${obj.main.temp_max}`;
  const $p5 = document.createElement("p");
  $p5.innerText = `Min: ${obj.main.temp_min}`;

  $description.appendChild($title);
  $description.appendChild($p1);
  $description.appendChild($p2);
  $description.appendChild($p3);
  $description.appendChild($p4);
  $description.appendChild($p5);

  $card.appendChild($img);
  $card.appendChild($description);
  $fragment.appendChild($card);
  $cardContainer.appendChild($fragment);
  $fragment.innerHTML = "";
};

const searchBarActions = () => {
  $searchBar.addEventListener("keyup", async event => {
    if (event.key === "Enter") {
      if (!regex.noWhiteSpace.test(event.target.value)) {
        return;
      }
      const cityToGet = event.target.value;
      const newCity = await getCity(cityToGet);
      if (newCity) {
        renderInfo(newCity);
        console.log(newCity);
      } else {
        console.warn(`${cityToGet} doesn´t exist!`);
      }
    }
  });
};

searchBarActions();

//Adittions: Farenheit + C
//Favorites, icons
//Separate modules: https://github.com/michalosman/weather-app
