console.clear();

let temp1 = setTimeout(() => {
  console.log(
    "In six seconds the interval is going to be stopped by setTimeout."
  );
}, 6000);

let clock = setInterval(() => {
  console.log(new Date().toLocaleTimeString());
}, 1000);

setTimeout(() => {
  clearTimeout(clock);
}, 11000);

let startingNew = setTimeout(() => {
  console.log("New clock is here!");
  let clock2 = setInterval(() => {
    console.log(new Date().toLocaleTimeString());
  }, 1000);
  setTimeout(() => {
    clearInterval(clock2);
  }, 6000);
}, 16000);
