/* The Journey Begins */
const solution = (param1, param2) => param1 + param2;

const solution2 = year => Math.ceil(year / 100);

const solution3 = string =>
    string.toLowerCase() === [...string].reverse().join("").toLowerCase()
        ? true
        : false;

/* Edge of the Ocean */

const $mouseFollower = document.querySelector(".mouse-follower");

document.addEventListener("mousemove", event => {
    $mouseFollower.style.setProperty(
        "transform",
        `translate(${event.clientX}px, ${event.clientY}px)`
    );
    event.target.matches("a")
        ? (($mouseFollower.style.fontSize = "2rem"), (($mouseFollower.textContent = "🔥")))
        : (($mouseFollower.textContent === "🔥") ? (($mouseFollower.style.fontSize = "1rem"), (($mouseFollower.textContent = "⚫"))) : null)
});
