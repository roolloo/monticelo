$(document).ready(function(){
	$(".banner").slick({
     arrows:false,
	  dots:true,
	  autoplay: true,
	})
})
$(document).ready(function(){
	$(".news__slider").slick({
		slidesToShow: 3,
		slidesToScroll: 1,               
		centerMode:true, 
		variableWidth: true,
      dots:true
	})
})