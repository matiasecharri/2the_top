export const Menu = (props) => {
    const $menu = document.createElement("section")
    $menu.classList.add("menu")
    $menu.classList.add("hidden")
    $menu.innerHTML = `<input type="text" placeholder="search in: ${siteName.toLowerCase().slice(8)}" class="searchbar" id="search1">`
    return $menu
}