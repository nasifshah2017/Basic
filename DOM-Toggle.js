var button = document.querySelector("button");
var body = document.querySelector("body");
var isPurple = false;		//Boolean to test the color of our webpage's background

button.addEventListener("click", function(){
	if(isPurple) {
		body.style.background = "white";
		isPurple = false;
	} else {
		body.style.background = "purple";
		isPurple = true;
	}

});

/*button.addEventListener("click", function(){
	document.body.classList.toggle("purple");
});*/