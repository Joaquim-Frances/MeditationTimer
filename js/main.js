



let seconds = 9;
let minutes = 0;
let isRunning = false;
let inPause = false;
let fullScreen = false;

testingDevice();

document.getElementById("seconds").innerHTML=  "0" + seconds;
document.getElementById("minutes").innerHTML=  "0" + minutes;



function addTime(minutesAdded){
    minutes += minutesAdded;
    printTime();
}
    


function substractTime(){
    if(minutes <= 0){
        minutes = 0;
        return;
    }
    minutes--;
    printTime();
}


function timeCount(){
    seconds--;
    if(seconds == 0-1){
        minutes--;
        seconds = 59;
    }
    printTime();
    if(minutes <= 0 && seconds <= 0){
        stopTimer();
        playSound();  
    }
}

function playSound(){
    
    var gong = new Audio('./src/singingbowl.mp3');
    gong.play();
}

function startTimer(){
    if (isRunning && inPause == false){
       return;
    }
    if(minutes == 0 && seconds == 0){
        return;
    }
    myTime = setInterval(timeCount, 1000);
    isRunning = true;
    inPause = false;
    acquireLock();
}


function stopTimer(){
    if(isRunning == false){
        seconds = 0;
        minutes = 0;
        document.getElementById("seconds").innerHTML= "0" + seconds;
        document.getElementById("minutes").innerHTML= "0" + minutes;
        return;   
    }
    clearInterval(myTime);
    seconds = 0;
    minutes = 0;
    document.getElementById("seconds").innerHTML= "0" + seconds;
    document.getElementById("minutes").innerHTML= "0" + minutes;
    isRunning = false;
    releaseLock();
}


    

function pauseTimer(){

    if(isRunning && inPause == false){
        clearInterval(myTime);
        inPause = true;
    }
}


function printTime(){

    if(seconds < 10){
        document.getElementById("seconds").innerHTML= "0" + seconds; 
    }else if(seconds >= 10 && seconds <= 59){
        document.getElementById("seconds").innerHTML= seconds; 
    }

    if(minutes >= 0 && minutes < 10){
        document.getElementById("minutes").innerHTML= "0" + minutes;
    }else if(minutes >= 10){
        document.getElementById("minutes").innerHTML= minutes; 
    }
}