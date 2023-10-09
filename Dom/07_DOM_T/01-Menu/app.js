import hamburguerMenu from "/Dom/07_DOM_T/01-Menu/d1_hmenu.js";
import { digitalClock, digitalAlarm } from "/Dom/07_DOM_T/01-Menu/d2_clock.js";
import apiCrypto from "/Dom/07_DOM_T/01-Menu/apiCrypto.js";
import circleMove from "/Dom/07_DOM_T/01-Menu/d3_ball.js";

document.addEventListener("DOMContentLoaded", () => {
  const $hamburguerIcon = document.getElementById("hamburguerIcon");
  const $menu = document.getElementById("sliderMenu");
  const $containerClock = document.querySelector(".clockTemplate");

  hamburguerMenu($hamburguerIcon, $menu);
  digitalClock($containerClock);
  digitalAlarm();
  // apiCrypto();
  circleMove();
});

const countDown = (
  userDate,
  message = "a really important day",
  finalMessage = "a beutiful message"
) => {
  const $container = document.getElementById("countDownContainer");
  const targetDate = new Date(userDate).getTime();
  const actualDate = new Date().getTime();
  const limitTime = targetDate - actualDate;
  const daysLeft = Math.floor(limitTime / (1000 * 60 * 60 * 24));
  const hoursLeft = (
    "0" + Math.floor((limitTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  ).slice(-2);
  const minutesLeft = (
    "0" + Math.floor((limitTime % (1000 * 60 * 60)) / (1000 * 60))
  ).slice(-2);

  const secondsLeft = (
    "0" + Math.floor((limitTime % (1000 * 60)) / 1000)
  ).slice(-2);
  $container.innerHTML = `<h4>${message}<br>${daysLeft} days - ${hoursLeft} hours - ${minutesLeft} minutes - ${secondsLeft} seconds </h4>`;
  let countDownTempo = setInterval(() => {
    const actualDate = new Date().getTime();
    const limitTime = targetDate - actualDate;
    const daysLeft = Math.floor(limitTime / (1000 * 60 * 60 * 24));
    const hoursLeft = (
      "0" + Math.floor((limitTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    ).slice(-2);
    const minutesLeft = (
      "0" + Math.floor((limitTime % (1000 * 60 * 60)) / (1000 * 60))
    ).slice(-2);

    const secondsLeft = (
      "0" + Math.floor((limitTime % (1000 * 60)) / 1000)
    ).slice(-2);
    $container.innerHTML = `<h4>${message}<br>${daysLeft} days - ${hoursLeft} hours - ${minutesLeft} minutes - ${secondsLeft} seconds </h4>`;
    if (limitTime < 0) {
      clearInterval(countDownTempo);
      $container.innerHTML = `<h4> ${finalMessage} </h4>`;
    }
  }, 1000);
};

countDown("Mon Nov 17 2023", "Dibella's Birthday", "Happy Birthday Dibella 🎉");
