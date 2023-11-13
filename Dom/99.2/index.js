const $targetElement = document.getElementById("theBall");

const opciones = {
  root: null,
  rootMargin: "-120px",
  threshold: 0.5,
};

const observer = new IntersectionObserver(miCallback, opciones);
observer.observe($targetElement);

function miCallback(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      console.log("On vh");
      $targetElement.classList.add("show");
      // observer.unobserve($targetElement);
    } else {
      $targetElement.classList.remove("show");
    }
  });
}
