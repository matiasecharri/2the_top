// tsc --target es2015 script.ts
// tsc --target es2017 script.ts
//TYPES
const text = "Hello!";
const num1 = 2;
const bool1 = true || false;
const object1 = [] || {};
const formChanger = "It doesn't matters"; //Don't
let anyValue = 2; //Yes!
if (typeof anyValue === "number") {
  anyValue + 2;
} //Need's to ask type before using
let newBudget = 445646;
const disk1 = {
  name: "Starboy",
  year: 2016,
  bestSeller: true,
};
//TYPES in parameters, parameter should be a number, the function should return a number.
const multiplierX2 = number => {
  return number * 2;
};
multiplierX2(10);
//TYPES in classes
class CarCreator {
  constructor(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
  }
  info() {
    return { brand: this.brand, model: this.model, year: this.year };
  }
}
const ferrari = new CarCreator("Ferrari", "Purosangue", 2023);
console.log(ferrari.info());
//Use auto complete
const myMovie = {
  title: "The Batman",
  year: 2022,
  info: function () {
    return { title: this.title, year: this.year, awards: "various" };
  },
};
console.log(myMovie.info());
//Enums, not bad, but to much code, a bettter way below
var ColorCar;
(function (ColorCar) {
  ColorCar[(ColorCar["Black"] = 0)] = "Black";
  ColorCar[(ColorCar["White"] = 1)] = "White";
  ColorCar[(ColorCar["Red"] = 2)] = "Red";
})(ColorCar || (ColorCar = {}));
const color = ColorCar.Black;
const colorX = "Black";
console.log(typeof colorX);
const newColor = typeof colorX;
console.log(newColor);
