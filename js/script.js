import ScrollSuave from "./modules/scroll-suave.js"
import Accordion from "./modules/accordion-list.js"
import NavigationToTab from "./modules/tab-navigation.js"
import Modal from "./modules/modal.js"
import Tooltip from "./modules/tooltip.js"
import DropdownMenu from "./modules/dropdown-menu.js"
import MenuMobile from "./modules/menu-mobile.js"
import Funcionamento from "./modules/funcionamento.js"
import fetchAnimals from "./modules/fetch-animals.js"
import fetchBitcoin from "./modules/fetch-bitcoin.js"
import ScrollAnima from "./modules/scroll-anima.js"


const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
scrollSuave.init();

const accordion = new Accordion("[data-anime='accordion'] dt");
accordion.init()

const navigationToTab = new NavigationToTab("[data-tab='tabmenu'] li", "[data-tab='description'] section");
navigationToTab.init();

const modal = new Modal("[data-modal='open']", "[data-modal='close']", "[data-modal='container']");
modal.init();

const tooltip = new Tooltip("[data-tooltip]");
tooltip.init();

const scrollAnima = new ScrollAnima("[data-anime='scroll']");
scrollAnima.init();

const dropdownMenu = new DropdownMenu("[data-dropdown]");
dropdownMenu.init();

const menuMobile = new MenuMobile("[data-menu='button']", "[data-menu='list']");
menuMobile.init();

const funcionamento = new Funcionamento("[data-week]", "open");
funcionamento.init();



fetchAnimals('./animals-api.json', '.numbers-grid');
fetchBitcoin("https://blockchain.info/ticker", ".btc-price");
