// === Menu toggling ===
const menuOpenButton = document.getElementById("menu-open-button");
const menuCloseButton = document.getElementById("menu-close-button");
const menu = document.getElementById("menu");
const menuLinks = document.querySelectorAll(".menu-link");

function toggleMenu() {
    let expanded = (this.getAttribute("aria-expanded") === "true") | false;
    this.setAttribute("aria-expanded", !expanded);
    console.log("triggered");
    menu.hidden = !menu.hidden;
}
menuOpenButton.addEventListener("click", toggleMenu);
menuCloseButton.addEventListener("click", toggleMenu);

// === Menu scrolling ===
const scrollTrigger = 40;

window.onscroll = function () {
    // PageYOffset for compatibility with IE.
    if (
        window.scrollY >= scrollTrigger ||
        window.pageYOffset >= scrollTrigger
    ) {
        document.getElementById("header").classList.add("header-fill");
    } else {
        document.getElementById("header").classList.remove("header-fill");
    }
};
