import api from "./helpers/wp_api.js";
import { ajax } from "./helpers/ajax.js";

export const App = idContainer => {
  const $container = document.getElementById(idContainer);
  $container.innerHTML = "<h1>HELLO <span>APP!</span></h1>";

  ajax({
    url: api.SITE,
    success: dataSite => {
      $container.innerHTML = `<h1>HELLO <span>${dataSite.name.toUpperCase()}!</span></h1>`;
    },
  });

  ajax({
    url: api.POSTS,
    success: dataPosts => {
      console.log(dataPosts);
    },
  });
};
