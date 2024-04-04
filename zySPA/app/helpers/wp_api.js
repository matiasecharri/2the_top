const NAME = "css-tricks.com",
  DOMAIN = `https://${NAME}`,
  SITE = `${DOMAIN}/wp-json`,
  API_WP = `${SITE}/wp/v2`,
  POSTS = `${API_WP}/posts?_embed`,
  POST = `${API_WP}/posts`,
  SEARCH = `${API_WP}/searc?_embed&search=`;

export default { NAME, DOMAIN, SITE, API_WP, POSTS, POST, SEARCH };
