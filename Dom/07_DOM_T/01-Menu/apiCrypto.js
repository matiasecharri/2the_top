export async function apiCrypto() {
  const wrapper = document.getElementById("cryptoWrapper");
  const url =
    "https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers%5B0%5D=1&orderBy=marketCap&orderDirection=desc&limit=50&offset=0";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "f8e7ba9afamsh823ae1cc06ab045p1ab47ejsne534f3bf2854",
      "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
    },
  };

  const response = await fetch(url, options);
  const result = await response.json();
  const coins = result.data.coins;
  console.log(coins);

  // Crear un fragmento para acumular los elementos creados
  const fragment = document.createDocumentFragment();

  // Filtrar las monedas y agregarlas al fragmento
  coins.forEach(x => {
    if (
      x.name.toLowerCase() === "bitcoin" ||
      x.name.toLowerCase() === "ethereum"
    ) {
      const cryptoCard = document.createElement("div");
      cryptoCard.classList.add("cryptoCard");

      const img = document.createElement("img");
      img.src = x.iconUrl;
      img.alt = x.iconUrl;

      const p = document.createElement("p");
      const formattedPrice = Math.round(x.price).toLocaleString();

      p.textContent = formattedPrice;

      cryptoCard.appendChild(img);
      cryptoCard.appendChild(p);

      fragment.appendChild(cryptoCard);
    }
  });

  // Agregar el fragmento al contenedor deseado
  wrapper.appendChild(fragment);
}
