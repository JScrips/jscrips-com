//Define variables to hold time values

let seconds = 00;
let minutes = 00;
let hours = 00;

// Define variables to hold display Value
let displaySeconds = 0;
let displayMinutes = 0;
let displayHours = 0;

// create new variable to hold setInterval function
let interval = null;

// create variable for stopwatch status

var statusOfWatch = "stopped";

const startButton = document.getElementById("startStop");
const resetButton = document.getElementById('reset');

startButton.addEventListener("click", startStop);
resetButton.addEventListener('click', reset);

// stopwatch function (logic to determine when to increment next value. etc.)

function stopWatch() {
  seconds++;

  //Logic to determine when to incrememnt next value

  if (seconds / 60 === 1) {
    seconds = 0;
    minutes++;

    if (minutes / 60 === 1) {
      minutes = 0;
      hours++;
    }
  }

  //if seconds / minutes / hours are only one digit, add leading 0 to value;
  if (seconds < 10) {
    displaySeconds = "0" + seconds.toString();
  } else {
    displaySeconds = seconds;
  }

  if (minutes < 10) {
    displayMinutes = "0" + minutes.toString();
  } else {
    displayMinutes = minutes;
  }

  if (hours < 10) {
    displayHours = "0" + hours.toString();
  } else {
    displayHours = hours;
  }

  // display updated time values to user
  document.getElementById("display").innerHTML =
    displayHours + ":" + displayMinutes + ":" + displaySeconds;
}

function startStop() {
  if (statusOfWatch === "stopped") {
    //start the stopwatch(by calling setInterval function)
    interval = window.setInterval(stopWatch, 1000);
    document.getElementById("startStop").innerHTML = "Stop";
    statusOfWatch = "started";
  } else {
    window.clearInterval(interval);
    document.getElementById("startStop").innerHTML = "Start";
    statusOfWatch = "stopped";
  }
}

// function to reset the stopwatch 

function reset(){
    window.clearInterval(interval);
    seconds = 0;
    minutes = 0;
    hours = 0;

    document.getElementById('display').innerHTML = '00:00:00';
    document.getElementById('startStop').innerHTML = 'Start';
}