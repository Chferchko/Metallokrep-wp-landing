document.addEventListener('DOMContentLoaded', function () {

	const displayClass = 'visible-popup';
	const lockClass = 'lock';
	const popupCloserSelector = '.order-popup__closer';
	const body = document.body;
	const orderPopup = document.getElementById('order-popup');
	const popupOpeners = document.querySelectorAll('.popup-opener-button');
	const popupSender = document.getElementsByClassName('send-button');
	const popupCloser = document.querySelector('.order-popup__closer');
	const thxPopup = document.querySelector('.thx-popup');
	const thxPopupButton = document.querySelector('.thx-popup__button');

	let getTargetCloserParent = (target) => target.closest(popupCloserSelector);

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
	function isSubPopupOpen(subpopup) {
		return subpopup.classList.contains(displayClass);
	}
	function isPopupClose(popup) {
		return !popup.classList.contains(displayClass);
	}

	function isEventOnElements(event, elements) {
		return elements.includes(event.target) || elements.includes(getTargetCloserParent(event.target));
	}
	function toggleLockTagOnClickElementsEvent(tag, elements, event) {
		isEventOnElements(event, elements) ? toggleLockTag(tag) : false;
	}

	function toggleDisplayPopupOnClickElementsEvent(popup, subpopup, elements, event) {
		event.preventDefault();
		toggleLockTagOnClickElementsEvent(body, elements, event);
		if (isEventOnElements(event, elements) && isPopupClose(popup) && !isSubPopupOpen(subpopup) && ![...popupSender].includes(event.target)) {
			toggleDisplayPopup(popup);
		} else if (isEventOnElements(event, elements) && !isPopupClose(popup) && event.target == body || getTargetCloserParent(event.target)) {
			toggleDisplayPopup(popup);
		} else if (isEventOnElements(event, elements) && !isPopupClose(popup) && event.target !== body) {
			toggleDisplayPopup(popup);
			toggleDisplayPopup(subpopup);
			toggleLockTagOnClickElementsEvent(body, elements, event);
		} else if (isEventOnElements(event, elements) && isSubPopupOpen(subpopup)) {
			toggleDisplayPopup(subpopup);
		} else if (isEventOnElements(event, elements) && [...popupSender].includes(event.target)) {
			toggleDisplayPopup(subpopup);
		} else {
			return false;
		}
	}

	function clickHandler(event) {
		toggleDisplayPopupOnClickElementsEvent(orderPopup, thxPopup, [...popupOpeners, ...popupSender, popupCloser, thxPopupButton, body], event);
	}
	document.addEventListener('click', clickHandler);
});