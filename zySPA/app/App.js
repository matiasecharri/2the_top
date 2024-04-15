import { Title } from "./components/Title.js";
import { Loader } from "./components/loader.js";
import { Posts } from "./components/Posts.js";
import { Router } from "./components/Router.js";
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

      $container.appendChild(Posts());

      setTimeout(() => {
        Router({ webUrl, $h1, $container });
      }, 1200);
    }
  });
};
