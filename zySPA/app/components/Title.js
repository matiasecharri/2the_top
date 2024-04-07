export const Title = props => {
  const { url, siteName } = props;
  const $title = document.createElement("h1");
  if (url) {
    $title.innerHTML = `<a href="${url}" class="title">HELLO <span>${siteName.toUpperCase()}!</span></a>`;
  } else {
    $title.innerHTML = `SEARCH <span>DOMAIN!</span>`;
  }
  return $title;
};
