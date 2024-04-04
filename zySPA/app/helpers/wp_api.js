const api = webUrl => {
  const NAME = webUrl;
  const DOMAIN = `https://${NAME}`;
  const SITE = `${DOMAIN}/wp-json`;
  const API_WP = `${SITE}/wp/v2`;
  const POSTS = `${API_WP}/posts?_embed`;
  const POST = `${API_WP}/posts`;
  const CATEGORIES = `${API_WP}/categories`;
  const SEARCH = `${API_WP}/search?_embed&search=`;

  return {
    NAME,
    DOMAIN,
    SITE,
    API_WP,
    POSTS,
    POST,
    CATEGORIES,
    SEARCH,
  };
};

export { api };
