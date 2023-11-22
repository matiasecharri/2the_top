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

//API FETCH//
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
