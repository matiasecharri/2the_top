console.clear();

//-------------------------------SETTIMEOUT, SETINTERVAL------------------//
// let temp1 = setTimeout(() => {
//   console.log(
//     "In six seconds the interval is going to be stopped by setTimeout."
//   );
// }, 6000);

// let clock = setInterval(() => {
//   console.log(new Date().toLocaleTimeString());
// }, 1000);

// setTimeout(() => {
//   clearTimeout(clock);
// }, 11000);

// let startingNew = setTimeout(() => {
//   console.log("New clock is here!");
//   let clock2 = setInterval(() => {
//     console.log(new Date().toLocaleTimeString());
//   }, 1000);
//   setTimeout(() => {
//     clearInterval(clock2);
//   }, 6000);
// }, 16000);

//-----------------------------CALLBACKS------------------------------//

function cuadradoCallback(value, callback) {
  setTimeout((x) => {
    callback(value, value * value);
  }, 0 || Math.random() * 1000);
}

cuadradoCallback(0, (value, result) => {
  console.log("First Call Back");
  console.log(value);
  console.log(result);
  cuadradoCallback(1, (value, result) => {
    console.log("Second Call Back");
    console.log(value);
    console.log(result);
  });
  cuadradoCallback(3, (value, result) => {
    console.log("Third Call Back");
    console.log(value);
    console.log(result);
  });
  cuadradoCallback(4, (value, result) => {
    console.log("Fourth Call Back");
    console.log(value);
    console.log(result);
  });
  cuadradoCallback(5, (value, result) => {
    console.log("Fifth Call Back");
    console.log(value);
    console.log(result);
  });
});
