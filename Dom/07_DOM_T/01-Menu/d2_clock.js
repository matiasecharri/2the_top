//---------CLOCK--------------------------//
export function digitalClock(clockTemplate) {
  if (!(clockTemplate instanceof HTMLElement)) {
    console.error("🧧Clocktemplate needs to be an HTMLElement");
    return;
  }

  const playAudioMessage = file => {
    let messageSound = new Audio(file);
    if (!messageSound.paused) {
      messageSound.pause();
    } else {
      messageSound.play();
    }
  };

  const $container = clockTemplate;
  const $startButton = document.getElementById("startClockButton");
  const $stopButton = document.getElementById("stopClockButton");

  $stopButton.classList.add("disabled");

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

  $startButton.addEventListener("click", clockWorking);
}
//---------ALARM--------------------------//
export function digitalAlarm() {
  let alarmSound = null;

  const playAlarmSound = file => {
    if (alarmSound !== null && !alarmSound.paused) {
      alarmSound.pause();
    } else {
      alarmSound = new Audio(file);
      alarmSound.loop = true;
      alarmSound.play();
    }
  };

  const $startAlarmButton = document.getElementById("startAlarmButton");
  const $stopAlarmButton = document.getElementById("stopAlarmButton");
  $stopAlarmButton.classList.add("disabled");

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
}
