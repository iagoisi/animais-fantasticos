/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/modules/accordion-list.js":
/*!**************************************!*\
  !*** ./js/modules/accordion-list.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initAccordion)\n/* harmony export */ });\nfunction initAccordion() {\n  const accordionList = document.querySelectorAll(\"[data-anime='accordion'] dt\");\n  const activeClass = \"active\";\n\n  function activeAccordion() {\n    this.classList.toggle(activeClass);\n    this.nextElementSibling.classList.toggle(activeClass);\n  }\n  if (accordionList.length) {\n    accordionList[0].classList.add(activeClass);\n    accordionList[0].nextElementSibling.classList.add(activeClass);\n\n    accordionList.forEach((item) => {\n      item.addEventListener(\"click\", activeAccordion)\n    });\n  }\n}\n\n\n//# sourceURL=webpack://animals-fetch/./js/modules/accordion-list.js?");

/***/ }),

/***/ "./js/modules/anima-numbers.js":
/*!*************************************!*\
  !*** ./js/modules/anima-numbers.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initAnimaNumbers)\n/* harmony export */ });\nfunction initAnimaNumbers() {\r\n\r\n    function animaNumebers() {\r\n        const numbers = document.querySelectorAll(\"[data-number]\");\r\n    \r\n        numbers.forEach(number => {\r\n            const total = +number.innerText;\r\n            const increment = Math.floor(total / 100);\r\n    \r\n            let start = 0;\r\n            const timer = setInterval(() => {\r\n                start += increment;\r\n                number.innerText = start;\r\n    \r\n                if (start > total) {\r\n                    number.innerText = total;\r\n                    clearInterval(timer)\r\n                }\r\n            }, 25 * Math.random());\r\n        })\r\n    \r\n    }\r\n    \r\n    let observer;\r\n    function handleMutation(mutation) {\r\n        if (mutation[0].target.classList.contains(\"active\")) {\r\n            observer.disconnect();\r\n            animaNumebers()\r\n        }\r\n    }\r\n    \r\n    const observerTraget = document.querySelector(\".numbers\")\r\n    observer = new MutationObserver(handleMutation);\r\n    \r\n    \r\n    observer.observe(observerTraget, {attributes: true});\r\n    \r\n}\r\n\n\n//# sourceURL=webpack://animals-fetch/./js/modules/anima-numbers.js?");

/***/ }),

/***/ "./js/modules/animation-to-scroll.js":
/*!*******************************************!*\
  !*** ./js/modules/animation-to-scroll.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initAnimationScroll)\n/* harmony export */ });\nfunction initAnimationScroll() {\r\n    const sections = document.querySelectorAll(\"[data-anime='scroll']\");\r\n    const partWindow = window.innerHeight * 0.6;\r\n    \r\n    function animaScroll() {\r\n        sections.forEach((section) => {\r\n            const sectionTop = section.getBoundingClientRect().top;\r\n            const isSectionVisible = (sectionTop - partWindow) < 0;\r\n            if(isSectionVisible){\r\n                section.classList.add(\"active\");\r\n            }\r\n             else if(section.classList.contains(\"active\")) {\r\n                section.classList.remove(\"active\");\r\n             }\r\n        });\r\n    }\r\n\r\n    if(sections.length){\r\n    animaScroll();\r\n    window.addEventListener(\"scroll\", animaScroll);\r\n    }\r\n    }\r\n    \r\n    \r\n\n\n//# sourceURL=webpack://animals-fetch/./js/modules/animation-to-scroll.js?");

/***/ }),

/***/ "./js/modules/dropdown-menu.js":
/*!*************************************!*\
  !*** ./js/modules/dropdown-menu.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initDropdownMenu)\n/* harmony export */ });\n/* harmony import */ var _ouside_click_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ouside-click.js */ \"./js/modules/ouside-click.js\");\n\r\n\r\nfunction initDropdownMenu() {\r\n    \r\n    const dropdownMenu = document.querySelectorAll(\"[data-dropdown]\");\r\n\r\n    function handleClick(event) {\r\n        event.preventDefault();\r\n        this.classList.add(\"active\");\r\n        (0,_ouside_click_js__WEBPACK_IMPORTED_MODULE_0__.default)(this, [\"touchstart\", \"click\"], () => {\r\n            console.log(this);\r\n            this.classList.remove(\"active\");\r\n            \r\n        });\r\n    }\r\n    \r\n    dropdownMenu.forEach((menu) => {\r\n        [\"touchstart\", \"click\"].forEach(userEvent => {\r\n            menu.addEventListener(userEvent, handleClick);\r\n        })\r\n    })\r\n\r\n    \r\n\r\n}\r\n\r\n\n\n//# sourceURL=webpack://animals-fetch/./js/modules/dropdown-menu.js?");

