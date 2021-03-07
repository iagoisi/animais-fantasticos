import outsideClick from "./ouside-click.js"

export default function initMenuMobile() {
    
    const menuButton = document.querySelector("[data-menu='button']");
    const menuList = document.querySelector("[data-menu='list']");
    const events = ["touchstart", "click"];

    function openMenu() {
        menuList.classList.add("active");
        menuButton.classList.add("active");
        outsideClick(menuList, events, () => {
            menuList.classList.remove("active");
            menuButton.classList.remove("active");
        });
    }

    if (menuButton) {
     events.forEach((evento) => menuButton.addEventListener(evento, openMenu));
}

}
