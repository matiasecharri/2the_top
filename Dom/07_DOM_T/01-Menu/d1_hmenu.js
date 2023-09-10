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

// https://artlist.io/sfx/pack/cyberpunk/4916?utm_source=google&utm_medium=cpc&utm_campaign=19649240368&utm_content=148830273994&utm_term=&keyword=&ad=650184912426&matchtype=&device=c&gclid=Cj0KCQjwxuCnBhDLARIsAB-cq1pP0Ycjg1L0XLQGSdJcc6ZKBFD4AcB6KUu33K39EBG4AsQEngG10TkaAucFEALw_wcB
