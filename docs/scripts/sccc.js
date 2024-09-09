var image = document.getElementById("Image");
const images =      ["1.webp", "2.webp", "3.webp", "4.webp", "5.webp", "6.webp", "7.webp", "8.webp", "9.webp", "10.webp", "11.webp", "12.webp", "13.webp"];
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
        document.location="index.html";
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
