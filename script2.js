import { cyberpunkCharacters, CharacterEvolve2 } from "/script.js";

let JudyAlvarezUniverse1;

cyberpunkCharacters.filter((x, i) => {
  if (x.name.toLowerCase().includes("judy")) {
    JudyAlvarezUniverse1 = x;
    console.log(`${x.name} esta en la posicion ${i}`);
    return JudyAlvarezUniverse1;
  }
});

class Universe2 extends CharacterEvolve2 {
  constructor(name, rol, affiliation, side, universe) {
    super(name, rol, affiliation, side);
    this.universe = universe;
  }
  set setGenre(genre) {
    this.genre = genre;
  }
  get getGenre() {
    return this.genre;
  }
  fullSpeech(){
    console.log(`My name is ${this.name}, Im a ${this.rol}, my devotion is with ${this.affiliation} because they are in the ${this.side}. My hair is ${this.setHair = "green and black"}, im a ${this.getGenre} and im from the universe ${this.universe}.`)
  }
  callingAll(){
    this.presentation()
    this.crew()
    this.goodBad()
    this.fullSpeech()
    
  }
}

const JudyAlvarezUniverse2 = new Universe2(
  "Judy Alvarez2",
  "Hacker2",
  "Moxx2",
  "good2",
  2
);

JudyAlvarezUniverse2.setGenre = "female"
console.log(JudyAlvarezUniverse1);
console.log(JudyAlvarezUniverse2);
JudyAlvarezUniverse2.callingAll()

