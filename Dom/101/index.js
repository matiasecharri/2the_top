try {
  const $main = document.getElementById("containerProfile");
  const $searchBar = document.getElementById("searchInput");
  let userName;

  const printInfo = (object, printZone) => {
    printZone.innerHTML = `
      <div class="card">
        <img src="${
          object.avatar_url || "/Dom/101/placeholder.jpg"
        }" alt="Imagen de ejemplo">
        <div class="card-content">
          <h2 class="card-title">${object.name || "User doesn't exist"}</h2>
          <p class="card-description">@${object.login || "???"}</p>
          <p class="card-description">${
            object.bio || "The user has no bio."
          }</p>
        </div>
      </div>`;
  };

  const consumirApi = async () => {
    $searchBar.addEventListener("keyup", async event => {
      if (event.key !== "Enter") {
        return;
      }
      userName = $searchBar.value;
      try {
        const getUser = await fetch(`https://api.github.com/users/${userName}`);

        if (getUser.status === 403) {
          throw new Error(
            `Forbidden: You don't have permission to access this resource.`
          );
        }

        if (!getUser.ok) {
          throw new Error(`Error: ${getUser.status} - ${getUser.statusText}`);
        }

        const data = await getUser.json();
        printInfo(data, $main);
      } catch (error) {
        console.error(error.message);
      }
    });
  };
  consumirApi();
} catch (error) {
  console.log(error);
}
