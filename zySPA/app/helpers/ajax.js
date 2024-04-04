export const ajax = async props => {
  const { url, success } = props;
  try {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(
        `Error: ${res.status} ${res.statusText || "something went wrong..."}`
      );
    }

    const json = await res.json();
    success(json);
  } catch (error) {
    document.querySelector("h1").innerHTML = error.message.toUpperCase();
    console.warn(error);
  }
};
