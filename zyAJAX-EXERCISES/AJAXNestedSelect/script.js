const d = document;
const $select = d.getElementById("provinces");
const $select2 = d.getElementById("town");

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
    provinces.sort((a, b) => a.nombre.localeCompare(b.nombre));

    provinces.forEach((province) => {
      $select.innerHTML += `<option value="${province.id}">${province.nombre}</option>`;
    });

    $select.addEventListener("change", async (event) => {
      const provinceId = event.target.value;
      if (provinceId === "null") {
        $select2.innerHTML = `<option value="null">Town</option>`;
        return;
      }
      try {
        const responseTown = await fetch(
          `https://apis.datos.gob.ar/georef/api/municipios?provincia=${provinceId}&campos=id,nombre&max=1000`
        );

        if (!responseTown.ok) {
          throw new Error(
            `Something went wrong trying to fetch the towns: ${responseTown.status}`
          );
        }

        const dataTown = await responseTown.json();
        const towns = dataTown.municipios;
        towns.sort((a, b) => a.nombre.localeCompare(b.nombre));

        $select2.innerHTML = "";
        if (towns.length <= 0) {
          $select2.innerHTML += `<option value="null">-</option>`;
          return;
        }
        towns.forEach((town) => {
          $select2.innerHTML += `<option value="${town.id}">${town.nombre}</option>`;
        });
      } catch (error) {
        console.warn(error);
      }
    });
  } catch (error) {
    console.warn(error);
  }
};

getProvinces();
