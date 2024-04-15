import { api } from "../helpers/wp_api.js";
import { ajax } from "../helpers/ajax.js";
import { PostCard } from "./PostCard.js";
import { Title } from "./Title.js";
import { Menu } from "./Menu.js";
import { Post } from "./Post.js";

export const Router = props => {
  const { webUrl, $h1, $container } = props;

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
        ).placeholder = `search in: ${dataSite.home.toLowerCase().slice(8)}`;
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

  window.addEventListener("hashchange", async event => {
    const newHash = location.hash;
    console.log(newHash);
    if (!newHash || newHash === "#/") {
      $h1.innerHTML = "Home Section";
    } else if (newHash.includes("#/search")) {
      $h1.innerHTML = "Search Now";
    } else {
      const postId = localStorage.getItem("wpPostId");
      console.log(postId);
      ajax({
        url: `${api(webUrl).POST}/${postId}`,
        success: async postInfo => {
          console.log(postInfo);
          document.getElementById("posts").innerHTML = Post(postInfo)
        },
      });
    }
  });
};
