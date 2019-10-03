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

$(document).ready(function(){
	$(window).scroll(function(){
		var wScroll = $(this).scrollTop();

			if (wScroll > $('.container').offset().top - ($(window).height() / 2)) {
				$('.meet').each(function(){
					$('.meet').addClass('is-showing')
				})
			}
	})
})

$(document).ready(function(){
	$(window).scroll(function(){
		var wScroll = $(this).scrollTop();

			if (wScroll > $('.prez_img_jotsaroop').offset().top - ($(window).height() / 2)) {
				$('.prez_img_jotsaroop').each(function(){
					$('.prez_img_jotsaroop').addClass('is-showing')
				})
			}
	})
})



$(document).ready(function(){
	$(window).scroll(function(){
		var wScroll = $(this).scrollTop();

			if (wScroll > $('.prez_img_harshit').offset().top - ($(window).height() / 2)) {
				$('.prez_img_harshit').each(function(){
					$('.prez_img_harshit').addClass('is-showing')
				})
			}
	})
})
$(document).ready(function(){
	$(window).scroll(function(){
		var wScroll = $(this).scrollTop();

			if (wScroll > $('.prez_img_jotsaroop').offset().top - ($(window).height() / 2)) {
				$('.prez_img_jotsaroop').each(function(){
					$('.rgv').addClass('is-showing')
				})
			}
	})
})


$(document).ready(function(){
	$(window).scroll(function(){
		var wScroll = $(this).scrollTop();

			if (wScroll > $('.prez_img_harshit').offset().top - ($(window).height() / 2)) {
				$('.prez_img_harshit').each(function(){
					$('.Harshit').addClass('is-showing')
				})
			}
	})
})



