import { mouseEffects } from "./mouse.js";

/* The Journey Begins */
const solution = (param1, param2) => param1 + param2;

const solution2 = year => Math.ceil(year / 100);

const solution3 = string =>
    string.toLowerCase() === [...string].reverse().join("").toLowerCase()
        ? true
        : false;

/* Edge of the Ocean */

const solution4 = (inputArray) => {
    let result = inputArray[0] * inputArray[1];

    for (let i = 0; i < inputArray.length; i++) {
        const product = inputArray[i] * inputArray[i + 1];
        if (product > result) {
            result = product;
        }
    }

    return result;
}
