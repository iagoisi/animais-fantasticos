export default class ScrollAnima {
    constructor(sections) {
        this.sections = document.querySelectorAll(sections);
        this.partWindow = window.innerHeight * 0.6;

        this.classActive = "active";

        this.animaScroll = this.animaScroll.bind(this);
    }

    
    animaScroll() {
        console.log(this.sections);
        this.sections.forEach((section) => {
            const sectionTop = section.getBoundingClientRect().top;
            const isSectionVisible = (sectionTop - this.partWindow) < 0;
            if(isSectionVisible){
                section.classList.add(this.classActive);
            }
             else if(section.classList.contains(this.classActive)) {
                section.classList.remove(this.classActive);
             }
        });
    }

    init() {
        this.animaScroll();
        window.addEventListener("scroll", this.animaScroll);
    }
}

