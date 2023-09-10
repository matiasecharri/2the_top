import hamburguerMenu from "/Dom/07_DOM_T/01-Menu/d1_hmenu.js";
import clock from "/Dom/07_DOM_T/01-Menu/d2_clock.js";

const $hamburguerIcon = document.getElementById("hamburguerIcon");
const $menu = document.getElementById("sliderMenu");
const $containerClock = document.querySelector(".clockTemplate");

hamburguerMenu($hamburguerIcon, $menu);
clock($containerClock);

