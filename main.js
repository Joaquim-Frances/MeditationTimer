
let seconds = 0;
let minutes = 0;
let isRunning = false;
let inPause = false;
let fullScreen = false;


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
    testingDevice();
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



function playSound(){

    let gong = new Audio('./src/singingbowl.mp3');
    gong.play();

}

function screenMode(){

    var elem = document.documentElement;
    
    if(fullScreen == false){

        fullScreen = true;

        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        } else if (elem.webkitRequestFullscreen) { /* Safari */
            elem.webkitRequestFullscreen();
        } else if (elem.msRequestFullscreen) { /* IE11 */
            elem.msRequestFullscreen();
        }
        
        
    
    }else if (fullScreen == true) {

        fullScreen = false;

        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.webkitExitFullscreen) { 
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) { 
            document.msExitFullscreen();
        }
    }
}


async function acquireLock() {
    wakeLock = await navigator.wakeLock.request("screen");
    console.log(" Wake Lock is acquired");
}

function releaseLock() {
    wakeLock.release().then(() => {
        console.log("Wake Lock Released");
    });

}

function testingDevice(){
    var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    
    if (isMobile) {
          console.log("You are using Mobile");
    } else {
        console.log("You are using Desktop");
    }
}

    