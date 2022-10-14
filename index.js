// === Menu toggling ===
const menuOpenButton = document.getElementById("menu-open-button");
const menu = document.getElementById("menu");
function toggleMenu() {
    let expanded = (this.getAttribute("aria-expanded") === "true") | false;
    this.setAttribute("aria-expanded", !expanded);
    console.log("triggered");
    menu.hidden = !menu.hidden;
}
menuOpenButton.addEventListener("click", toggleMenu);
menu.addEventListener("click", toggleMenu);
