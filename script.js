//ADD
const pluser = (num1, num2) => {
  return num1 + num2;
};

let resultado = pluser(5, 4);
console.log(resultado);

//EVEN & ODD, USING AN OBJECT TO RETURN 2 DIFFERENT ARRAYS ;)
const randomNumbers = [
  2, 434, 65765, 6, 24, 100, 22, 23, 7, 4, 17, 8, 29, 12, 31, 16, 23, 6, 39, 10,
  21, 14, 35, 2, 27, 18, 33, 22, 37,
];

const numberFilterForEach = (array) => {
  const numberContainer = {
    evenNumbers: [],
    oddNumbers: [],
  };
  array.forEach((x) => {
    if (x % 2 === 0) {
      numberContainer.evenNumbers.push(x);
    } else {
      numberContainer.oddNumbers.push(x);
    }
  });
  return numberContainer;
};
const allDone = numberFilterForEach(randomNumbers);
console.log(allDone);

///--------------------------------------------------
const numberFilterFilter = (array) => {
  const evenNumbers = array.filter((x) => x % 2 === 0);
  const oddNumbers = array.filter((x) => x % 2 !== 0);

  return { evenNumbers, oddNumbers };
};

const evenNumbers = numberFilterFilter(randomNumbers).evenNumbers;
console.log(evenNumbers);
const oddNumbers = numberFilterFilter(randomNumbers).oddNumbers;
console.log(oddNumbers);






