export default function initNavigationToTab() {

    const tabAnimals = document.querySelectorAll("[data-tab='tabmenu'] li");
    const tabDescription = document.querySelectorAll('[data-tab="description"] section');

    function activeTab(index) {
        tabDescription.forEach((section) => {
            section.classList.remove("active");
        })
        const direction = tabDescription[index].dataset.anime;
        tabDescription[index].classList.add("active", direction);
    }

    if(tabAnimals.length && tabDescription.length) {
        tabDescription[0].classList.add("active");
        tabAnimals.forEach((item, index) => {
            item.addEventListener("click", () => {
                activeTab(index);
            });
        });

    }

}