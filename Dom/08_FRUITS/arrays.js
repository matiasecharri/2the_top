const arrayFruitsX = [
  {
    name: "watermelon",
    type: "Melon",
    image: "/Dom/08_FRUITS/assets/watermelon.png",
    origin: "Africa",
    description:
      "Watermelon is a refreshing and juicy fruit, perfect for summer. It is known for its high water content and sweet taste.",
  },
  {
    name: "strawberry",
    type: "Berry",
    image: "/Dom/08_FRUITS/assets/strawberry.png",
    origin: "Europe",
    description:
      "Strawberries are small red fruits with a sweet and slightly tart flavor. They are widely used in desserts and salads.",
  },
  {
    name: "orange",
    type: "Citrus",
    image: "/Dom/08_FRUITS/assets/orange.png",
    origin: "Asia",
    description:
      "Oranges are citrus fruits known for their delicious juice and high vitamin C content.",
  },
  {
    name: "grape",
    type: "Specials",
    image: "/Dom/08_FRUITS/assets/grape.png",
    origin: "Europe and Asia",
    description:
      "Grapes are small and juicy fruits used to make wine and raisins.",
  },
  {
    name: "banana",
    type: "Tropical",
    image: "/Dom/08_FRUITS/assets/banana.png",
    origin: "Southeast Asia",
    description:
      "Bananas are tropical fruits that grow in clusters. They are a source of potassium and energy.",
  },
  {
    name: "avocado",
    type: "Specials",
    image: "/Dom/08_FRUITS/assets/avocado.png",
    origin: "Mexico",
    description:
      "Avocado is a creamy fruit rich in healthy fats. It is used in various dishes, such as guacamole.",
  },
  {
    name: "cherry",
    type: "Berry",
    image: "/Dom/08_FRUITS/assets/cherry.png",
    origin: "Europe and Western Asia",
    description:
      "Cherries are small and sweet fruits that grow on trees. They are used in desserts and preserves.",
  },
  {
    name: "pearl",
    type: "Specials",
    image: "/Dom/08_FRUITS/assets/pearl.png",
    origin: "China",
    description:
      "Pears are juicy fruits that come in various varieties and are a good source of dietary fiber.",
  },
  {
    name: "mango",
    type: "Tropical",
    image: "/Dom/08_FRUITS/assets/mango.png",
    origin: "Southeast Asia",
    description:
      "Mango is a tropical fruit with juicy and sweet flesh. It is widely appreciated for its unique flavor.",
  },
  {
    name: "papaya",
    type: "Tropical",
    image: "/Dom/08_FRUITS/assets/papaya.png",
    origin: "Central America",
    description:
      "Papaya is a tropical fruit that has orange flesh and a sweet flavor with a hint of acidity.",
  },
  {
    name: "tomato",
    type: "Specials",
    image: "/Dom/08_FRUITS/assets/tomato.png",
    origin: "South America",
    description:
      "Tomato is a fruit commonly used in savory dishes, although it is botanically a fruit. It is versatile in cooking.",
  },
  {
    name: "apple orange",
    type: "Specials",
    image: "/Dom/08_FRUITS/assets/apple_orange.png",
    origin: "Unknown",
    description:
      "The 'apple orange' is a hybrid fruit with an unknown exact origin. It combines the characteristics of an apple and an orange in taste and appearance.",
  },
  {
    name: "pineapple",
    type: "Tropical",
    image: "/Dom/08_FRUITS/assets/pineapple.png",
    origin: "South America",
    description:
      "Pineapple is a tropical fruit with juicy flesh and a sweet and refreshing flavor.",
  },
  {
    name: "blueberry",
    type: "Berry",
    image: "/Dom/08_FRUITS/assets/blueberry.png",
    origin: "North America",
    description:
      "Blueberries are small blue fruits that grow on bushes. They are known for their flavor and health benefits.",
  },
  {
    name: "dragonfruit",
    type: "Tropical",
    image: "/Dom/08_FRUITS/assets/dragonfruit.png",
    origin: "Tropical America",
    description:
      "Dragon fruit, also known as pitahaya or pitaya, is a tropical fruit with a unique appearance and mild flavor.",
  },
  {
    name: "durian",
    type: "Tropical",
    image: "/Dom/08_FRUITS/assets/durian.png",
    origin: "Southeast Asia",
    description:
      "Durian is a tropical fruit known for its strong odor and distinctive flavor. It is considered a delicacy by some and unpleasant by others.",
  },
  {
    name: "lemon",
    type: "Citrus",
    image: "/Dom/08_FRUITS/assets/lemon.png",
    origin: "Southeast Asia",
    description:
      "Lemon is a citrus fruit with a zesty and refreshing flavor. It is used in a wide variety of dishes and beverages.",
  },
  {
    name: "kiwi",
    type: "Berry",
    image: "/Dom/08_FRUITS/assets/kiwi.png",
    origin: "China",
    description:
      "Kiwi is a small green fruit with vibrant flesh and a sweet-tart flavor. It is an excellent source of vitamin C.",
  },
  {
    name: "honeydew melon",
    type: "Melon",
    image: "/Dom/08_FRUITS/assets/honeydew_melon.png",
    origin: "Africa",
    description:
      "Honeydew melon is a sweet and juicy fruit that is a popular choice in fruit salads.",
  },
  {
    name: "tangerine",
    type: "Citrus",
    image: "/Dom/08_FRUITS/assets/tangerine.png",
    origin: "China",
    description:
      "Tangerine is a small and easy-to-peel citrus fruit known for its sweet flavor and fresh aroma.",
  },
  {
    name: "starfruit",
    type: "Tropical",
    image: "/Dom/08_FRUITS/assets/starfruit.png",
    origin: "Southeast Asia",
    description:
      "Starfruit, also known as carambola, is a tropical fruit with a star-like shape and a sweet-tart flavor.",
  },
  {
    name: "guava",
    type: "Tropical",
    image: "/Dom/08_FRUITS/assets/guava.png",
    origin: "Tropical America",
    description:
      "Guava is a tropical fruit with juicy flesh and a sweet, aromatic flavor.",
  },
  {
    name: "coconut",
    type: "Tropical",
    image: "/Dom/08_FRUITS/assets/coconut.png",
    origin: "Southeast Asia",
    description:
      "Coconut is a versatile tropical fruit. Its water and flesh are used in a variety of dishes and products.",
  },
  {
    name: "peach",
    type: "Specials",
    image: "/Dom/08_FRUITS/assets/peach.png",
    origin: "China",
    description:
      "Peach is a fruit with soft flesh and velvety skin. It is appreciated for its sweet flavor.",
  },
  {
    name: "pomegranate",
    type: "Berry",
    image: "/Dom/08_FRUITS/assets/pomegranate.png",
    origin: "Middle East",
    description:
      "Pomegranate is a fruit with numerous juicy seeds. It is a symbol of fertility and abundance.",
  },
  {
    name: "passionfruit",
    type: "Tropical",
    image: "/Dom/08_FRUITS/assets/passionfruit.png",
    origin: "South America",
    description:
      "Passion fruit is a tropical fruit with fragrant, seed-filled pulp. It is known for its unique flavor.",
  },
  {
    name: "raspberry",
    type: "Berry",
    image: "/Dom/08_FRUITS/assets/raspberry.png",
    origin: "Europe",
    description:
      "Raspberry is a small and aromatic fruit that grows on bushes. It is appreciated for its flavor and versatility.",
  },
];

export { arrayFruitsX };
