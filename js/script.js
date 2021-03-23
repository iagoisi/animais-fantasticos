import ScrollSuave from "./modules/scroll-suave.js"
import Accordion from "./modules/accordion-list.js"
import initNavigationToTab from "./modules/tab-navigation.js"
import initModal from "./modules/modal.js"
import initTooltip from "./modules/tooltip.js"
import initDropdownMenu from "./modules/dropdown-menu.js"
import initMenuMobile from "./modules/menu-mobile.js"
import initOpeningHours from "./modules/funcionamento.js"
import initFetchAnimals from "./modules/fetch-animals.js"
import initFetchBitcoin from "./modules/fetch-bitcoin.js"
import initAnimationScroll from "./modules/animation-to-scroll.js"


const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
scrollSuave.init();

const accordion = new Accordion("[data-anime='accordion'] dt");
accordion.init()


initAnimationScroll();
initNavigationToTab();
initModal();
initTooltip();
initDropdownMenu();
initMenuMobile();
initOpeningHours();
initFetchAnimals();
initFetchBitcoin();
