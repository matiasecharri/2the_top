document.title = "navigator/pg_new_things";
const textReader = (text) => {
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "ja-JP";
  speechSynthesis.speak(utterance);
};

// ⚡65. DOM 4 - CSS Classes
const $main = document.getElementById("main");
const $card = document.querySelector(".card");
console.log($card.classList);
$card.classList.add("noHeight");

//Funciona como interruptor, si tiene la clase la saca sino la pone.
let cardDisruption = setInterval(() => {
  $card.classList.toggle("transition");
}, 1000);

let cardCleaner = setTimeout(() => {
  $card.innerHTML = `<h2>WARNING: ACTIONS_REQUIRED</h2>`;
  $card.classList.replace("noHeight", "heightValue");
  textReader("error, connection lost, ACTIONS REQUIRED");
}, 1000);

let errorMessage = 0;

$card.addEventListener("click", () => {
  $card.classList.replace("heightValue", "noHeight");
  $card.innerHTML = "";

  if (errorMessage === 0) {
    errorMessage++;
    setTimeout(() => {
      $card.innerHTML = `<h2>WARNING: ACTIONS_REQUIRED</h2>`;
      $card.classList.replace("noHeight", "heightValue");
      textReader("メッセージを無視しないでください");
      textReader("connection lost, ACTIONS REQUIRED");
    }, 3000);
  } else if (errorMessage === 1) {
    setTimeout(() => {
      errorMessage++;

      $card.innerHTML = `<h2>EJECTING_PILOT</h2>`;
      $card.classList.replace("noHeight", "heightValue");
      textReader("自動破壊, autodestruction initiated");
      if (errorMessage === 2) {
        setTimeout(() => {
          console.log("XD");
          $main.innerHTML = `<h2></h2>`;
          $main.style.setProperty("height", "0px");
          $main.style.setProperty("width", "0px");
          $main.classList.add("rotator")
          setInterval(()=>{
            $main.classList.toggle("rotator")
          },1000)
        }, 6000);
      }
    }, 3000);
  }
});
