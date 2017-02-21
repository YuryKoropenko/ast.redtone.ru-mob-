$(document).ready(function() {
/*menu*/
	$('.t-menu__button').on('click', function() {
		$('.t-menu__button-close').toggleClass('t-menu__button-open');
		$('.t-menu__element').fadeToggle();
		return false
	});
});