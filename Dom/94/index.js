const $videoPlayer = document.getElementById("video-player");

if (navigator.mediaDevices.getUserMedia) {
  navigator.mediaDevices
    .getUserMedia({
      video: {
        width: {
          min: 800,
          max: 800,
        },
        height: {
          min: 500,
          max: 500,
        },
      },
      audio: false,
    })
    .then(stream => {
      console.log(stream);
      $videoPlayer.srcObject = stream;
      $videoPlayer.play();
    })
    .catch(error => {
      console.log(error);
      const $denyDiv = document.createElement("div");
      $videoPlayer.insertAdjacentElement("afterend", $denyDiv);
      $denyDiv.innerHTML += `<p>Permissons rejected, click "ask again" and reload the page...</p>`;
      $denyDiv.classList.add("deny");

      $videoPlayer.insertAdjacentElement("afterend", $denyDiv);
    });
}
