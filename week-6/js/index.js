$(document).ready(function() {

	var select = document.getElementById("city-type"); 
	//create array
	var options = ["NYC", "SF", "LA", "ATX", "SYD"];
	//use array to add values to the menu by using a for loop in JavaScript
	for (var i = 0; i < options.length; i++) {
		var opt = options[i]; 
		var el = document.createElement("option"); 
		el.textContent = opt;
		el.value = opt;
		select.appendChild(el);
	}

	// use .change event handler to capture user actions
	$( "select" ).change(function () {
    	var str = "";
		$( "select option:selected" ).each(function() {
      	displayCityImage();
  	});

	// Defining displayCityImage function:
 	function displayCityImage() {
 		// Get string value of user's input:
 		city = $("#city-type").val();
		// Conditionals:
    	if (city == "NYC") {
        	$(".nyc").attr("background-image", "url(images/nyc.jpg)");
    	}	else if (city == "Bay Area") {
        	$("body").css("background-image", "url(images/sf.jpg)");
    	} 	else if (city == "LA") {
        	$("body").css("background-image", "url(images/la.jpg)");
        } 	else if (city == "ATX") {
        	$("body").css("background-image", "url(images/austin.jpg)");
        } 	else if (city == "SYD") {
        	$("body").css("background-image", "url(images/sydney.jpg)");
        }
	}

 });

 });