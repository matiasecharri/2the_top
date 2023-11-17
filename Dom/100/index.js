const $videos = document.querySelectorAll(".videoxd");
let eraVisible;

$videos.forEach(video => {
  video.vol = 0.1;
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
      console.log(eraVisible);
    }
  });

  window.addEventListener("visibilitychange", e => {
    entrada.forEach(e => {
      if (document.visibilityState === "visible" && eraVisible === true) {
        e.target.play();
      } else {
        e.target.pause();
      }
    });
  });
};

const observer = new IntersectionObserver(devolverLlamada, { threshold: 0.5 });
$videos.forEach(e => observer.observe(e));

//No esta mal, el tema es que a eraVisible si era visible era true reproduce a todos, ya que no compara el video que se estaba viendo con el que va a reproducir
