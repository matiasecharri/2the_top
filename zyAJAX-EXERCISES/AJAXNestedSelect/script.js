const getProvinces = async () => {
  try {
    const response = await fetch(
      "https://apis.datos.gob.ar/georef/api/provincias"
    );

    if (!response.ok) {
      throw new Error(`ERROR: ${response.status} trying to fetch provinces.`);
    }

    const data = await response.json();
    const provinces = data.provincias;
    console.log(provinces);
  } catch (error) {
    console.warn(error);
  }
};
getProvinces();

// https://apis.datos.gob.ar/georef/api/municipios?provincia=22&campos=id,nombre&max=100
