fetch("https://apis.datos.gob.ar/georef/api/provincias")
  .then(res => (res.ok ? res.json() : Promise.reject()))
  .then(json => {
    const data = json;
    console.log(data);
  })
  .catch(err => {
    console.error(err);
  });

// https://apis.datos.gob.ar/georef/api/municipios?provincia=22&campos=id,nombre&max=100
