export const PostCard = props => {
  const { title, id, date, slug, _embedded } = props;
  const dateFormat = new Date(date).toLocaleString();
  const urlPoster = _embedded["wp:featuredmedia"]
    ? _embedded["wp:featuredmedia"][0].source_url
    : "app/assets/favicon.png";

  document.addEventListener("click", event => {
    if (!event.target.matches(".post-card a")) return false
    localStorage.setItem("wpPostId", event.target.dataset.id)
  });

  return `
    <article class="post-card"> 
    <img src="${urlPoster}" alt="${title.rendered}">
    <h2>${title.rendered}</h2>
    <p>
    <time datetime="">${dateFormat}</time>
    <a href="#/${slug}" data-id=${id}>See Post</a> 
    </p>
    </article>
    `;
};
