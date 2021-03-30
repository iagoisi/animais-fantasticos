export default class Funcionamento {
    constructor(dataWeek, activeClass) {
         this.funcionamento = document.querySelector(dataWeek);
         this.activeClass = activeClass;
        
    }     

    dataFuncionamento() {
        this.daysWeek = this.funcionamento.dataset.week.split(",").map(Number);
        this.hoursDay = this.funcionamento.dataset.hours.split(",").map(Number);
    }

    dataNow() {
        this.dateNow = new Date();
        this.dayNow = this.dateNow.getDay();
        this.hoursNow = this.dateNow.getUTCHours() -3;
    }

    openDay() {
        const weekOpen = this.daysWeek.indexOf(this.dayNow) !== -1;
        const openHour = (this.hoursNow >= this.hoursDay[0] && this.hoursNow < this.hoursDay[1]);
        return weekOpen && openHour;
    }


    activeOpen() {
        if (this.openDay())
        this.funcionamento.classList.add(this.activeClass);

    }

    init() {
        if (this.funcionamento) {
            this.dataFuncionamento();
            this.dataNow();
            this.openDay();
        }
        return this;
    }
}
