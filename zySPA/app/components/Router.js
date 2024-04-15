import { api } from "../helpers/wp_api.js"
import { ajax } from "../helpers/ajax.js"
import { PostCard } from "./PostCard.js";
import { Title } from "../components/Title.js";
import { Menu } from "../components/Menu.js";


export const Router = (props) => {
    const {webUrl, $h1, $container} = props
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

          const $searchBarSite = document.getElementById("search1");
          console.log($searchBarSite);
          ajax({
            url: api(webUrl).POSTS,
            success: async dataPosts => {
              console.log(dataPosts);
              let html = "";
              dataPosts.forEach(post => (html += PostCard(post)));
              document.getElementById("posts").innerHTML = html;
            },
          });
        },
      });
}