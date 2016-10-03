$(document).ready(function() {

	$("a").on("click", function(event) {
	    event.preventDefault();
	});


	$(".readmore").on("click",function(){
		$("p").slideDown("fast");
		$(".readless hide").show("fast");
	    $(".readmore").hide("fast");
	});

	$(".readless").on("click",function(){
		$(".hide").slideUp("fast");
		$(".readmore").show("fast");
	    $(".readless").hide("fast");
	});

	$(".learnmore").on("click",function(){
		$("p span").slideDown("fast");
	    $(".learnmore").hide("fast");
	});

});