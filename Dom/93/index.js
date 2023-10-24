const $body = document.getElementById("bod");

const networkStatusChecker = () => {
  let message = document.createElement("h1");
  window.addEventListener("online", event => {
    message.style.setProperty("color", "#67e6b5");
    message.innerText = "Online Again 🌏";
    $body.appendChild(message);
    setTimeout(() => {
      $body.removeChild(message);
    }, 2000);
  });
  window.addEventListener("offline", event => {
    message.style.setProperty("color", "#e6678b");
    message.innerText = "Connection Lost 😵‍💫";
    $body.appendChild(message);
  });
};
networkStatusChecker();
