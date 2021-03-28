import debounce from './debounce.js';

export default class ScrollAnima {
    constructor(sections) {
        this.sections = document.querySelectorAll(sections);
        this.partWindow = window.innerHeight * 0.6;

        this.classActive = "active";

        this.checkDistance = debounce(this.checkDistance.bind(this), 50);
    }

    // pega a distancia de cada item em 
    // em relação ao topo do site
    getDistance() {
        this.distance = [...this.sections].map((section) => {
            const offset = section.offsetTop;
            return {
                element: section,
                offset: offset - Math.floor(this.partWindow),
            };
        })
    };

    // verifica a distância de cada objeto
    // em relação ao sroll do site
    checkDistance() {
        this.distance.forEach((item) => {
            if(window.pageYOffset > item.offset) {
                item.element.classList.add(this.classActive);
            }
             else if(item.element.classList.contains(this.classActive)) {
                item.element.classList.remove(this.classActive);
             }
            
        })
    }

    init() {
        if (this.sections.length) {
            this.getDistance();
            this.checkDistance();
            window.addEventListener("scroll", this.checkDistance);
        }
        return this;
    }
    
    // remove o event Scroll
    stop() {
        window.removeEventListener("scroll", this.checkDistance);
    }
}

