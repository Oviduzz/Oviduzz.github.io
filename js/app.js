
var main = function () {
	$('.btn').click(function() {
	 	$('.infos').toggle();
		});

   $('.arrow-right').click(function() {

    var currentSlide = $(this).parent().siblings(".slider").children(".active-slide");
    var nextSlide = currentSlide.next();
    
   
    if(nextSlide.length === 0) {
      nextSlide = $('.slide').first();
  }

    currentSlide.fadeOut(600).removeClass('active-slide');
    nextSlide.fadeIn(600).addClass('active-slide');
    nextSlide.fadeIn(600);
    nextSlide.addClass('active-slide');

  });
   $('.arrow-left').click(function() {
    var currentSlide = $(this).parent().siblings(".slider").children(".active-slide");
    var prevSlide = currentSlide.prev();

    if(prevSlide.length === 0) {
      prevSlide = $('.slide').last();
    }
    
    currentSlide.fadeOut(600).removeClass('active-slide');
    prevSlide.fadeIn(600).addClass('active-slide');
  });


}

$(document).ready(main);