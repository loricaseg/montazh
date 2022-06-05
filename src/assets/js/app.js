import * as mainFunc from "./modules/func.js";

mainFunc.isWebp();

jQuery("document").ready(function ($) {

	var nav = $('menu');

	$(window).scroll(function () {
		if ($(this).scrollTop() > 100) {
			nav.addClass("menu-scroll");
		} else {
			nav.removeClass("menu-scroll ");
		}
	});

});


// Slider 1
const swiper1 = new Swiper('.swiper-container-header', {
	// Default parameters
	slidesPerView: 1,
	spaceBetween: 0,
	autoplay: true,
	autoplay: {
		delay: 5000,
	},
	navigation: {
		nextEl: '.header-button-next',
		prevEl: '.header-button-prev',
	},
	pagination: {
		el: '.header__pagination',
		type: 'fraction',
	},
})

// Slider 2
const swiper2 = new Swiper('.tabs__container__item', {
	// Default parameters
	slidesPerView: 3,
	spaceBetween: 25,
	navigation: {
		nextEl: '.tabs-button-next',
		prevEl: '.tabs-button-prev',
	},
	pagination: {
		el: '.tabs__pagination',
		type: 'bullets',
	},
	breakpoints: {

		200: {
			slidesPerView: 1.1,
			spaceBetween: 15,

		},

		500: {
			slidesPerView: 1.4,
			spaceBetween: 25,

		},

		780: {
			slidesPerView: 2,
			spaceBetween: 25,

		},
		981: {
			slidesPerView: 3,
			spaceBetween: 25,

		}
	}
})

// Slider 3
const swiper3 = new Swiper('.swiper-container-rev1', {
	// Default parameters
	slidesPerView: 2.4,
	spaceBetween: 15,
	centeredSlides: true,
	navigation: {
		nextEl: '.reviews-button-next',
		prevEl: '.reviews-button-prev',
	},
	pagination: {
		el: '.reviews__pagination',
		type: 'bullets',
	},
	breakpoints: {
		200: {
			slidesPerView: 1.2,
			spaceBetween: 10,
			centeredSlides: false,
		},

		500: {
			slidesPerView: 1.4,
			spaceBetween: 25,
			centeredSlides: false,
		},

		780: {
			slidesPerView: 2.1,
			spaceBetween: 25,
			centeredSlides: false,
		},
		981: {
			slidesPerView: 2.4,
			spaceBetween: 25,
			centeredSlides: true,
		}
	}
})

// Slider 4
const swiper4 = new Swiper('.swiper-container-projects', {
	// Default parameters
	slidesPerView: 3.5,
	spaceBetween: 25,
	navigation: {
		nextEl: '.reviews-button-next',
		prevEl: '.reviews-button-prev',
	},
	breakpoints: {
		200: {
			slidesPerView: 1.2,
			spaceBetween: 10,
			centeredSlides: false,
		},

		500: {
			slidesPerView: 1.7,
			spaceBetween: 25,
			centeredSlides: false,
		},

		780: {
			slidesPerView: 2.1,
			spaceBetween: 25,
			centeredSlides: false,
		},
		981: {
			slidesPerView: 3.1,
			spaceBetween: 25,
			centeredSlides: false,
		},
		1380: {
			slidesPerView: 3.5,
			spaceBetween: 25,
			centeredSlides: false,
		}
	}
})

// Slider 5
const swiper5 = new Swiper('.swiper-container-photo', {
	// Default parameters
	slidesPerView: 4,
	spaceBetween: 25,
	direction: 'vertical',
	navigation: {
		nextEl: '.photos__nav__next',
		prevEl: '.photos__nav__prev',
	},
	breakpoints: {
		200: {
			slidesPerView: 4.5,
			spaceBetween: 10,
			centeredSlides: false,
		},

		500: {
			slidesPerView: 4.5,
			spaceBetween: 10,
			centeredSlides: false,
		},

		780: {
			slidesPerView: 4.5,
			spaceBetween: 15,
			centeredSlides: false,
		},
		981: {
			slidesPerView: 4,
			spaceBetween: 25,
			centeredSlides: false,
		}
	}
})

// Slider 6
const swiper6 = new Swiper('.swiper-container-rev2', {
	// Default parameters
	slidesPerView: 2.4,
	spaceBetween: 15,
	centeredSlides: true,
	navigation: {
		nextEl: '.reviews-button-next',
		prevEl: '.reviews-button-prev',
	},
	breakpoints: {
		200: {
			slidesPerView: 1.2,
			spaceBetween: 10,
			centeredSlides: false,
		},

		500: {
			slidesPerView: 1.4,
			spaceBetween: 25,
			centeredSlides: false,
		},

		780: {
			slidesPerView: 2.1,
			spaceBetween: 25,
			centeredSlides: false,
		},
		981: {
			slidesPerView: 2.1,
			spaceBetween: 25,
			centeredSlides: true,
		},
		1380: {
			slidesPerView: 2.4,
			spaceBetween: 25,
			centeredSlides: true,
		}
	}
})

// Tabs
$('.tabs__buttons__item').click(function (e) {
	e.preventDefault();

	$('.tabs__container__item').removeClass('tabs__container__item--active');
	$('.tabs__buttons__item').removeClass('tabs__buttons__item--active');

	$(this).addClass('tabs__buttons__item--active');
	$($(this).attr('href')).addClass('tabs__container__item--active');
})

// Menu
$('.menu__trigger').click(function () {
	$('.hidden-menu').addClass('hidden-menu--active')
})

$('.menu-close').click(function () {
	$('.hidden-menu').removeClass('hidden-menu--active')
})