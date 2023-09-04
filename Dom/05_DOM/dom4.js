// ⚡72. DOM 12 Events
const userMessages = [];

const allBlock = () => {
  const $button = document.getElementById("button1"); //SEND BUTTON
  const $buttonMute = document.getElementById("muted"); //MUTE BUTTON
  const $input = document.getElementById("input1"); //MESSAGE BOX
  const $textContent = document.getElementById("texter"); //TEXT

  $button.addEventListener("click", (e) => {
    console.log(e);
    console.log(e.type);
    console.log(e.target);
  });

  let searchBarValue = "";
  let isMuted = false;

  $buttonMute.addEventListener("click", (x) => {
    isMuted === false ? (isMuted = true) : (isMuted = false);
  });

  const playAudioMessage = (file) => {
    let messageSound = new Audio(file);
    if (isMuted === false) {
      messageSound.play();
    } else {
      return;
    }
  };

  const sendButtonInteraction = () => {
    $input.addEventListener("keyup", (e) => {
      searchBarValue = e.target.value;
    });

    $button.addEventListener("click", () => {
      if ($input.value === "") {
        return;
      }

      if (searchBarValue.length > 21) {
        playAudioMessage("/Dom/05_DOM/error_message.mp3");
        $textContent.innerHTML = `<span class="error4">ERR0R:</span><span class="error3"> Message too long.</span>`;
        $input.value = "";
        return;
      }
      let transformedArray = searchBarValue.split("").map((x) => {
        if (x.toUpperCase() === "O") {
          return "0";
        }
        return x;
      });

      playAudioMessage("/Dom/05_DOM/message.mp3");
      let finalMessage = transformedArray.join("");
      $textContent.innerHTML = `USER_SAYS: <span class="coloredMessage">${finalMessage.toUpperCase()}</span>`;
      $input.value = "";
      userMessages.push(finalMessage);
    });
  };
  sendButtonInteraction();

  const inputInteraction = () => {
    $input.addEventListener("keyup", (e) => {
      if (e.key !== "Enter" || $input.value === "") {
        return;
      }

      if (searchBarValue.length > 21) {
        playAudioMessage("/Dom/05_DOM/error_message.mp3");
        $textContent.innerHTML = `<span class="error4">ERR0R:</span><span class="error3"> Message too long.</span>`;
        $input.value = "";
        return;
      }

      let transformedArray = searchBarValue.split("").map((x) => {
        if (x.toUpperCase() === "O") {
          return "0";
        }
        return x;
      });
      let finalMessage = transformedArray.join("");
      $textContent.innerHTML = `USER_SAYS: <span class="coloredMessage">${finalMessage.toUpperCase()}</span>`;
      $input.value = "";
      playAudioMessage("/Dom/05_DOM/message.mp3");

      userMessages.push(finalMessage);
    });
  };
  inputInteraction();
};

setTimeout((x) => {
  userMessages.forEach((x) => {
    console.log(x);
  });
}, 10000);

export { allBlock };
