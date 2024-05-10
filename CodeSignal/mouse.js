
const mouseEffects = () => {
    const $mouseFollower = document.querySelector(".mouse-follower");

    document.addEventListener("mousemove", event => {
        $mouseFollower.style.setProperty(
            "transform",
            `translate(${event.clientX}px, ${event.clientY}px)`
        );
        event.target.matches("a")
            ? (($mouseFollower.style.fontSize = "1.8rem"), (($mouseFollower.textContent = "🔥")))
            : (($mouseFollower.textContent === "🔥") ? (($mouseFollower.style.fontSize = "1rem"), (($mouseFollower.textContent = "⚫"))) : null)
    });

}

export { mouseEffects }