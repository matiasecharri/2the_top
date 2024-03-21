import KEYS from "./stripekeys.js";

const d = document;
const $main = d.querySelector("main");
const $template = d.querySelector(".template-food").content;
const $fragment = d.createDocumentFragment();

const optionsSec = {
  headers: {
    Authorization: `Bearer ${KEYS.secret}`,
  },
};

const errorHandler = (res, res2) => {
  if (!res.ok) {
    throw new Error(
      `🚬 Something went wrong with the 🛍️PRODUCTS, ERROR: ${res.status}
       👉 More info: https://developer.mozilla.org/es/docs/Web/HTTP/Status`
    );
  }

  if (!res2.ok) {
    throw new Error(
      `🚬 Something went wrong with the 💸PRICES, ERROR: ${res2.status} 
             👉 More info: https://developer.mozilla.org/es/docs/Web/HTTP/Status`
    );
  }
};

const moneyFormat = string => {
  return `$${string.slice(0, -2)}.${string.slice(-2)}`;
};

const getData = async () => {
  try {
    const [res, res2] = await Promise.all([
      fetch("https://api.stripe.com/v1/products", optionsSec),
      fetch("https://api.stripe.com/v1/prices", optionsSec),
    ]);

    errorHandler(res, res2);

    const [dataProducts, dataPrices] = await Promise.all([
      res.json(),
      res2.json(),
    ]);

    const products = dataProducts.data;
    const prices = dataPrices.data;
    prices.forEach(price => {
      const productData = products.filter(
        product => product.id === price.product
      );
      console.log(productData);
      $template.querySelector("img").src = productData[0].images[0];
      $template.querySelector("img").alt = productData[0].name;
      $template.querySelector("h3").innerText = productData[0].name;
      $template.querySelector(".card-food_text-description").innerText =
        productData[0].description;
      $template.querySelector(
        ".card-food_text-price"
      ).innerText = `Price: ${moneyFormat(
        price.unit_amount_decimal
      )} ${price.currency.toUpperCase()}`;

      const $clone = d.importNode($template, true);
      $fragment.appendChild($clone);
    });

    $main.appendChild($fragment);
  } catch (err) {
    console.error(err);
    $main.innerHTML = `<p class="err-message"> ${err} </p>`;
  }
};

getData();
