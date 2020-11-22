
let seconds = 0;
let minutes = 0;
let isRunning = false;
let inPause = false;
document.getElementById("seconds").innerHTML=  "0" + seconds;
document.getElementById("minutes").innerHTML=  "0" + minutes;


function timeCount(){
    
    seconds++;
    if(seconds == 59+1){
        minutes++;
        seconds = 0;
    }
    printTime();
    
}
    


function startTimer(){

    if (isRunning && inPause == false){

        return;
    }
    
    myTime = setInterval(timeCount, 1000);
    isRunning = true;
    inPause = false;
    
}


function stopTimer(){

    clearInterval(myTime);
    seconds = 0;
    minutes = 0;
    document.getElementById("seconds").innerHTML= "0" + seconds;
    document.getElementById("minutes").innerHTML= "0" + minutes;
    isRunning = false;

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
    }
    else if(seconds >= 10 && seconds <= 59){

        document.getElementById("seconds").innerHTML= seconds; 
    }
    if(minutes >= 1 && minutes < 10){

        document.getElementById("minutes").innerHTML= "0" + minutes;
    }
    else if(minutes >= 10){

        document.getElementById("minutes").innerHTML= minutes; 
    }

}




    


