$(document).ready(function(){

	$('.back-to-top').click(function(){
		$('body, html').animate({
			scrollTop: '0px'
		}, 100);
	});

	$(window).scroll(function(){
		if( $(this).scrollTop() > 0 ){
			$('.back-to-top').slideDown(100);
		} else {
			$('.back-to-top').slideUp(100);
		}
	});

});