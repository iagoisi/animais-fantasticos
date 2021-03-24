export default class AnimaNumbers {
  constructor(numbers, observerTarget, observerClass) {
      this.numbers = document.querySelectorAll(numbers);
      this.observerTarget = document.querySelector(observerTarget);
      this.observerClass = observerClass;

      // bind o this do objeto ao callback da mutação
       this.handleMutation = this.handleMutation.bind(this);

  }

  // recebe um elemento do DOM, com número convertido em  String
  // incrementa a partir de zero até o número total
  static incrementNumber(number) {
      const total = +number.innerText;
          const increment = Math.floor(total / 100);
          let start = 0;
          const timer = setInterval(() => {
            start += increment;
            number.innerText = start;
          if (start > total) {
            number.innerText = total;
            clearInterval(timer)
          }
      }, 25 * Math.random());
  }

  // ativa incrementar número para cada 
  // número selecionado do DOM
  animaNumbers() {
      this.numbers.forEach(number => this.constructor.incrementNumber(number));
  }
  
  // função que ocorre sempre que uma multação ocorrer
  handleMutation(mutation) {
    if (mutation[0].target.classList.contains(this.observerClass)) {
        this.observer.disconnect();
        this.animaNumbers();
    }
}
  
  // adiciona o MutationObserver para verificar 
  // quando a classe active é adiciona ao elemente target
  addMutationObserver() {
      this.observer = new MutationObserver(this.handleMutation);
      this.observer.observe(this.observerTarget, { attributes: true });

  }


  
  init() {
      if (this.numbers.length && this.observerTarget) {
        this.addMutationObserver();
      }
    return this;

  }
}
