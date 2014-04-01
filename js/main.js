function getHash () {
	if (window.location.hash) {
		var hash = window.location.hash.replace('#', '');
		// console.log(hash);
		fader(hash);
	} else {
		var hash = 'experience';
		fader(hash);
	}
}
function fader (target) {
	$('.menu li').removeClass('active');
	$('.menu a[href=#' + target +']').parent('li').addClass('active');
	$('.copy').fadeOut(200, function () {
		$('.copy > div').addClass('not-active').removeClass('active');
		$('.copy .' + target).addClass('active').removeClass('not-active');
		$('.copy').fadeIn(200, function () {
			if ($(document).width() <= 770){
				$(window).scrollTop($('.menu').height()+$('.header').innerHeight());
			}
		});
	});
}
$(document).ready(function() {
	getHash();
	window.onpopstate = function() {
		getHash();
	}
	$('.menu li').on('click', function() {
		var hash = $(this).find('a').attr('href');
		window.location.href = window.location.origin + '/' + href;
	});
});
