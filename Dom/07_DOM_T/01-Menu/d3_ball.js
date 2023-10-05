export default function circleMove() {
  const $ball = document.getElementById("isBall");
  const $smallBall1 = document.getElementById("smallBall1");
  const $smallBall2 = document.getElementById("smallBall2");
  const $movingZone = document.getElementById("isMovingZone");
  let positionY = 0;
  let positionX = 0;

  const updatePosition = () => {
    $ball.style.setProperty(
      "transform",
      `translateX(${positionX}px) translateY(${positionY}px)`
    );
    setTimeout(() => {
      $smallBall1.classList.add("mutate2");
      $smallBall2.classList.add("mutate2");

      $ball.classList.add("mutate");
    }, 100);
    setTimeout(() => {
      $ball.classList.add("sandevistan");
      $smallBall1.classList.add("sandevistan2");
      $smallBall2.classList.add("sandevistan2");
    }, 200);
    setTimeout(() => {
      $ball.classList.remove("mutate");
      $smallBall1.classList.remove("mutate2");
      $smallBall2.classList.remove("mutate2");
    }, 180);
    setTimeout(() => {
      $ball.classList.remove("sandevistan");
      $smallBall1.classList.remove("sandevistan2");
      $smallBall2.classList.remove("sandevistan2");
    }, 220);
  };

  $movingZone.addEventListener("keypress", event => {
    if (event.key === "w") {
      positionY -= 35;
      updatePosition();
    }
    if (event.key === "s") {
      positionY += 35;
      updatePosition();
    }
    if (event.key === "a") {
      positionX -= 35;
      updatePosition();
    }
    if (event.key === "d") {
      positionX += 35;
      updatePosition();
    }
  });
}

circleMove();
