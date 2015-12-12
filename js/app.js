
var main = function () {
	$('.btn').click(function() {
	 	$('.infos').toggle();
		});

   $('.arrow-right').click(function() {

    var currentSlide = $(this).parent().siblings(".slider").children(".active-slide");
    var nextSlide = currentSlide.next();
    
   
    if(nextSlide.length === 0) {
      nextSlide = $(this).parent().siblings(".slider").children(".slide").first();
    }

    currentSlide.hide().removeClass('active-slide');
    nextSlide.show().addClass('active-slide');


  });
   $('.arrow-left').click(function() {
    var currentSlide = $(this).parent().siblings(".slider").children(".active-slide");
    var prevSlide = currentSlide.prev();

    if(prevSlide.length === 0) {
      prevSlide = $(this).parent().siblings(".slider").children(".slide").first();
    }
    
    currentSlide.hide().removeClass('active-slide');
    prevSlide.show().addClass('active-slide');
  });


}

$(document).ready(main);