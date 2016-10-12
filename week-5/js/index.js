$(document).ready(function() {
	// Storing user input:
	var city = 0;

	// Prevent a form submission:
	$("#submit-btn").on("click", function(event) {
	   event.preventDefault();
	});

	// When user hits "submit" button:
	$("#submit-btn").on("click", function () {
		displayCityImage();
 	});

	// Defining displayCityImage function:
 	function displayCityImage() {
 		// Get string value of user's input:
 		city = $("#city-type").val();
		// Conditionals:
    	if (city == "New York" || city == "New York City" || city == "NYC") {
        	$("body").css("background-image", "url(images/nyc.jpg)");
    	}	else if (city == "San Francisco" || city == "SF" || city == "Bay Area") {
        	$("body").css("background-image", "url(images/sf.jpg)");
    	} 	else if (city == "Los Angeles" || city == "LA" || city == "LAX") {
        	$("body").css("background-image", "url(images/la.jpg)");
        } 	else if (city == "Austin" || city == "ATX") {
        	$("body").css("background-image", "url(images/austin.jpg)");
        } 	else if (city == "Sydney" || city == "SYD") {
        	$("body").css("background-image", "url(images/sydney.jpg)");
        }
	}

 });