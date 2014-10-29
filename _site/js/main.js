function getHash () {
	if (location.hash) {
		var hash = location.hash.replace('#', '');
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
			if ($(document).width() <= 770 && location.hash){
				$(window).scrollTop($('.menu').height()+$('.header').innerHeight());
			}
		});
	});
}
$(document).ready(function() {
	getHash();
	window.onhashchange = function() {
		getHash();
	}
	$('.menu li').on('click', function() {
		var href = $(this).find('a').attr('href');
		if (window.location.origin.indexOf('undefined') !== -1) {
			window.location.href = window.location.origin.replace('undefined','') + '/' + href;
		} else {
			window.location.href = window.location.origin + '/' + href;
		}
	});
	$('.menu li a').on('click', function(event) {
		event.stopPropagation();
	});
});
