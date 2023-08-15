let texto = `THIS IS THE DOM`;
const textReader = (text) => {
  speechSynthesis.speak(new SpeechSynthesisUtterance(text));
};

for (let index = 0; index < 1; index++) {
  textReader(texto);
}
