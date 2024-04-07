export const ajax = async props => {
  try {
    const { url, success } = props;
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(
        `Error: ${res.status} ${res.statusText || "something went wrong..."}`
      );
    }

    const json = await res.json();
    success(json);
  } catch (error) {
    document.querySelector(".loader-svg").classList.add("hidden");
    document.querySelector(
      "h1"
    ).innerHTML = `${error.message.toUpperCase()} <span>TRY AGAIN!</span>`;
    document.querySelector(".domain-not-found").classList.add("visible");
    setTimeout(() => {
      document.querySelector(".domain-not-found").classList.remove("visible");
    }, 4500);
  }
};
