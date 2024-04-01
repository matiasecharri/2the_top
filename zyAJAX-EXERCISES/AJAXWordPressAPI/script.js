const NAME = `coolado`,
  DOMAIN = `https://${NAME}.com`,
  SITE = `${DOMAIN}/wp-json`,
  API_WP = `${SITE}/wp/v2`,
  POSTS = `${API_WP}/posts`,
  PAGES = `${API_WP}/pages`,
  CATEGORIES = `${API_WP}/categories`;

const getData = async () => {
  const res = await fetch(PAGES);
  const data = await res.json();
  console.log(data);
};

getData();

// ?per_page=100
