const NAME = `onpurposemedia`,
  DOMAIN = `https://${NAME}.ca`,
  SITE = `${DOMAIN}/wp-json`,
  API_WP = `${SITE}/wp/v2`,
  POSTS = `${API_WP}/posts?_embed&?per_page=100`,
  PAGES = `${API_WP}/pages?_embed&?per_page=100`,
  CATEGORIES = `${API_WP}/categories`;

const d = document,
  $site = d.getElementById("site"),
  $posts = d.getElementById("posts"),
  $loader = d.getElementById("loader-x"),
  $template = d.getElementById("post-template").content,
  $fragment = d.createDocumentFragment();

const renderSiteInfo = data => {
  $site.innerHTML = `<h1>Site: ${data.name}</h1>
    <h2>
    <a href="${data.home}" target="_blank">Original Site</a>
    </h2>
    <p>Description: ${data.description}</p>
    <p>Timezone: ${data.timezone_string || "Unknow"}</p>`;
};

const renderSitePosts = data => {
  data.forEach(element => {
    let categories = "";
    let tags = "";

    element._embedded["wp:term"][0].forEach(
      element => (categories += `<li>${element.name}</li>`)
    );
    element._embedded["wp:term"][1].forEach(
      element => (tags += `<li>${element.name}</li>`)
    );

    console.log(element);
    $template.querySelector(".post-title").innerHTML = element.title.rendered;
    $template.querySelector(".post-image").alt = element.title.rendered;
    $template.querySelector(".post-image").src =
      element._embedded["wp:featuredmedia"][0].source_url;
    $template.querySelector(".post-link").href = element.link;

    $template.querySelector(
      ".post-author"
    ).innerHTML = `<img style="width: 30px; height: 30px; object-fit: contain" src="${
      element._embedded.author[0].avatar_urls
        ? element._embedded.author[0].avatar_urls[48]
        : "https://pbs.twimg.com/profile_images/1012362101510160384/EjayQ10E_400x400.jpg"
    }"><br> Blog author: ${element._embedded.author[0].name || "Mr. X"}
    `;
    $template.querySelector(".post-date").innerHTML = new Date(
      element.date
    ).toLocaleDateString();
    $template.querySelector(".post-excerpt").innerHTML =
      element.excerpt.rendered.replace("[&hellip;]", "...");
    $template.querySelector(
      ".post-categories"
    ).innerHTML = `<p>Categories:</p> <ul>${categories}</ul>`;
    $template.querySelector(".post-tags").innerHTML = `<p>Tags:</p> <ul>${
      tags || "No-tag"
    }</ul>`;
    $template.querySelector(".post-content article").innerHTML =
      element.content.rendered;

    const $clone = d.importNode($template, true);
    $fragment.appendChild($clone);
  });
  $posts.appendChild($fragment);
  $loader.style.display = "none";
};

const getSiteData = async () => {
  try {
    const res = await fetch(SITE);

    if (!res.ok) {
      throw new Error(res.status);
    }

    const data = await res.json();
    renderSiteInfo(data);
  } catch (error) {
    console.warn(error);
    $site.innerHTML = error;
  }
};

const getPosts = async () => {
  try {
    const res = await fetch(POSTS);

    if (!res.ok) {
      throw new Error(res.status);
    }

    const data = await res.json();
    renderSitePosts(data);
    console.log(data);
  } catch (error) {
    console.warn(error);
    $posts.innerHTML = error;
    $loader.style.display = "none";
  }
};

d.addEventListener("DOMContentLoaded", event => {
  getSiteData();
  getPosts();
});
