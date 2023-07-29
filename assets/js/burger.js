document.addEventListener('DOMContentLoaded', function () {

	const burgerDisplayClass = 'mobile-menu-open';
	const headerMenuSelector = '.header__menu';
	const burgerButtonSelector = '.header__menu-burger';
	const burgerButton = document.querySelector('.header__menu-burger');
	const headerMenu = document.querySelector('.header__menu');

	let getTargetParent = (target, parent) => target.closest(parent);
	
	function toggleElementClass(element, viewclass) {
		element.classList.toggle(viewclass);
	}
	function toggleDisplayElement(element) {
		toggleElementClass(element, burgerDisplayClass);
	}
	function toggleRotationItem(item) {
		toggleElementClass(item, burgerDisplayClass);
	}
	function isEventOnItem(event, item) {
		return event.target == item || getTargetParent(event.target, burgerButtonSelector) == item || !getTargetParent(event.target, headerMenuSelector) && headerMenu.classList.contains(burgerDisplayClass);
	}

	function toggleDisplayMobileMenuByClickOnEventItem(menu, event, item) {
		if (isEventOnItem(event, item)) {
			toggleDisplayElement(menu);
			toggleRotationItem(item);
		};
	}

	function clickHandler(event) {
		toggleDisplayMobileMenuByClickOnEventItem(headerMenu, event, burgerButton);
	}
	document.addEventListener('click', clickHandler);
});