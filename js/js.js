//abrir menu
$(document).ready(function () {
  $('#nav-icon').click(function () {
    $(this).toggleClass('open');
    $('.header .menu-right ul').toggleClass('open');
  });
});

//sticky menu
$(document).ready(function(){
	var altura = $('.header').offset().top;
	
	$(window).on('scroll', function(){
		if ( $(window).scrollTop() > altura ){
			$('.header').addClass('header-fixed');
		} else {
			$('.header').removeClass('header-fixed');
		}
	});
 
});

//initialize Fullpage

// new fullpage('#fullpage', {
//   sectionsColor: ['rgba(0,0,0,0.0)', 'rgb(242, 158, 0)', 'rgba(0,0,0,0.1)', 'rgba(0,0,0,0.15)', 'rgba(0,0,0,0.2)', 'rgba(0,0,0,0.25)', 'rgba(0,0,0,0.3)', 'rgba(0,0,0,0.35)'],
// });


//initialize AOS fade-in animations

AOS.init({
	easing: 'ease-out-back',
	duration: 1000,
});


//initialize Paroller

$('.paroller').paroller({ factor: 0.1, type: 'foreground' });
$('.invested-paroller').paroller({ factor: -0.1, type: 'foreground' });