export default class NavigationToTab {
    constructor(menu, content) {
        this.tabAnimals = document.querySelectorAll(menu);
        this.tabDescription = document.querySelectorAll(content);
        this.activeClass = 'active';

    }

    
// ativa a classe de acordo com o index da mesma
    activeTab(index) {
        this.tabDescription.forEach((section) => {
            section.classList.remove(this.activeClass);
        });
        const direction = this.tabDescription[index].dataset.anime;
        this.tabDescription[index].classList.add(this.activeClass, direction);
    }



    // adciona os eventos nas tabs
    addTabNavEvent() {
        this.tabAnimals.forEach((item, index) => {
            item.addEventListener("click", () =>  this.activeTab(index));
        });

    }

    init() {
        if (this.tabAnimals.length && this.tabDescription.length) {
            // ativar primeiro item
            this.activeTab(0);
            this.addTabNavEvent();
        } 
        return this;
    }

}