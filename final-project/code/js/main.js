$(document).ready(function(){

	$(".menu").on("click", function (){
	   $(".extendednav").slideToggle("fast");
	});

	$(".arrowbtn").on("click", function (){
	   window.scrollTo(0, 800);
	});

	$(".project").hover(function(){
    $(this).toggleClass("hoverthing");
	});

	$(".submitbtn").hover(function(){
    $(this).toggleClass("hoverthing");
	});

});