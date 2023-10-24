const $form = document.getElementById("responsive-tester");
const $openButton = document.getElementById("openButton");
const $closeButton = document.getElementById("closeButton");

let tester;

const formOpener = () => {
  $openButton.addEventListener("click", event => {
    event.preventDefault();
    let width = $form.width.value;
    let height = $form.height.value;
    tester = window.open(
      $form.direction.value,
      "tester",
      `innerWidth=${width}, innerHeight=${height}`
    );
  });
};

const formCloser = () => {
  $closeButton.addEventListener("click", event => {
    event.preventDefault();
    tester.close();
  });
};

formOpener();
formCloser();
