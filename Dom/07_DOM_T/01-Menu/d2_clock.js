export default function clock(clockTemplate) {
  if (!(clockTemplate instanceof HTMLElement)) {
    console.error("🧧Clocktemplate needs to be an HTMLElement");
    return;
  }
  const $container = clockTemplate;
  const $stopButton = document.getElementById("stopClockButton");
  const $startButton = document.getElementById("startClockButton");
  let isTheClockRunning = false;
  let clockStart;
  const clockWorking = () => {
    isTheClockRunning = true;
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");
    $container.innerHTML = `<p>${hours}:${minutes}:${seconds}</p>`;
    clockStart = setInterval(() => {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, "0");
      const minutes = String(now.getMinutes()).padStart(2, "0");
      const seconds = String(now.getSeconds()).padStart(2, "0");
      $container.innerHTML = `<p>${hours}:${minutes}:${seconds}</p>`;
    }, 1000);
    $startButton.classList.add("disabled");
    $startButton.removeEventListener("click", clockWorking);
  };
  const stopClock = () => {
    clearInterval(clockStart);
  };

  $startButton.addEventListener("click", clockWorking);

  $stopButton.addEventListener("click", () => {
    clearInterval(clockStart);
    isTheClockRunning = false;
    $container.innerHTML = "";
    $startButton.classList.remove("disabled");
    $startButton.addEventListener("click", clockWorking);
  });
}
