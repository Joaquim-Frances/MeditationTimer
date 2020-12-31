let wuContainer = document.getElementById('warmup-container');
let wuUserMinutes = 0;
let wuMinutes = 0;
let wuSeconds = 0;
let isRunningWu = false;
let inPauseWu = false;
let finishWu = false;


    


function showWarmUp(){
    if(wuSeconds != 0 || wuMinutes != 0){
        wuContainer.style.display = 'flex';
    }else{
        wuContainer.style.display = 'none';
    }
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
    isRunningWu = true;
    inPauseWu = false;
}

function printWuTime(){

    if(wuSeconds < 10){
        document.getElementById("warmup-seconds").innerHTML= "0" + wuSeconds; 
    }else if(wuSeconds >= 10 && wuSeconds <= 59){
        document.getElementById("warmup-seconds").innerHTML= wuSeconds; 
    }

    if(wuMinutes >= 0 && wuMinutes < 10){
        document.getElementById("warmup-minutes").innerHTML= "0" + wuMinutes;
    }else if(wuMinutes >= 10){
        document.getElementById("warmup-minutes").innerHTML= wuMinutes; 
    }
}

function stopWU(){
    if(isRunningWu == false){
        wuSeconds = 0;
        wuMinutes = wuUserMinutes;
        document.getElementById("warmup-seconds").innerHTML= "0" + wuSeconds;
        document.getElementById("warmup-minutes").innerHTML= "0" + wuMinutes;
        return;   
    }
    clearInterval(wuTime);
    wuSeconds = 0;
    wuMinutes = wuUserMinutes;
    document.getElementById("warmup-seconds").innerHTML= "0" + wuSeconds;
    document.getElementById("warmup-minutes").innerHTML= "0" + wuMinutes;
    isRunningWu = false;
}

function pauseWuTimer(){

    if(isRunningWu && inPauseWu == false){
        clearInterval(wuTime);
        inPause = true;
    }
}