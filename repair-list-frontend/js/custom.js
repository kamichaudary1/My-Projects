var $ = jQuery;
// sticky header js starts here
window.onscroll = function() {myFunction()};
var header = document.getElementById("headerMain");
var sticky = header.offsetTop;
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
// sticky header js ends here
jQuery( document ).ready(function(){

	// main navigation show function
	$( ".header-nav-icon" ).click(function(){
		$( ".header-nav" ).toggleClass( "show" );
	});

	// home page testimonial slider starts here
	jQuery('.testmonial-slider').slick({
	  dots: false,
	  arrows: true,
	  infinite: true,
	  speed: 300,
	  slidesToShow: 1,
	  adaptiveHeight: true
	});

	jQuery( ".slick-prev" ).click(function(){
		jQuery( this ).addClass( "active" );
		jQuery( ".slick-next" ).removeClass( "active" );
	});
	jQuery( ".slick-next" ).click(function(){
		jQuery( this ).addClass( "active" );
		jQuery( ".slick-prev" ).removeClass( "active" );
	});

	// sell banner
	$('.sell-banner').slick({
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  arrows: true,
	  dots: false,
	  centerMode: true,
	  responsive: [
			{
			  breakpoint: 767,
			  settings: {
			    arrows: false,
			    centerMode: false,
			    autoplay: true,
			    slidesToShow: 1
			  }
			}
		]
	});

	// buy featured product slider
	$( ".featured-products-row" ).slick({
		slidesToShow: 4,
		arrows:true,
		autoplay: true,
		responsive: [
			{
			  breakpoint: 1024,
			  settings: {
			    arrows: false,
			    centerMode: true,
			    centerPadding: '40px',
			    slidesToShow: 2
			  }
			},
			{
			  breakpoint: 480,
			  settings: {
			    arrows: false,
			    centerMode: false,
			    slidesToShow: 1
			  }
			}
		]
	});

	jQuery( ".cart-row-outer .slick-prev" ).click(function(){
		jQuery( this ).addClass( "active-btn" );
		jQuery( ".slick-next" ).removeClass( "active-btn" );
	});
	jQuery( ".cart-row-outer .slick-next" ).click(function(){
		jQuery( this ).addClass( "active-btn" );
		jQuery( ".slick-prev" ).removeClass( "active-btn" );
	});

// home page testimonial slider ends here
});


