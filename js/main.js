$(document).ready(function() {
	$('.menu li').click(function() {
		var clicked = $(this).find('a').attr('href').replace('#','');
		$('.menu li').removeClass('active');
		$(this).addClass('active');
		$('.copy').fadeOut(200, function () {
			$('.copy > div').addClass('not-active').removeClass('active');
			$('.copy .'+clicked).addClass('active').removeClass('not-active');
			$('.copy').fadeIn(200, function () {
				if ($(document).width() <= 770){
					$(window).scrollTop($('.menu').height()+$('.header').innerHeight());
				}
			});
		});
	});
});
