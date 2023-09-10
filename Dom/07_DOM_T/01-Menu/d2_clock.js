export default function clock(clockTemplate) {
  if (!(clockTemplate instanceof HTMLElement)) {
    console.error("🧧Clocktemplate needs to be an HTMLElement");
    return;
  }
  let isAlarmPlaying = false;
  let alarmSound;

  const playAudioMessage = file => {
    let messageSound = new Audio(file);
    if (!messageSound.paused) {
      messageSound.pause();
    } else {
      messageSound.play();
    }
  };

  const playAlarmSound = file => {
    if (alarmSound && !alarmSound.paused) {
      alarmSound.pause();
    } else {
      alarmSound = new Audio(file);
      alarmSound.loop = true; // Establece el bucle en true
      alarmSound.play(); // Luego reproduce el sonido
      isAlarmPlaying = true;
    }
  };
  

  const $container = clockTemplate;
  const $startButton = document.getElementById("startClockButton");
  const $stopButton = document.getElementById("stopClockButton");
  const $startAlarmButton = document.getElementById("startAlarmButton");
  const $stopAlarmButton = document.getElementById("stopAlarmButton");
  $stopButton.classList.add("disabled");
  $stopAlarmButton.classList.add("disabled");

  let isTheClockRunning = false;
  let clockStart;
  const clockWorking = () => {
    playAudioMessage("/Dom/07_DOM_T/01-Menu/effect1.mp3");
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
    $stopButton.classList.remove("disabled");
    $stopButton.addEventListener("click", clockNotWorking);
    $startButton.removeEventListener("click", clockWorking);
  };
  const stopClock = () => {
    clearInterval(clockStart);
  };

  const clockNotWorking = () => {
    clearInterval(clockStart);
    isTheClockRunning = false;
    playAudioMessage("/Dom/07_DOM_T/01-Menu/effect3.mp3");
    $container.innerHTML = "";
    $startButton.classList.remove("disabled");
    $stopButton.classList.add("disabled");
    $startButton.addEventListener("click", clockWorking);
    $stopButton.removeEventListener("click", clockNotWorking);
  };

  const alarmWorking = () => {
    playAlarmSound("/Dom/07_DOM_T/01-Menu/johnny_silverhand.mp3");
    $startAlarmButton.removeEventListener("click", alarmWorking);
    $startAlarmButton.classList.add("disabled");
    $stopAlarmButton.classList.remove("disabled");
    $stopAlarmButton.addEventListener("click", alarmNotWorking);
  };

  const alarmNotWorking = () => {
    playAlarmSound("/Dom/07_DOM_T/01-Menu/johnny_silverhand.mp3");
    $startAlarmButton.classList.remove("disabled");
    $stopAlarmButton.removeEventListener("click", alarmNotWorking);
    $startAlarmButton.addEventListener("click", alarmWorking);
    $stopAlarmButton.classList.add("disabled");
  };

  $startAlarmButton.addEventListener("click", alarmWorking);
  $startButton.addEventListener("click", clockWorking);
}
