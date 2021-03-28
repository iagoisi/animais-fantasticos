import outsideClick from "./ouside-click.js"

export default class DropdownMenu {
    constructor(dropdownMenus, events) {
        this.dropdownMenu = document.querySelectorAll(dropdownMenus);

        // define o touchstar e click como padrão do 
        // caso a pessoa não o defina
        if(events === undefined) this.events = ["touchstart", "click"];
        else this.events = events;

        this.activeClass = "active";
        this.activeDropdownMenu = this.activeDropdownMenu.bind(this);
    }
    
    // ativa o dropdownMenu e adiciona a função
    // que observa o clickout
    activeDropdownMenu(event) {
        event.preventDefault();
        const element = event.currentTarget;
        element.classList.add(this.activeClass);
        outsideClick(element, this.events, () => {
            element.classList.remove(this.activeClass);
        });
    }

    // adiciona o eventos aos dropdownMenu
    addDropdownMenuEvent() {
        this.dropdownMenu.forEach((menu) => {
            [this.events].forEach(userEvent => {
                menu.addEventListener(userEvent, this.activeDropdownMenu);
            });
        });
    }
    
    init() {
        if(this.dropdownMenu.length){
        this.addDropdownMenuEvent();
        } 
        return this;
    }

    

}

