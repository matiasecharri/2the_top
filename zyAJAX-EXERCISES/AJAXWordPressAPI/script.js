const NAME = `coolado`,
  DOMAIN = `https://${NAME}.com`,
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
    $template.querySelector(".post-title").innerHTML = element.title.rendered;
    $template.querySelector(".post-image").alt = element.title.rendered;
    $template.querySelector(".post-image").src =
      element._embedded["wp:featuredmedia"][0].source_url;
    $template.querySelector(".post-link").href = element.link;

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
