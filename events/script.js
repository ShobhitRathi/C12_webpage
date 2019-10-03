$(document).ready(function() {
	
    $(window).scroll(function() {
    if($(document).scrollTop() > 180) {
        $('.header').addClass('header-color');
    }
    else {
    $('.header').removeClass('header-color');
    }
  });
});
