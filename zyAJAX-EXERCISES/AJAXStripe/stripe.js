import KEYS from "./stripekeys.js";
import BATMAN from "./trash.js";

const d = document;
const $foodContainer = d.querySelector("main");
const $template = d.querySelector(".template-food").content;
const $fragment = d.createDocumentFragment();

const options = {
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

const getData = async () => {
  try {
    const [res, res2] = await Promise.all([
      fetch("https://api.stripe.com/v1/products", options),
      fetch("https://api.stripe.com/v1/prices", options),
    ]);

    errorHandler(res, res2);

    const [dataProducts, dataPrices] = await Promise.all([
      res.json(),
      res2.json(),
    ]);

    const products = dataProducts.data;
    const prices = dataPrices.data;

    console.log(products);
    console.log(prices);
  } catch (err) {
    console.error(err);
  }
};

getData();
BATMAN();
