//Define the name of the variables that will hold the time value
let status = "stop";

let interval = null;

let seconds = 0;
let minutes = 0;
let hours = 0;

//Numbers that will be shown in the display.
let displaySeconds = 0;
let displayMinutes = 0;
let displayHours = 0;

//function to increment time
function stopWatch() {
    seconds++
    if (seconds == 60) {
        seconds = 0;
        minutes++;

        if (minutes == 60) {
            minutes = 0;
            hours++
        }
    }
    //if seconds minutes or hours variables are less than 10 adds a string to it.
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
    //Display update time values to user
    document.querySelector(".display").innerHTML = `${displayHours}:${displayMinutes}:${displaySeconds}`;
}
//function to stop and start the counting
document.querySelector(".startStop").addEventListener("click", function startStop() {
    if (status === "stop") {
        interval = setInterval(stopWatch, 1000);
        document.querySelector(".startStop").innerHTML = "Stop";
        status = "start";
    }

    else if (status === "start") {
        clearInterval(interval);
        document.querySelector(".startStop").innerHTML = "Start";
        status = "stop";
    }
});
//function to reset the timer
document.querySelector(".reset").addEventListener("click", function reset(){
    status = "stop";
    seconds = 0;
    minutes = 0;
    hours = 0;
    clearInterval(interval);
    document.querySelector(".display").innerHTML = `00:00:00`;
    document.querySelector(".startStop").innerHTML = "Start";
});