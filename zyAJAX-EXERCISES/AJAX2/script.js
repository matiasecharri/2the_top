const $main = document.querySelector("main");
const $h1 = document.querySelector("h1");

$main.addEventListener("dragover", event => {
  event.preventDefault();
  event.stopPropagation();
  $main.classList.add("active-drag");
  $h1.innerText = "UPLOAD NOW";
  $h1.classList.add("active-drag-txt");
  console.warn("🚀DROP TO UPLOAD!");
});

$main.addEventListener("dragleave", event => {
  event.preventDefault();
  event.stopPropagation();
  $main.classList.remove("active-drag");
  $h1.innerText = "DRAG AND DROP ZONE";
  $h1.classList.remove("active-drag-txt");
  console.warn("⚠️UPLOADING FILES CANCELED");
});

$main.addEventListener("drop", event => {
  event.preventDefault();
  event.stopPropagation();
  $main.classList.remove("active-drag");
  $h1.innerText = "DRAG AND DROP ZONE";
  $h1.classList.remove("active-drag-txt");
  const files = Array.from(event.dataTransfer.files);
  console.log(event.dataTransfer);
  files.forEach(element => {
    console.log(element);
  });
  console.warn("✅FILES SUCCEFULLY UPLOADED!");
});
