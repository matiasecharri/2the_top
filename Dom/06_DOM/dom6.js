//--------------DUCK BUTTON---------------------------//
const duckButtonCode = () => {
  const $buttonConsole = document.getElementById("buttonDuck");
  let count = -1;
  let userName;

  const helloThere = (name = "anonymus person") => {
    alert(`👋🏻Hello number ${count}, ${name}!`);
  };

  $buttonConsole.addEventListener("click", x => {
    if (count === -1) {
      userName = prompt("Tell me your name 🦆");
      count++;
      return;
    }
    if (count >= 0) {
      count++;
      console.log(` ${count} 🦆`);
      userName === null ? helloThere() : helloThere(userName);
    }
  });
};
duckButtonCode();
// ⚡73. DOM 13 Events Parameters and Remove Events
//--------------REMOVE EVENTS---------------------------//
const $buttonRemover = document.getElementById("buttonRemover");

const removeClickButton = x => {
  $buttonRemover.classList.add("disabled");
  swal(`DISABLED: {${x.type}}`);
  $buttonRemover.removeEventListener("dblclick", removeClickButton);
};

$buttonRemover.addEventListener("dblclick", removeClickButton);

// ⚡74. DOM 14 EVENT FLOW AND BUBBLES
const $linkButton = document.getElementById("eventFlow");
$linkButton.addEventListener("click", () => {
  window.location.href = "/Dom/06_DOM/event-flow";
});
