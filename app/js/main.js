$(document).ready(function() {
/*menu*/
	$('.t-menu__button').on('click', function() {
		$('.t-menu__button-close').toggleClass('t-menu__button-open');
		$('.t-menu__element').fadeToggle();
		$(document).click(function(event) {
			if ($(event.target).closest('.t-menu__element').length) return;
				$('.t-menu__element').fadeOut();
				$('.t-menu__button-close').removeClass('t-menu__button-open');
				event.stopPropagation();
			});
		return false
	});

/*projects__button*/
	$('.projects__button').on('click', function() {
		$(this).hide();
		$('.projects__element-hidden').show();
		return false;
	});

/*popup*/
	$('.projects__item a').on('click', function() {
		$('.f-popup__bg').fadeIn();
		$('.page__f-popup').fadeIn();
		return false;
	});
	$('.f-popup__bg').on('click', function() {
		$('.page__f-popup').fadeOut();
		$(this).fadeOut();
	});
	$('.f-popup__close').on('click', function() {
		$('.page__f-popup').fadeOut();
		$('.f-popup__bg').fadeOut();
	});
});