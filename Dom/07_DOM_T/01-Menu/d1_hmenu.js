let state;
const $checkbox = document.getElementById("checkbox");
export default function hamburguerMenu(button, menu) {
  if (!(button instanceof HTMLElement) || !(menu instanceof HTMLElement)) {
    console.error("🧧 Button and menu needs to be a HTML element");
    return;
  }

  button.addEventListener("click", () => {
    menu.classList.toggle("sliderMenuActive");
    menu.className.match("sliderMenuActive") ? (state = true) : (state = false);
  });

  window.addEventListener("beforeunload", () => {
    $checkbox.checked = false;
  });
}
