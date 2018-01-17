var p1Button = document.querySelector("#p1Button");
var p2Button = document.querySelector("#p2Button");
var reset = document.querySelector('#resetButton');
var p1ScoreDisp = document.querySelector("#p1Score");
var p2ScoreDisp = document.querySelector("#p2Score");
var p1Score = 0;
var p2Score = 0;
var numInput = document.querySelector('input');
var numDisp = document.getElementById('playToDisp');
var gameOver = false;
var winningNumber = 5;

p1Button.addEventListener("click", function() {
	if(!gameOver) {
		p1Score++;
		if(p1Score == winningNumber) {
			p1ScoreDisp.classList.add("winner");
			gameOver = true;
		}
		p1ScoreDisp.innerHTML = p1Score;
	}

})

p2Button.addEventListener("click", function() {
	if(!gameOver) {
		p2Score++;
		if(p2Score == winningNumber) {
			p2ScoreDisp.classList.add("winner");
			gameOver = true;
		}
		p2ScoreDisp.innerHTML = p2Score;
	}

})

numInput.addEventListener("change", function() {
  numDisp.textContent = this.value
	winningNumber = this.value;
})



resetButton.addEventListener("click", function() {
	p2ScoreDisp.textContent = "0";
	p1ScoreDisp.textContent = "0";
	numDisp.textContent = "5";
	numInput.value = 5;
	p1Score = 0;
	p2Score = 0;
	gameOver = false;
	p2ScoreDisp.classList.remove("winner");
	p1ScoreDisp.classList.remove("winner");
})
