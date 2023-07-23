document.addEventListener('DOMContentLoaded', function () {	

	const displayClass = 'visible-popup';
	const lockClass = 'lock';
	const popupCloserSelector = '.order-popup__closer';
	const body = document.body;
	const orderPopup = document.getElementById('order-popup');
	const popupCloser = document.querySelector('.order-popup__closer');
	const popupOpeners = document.querySelectorAll('.popup-opener-button');

	let getPopupOpeners = () => [...popupOpeners];
	let getPopupClosers = () => [popupCloser, body];
	let getPopupActors = () => [...getPopupOpeners(), ...getPopupClosers()];
	let getTargetParent = (target) => target.closest(popupCloserSelector);

	function lockDefaultEventAction(e) {		
		e.preventDefault();
	}
	function togglePopupDisplayClass(popup, displayclass) {
		popup.classList.toggle(displayclass);
	}
	function toggleTagLockClass(tag, lockclass) {
		tag.classList.toggle(lockclass);
	}
	function toggleDisplayPopup(popup) {
		togglePopupDisplayClass(popup, displayClass);
	}
	function toggleLockTag(tag) {
		toggleTagLockClass(tag, lockClass);
	}
	function areElementsContainTargetOrTargetParent (elements, target) {
		return elements.includes(target) || elements.includes(getTargetParent(target));
	}
	
	function isEventOnElements(e, elements) {
		let target = e.target;
		return areElementsContainTargetOrTargetParent(elements, target);
	}
	function toggleDisplayPopupOnClickElementsEvent(popup, elements, e) {
		lockDefaultEventAction(e);
		isEventOnElements(e, elements) ? toggleDisplayPopup(popup) : false;
	}
	function toggleLockTagOnClickElementsEvent(tag, elements, e) {
		isEventOnElements(e, elements) ? toggleLockTag(tag) : false;
	}

	function clickHandler(e) {
		toggleDisplayPopupOnClickElementsEvent(orderPopup, getPopupOpeners(), e);
		toggleDisplayPopupOnClickElementsEvent(orderPopup, getPopupClosers(), e);
		toggleLockTagOnClickElementsEvent(body, getPopupActors(), e);
	}
	document.addEventListener('click', clickHandler);
});

// send-button
// thx-popup__button