/***/ }),

/***/ "./js/modules/fetch-animals.js":
/*!*************************************!*\
  !*** ./js/modules/fetch-animals.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initFetchAnimals)\n/* harmony export */ });\n/* harmony import */ var _anima_numbers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./anima-numbers.js */ \"./js/modules/anima-numbers.js\");\n\r\n\r\n\r\nfunction initFetchAnimals() {\r\n\r\n    async function fetchAnimals(url) {\r\n        const aniamlsResponse = await fetch(url);\r\n        const animalsJSON = await aniamlsResponse.json();\r\n        const numbersGrid = document.querySelector(\".numbers-grid\")\r\n    \r\n        function createAnimal(animal) {\r\n            const div = document.createElement(\"div\");\r\n            div.classList.add(\"number-animal\");\r\n        \r\n            div.innerHTML = `<h3>${animal.specie}</h3><span data-number>${animal.total}</span>`;\r\n        \r\n            return div;\r\n        }\r\n        \r\n        animalsJSON.forEach(animal => {\r\n            const divAnimal = createAnimal(animal);\r\n            numbersGrid.appendChild(divAnimal);\r\n        });\r\n        (0,_anima_numbers_js__WEBPACK_IMPORTED_MODULE_0__.default)();\r\n    \r\n    }\r\n    \r\n    \r\n    \r\n    \r\n    fetchAnimals(\"./animals-api.json\");\r\n\r\n}\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://animals-fetch/./js/modules/fetch-animals.js?");

/***/ }),

/***/ "./js/modules/fetch-bitcoin.js":
/*!*************************************!*\
  !*** ./js/modules/fetch-bitcoin.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initFetchBitcoin)\n/* harmony export */ });\nfunction initFetchBitcoin() {\r\n\r\n}\r\n\r\nasync function fetchBitcoin(url) {\r\n    try{\r\n        const dataResponse = await fetch(url)\r\n        const dataJSON = await dataResponse.json();\r\n\r\n        const btcPrice = document.querySelector(\".btc-price\");\r\n        btcPrice.innerText = (1000 / dataJSON.BRL.sell).toFixed(4);\r\n    } catch(erro) {\r\n        console.log(erro);\r\n    }\r\n};\r\n\r\nfetchBitcoin(\"https://blockchain.info/ticker\");\n\n//# sourceURL=webpack://animals-fetch/./js/modules/fetch-bitcoin.js?");

/***/ }),

/***/ "./js/modules/funcionamento.js":
/*!*************************************!*\
  !*** ./js/modules/funcionamento.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initOpeningHours)\n/* harmony export */ });\nfunction initOpeningHours() {     \r\n    const openingHours = document.querySelector(\"[data-week]\");\r\n    const daysWeek = openingHours.dataset.week.split(\",\").map(Number);\r\n    const hoursDay = openingHours.dataset.hours.split(\",\").map(Number);\r\n\r\n    const dataNow = new Date();\r\n    const dayNow = dataNow.getDay();\r\n    const hoursNow = dataNow.getHours();\r\n\r\n\r\n\r\n    const openDay = daysWeek.indexOf(dayNow) !== -1;\r\n    const openHour = (hoursNow >= hoursDay[0] && hoursNow < hoursDay[1]);\r\n\r\n    if(openDay && openHour) {\r\n        openingHours.classList.add(\"open\");\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://animals-fetch/./js/modules/funcionamento.js?");

/***/ }),

/***/ "./js/modules/menu-mobile.js":
/*!***********************************!*\
  !*** ./js/modules/menu-mobile.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initMenuMobile)\n/* harmony export */ });\n/* harmony import */ var _ouside_click_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ouside-click.js */ \"./js/modules/ouside-click.js\");\n\r\n\r\nfunction initMenuMobile() {\r\n    \r\n    const menuButton = document.querySelector(\"[data-menu='button']\");\r\n    const menuList = document.querySelector(\"[data-menu='list']\");\r\n    const events = [\"touchstart\", \"click\"];\r\n\r\n    function openMenu() {\r\n        menuList.classList.add(\"active\");\r\n        menuButton.classList.add(\"active\");\r\n        (0,_ouside_click_js__WEBPACK_IMPORTED_MODULE_0__.default)(menuList, events, () => {\r\n            menuList.classList.remove(\"active\");\r\n            menuButton.classList.remove(\"active\");\r\n        });\r\n    }\r\n\r\n    if (menuButton) {\r\n     events.forEach((evento) => menuButton.addEventListener(evento, openMenu));\r\n}\r\n\r\n}\r\n\n\n//# sourceURL=webpack://animals-fetch/./js/modules/menu-mobile.js?");

