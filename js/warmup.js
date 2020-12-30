let wuContainer = document.getElementById('warmup-container');
let wuMinutes = 0;
let wuSeconds = 0;

if(wuSeconds != 0 || wuMinutes != 0){
    wuContainer.style.display = 'flex';
}

document.getElementById('warmup-minutes').innerHTML = wuMinutes;
document.getElementById('warmup-seconds').innerHTML = wuSeconds;

function wuCountDown(){
    wuSeconds--;
    if(wuSeconds == 0-1){
        wuMinutes--;
        wuSeconds = 59;
    }
    printWuTime();
    if(wuMinutes <= 0 && wuSeconds <= 0){
        stopWU();
        startTimer();
        playSound();  //corregir sound little
    }
}

function startWu(){
    wuTime = setInterval(wuCountDown, 1000);
    isRunning = true;
    inPause = false;
}

function printWuTime(){

    if(wuSeconds < 10){
        document.getElementById("warmup-seconds").innerHTML= "0" + wuSeconds; 
    }else if(wuSeconds >= 10 && wuSeconds <= 59){
        document.getElementById("warmup-seconds").innerHTML= wuSeconds; 
    }

    if(wuMminutes >= 0 && wuMminutes < 10){
        document.getElementById("warmup-minutes").innerHTML= "0" + wuMminutes;
    }else if(minutes >= 10){
        document.getElementById("warmup-minutes").innerHTML= wuMminutes; 
    }
}

function stopWU(){
    if(isRunning == false){
        wuSeconds = 0;
        wuMinutes = 0;
        document.getElementById("warmup-seconds").innerHTML= "0" + seconds;
        document.getElementById("warmup-minutes").innerHTML= "0" + minutes;
        return;   
    }
    clearInterval(wuTime);
    wuSeconds = 0;
    wuMinutes = 0;
    document.getElementById("seconds").innerHTML= "0" + seconds;
    document.getElementById("minutes").innerHTML= "0" + minutes;
    isRunning = false;
}