const getDataThen = () => {
  fetch("https://api.stripe.com/v1/products", options)
    .then(res =>
      res.ok
        ? res.json()
        : Promise.reject(`Something went wrong: ${res.status}`)
    )
    .then(json => {
      console.log(json);
    })
    .catch(err => {
      console.error(err);
    });
};

// getDataThen();
