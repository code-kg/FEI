$(document).ready(function(){
	$('#menu').slicknav();
	$('.slider').slick({
		dots: true,
		arrows: false,
		adaptiveHeight: true
		// autoplay: true,
		// autoplaySpeed: 3000
	  });
	$(window).scroll(function () {
    var scrollTop = $(this).scrollTop();
    var offset = $('.newsblock').offset();
    $('.newsblock__bg').css('top',(offset.top - $(this).scrollTop()-800) * 0.4 + 'px');
	});
});

