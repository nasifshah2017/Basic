var p1Button = document.querySelector("#p1");
var p2Button = document.getElementById("p2");
var resetButton = document.getElementById("reset");
var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");
var numInput = document.querySelector("input[number]");  	// Selecting the string value entered in the input field by the user
var winningScoreDisplay = document.querySelector("p span"); // Selecting the span element inside a paragrapgh tag
var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var winningScore = 5;

p1Button.addEventListener("click", player1);
p2Button.addEventListener("click", player2);
resetButton.addEventListener("click", reset);
numInput.addEventListener("change", update);

// The "change" event will run the function anytime the value changes on the field, it doesn't matter how that  
// value changed, it could change because we clicked the reset button or hit the delete key or even input a   
// new number ourselves, in any case the value on the input field changes, the "update" function will run.


function player1() {
	if(!gameOver){
		p1Score++;
		if(p1Score === winningScore) {
			p1Display.classList.add("winner");	// Adding a class using the classList property
			gameOver = true;
		}
		p1Display.textContent = p1Score;
	}
}

function player2() {
	if(!gameOver){
		p2Score++;
		if(p2Score === winningScore) {
			p2Display.classList.add("winner");
			gameOver = true;
		}
		p2Display.textContent = p2Score;
	}

}

function reset() {
	p1Score = 0;
	p2Score = 0;
	p1Display.textContent = 0;
	p2Display.textContent = 0;
	p1Display.classList.remove("winner");		// Removing a class using the classList property
	p2Display.classList.remove("winner");
	gameOver = false;
}

// The user can set the winning score of the game
// by entering a number in the input field. 
// This function updates the winning score
// to the score entered by the user. 

function update() {
	winningScoreDisplay.textContent = numInput.value;
	winningScore = Number(numInput.value);	//Converting the value from string to number
	reset();		// Resetting the game
}

