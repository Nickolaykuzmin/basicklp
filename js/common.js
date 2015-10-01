$(document).ready(function() {
	$('a[href^="#"]').click(function(){
		var target = $(this).attr('href');
		$('html, body').animate({scrollTop: $(target).offset().top}, 800);
		return false;
	});

	new WOW().init();

	carousel();	

	slider_menu();

});


function carousel(){
	$("#owl-demo").owlCarousel({
    items : 1,
    lazyLoad : true,
    navigation : true,
    itemsDesktop : [1199,4],
    itemsDesktopSmall : [980,3],
    itemsTablet: [768,2],
    itemsTabletSmall: false,
    itemsMobile : [479,1],
    pagination : false,
    paginationNumbers: false,
	navigationText: [
	  "<img src='images/arrow_left.png'></img>",
	  "<img src='images/arrow_right.png'></img>"
	]
  }); 
}

function slider_menu(){
	var button = $("#icon_button");
	button.click(function(event) {
		$("nav.nav").slideToggle('slow');
		$("nav.nav li").css({
			display: 'block',
			borderBottom: "1px solid red"
		});

		var last = $("nav.nav li").last();

		last.css({
			borderBottom: 'none'
		});
		event.preventDefault();

	});
}

