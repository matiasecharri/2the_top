export default function backTopButton() {
  const $backButton = document.querySelector(".backToTop");
  window.addEventListener("scroll", event => {
    window.scrollY > 250
      ? ($backButton.classList.add("opacityOn"),
        window.scrollY > 805
          ? $backButton.classList.add("goBigger")
          : $backButton.classList.remove("goBigger"))
      : $backButton.classList.remove("opacityOn");
  });
}
