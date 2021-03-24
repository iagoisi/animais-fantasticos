import AnimaNumbers from "./anima-numbers.js";

export default function initFetchAnimals() {
    function createAnimal(animal) {
        const div = document.createElement('div');
        div.classList.add('number-animals');
        div.innerHTML = `<h3>${animal.specie}</h3><span data-number>${animal.total}</span>`;
        return div;
        
      }

    async function fetchAnimals(url) {
        try {
            const aniamlsResponse = await fetch(url);

            const animalsJSON = await aniamlsResponse.json();
            const numbersGrid = document.querySelector(".numbers-grid")
            animalsJSON.forEach((animal) => {
                const divAnimal = createAnimal(animal);
                numbersGrid.appendChild(divAnimal);
            });
            const animaNumbers = new AnimaNumbers("[data-number]", ".numbers", "active");
            animaNumbers.init();
            
        } catch (erro) {
            console.log(erro);
        }
    
    }
    
    fetchAnimals("./animals-api.json");



}



