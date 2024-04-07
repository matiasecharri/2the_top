import { api } from "./helpers/wp_api.js";
import { ajax } from "./helpers/ajax.js";
import { Title } from "./components/Title.js";
import { Loader } from "./components/loader.js";
let webUrl = "";
const $searchBar = document.querySelector(".searchbar");

export const App = async idContainer => {
  const $container = document.getElementById(idContainer);
  $container.appendChild(Title({}));

  $searchBar.addEventListener("keyup", event => {
    webUrl = event.target.value;

    if (event.key === "Enter" && webUrl !== "") {
      const $loader = Loader();
      $container.appendChild($loader);
      $searchBar.value = "";

      setTimeout(() => {
        ajax({
          url: api(webUrl).SITE,
          success: async dataSite => {
            $container.innerHTML = "";
            $container.appendChild(
              Title({ url: dataSite.home, siteName: dataSite.name })
            );
            console.log(dataSite);
          },
        });
      }, 1200);
    }
  });

  // setTimeout(() => {
  //   ajax({
  //     url: api(webUrl).SITE,
  //     success: async dataSite => {
  //       $container.innerHTML = `<h1>HELLO <span>${dataSite.name.toUpperCase()}!</span></h1>`;
  //       console.log(dataSite);
  //     },
  //   });

  //   ajax({
  //     url: api(webUrl).POSTS,
  //     success: async dataPosts => {
  //       console.log(dataPosts);
  //     },
  //   });
  // }, 1200);
};
