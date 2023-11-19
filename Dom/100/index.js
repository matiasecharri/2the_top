const $videos = document.querySelectorAll(".videoxd");
let eraVisible;

$videos.forEach(video => {
  video.volume = 0;
  video.autoplay = true;
});

const devolverLlamada = entrada => {
  entrada.forEach(e => {
    if (e.isIntersecting) {
      e.target.play();
      eraVisible = true;
      console.log(eraVisible);
    } else {
      e.target.pause();
      eraVisible = false;
      console.log(e.target);
      console.log(eraVisible);
    }
  });

  window.addEventListener("visibilitychange", e => {
    entrada.forEach(e => {
      if (document.visibilityState === "visible" /*&& eraVisible === true*/) {
        /*  e.target.play();*/
        return;
      } else {
        e.target.pause();
      }
    });
  });
};

const observer = new IntersectionObserver(devolverLlamada, { threshold: 0.9 });
$videos.forEach(e => observer.observe(e));

/*No esta mal, el tema es que a eraVisible si era visible era true reproduce a todos, ya que no compara el video que se estaba viendo con el que va a reproducir

//Posibles soluciones:
1) No usar a era visible, que simplemente pause todo y que la persona tenga que reproducir por su cuenta (solucion actual)
2) Mejor solucion seria crear videos Objeto y que cada uno tenga una propiedad era visible, o sino que era visible sea = a "true + una clase especifica que tenga el video" y luego compararia eso
Se necesita algun tipo de identificador*/
