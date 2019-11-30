// Exercise

// Use the following starter HTML

// <div>Div 1</div>
// <div class= "highlight">Div 2</div>
// <div id= "third">Div 3</div>
// <div class= "highlight">Div 4</div>

// Correctly include jQuery
// Select all divs and give them a purple background 
// Select the divs with class "highlight" and make them 200px wide
// Select the div with id "third" and give it an orange border
// Bonus: Select the first div only and change its font color to pink


$("div").css("background", "purple");

$(".highlight").css("width", "200px");

$("third").css("2px solid orange");

$("div:first").css("color", "pink");



