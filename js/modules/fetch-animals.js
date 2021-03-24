import AnimaNumbers from "./anima-numbers.js";

export default function fetchAnimals(url, target) {

    // cria a div contendo informação 
    // com total de animais
    function createAnimal(animal) {
        const div = document.createElement('div');
        div.classList.add('number-animals');
        div.innerHTML = `<h3>${animal.specie}</h3><span data-number>${animal.total}</span>`;
        return div;
        
      }

    // preenche cada animal no DOM
    const numbersGrid = document.querySelector(target);
    function receptAnimal(animal) {
        const divAnimal = createAnimal(animal);
        numbersGrid.appendChild(divAnimal);
    }

    // anima os numbers de cada animal
    function animaAnimalsNumbers() {
        const animaNumbers = new AnimaNumbers("[data-number]", ".numbers", "active");
            animaNumbers.init();

    }

    // puxa os animais através de um arquivo json
    // e cria cada animal utilizando createAnimal
    async function createAnimals() {
        try {

            // fetch espera resposta
            // transforma a respota em json
            const aniamlsResponse = await fetch(url);
            const animalsJSON = await aniamlsResponse.json();


            // após a transformação em json
            // ativa as funções para preencher e animar os números
            animalsJSON.forEach((itemAnimal) => {
                receptAnimal(itemAnimal); 
                animaAnimalsNumbers();
            });
            
        } catch (erro) {
            console.log(erro);
        }
    
    }

    return createAnimals();    
    

}



