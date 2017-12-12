jQuery( function( $ ) {

	$(document).foundation();

	$('.header__menu-btn').click(function(){
		$('.header__nav').removeClass("hide");
	})

	$('.close-button').click(function(){
		$('.header__nav').addClass("hide");
	})

	$(window).resize(function(){
		if($(window).width() >= 1024){
			$('.header__nav').addClass("hide");
		}
	})
	
});