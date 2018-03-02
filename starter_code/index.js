//wait for the DOM elements to load before executing
//alert("hello");

jQuery(document).ready(function(){

// Create a function that runs whenever the submit button is clicked

function cityType (e){
}

// prevent the submit button to refresh the page

jQuery('#submit-btn').click(function(e){
    e.preventDefault();

//console.log("prevent")

//Create a variable called city and get the value of the #city-type input

var city = jQuery("#city-type").val();

//Correct for capitalization
city = city.toLowerCase().trim();

//console.log(city)


// when user inputs "New York" or "New York City" or "NYC" make the background of the page nyc.jpg


if(city == "new york" || city == "new york city" || city == "nyc"){

jQuery("body").attr("class", "nyc");


//jQuery("body").css("background", "url(../images/nyc.jpg");
}

// when user inputs "San Francisco" or "SF" or "Bay Area" make the background of the page sf.jpg

if(city == "san francisco" || city == "sf" || city == "bay area"){

jQuery("body").attr("class", "sf");

}

// when user inputs "Los Angeles" or "LA" or "LAX" make the background of the page la.jpg

if(city == "los angeles" || city == "la" || city == "lax"){

jQuery("body").attr("class", "la");

}

// when user inputs "Austin" or "ATX" make the background of the page austin.jpg

if(city == "austin" || city == "atx"){

jQuery("body").attr("class", "austin");

}
// when user inputs "Sydney" or "SYD" make the background of the page sydney.jpg

if(city == "sydney" || city == "syd"){

jQuery("body").attr("class", "sydney");
}

/*The only thing here is that I don't quite get how I would write the code using the "if else" statement... I only used if. Looks from the solution that the oly difference in code is that it says "else" before "if", but mine seems to work fine without it.*/

});

});