var image = document.getElementById("Image");
const images =      ["1.png", "2.png", "3.png", "4.png", "5.png", "6.png", "7.png", "8.png", "9.png", "10.png", "11.png", "12.png", "13.png"];
const imageVals =    [200,      183,      86,      90000,      1300,      200000,      4,      1,      1,      5000,       846,       130000,       900000];
 
var rndNr = Math.floor(Math.random() * 13);
var previousNr = rndNr;
var currentVal = imageVals[rndNr];
image.src = "images/" + images[rndNr];
var output = document.getElementById("demo");
 
var scoreText = document.getElementById("score");
var score = 0;
 
function checkAnswer() {
    var inputValue = parseInt(output.value); // Get the value from input as a number
    if (currentVal - inputValue < currentVal * 0.1 && currentVal - inputValue > currentVal * -0.1) {  
        randomizeImage();
        score += 100;
        scoreText.innerHTML = score;
        document.getElementById("demo").value = "";
    } else {
        window.alert("Incorrect answer");
    }
}
 
function randomizeImage() {
    var rndNr = Math.floor(Math.random() * 13);
    while (previousNr == rndNr) {
        rndNr = Math.floor(Math.random() * 13);
    }
    previousNr = rndNr;
    image.src = "images/" + images[rndNr];
    currentVal = imageVals[rndNr];
    restartTimer();
}
 
var timeRemain = 20;
var timer = document.getElementById("timer");
 
function countDownTimer() {
    timeRemain--;
    timer.innerHTML = timeRemain;
    if (timeRemain == 0) {
        clearInterval(timerInterval);
        window.alert("Time's up! Final Score: " + score);
        randomizeImage();
        window.location.href = "index.html";
    }
}
 
function restartTimer() {
    clearInterval(timerInterval);
    timeRemain = 20;
    timer.innerHTML = 20;
    timerInterval = setInterval(countDownTimer, 1000);
}
 
var timerInterval = setInterval(countDownTimer, 1000);

// Get the input field
var input = document.getElementById("demo");

// Execute a function when the user presses a key on the keyboard
input.addEventListener("keypress", function(event) {
  // If the user presses the "Enter" key on the keyboard
  if (event.key === "Enter") {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementById("button1").click();
  }
});
