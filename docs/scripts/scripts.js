var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.innerHTML = this.value;
}

var image = document.getElementById("Image");
const images =      ["1.png", "2.png", "3.png", "4.png", "5.png", "6.png", "7.png", "8.png", "9.png", "10.png", "11.png", "12.png", "13.png"];
const imageVals =    [200,      183,      86,      90000,      1300,      200000,      4,      1,      1,      5000,       846,       130000,       900000];
var rndNr = Math.floor(Math.random() * 13);
var rndSlider = Math.floor(Math.random() * 3);
var previousNr = rndNr; 
var currentVal = imageVals[rndNr];
image.src = "images/" + images[rndNr];
var failed = false;
var success = false;
var scoreText = document.getElementById("score");
var score = 0;
sliderUpdate();


function sliderUpdate(){
    slider.min = Math.floor(currentVal - (currentVal * (1-(rndSlider / 10))));
    slider.max = Math.floor(currentVal + (currentVal * (1-(rndSlider / 10))));
    slider.value = slider.min;
    output.innerHTML = slider.value;
}

function checkAnswer(){
    if (currentVal - output.innerHTML < currentVal * 0.1 && currentVal - output.innerHTML > currentVal * -0.1){
        randomizeImage();
        score = score + 100;
        scoreText.innerHTML = score;
        sliderUpdate();
    } else {
        window.alert("Incorrect answer");
        sliderUpdate();
    }
}

function randomizeImage(){
    var rndNr = Math.floor(Math.random() * 13);
    while (previousNr == rndNr) {
        rndNr = Math.floor(Math.random() * 13);
    }
    previousNr = rndNr;
    image.src = "images/" + images[rndNr];
    currentVal = imageVals[rndNr];
    restartTimer();
}

var timeRemain = 30;
var timer = document.getElementById("timer");

function countDownTimer(){
    timeRemain--;
    timer.innerHTML = timeRemain;
    if (timeRemain == 0){
        clearInterval(timerInterval);
        window.alert("Time's up!");
        document.location="index.html";
        randomizeImage();
    }
}

function restartTimer(){
    clearInterval(timerInterval);
    timerInterval = setInterval(countDownTimer, 1000);
    timeRemain = 20;
    timer.innerHTML = 20;
}

timerInterval = setInterval(countDownTimer, 1000);

