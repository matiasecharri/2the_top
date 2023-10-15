import hamburguerMenu from "/Dom/07_DOM_T/01-Menu/d1_hmenu.js";
import { digitalClock, digitalAlarm } from "/Dom/07_DOM_T/01-Menu/d2_clock.js";
import apiCrypto from "/Dom/07_DOM_T/01-Menu/apiCrypto.js";
import circleMove from "/Dom/07_DOM_T/01-Menu/d3_ball.js";
import countDown from "/Dom/07_DOM_T/01-Menu/d4_countdown.js";
import backTopButton from "/Dom/07_DOM_T/01-Menu/d5_backTop.js";
import darkModeButtonStorage from "/Dom/07_DOM_T/01-Menu/d6_darkTheme.js";

document.addEventListener("DOMContentLoaded", () => {
  const $hamburguerIcon = document.getElementById("hamburguerIcon");
  const $menu = document.getElementById("sliderMenu");
  const $containerClock = document.querySelector(".clockTemplate");

  hamburguerMenu($hamburguerIcon, $menu);
  digitalClock($containerClock);
  digitalAlarm();
  apiCrypto();
  circleMove();
  countDown(
    "Mon Nov 17 2023",
    "Dibella's Birthday 🎂",
    "Happy Birthday Dibella 🎉"
  );
  backTopButton();
  darkModeButtonStorage()
});

const agents = [
  { name: "sova", age: 25, alive: true },
  { name: "reyna", age: 35, alive: true },
  { name: "killjoy", age: 19, alive: true },
  { name: "gekko", age: 19, alive: true },
  { name: "sova", age: null, alive: true },
];

const uniqueAgents = agents.filter((agent, index) => {
  return (
    index ===
    agents.findIndex(a => a.name === agent.name && a.age === agent.age)
  );
});

console.log(uniqueAgents);
