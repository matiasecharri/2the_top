//Geolocation espera 2 funciones como argumentos, una para manejar el caso de que el usuario deniegue y otro para mostrar la geolocalizacion

const geolocation = window.navigator.geolocation;
const $container = document.getElementById("main");

geolocation.getCurrentPosition(
  function (userPosition) {
    const latitude = userPosition.coords.latitude;
    const longitude = userPosition.coords.longitude;
    const accuracy = userPosition.coords.accuracy;
    console.log(latitude, longitude, accuracy);

    $container.innerHTML = `
    <ul>  
    <li>Latitude: ${latitude} </li>
    <li>Altitude: ${longitude} </li>
    <li>Accuracy: ${accuracy} </li>
    </ul>
    <a href="https://www.google.com/maps/@${latitude},${longitude},20z" target="_blank">OPEN MAP</a>
`;
  },
  function (error) {
    console.error(error.message);
  }
);
