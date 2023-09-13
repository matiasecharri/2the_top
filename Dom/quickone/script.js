const $searchBar = document.getElementById("userSearch");
const $container = document.getElementById("container");

const frutas = [
  { nombre: "Manzana", emoji: "🍎" },
  { nombre: "Plátano", emoji: "🍌" },
  { nombre: "Naranja", emoji: "🍊" },
  { nombre: "Fresa", emoji: "🍓" },
  { nombre: "Uva", emoji: "🍇" },
  { nombre: "Pera", emoji: "🍐" },
  { nombre: "Cereza", emoji: "🍒" },
  { nombre: "Kiwi", emoji: "🥝" },
  { nombre: "Piña", emoji: "🍍" },
  { nombre: "Mango", emoji: "🥭" },
  { nombre: "Sandía", emoji: "🍉" },
  { nombre: "Limón", emoji: "🍋" },
  { nombre: "Coco", emoji: "🥥" },
  { nombre: "Pomelo", emoji: "🍈" },
  { nombre: "Mandarina", emoji: "🍊" },
  { nombre: "Ciruela", emoji: "🍑" },
  { nombre: "Granada", emoji: "🫐" },
  { nombre: "Papaya", emoji: "🧡" },
];
const printer = array => {
  array.forEach(x => {
    $container.innerHTML += `
              <div style="height: 90px; width: 150px; display: flex; justify-content: center; flex-direction: column; align-items: center">
                  <p>${x.nombre}</p>
                  <p>${x.emoji}</p>
              </div>`;
  });
};

const searching = array => {
  printer(array);
  let userText = "";
  $searchBar.addEventListener("keyup", x => {
    $container.innerHTML = "";
    userText = x.target.value.toLowerCase();

    let arrayPerName = array.filter(x => {
      return x.nombre.toLowerCase().includes(userText);
    });
    arrayPerName.length === 0
      ? ($container.innerHTML = "No tenemos esa fruta!")
      : printer(arrayPerName);
  });

  $searchBar.addEventListener("input", x => {
    if (x.target.value === "") {
      $container.innerHTML = "";
      printer(array);
    }
  });
};
searching(frutas);
