$(document).ready(function(){
    $(".section1-link").click(function(){
        $("#section2, #section3, #section4").fadeOut("first");
		$("#section1").fadeIn(1000);
        $( ".section1-link" ).addClass( "current-section" );
		$( ".section2-link, .section3-link, .section4-link" ).removeClass( "current-section" );
    });
});
$(document).ready(function(){
    $(".section2-link").click(function(){
        $("#section1, #section3, #section4").fadeOut("first");
		$("#section2").fadeIn(1000);
        $( ".section2-link" ).addClass( "current-section" );
		$( ".section1-link, .section3-link, .section4-link" ).removeClass( "current-section" );
    });
});
$(document).ready(function(){
    $(".section3-link").click(function(){
        $("#section1, #section2, #section4").fadeOut("first");
		$("#section3").fadeIn(1000);
        $( ".section3-link" ).addClass( "current-section" );
		$( ".section1-link, .section2-link, .section4-link" ).removeClass( "current-section" );
    });
});
$(document).ready(function(){
    $(".section4-link").click(function(){
        $("#section1, #section2, #section3").fadeOut("first");
		$("#section4").fadeIn(1000);
        $( ".section4-link" ).addClass( "current-section" );
		$( ".section1-link, .section2-link, .section3-link" ).removeClass( "current-section" );
    });
});



$(document).ready(function() {
    var s = $(".navbar");
    var pos = s.position();                    
    $(window).scroll(function() {
        var windowpos = $(window).scrollTop();
        if (windowpos >= pos.top) {
            s.addClass("fixed");
        } else {
            s.removeClass("fixed"); 
        }
    });
});

$(function() {
	$('nav#menu').mmenu();
});