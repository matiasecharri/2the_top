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
      `🚬 Something went wrong with the 💸PRICES, ERROR: ${res2.status} 
             👉 More info: https://developer.mozilla.org/es/docs/Web/HTTP/Status`
    );
  }
  if (!res2.ok) {
    throw new Error(
      `🚬 Something went wrong with the 🛍️PRODUCTS, ERROR: ${res.status}
       👉 More info: https://developer.mozilla.org/es/docs/Web/HTTP/Status`
    );
  }
};

const moneyFormat = string => {
  return `$${string.slice(0, -2)}.${string.slice(-2)}`;
};

const cardRender = (arrayPrices, arrayProducts, container) => {
  arrayPrices.forEach(price => {
    const productData = arrayProducts.filter(
      product => product.id === price.product
    );
    console.log(productData);

    $template.querySelector(".card-food").setAttribute("data-price", price.id);
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
  container.innerHTML = "";
  container.appendChild($fragment);
};

const getData = async () => {
  try {
    const [resPrices, resProducts] = await Promise.all([
      fetch("https://api.stripe.com/v1/prices", optionsSec),
      fetch("https://api.stripe.com/v1/products", optionsSec),
    ]);

    errorHandler(resPrices, resProducts);

    const [jsonPrices, jsonProducts] = await Promise.all([
      resPrices.json(),
      resProducts.json(),
    ]);

    const prices = jsonPrices.data;
    const products = jsonProducts.data;

    cardRender(prices, products, $main);
  } catch (err) {
    console.error(err);
    $main.innerHTML = `<p class="err-message"> ${err} </p>`;
  }
};

getData();

/*Easy to understand, low performance (10000+ items)

prices.forEach(price => {
  products.forEach(product => {
    if (product.id === price.product) {
      $template
        .querySelector(".card-food")
        .setAttribute("data-price", price.id);
      $template.querySelector("img").src = product.images[0];
      $template.querySelector("h3").innerText = product.name;
      $template.querySelector(".card-food_text-description").innerText =
        product.description;
      let $clone = d.importNode($template, true);
      $fragment.appendChild($clone);
    }
  });
});

$main.appendChild($fragment);*/
