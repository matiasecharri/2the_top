// ⚡73. DOM 13 Events Parameters and Remove Events

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
//--------------REMOVE EVENTS---------------------------//

const $buttonRemover = document.getElementById("buttonRemover");

const removeClickButton = x => {
  $buttonRemover.classList.add("disabled");
  swal(`DISABLED: {${x.type}}`);
  $buttonRemover.removeEventListener("dblclick", removeClickButton);
};

$buttonRemover.addEventListener("dblclick", removeClickButton);
