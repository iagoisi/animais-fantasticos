export default function initOpeningHours() {     
    const openingHours = document.querySelector("[data-week]");
    const daysWeek = openingHours.dataset.week.split(",").map(Number);
    const hoursDay = openingHours.dataset.hours.split(",").map(Number);

    const dataNow = new Date();
    const dayNow = dataNow.getDay();
    const hoursNow = dataNow.getHours();



    const openDay = daysWeek.indexOf(dayNow) !== -1;
    const openHour = (hoursNow >= hoursDay[0] && hoursNow < hoursDay[1]);

    if(openDay && openHour) {
        openingHours.classList.add("open");
    }
}
