let wuContainer = document.getElementById('warmup-container');
let wuUserMinutes = 0;
let wuUserSeconds = 0;
let wuMinutes = 0;
let wuSeconds = 0;
let isRunningWu = false;
let inPauseWu = false;



    


function showWarmUp(){
    if(wuSeconds != 0 || wuMinutes != 0){
        wuContainer.style.display = 'flex';
        emptyWu =  false;
    }else{
        wuContainer.style.display = 'none';
    }
}


printWuTime();

function wuCountDown(){
    wuSeconds--;
    if(wuSeconds == 0-1){
        wuMinutes--;
        wuSeconds = 59;
    }
    printWuTime();
    if(wuMinutes <= 0 && wuSeconds <= 0){
        emptyWu = true;
        stopWU();
        playSound();  
        startTimer();
    }
}

function startWu(){
    if(isRunningWu && inPauseWu == false){
        return;
    }
    if(minutes == 0 && seconds == 0){
        bells_mesage.style.display = 'flex'
        bells_mesage.innerHTML = "You must enter a main meditation time."
        return;
    }
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
        wuSeconds = wuUserSeconds;
        wuMinutes = wuUserMinutes;
        printWuTime();
        return;   
    }
    if(emptyWu == true && isRunningWu == true){
        clearInterval(wuTime);
        wuSeconds = 0;
        wuMinutes = 0;
        printWuTime();
        isRunningWu = false;  
        return;
    }
    clearInterval(wuTime);
    wuSeconds = wuUserSeconds;
    wuMinutes = wuUserMinutes;
    printWuTime();
    emptyWu = false;
    isRunningWu = false;
}



function pauseWuTimer(){

    if(isRunningWu && inPauseWu == false){
        clearInterval(wuTime);
        inPauseWu = true;
    }
}