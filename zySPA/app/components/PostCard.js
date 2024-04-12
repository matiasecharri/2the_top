export const PostCard = props => {
  const { title, date, slug, _embedded } = props;
  const dateFormat = new Date(date).toLocaleString();
  const urlPoster = _embedded["wp:featuredmedia"]
    ? _embedded["wp:featuredmedia"][0].source_url
    : "app/assets/favicon.png";
  return `
    <article class="post-card"> 
    <img src="${urlPoster}" alt="${title.rendered}">
    <h2>${title.rendered}</h2>
    <p>
    <time datetime="">${dateFormat}</time>
    <a href="#/${slug}">See Post</a> 
    </p>
    </article>
    `;
};
