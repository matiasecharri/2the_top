const getData = async () => {
  try {
    const res = await fetch(
      "https://pokeapi.co/api/v2/pokemon/?limit=20&offset=0"
    );
    if (!res.ok) {
      throw new Error("First fetch failed");
    }
    const data = await res.json();
    const pokemons = data.results;

    const pokemonsPromises = pokemons.map(async (pokemon) => {
        const url = await fetch(pokemon.url)
        if(!url.ok){
            throw new Error(url.status + url.statusText)
        }
        return url.json()
    })

    const individualPokemonData = await Promise.all(pokemonsPromises)
    console.log(individualPokemonData)

  } catch (err) {
    console.error(err)
  }
};

getData();
