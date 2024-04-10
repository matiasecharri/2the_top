import { api } from "./helpers/wp_api.js";
import { ajax } from "./helpers/ajax.js";
import { Title } from "./components/Title.js";
import { Loader } from "./components/loader.js";
import { Menu } from "./components/Menu.js";
let webUrl = "";
const $searchBar = document.querySelector(".searchbar");

export const App = async idContainer => {
  const $container = document.getElementById(idContainer);
  const $h1 = document.createElement("h1");
  Title({ container: $h1 });
  $container.appendChild($h1);

  $searchBar.addEventListener("keyup", event => {
    webUrl = event.target.value.toLowerCase();

    if (event.key === "Enter" && webUrl !== "") {
      const $loader = Loader();
      if (!document.querySelector(".loader-svg")) {
        $container.appendChild($loader);
      } else {
        document.querySelector(".loader-svg").classList.remove("hidden");
        document.querySelector(".loader-svg").classList.add("visible");
      }

      $searchBar.value = "";
      if (document.getElementById("search1")) {
        document.getElementById("search1").placeholder =
          "search in: loading...";
      }

      setTimeout(() => {
        ajax({
          url: api(webUrl).SITE,
          success: async dataSite => {
            Title({
              container: $h1,
              url: dataSite.home,
              siteName: dataSite.name,
            });

            document.querySelector(".loader-svg").classList.add("hidden");

            if (!document.querySelector(".menu")) {
              $container.appendChild(Menu(dataSite.home));
            } else {
              document.querySelector(".menu").classList.remove("hidden");
              document.getElementById(
                "search1"
              ).placeholder = `search in: ${dataSite.home
                .toLowerCase()
                .slice(8)}`;
            }
            setTimeout(() => {
              document.querySelector(".menu").classList.remove("hidden");
              document.querySelector(".menu").classList.add("up");
            }, 500);
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






