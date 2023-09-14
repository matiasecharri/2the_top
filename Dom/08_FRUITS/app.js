// CASO1:
// Searchbar ON
// CASO2:
// 1+ Checkbox ON
// CASO3:
// Searchbar ON + 1+CHECKBOX ON
// CASO4:
// All OFF

const arrayFruits = [
  {
    name: "watermelon",
    color: "green",
    image: "/Dom/08_FRUITS/assets/watermelon.png",
  },
  {
    name: "strawberry",
    color: "red",
    image: "/Dom/08_FRUITS/assets/strawberry.png",
  },

  {
    name: "orange",
    color: "orange",
    image: "/Dom/08_FRUITS/assets/orange.png",
  },

  {
    name: "grape",
    color: "green",
    image: "/Dom/08_FRUITS/assets/grape.png",
  },
  {
    name: "banana",
    color: "yellow",
    image: "/Dom/08_FRUITS/assets/banana.png",
  },
  {
    name: "avocado",
    color: "green",
    image: "/Dom/08_FRUITS/assets/avocado.png",
  },
  {
    name: "cherry",
    color: "red",
    image: "/Dom/08_FRUITS/assets/cherry.png",
  },
  {
    name: "pearl",
    color: "green",
    image: "/Dom/08_FRUITS/assets/pearl.png",
  },
  {
    name: "mango",
    color: "orange",
    image: "/Dom/08_FRUITS/assets/mango.png",
  },
  {
    name: "papapya",
    color: "orange",
    image: "/Dom/08_FRUITS/assets/papaya.png",
  },
  {
    name: "tomato",
    color: "red",
    image: "/Dom/08_FRUITS/assets/tomato.png",
  },
  {
    name: "apple orange",
    color: "red",
    image: "/Dom/08_FRUITS/assets/apple_orange.png",
  },
  {
    name: "pineapple",
    color: "yellow",
    image: "/Dom/08_FRUITS/assets/pineapple.png",
  },
  {
    name: "blueberry",
    color: "blue",
    image: "/Dom/08_FRUITS/assets/blueberry.png",
  },
  {
    name: "dragonfruit",
    color: "red",
    image: "/Dom/08_FRUITS/assets/dragonfruit.png",
  },
  {
    name: "durian",
    color: "green",
    image: "/Dom/08_FRUITS/assets/durian.png",
  },
  {
    name: "lemon",
    color: "yellow",
    image: "/Dom/08_FRUITS/assets/lemon.png",
  },
  {
    name: "kiwi",
    color: "green",
    image: "/Dom/08_FRUITS/assets/kiwi.png",
  },
];

const $containerCards = document.getElementById("containerCards");

const printer = (array, container, nombre, imagen) => {
  array.forEach(elemento => {
    container.innerHTML += `<div class="cardFruits">                                  
<div class="filter"></div>                                   
<p>${elemento[nombre].toUpperCase()}</p>
<img src="${elemento[imagen]}" alt="${elemento[nombre]}">
</div>`;
  });
};

printer(arrayFruits, $containerCards, "name", "image");
