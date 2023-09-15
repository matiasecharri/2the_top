import hamburguerMenu from "/Dom/07_DOM_T/01-Menu/d1_hmenu.js";
import { digitalClock, digitalAlarm } from "/Dom/07_DOM_T/01-Menu/d2_clock.js";
import apiCrypto from "/Dom/07_DOM_T/01-Menu/apiCrypto.js";

document.addEventListener("DOMContentLoaded", () => {
  const $hamburguerIcon = document.getElementById("hamburguerIcon");
  const $menu = document.getElementById("sliderMenu");
  const $containerClock = document.querySelector(".clockTemplate");

  hamburguerMenu($hamburguerIcon, $menu);
  digitalClock($containerClock);
  digitalAlarm();
  apiCrypto();
});

//Agregar que el usuario pueda establecer el target
