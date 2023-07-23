document.addEventListener('DOMContentLoaded', function () {

	const arrows = document.querySelectorAll('.arrow-bg');
	const openClass = 'open';

	function addArrowOpenClass(arrow, openclass) {
		arrow.classList.add(openclass);
	}
	function removeArrowOpenClass(arrow, openclass) {
		arrow.classList.remove(openclass);
	}
	function addArrowsOpenClassOnScreen(arrows, openclass) {
		arrows.forEach(arrow => {
			let windowHeight = document.body.offsetHeight;
			let arrowHeight = arrow.getBoundingClientRect().height;
			let arrowPositionOfTopWindow = arrow.getBoundingClientRect().top;
			let heightOfAvailableScreenArea = windowHeight - arrowHeight + 5;
			let isArrowLocatedOnScreen = (arrowPositionOfTopWindow > 0) && (arrowPositionOfTopWindow < heightOfAvailableScreenArea) || (arrowHeight >= windowHeight);
			isArrowLocatedOnScreen ? addArrowOpenClass(arrow, openclass) : removeArrowOpenClass(arrow, openclass);
		});		
	}
	function scrollHandler(e) {
		addArrowsOpenClassOnScreen(arrows, openClass);
	}
	
	document.addEventListener('scroll', scrollHandler);

});