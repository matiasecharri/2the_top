// tsc --target es2015 script.ts
// tsc --target es2017 script.ts

//TYPES
const text: string = "Hello!";
const num1: number = 2;
const bool1: boolean = true || false;
const object1: object = [] || {};
const formChanger: any = "It doesn't matters"; //Don't
let anyValue: unknown = 2; //Yes!
if (typeof anyValue === "number") {
  anyValue + 2;
} //Need's to ask type before using

//Custom TYPES
type Cash = number | null | undefined;
let newBudget: Cash = 445646;

//Custom Object TYPES
type Disk = {
  name: string;
  year: number;
  artist?: string; //Optional property
  bestSeller: boolean;
};
const disk1: Disk = {
  name: "Starboy",
  year: 2016,
  bestSeller: true,
};

//TYPES in parameters, parameter should be a number, the function should return a number.
const multiplierX2 = (number: number): number => {
  return number * 2;
};

multiplierX2(10);

//TYPES in classes
class CarCreator {
  readonly brand: string; //Not modificable
  private model: string; //Cant access from outside of the class
  year: number;

  constructor(brand: string, model: string, year: number) {
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

//INTERFACES

interface Movie {
  title: string;
  year: number | null;
  awards?: string;
  info(): object;
}

//Use auto complete
const myMovie: Movie = {
  title: "The Batman",
  year: 2022,
  info: function (): object {
    return { title: this.title, year: this.year, awards: "various" };
  },
};

console.log(myMovie.info());

//Enums, not bad, but to much code, a bettter way below
enum ColorCar {
  Black,
  White,
  Red,
}
const color = ColorCar.Black;

//Less code, less Javascript transpilation, 🚀
type ColorCarX = "Black" | "White" | "Red";
const colorX: ColorCarX = "Black";

console.log(typeof colorX);

//Custom parameter types depending of what is needed.
type Message<T, X> = {
  name: string;
  content: T;
  optional?: X;
};

const textMessage: Message<string, number> = {
  //Specify the type of the values when declaring
  name: "Message to Michael",
  content: "Hello there this is a message!",
};

const numberMessage: Message<number, string> = {
  name: "Message in ",
  content: 123456789,
  optional: "Hello",
};
