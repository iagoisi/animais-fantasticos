import outsideClick from "./ouside-click.js"

export default class MenuMobile {
    constructor(menuButton, menuList, events) {
        this.menuButton = document.querySelector(menuButton);
        this.menuList = document.querySelector(menuList);
        this.activeClass = "active";

        // define o touchstar e click como padrão do 
        // caso a pessoa não o defina
        if(events === undefined) this.events = ["touchstart", "click"];
        else this.events = events;
        
        this.openMenu = this.openMenu.bind(this);

    }


    openMenu() {
        this.menuList.classList.add(this.activeClass);
        this.menuButton.classList.add(this.activeClass);
        outsideClick(this.menuList, this.events, () => {
            this.menuList.classList.remove(this.activeClass);
            this.menuButton.classList.remove(this.activeClass);
        });
    }

    addMenuMobileEvents() {
     this.events.forEach((event) => this.menuButton.addEventListener(event, this.openMenu));

    }

    init() {
    if (this.menuButton && this.menuList) {
      this.addMenuMobileEvents();
    }
    return this;
  }

}
