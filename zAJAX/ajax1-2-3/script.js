const $body = document.querySelector("body");
const $fragment = document.createDocumentFragment();

//XMLHTTP OBJECT/
(() => {
  const request = new XMLHttpRequest();

  request.addEventListener("readystatechange", event => {
    if (request.readyState !== 4) return;

    if (request.status >= 200 && request.status < 300) {
      console.log(`🫡 ${request.status} Requested succefully 🚬`);
      console.log(request.responseText);

      const arrayResponse = JSON.parse(request.responseText);
      console.log(arrayResponse);

      arrayResponse.forEach(profile => {
        const $text = document.createElement("p");
        $text.style.setProperty("color", "white");
        $text.innerHTML = `✨Name: ${profile.name} 👨🏻‍💻Username: ${profile.username} 📧Email: ${profile.email} 📱Phone: ${profile.phone}`;
        $fragment.appendChild($text);
      });
      $body.appendChild($fragment);
    } else {
      console.error(`🦇 ${request.status} Something went wrong...`);
    }
  });
  request.open("GET", "https://jsonplaceholder.typicode.com/users");
  request.send();
})();

//AWAIT FETCH//
(() => {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => (res.ok ? res.json() : Promise.reject(res)))
    .then(res => {
      const arrayResponse = res;
      const $title = document.createElement("h2");
      $title.innerText = "AJAX2: FETCH + THEN";
      $fragment.appendChild($title);
      arrayResponse.forEach(profile => {
        const $text = document.createElement("p");
        $text.style.setProperty("color", "yellowgreen");
        $text.innerHTML = `✨Name: ${profile.name} 👨🏻‍💻Username: ${profile.username} 📧Email: ${profile.email} 📱Phone: ${profile.phone}`;
        $fragment.appendChild($text);
      });
      $body.appendChild($fragment);
    })
    .catch(err => {
      console.log(`🦇Something went wrong... ${err.status}`);
    });
})();

//ASYNC AWAIT//
const gettingData = async () => {
  try {
    const pedirApi = await fetch("https://jsonplaceholder.typicode.com/users");
    const jsonRespuesta = await pedirApi.json();

    if (!pedirApi.ok)
      throw {
        status: pedirApi.status,
        statusText:
          pedirApi.statusText ||
          "Tenes un problema y la API no puso mensaje custom jeje 🚬",
      };
    const $title = document.createElement("h2");

    $title.innerText = "AJAX3: ASYNC - AWAIT 🚬";
    $fragment.appendChild($title);

    jsonRespuesta.forEach(profile => {
      const $parrafo = document.createElement("p");
      $parrafo.style.setProperty("color", "yellow");
      $parrafo.innerText = `✨Name: ${profile.name} 👨🏻‍💻Username: ${profile.username} 📧Email: ${profile.email} 📱Phone: ${profile.phone}`;
      $fragment.appendChild($parrafo);
    });
    $body.appendChild($fragment);
  } catch (error) {
    console.log(error);
  }
};

gettingData();

//AXIOS + THEN//

const gettingDataAxios = () => {
  axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then(res => {
      const data = res.data;
      const $title = document.createElement("h2");
      $title.innerText = "AJAX4: AXIOS + THEN 🚬";
      $fragment.appendChild($title);
      data.forEach(profile => {
        const $text = document.createElement("p");
        $text.style.setProperty("color", "salmon");
        $text.innerText = `✨Name: ${profile.name} 👨🏻‍💻Username: ${profile.username} 📧Email: ${profile.email} 📱Phone: ${profile.phone}`;
        $fragment.appendChild($text);
      });
      $body.appendChild($fragment);
    })
    .catch(err => {
      console.log(
        err.response.statusText ||
          `Something wenth wrong! ERROR:${err.response.status}`
      );
    });
};

gettingDataAxios();

//AXIOS ASYNC AWAIT//
const axiosAsync = async () => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    const data = response.data;

    const $title = document.createElement("h2");
    $title.innerText = "AJAX5: AXIOS + ASYNC-AWAIT 🚬🚬";
    $fragment.appendChild($title);
    data.forEach(profile => {
      const $text = document.createElement("p");
      $text.style.setProperty("color", "lightgreen");
      $text.innerText = `✨Name: ${profile.name} 👨🏻‍💻Username: ${profile.username} 📧Email: ${profile.email} 📱Phone: ${profile.phone}`;
      $fragment.appendChild($text);
    });
    $body.appendChild($fragment);
  } catch (error) {
    console.log(
      `ERROR: ${error.response.status} ${
        error.response.statusText ||
        "error has not custom message, it was cine 🚬"
      } `
    );
  }
};
axiosAsync();
Notification.requestPermission();

//OMG IS A THEN CHAIN
// const executin = () => {
//   gettingData()
//     .then(() => gettingDataAxios())
//     .then(() => gettingData());
// };

// executin();

// const getAxiosApi = async () => {
//   try {
//     const response = await axios.get("https://valorant-api.com/v1/agents");
//     const arrayValorant = response.data.data;

//     const indexAEliminar = arrayValorant.findIndex(
//       agent => agent.displayName === "Sova"
//     );
//     arrayValorant.splice(indexAEliminar, 1);

//     arrayValorant.forEach(character => {
//       const $image = document.createElement("img");
//       $image.style.setProperty("height", "290px");
//       $image.style.setProperty("width", "250px");
//       $image.style.setProperty("object-fit", "cover");
//       $image.setAttribute("src", character.fullPortrait);
//       $fragment.appendChild($image);
//     });
//     $body.appendChild($fragment);
//   } catch (error) {
//     console.log(error);
//   }
// };

// getAxiosApi();
