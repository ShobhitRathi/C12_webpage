$(document).ready(function() {
	
    $(window).scroll(function() {
    if($(document).scrollTop() > 180) {
        $('nav').addClass('is-showing');
    }
    else {
    $('nav').removeClass('is-showing');
    }
  });
});