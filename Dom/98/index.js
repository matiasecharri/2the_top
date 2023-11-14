const slides = [
  { image: "/Dom/98/dddepth-048.jpg" },
  { image: "/Dom/98/dddepth-049.jpg" },
  { image: "/Dom/98/dddepth-134.jpg" },
  { image: "/Dom/98/dddepth-353.jpg" },
  { image: "/Dom/98/dddepth-353.jpg" },
  { image: "/Dom/98/dddepth-134.jpg" },
];

const $prevButton = document.getElementById("prevB");
const $nextButton = document.getElementById("nextB");
const $containerSlides = document.querySelector(".slider-container");
let contador = 0;

const botonAdelante = () => {
  if (contador === slides.length - 1) {
    console.log(contador);
    return;
  }
  contador++;
  console.log(contador);
  $containerSlides.style.setProperty(
    "background-image",
    `url(${slides[contador].image})`
  );
};

const botonAtras = () => {
  if (!contador > 0) {
    return;
  }
  contador--;
  console.log(contador);
  $containerSlides.style.setProperty(
    "background-image",
    `url(${slides[contador].image})`
  );
};

$nextButton.addEventListener("click", event => {
  botonAdelante();
});

$prevButton.addEventListener("click", event => {
  botonAtras();
});
