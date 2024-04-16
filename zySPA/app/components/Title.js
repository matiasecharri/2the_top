export const Title = props => {
  const { container, url, siteName } = props;
  url
    ? (container.innerHTML = `<a href="${url}" class="title" target="_blank" rel="noopener">HELLO <span class="t-span">${siteName.toUpperCase()}!</span></a>`)
    : (container.innerHTML = `SEARCH <span class="t-span">DOMAIN!</span>`);
};
