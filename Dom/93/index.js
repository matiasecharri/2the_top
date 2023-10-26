const $body = document.getElementById("bod");

const networkStatusChecker = () => {
  let $message = document.createElement("h1");
  window.addEventListener("online", event => {
    $message.classList.remove("connectionLost");
    $message.classList.add("connectionBack");
    $message.innerText = "Online Again 🌏";
    $body.insertAdjacentElement("afterbegin", $message);
    setTimeout(() => {
      $body.removeChild($message);
    }, 2000);
  });
  window.addEventListener("offline", event => {
    $message.classList.remove("connectionBack");
    $message.classList.add("connectionLost");
    $message.innerText = "Connection Lost 😵‍💫";
    $body.insertAdjacentElement("afterbegin", $message);
  });
};
networkStatusChecker();
