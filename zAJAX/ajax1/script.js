const $body = document.querySelector("body");
const $fragment = document.createDocumentFragment();
const request = new XMLHttpRequest();

(() => {
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