/***/ }),

/***/ "./js/modules/modal.js":
/*!*****************************!*\
  !*** ./js/modules/modal.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initModal)\n/* harmony export */ });\nfunction initModal() {\r\n\r\nconst buttonOpen = document.querySelector(\"[data-modal='open']\");\r\nconst buttonClose = document.querySelector(\"[data-modal='close']\");\r\nconst containerModal = document.querySelector(\"[data-modal='container']\");\r\nconst classe = \"ativo\"\r\n\r\nfunction toggleModal(event) {\r\n    event.preventDefault();\r\n    containerModal.classList.toggle(classe);\r\n}\r\n\r\nfunction clickOutModal(event) {\r\n    if(event.target === this)\r\n        toggleModal(event);\r\n}\r\n\r\nif(buttonOpen && buttonClose && containerModal) {\r\n\r\n\r\n\r\n\r\n\r\n    buttonOpen.addEventListener(\"click\", toggleModal);\r\n    buttonClose.addEventListener(\"click\", toggleModal);\r\n    containerModal.addEventListener(\"click\", clickOutModal);\r\n}\r\n}\r\n\r\n\n\n//# sourceURL=webpack://animals-fetch/./js/modules/modal.js?");

/***/ }),

/***/ "./js/modules/ouside-click.js":
/*!************************************!*\
  !*** ./js/modules/ouside-click.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ outsideClick)\n/* harmony export */ });\nfunction outsideClick(element, events, callback) {\r\n    const html = document.documentElement;\r\n    const outside = \"data-outside\";\r\n\r\n    function handleOutsideClick(event) {     \r\n        if(!element.contains(event.target)) {\r\n            element.removeAttribute(outside);\r\n\r\n            events.forEach(userEvent => {\r\n                html.removeEventListener(userEvent, handleOutsideClick);\r\n            })\r\n                \r\n            callback();\r\n    }\r\n    } \r\n\r\n    if(!element.hasAttribute(outside)){\r\n        events.forEach(userEvent => {\r\n            setTimeout(() => html.addEventListener(userEvent, handleOutsideClick));    \r\n        })\r\n        \r\n        element.setAttribute(outside, \"\");\r\n    }\r\n      \r\n}\r\n\n\n//# sourceURL=webpack://animals-fetch/./js/modules/ouside-click.js?");

/***/ }),

/***/ "./js/modules/scroll-suave.js":
/*!************************************!*\
  !*** ./js/modules/scroll-suave.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initScrollSuave)\n/* harmony export */ });\nfunction initScrollSuave() {\r\n    const internalLinks = document.querySelectorAll(\"[data-menu='suave'] a[href^='#']\");\r\n\r\n    function scrollToSection(event) {\r\n        event.preventDefault();\r\n        const href = event.currentTarget.getAttribute(\"href\");\r\n        const section = document.querySelector(href);\r\n        section.scrollIntoView({\r\n            behavior: \"smooth\",\r\n            block: \"start\",\r\n        });            \r\n        // Forma alternativa\r\n            // const top = section.offsetTop;\r\n            // window.scrollTo({\r\n            //     top: top,\r\n            //     behavior: \"smooth\",\r\n            // });\r\n        }   \r\n        internalLinks.forEach((link) => {\r\n            link.addEventListener(\"click\", scrollToSection);\r\n        });\r\n}\r\n\n\n//# sourceURL=webpack://animals-fetch/./js/modules/scroll-suave.js?");

/***/ }),

/***/ "./js/modules/tab-navigation.js":
/*!**************************************!*\
  !*** ./js/modules/tab-navigation.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initNavigationToTab)\n/* harmony export */ });\nfunction initNavigationToTab() {\r\n\r\n    const tabAnimals = document.querySelectorAll(\"[data-tab='tabmenu'] li\");\r\n    const tabDescription = document.querySelectorAll('[data-tab=\"description\"] section');\r\n\r\n    function activeTab(index) {\r\n        tabDescription.forEach((section) => {\r\n            section.classList.remove(\"active\");\r\n        })\r\n        const direction = tabDescription[index].dataset.anime;\r\n        tabDescription[index].classList.add(\"active\", direction);\r\n    }\r\n\r\n    if(tabAnimals.length && tabDescription.length) {\r\n        tabDescription[0].classList.add(\"active\");\r\n        tabAnimals.forEach((item, index) => {\r\n            item.addEventListener(\"click\", () => {\r\n                activeTab(index);\r\n            });\r\n        });\r\n\r\n    }\r\n\r\n}\n\n//# sourceURL=webpack://animals-fetch/./js/modules/tab-navigation.js?");

/***/ }),

