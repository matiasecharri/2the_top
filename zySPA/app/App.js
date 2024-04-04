import { api } from "./helpers/wp_api.js";
import { ajax } from "./helpers/ajax.js";
const webUrl = "css-tricks.com";

export const App = async idContainer => {
  const $container = document.getElementById(idContainer);
  $container.innerHTML = "<h1>HELLO <span>APP!</span></h1>";

  ajax({
    url: api(webUrl).SITE,
    success: async dataSite => {
      $container.innerHTML = `<h1>HELLO <span>${dataSite.name.toUpperCase()}!</span></h1>`;
      console.log(dataSite);
    },
  });

  ajax({
    url: api(webUrl).POSTS,
    success: async dataPosts => {
      console.log(dataPosts);
    },
  });
};
