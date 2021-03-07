import initAnimaNumbers from "./anima-numbers.js";


export default function initFetchAnimals() {

    async function fetchAnimals(url) {
        const aniamlsResponse = await fetch(url);
        const animalsJSON = await aniamlsResponse.json();
        const numbersGrid = document.querySelector(".numbers-grid")
    
        function createAnimal(animal) {
            const div = document.createElement("div");
            div.classList.add("number-animal");
        
            div.innerHTML = `<h3>${animal.specie}</h3><span data-number>${animal.total}</span>`;
        
            return div;
        }
        
        animalsJSON.forEach(animal => {
            const divAnimal = createAnimal(animal);
            numbersGrid.appendChild(divAnimal);
        });
        initAnimaNumbers();
    
    }
    
    
    
    
    fetchAnimals("./animals-api.json");

}



