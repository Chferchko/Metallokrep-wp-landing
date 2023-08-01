// Slider-certificate options
var swiper = new Swiper(".products__example-slider", {

	pagination: {  // пагинация
		el: '.swiper-pagination',
		type: 'bullets', // вид пагинации, значения: 'bullets' (по-умолчанию) - точки; 'fraction' - 1/N; 'progressbar' - полоска прогресса
		clickable: true, // кликабельные буллеты
	},

	simulateTouch: true, // вкл. свайп на ПК

	slideToClickedSlide: true, // переключени при клике на слайд

	keyboard: { // управление клавиатурой
		enabled: true, // включить, выключить
		onlyInViewport: true, // только когда слайдер в пределах вьюпорта (видимо частий страницы)
	},

	mousewheel: { // Управление колесом мыши			
		sensitivity: 1, // Чувствительность колеса мыши			
		eventsTarget: ".products__example-slider", // Класс объекта на котором будет срабатывать прокрутка мышью
	},

	/* breakpoints: { // Брейк поинты (адаптив)
		320: { // сработает для ширины - больше, чем указанное значение
			slidesPerView: 1,
		},
		480: {
			slidesPerView: 2,
		},
		992: {
			slidesPerView: 3,
		}
	}, */

	/* width: 500, */ // ширина одного слайда

	slidesPerView: 1, // Количество слайдов для показа

	spaceBetween: 30, // Отступ между слайдами

	slidesPerGroup: 1, // Количество пролистываемых слайдов

	loop: false, // бесконечность

	loopedSlides: 1, // количество дублирующих слайдов

	speed: 800, // скорость смены слайда

	grabCursor: true, // курсор "хватка"

});

//Slider construction
{/* <div class="swiper">
			<div class="swiper-wrapper">
				<div class="swiper-slide"></div>
				<div class="swiper-slide"></div>
				<div class="swiper-slide"></div>
			</div>
			
			<div class="swiper-pagination"></div>

			<div class="swiper-button-prev"></div>
			<div class="swiper-button-next"></div>

			<div class="swiper-scrollbar"></div>
		</div> */}