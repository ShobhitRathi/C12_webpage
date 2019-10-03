$(document).ready(function() {
	
    $(window).scroll(function() {
    if($(document).scrollTop() > 18) {
        $('nav').addClass('is-showing');
    }
    else {
    $('nav').removeClass('is-showing');
    }
  });
});

$(document).ready(function(){
	$('.Sidhya').dblclick(function(){
		$('.Sidhya').toggleClass('clicked')
	})
})

$(document).ready(function(){
	$('.Sidhya').dblclick(function(){
		$('.easter').toggleClass('clicked')
	})
})