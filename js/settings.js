jQuery(document).ready(function($) {
	$('i.fa.fa-bars').click(function(event) {
      $('#HeaderNav ul').slideToggle();
	});
	$('i.fa.fa-bars').trigger('click');
	logoOnsmallScreen();

	$( window ).resize(function() {
		setHeight();
	});

	$('.owl-carousel.b').owlCarousel({
		    loop:true,
		    nav:true,
		    autoplay:true,
		    autoplayHoverPause:true,
		    responsive:{
		        0:{
		            items:1
		        },
		        500:{
		            items:1
		        },
		        600:{
		            items:1
		        },
		        2000:{
		            items:1
		        }
		    }
	});

	$('#owl-carousel').owlCarousel({
    loop:true,
    margin:20,
    nav:true,
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:2
        },
        500:{
            items:3
        },
        600:{
            items:4
        },
        1000:{
            items:5
        }
    }

});

		
	function logoOnsmallScreen() {
		var windowsWidth= $(window).width();
		if(windowsWidth <= 768){
			var logoSrc = $('img.logo').attr('src');
			$('header nav').prepend('<img src="'+logoSrc+'" class="logoForSmallScreen"/>');
		}
	}

	teamHover();

	$(".owl-nav .owl-prev").html(" ");
	$(".owl-nav .owl-next").html(" ");
	serviceHover();
	setHeight();

	var clickedA =$('.collepesCutomeStyle .panel-heading .panel-title a');
	$(clickedA).click(function() {
		
		if ($(this).attr('class') == "collapsed" ) {
			$('.collepesCutomeStyle .panel-heading').removeClass('collapseOpenBgColor');
			$(this).parents().eq(1).addClass('collapseOpenBgColor');
			$('.collepesCutomeStyle .panel-heading h4.panel-title').removeClass('panelImg');
			$(this).parent().addClass('panelImg');
		}
		else{
			$(this).parents().eq(1).removeClass('collapseOpenBgColor');
			$(this).parent().removeClass('panelImg');
		}
	});	

	$('.collepesCutomeStyle:nth-child(2) .panel-heading .panel-title a').trigger('click');	
});
function setHeight() {
	var heights = $("main section.service .services .content").map(function ()
	    {
	        return $(this).outerHeight();
	    }).get(),

	    maxHeight = Math.max.apply(null, heights);
	    $("main section.service .services .content").each(function () {
	    	$(this).outerHeight(maxHeight);
	    });

	    var windowsWidth= $(window).width();
	    if(windowsWidth <= 768){
	    	var heights = $("footer .footerTop .infoBoxes .infoBox").map(function ()
	    	    {
	    	        return $(this).outerHeight();
	    	    }).get(),

	    	    maxHeight = Math.max.apply(null, heights);
	    	    $("footer .footerTop .infoBoxes .infoBox").each(function () {
	    	    	$(this).outerHeight(maxHeight);
	    	    });
	    }	    
}
function serviceHover() {
	var hoverDiv = $('main section.service .services .content');
	var addHoverClass =hoverDiv.attr('class');
	addHoverClass += 'Hover';
	hoverDiv.hover(function () {

		var imgAttr =$(this).children('img').attr('src');

		if(imgAttr.indexOf("Hover") >= 0){
			imgAttr = imgAttr.replace('Hover.png', '.png');
		}
		else{
			imgAttr = imgAttr.replace('.png', 'Hover.png');
		}
		$(this).children('img').attr('src',imgAttr).fadeIn(700);
		$(this).toggleClass(addHoverClass,'slow');
});
}
function teamHover() {
	$('section.abtTeam .imgDiv').hover(function() {
		var designation = $(this).find("span").data('designation');
		var email = $(this).find("span").data('email');
		var name = $(this).find("h6").text();
		$(this).find("h6").animate("slow").css("display","none");
		$(this).append('<div class="imgDivHover"><div class="border">'+
						'<p>'+name+'</p>'+
						' <p>'+designation+'</p>'+
						'<a href="mailto:'+email+'">'+email+'</a>'+
						'</div></div>');
	}, function() {
		$('div.imgDivHover').remove();
		$(this).find("h6").animate("slow").css("display","block");
	});
}