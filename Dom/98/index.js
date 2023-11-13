const slides = [
  { image: "/Dom/98/dddepth-048.jpg" },
  { image: "/Dom/98/dddepth-341.jpg" },
  { image: "/Dom/98/dddepth-049.jpg" },
  { image: "/Dom/98/dddepth-134.jpg" },
  { image: "/Dom/98/dddepth-353.jpg" },
];

const $prevButton = document.getElementById("prevB");
const $nextButton = document.getElementById("nextB");
const $containerSlides = document.querySelector(".slider-container");
let slideI = 0;

const nextLogic = () => {
  if (slideI < slides.length - 1) {
    console.log(slideI);
    slideI++;
  }
  $containerSlides.style.setProperty(
    "background-image",
    `url(${slides[slideI].image})`
  );
};

const prevLogic = () => {
  if (slideI > 0) {
    slideI--;
  }
  $containerSlides.style.setProperty(
    "background-image",
    `url(${slides[slideI].image})`
  );
};

$nextButton.addEventListener("click", event => {
  nextLogic();
});

$prevButton.addEventListener("click", event => {
  prevLogic();
});