/***/ "./js/modules/tooltip.js":
/*!*******************************!*\
  !*** ./js/modules/tooltip.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initTooltip)\n/* harmony export */ });\nfunction initTooltip() {\r\n    const tooltips = document.querySelectorAll(\"[data-tooltip]\");\r\n    const onMouseMove = {\r\n        handleEvent(event) {\r\n        this.tooltipBox.style.top = `${event.pageY + 20}px`;\r\n        this.tooltipBox.style.left = `${event.pageX + 20}px`;\r\n        }\r\n    }\r\n\r\n    const onMouseLeave = {\r\n        handleEvent() {\r\n            this.tooltipBox.remove();\r\n            this.element.removeEventListener(\"mouseleave\", onMouseLeave);\r\n            this.element.removeEventListener(\"mousemove\", onMouseMove);\r\n        }\r\n    }\r\n    \r\n    function createTooltipBox(element) {\r\n        const tooltipBox = document.createElement(\"div\");\r\n        const text = element.getAttribute(\"aria-label\");\r\n        tooltipBox.classList.add(\"tooltip\")\r\n        tooltipBox.innerText = text;\r\n        document.body.appendChild(tooltipBox);\r\n        return tooltipBox;\r\n    }\r\n\r\n    function onMouseOver() {\r\n        const tooltipBox = createTooltipBox(this);\r\n        \r\n        onMouseLeave.tooltipBox = tooltipBox;\r\n        onMouseLeave.element = this;\r\n        this.addEventListener(\"mouseleave\", onMouseLeave);\r\n    \r\n        onMouseMove.tooltipBox = tooltipBox;\r\n        this.addEventListener(\"mousemove\", onMouseMove);\r\n    \r\n    }\r\n\r\ntooltips.forEach((item) => {\r\n    item.addEventListener(\"mouseover\", onMouseOver);\r\n})\r\n\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://animals-fetch/./js/modules/tooltip.js?");

/***/ }),

/***/ "./js/script.js":
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_scroll_suave_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/scroll-suave.js */ \"./js/modules/scroll-suave.js\");\n/* harmony import */ var _modules_animation_to_scroll_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/animation-to-scroll.js */ \"./js/modules/animation-to-scroll.js\");\n/* harmony import */ var _modules_accordion_list_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/accordion-list.js */ \"./js/modules/accordion-list.js\");\n/* harmony import */ var _modules_tab_navigation_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/tab-navigation.js */ \"./js/modules/tab-navigation.js\");\n/* harmony import */ var _modules_modal_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/modal.js */ \"./js/modules/modal.js\");\n/* harmony import */ var _modules_tooltip_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/tooltip.js */ \"./js/modules/tooltip.js\");\n/* harmony import */ var _modules_dropdown_menu_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/dropdown-menu.js */ \"./js/modules/dropdown-menu.js\");\n/* harmony import */ var _modules_menu_mobile_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/menu-mobile.js */ \"./js/modules/menu-mobile.js\");\n/* harmony import */ var _modules_funcionamento_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/funcionamento.js */ \"./js/modules/funcionamento.js\");\n/* harmony import */ var _modules_fetch_animals_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/fetch-animals.js */ \"./js/modules/fetch-animals.js\");\n/* harmony import */ var _modules_fetch_bitcoin_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/fetch-bitcoin.js */ \"./js/modules/fetch-bitcoin.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_modules_scroll_suave_js__WEBPACK_IMPORTED_MODULE_0__.default)();\r\n(0,_modules_animation_to_scroll_js__WEBPACK_IMPORTED_MODULE_1__.default)();\r\n(0,_modules_accordion_list_js__WEBPACK_IMPORTED_MODULE_2__.default)();\r\n(0,_modules_tab_navigation_js__WEBPACK_IMPORTED_MODULE_3__.default)();\r\n(0,_modules_modal_js__WEBPACK_IMPORTED_MODULE_4__.default)();\r\n(0,_modules_tooltip_js__WEBPACK_IMPORTED_MODULE_5__.default)();\r\n(0,_modules_dropdown_menu_js__WEBPACK_IMPORTED_MODULE_6__.default)();\r\n(0,_modules_menu_mobile_js__WEBPACK_IMPORTED_MODULE_7__.default)();\r\n(0,_modules_funcionamento_js__WEBPACK_IMPORTED_MODULE_8__.default)();\r\n(0,_modules_fetch_animals_js__WEBPACK_IMPORTED_MODULE_9__.default)();\r\n(0,_modules_fetch_bitcoin_js__WEBPACK_IMPORTED_MODULE_10__.default)();\r\n\n\n//# sourceURL=webpack://animals-fetch/./js/script.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./js/script.js");
/******/ 	
/******/ })()
;