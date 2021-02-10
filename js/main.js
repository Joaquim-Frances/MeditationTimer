let emptyWu = false;
let seconds = 0;
let minutes = 0;
let isRunning = false;
let inPause = false;
let fullScreen = false;
let lockOn = false;
let bells_mesage = document.getElementById('bells_mesage');
let startingMinutes = 0;
let cookieValues = "";
let bells_info = document.getElementById('bells_info');

testingDevice();

if (Cookier.getCookie('cookieTime')){
    minutes = Cookier.getCookie('cookieTime');
    startingMinutes = Cookier.getCookie('cookieTime') - 1;
}
if (Cookier.getCookie('cookieEvery')){
    bellMinutes = Cookier.getCookie('cookieEvery');
}
if (Cookier.getCookie('cookieWu')){
    wuUserMinutes = Cookier.getCookie('cookieWu');
    wuMinutes = wuUserMinutes;
    showWarmUp();
    printWuTime();
}
if (Cookier.getTheCookie(108)){
    console.log('test');
}

printTime();

function addTime(minutesAdded){
    minutes += minutesAdded;
    storedMinute = minutes -1;
    startingMinutes = minutes -1;
    printTime();
    
}
    


function substractTime(){
    if(minutes <= 0){
        minutes = 0;
        return;
    }
    minutes--;
    storedMinute = minutes -1;
    startingMinutes = minutes -1;
    printTime();
   
}


function timeCount(){
    seconds--;
    if(seconds == 0-1){
        minutes--;
        seconds = 59;
        playIntervalBell(bellMinutes);
        playBellsList();
    }
    printTime();
    if(minutes <= 0 && seconds <= 0){
        stopTimer();
        playSound();  
    }
}


function startTimer(){
    
    cookieTime = new Cookier("cookieTime", minutes, 60);
    cookieTime.writeCookie();

    if (isRunning && inPause == false){
       return;
    }
    if (wuMinutes > 0 || wuSeconds > 0 && emptyWu == false){
        if ('wakeLock' in navigator) {
            acquireLock();
            lockOn = true;
        }
        startWu();
        return;
    }
    if(minutes == 0 && seconds == 0){
        return;
    }
    silenceTime = setInterval(timeCount, 1000);
    if ('wakeLock' in navigator) {
        acquireLock();
        lockOn = true;
    }
    isRunning = true;
    inPause = false;

   
    
}


function stopTimer(){
    
    if(isRunning == false){
        seconds = 0;
        minutes = 0;
        document.getElementById("seconds").innerHTML= "0" + seconds;
        document.getElementById("minutes").innerHTML= "0" + minutes;
        stopWU();
        return;   
    }
    clearInterval(silenceTime);
    seconds = 0;
    minutes = 0;
    document.getElementById("seconds").innerHTML= "0" + seconds;
    document.getElementById("minutes").innerHTML= "0" + minutes;
    isRunning = false;
    emptyWu = false;
    if(lockOn == true){
        releaseLock();
    }
}
 

function pauseTimer(){
    pauseWuTimer();
    if(isRunning && inPause == false){
        clearInterval(silenceTime);
        inPause = true;
    }
}


function printTime(){
    bells_mesage.innerHTML = '';
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
    
    if(bellMinutes != 0){
        bells_mesage.style.display = 'flex';
        document.getElementById('bells_mesage').innerHTML += "A bell ring every " + bellMinutes + " minutes.<br>";
        
    }else if(bellMinutes == 0){
        bells_mesage.style.display = 'none';
    }

    if(valuesList != 0){
        
        valuesList.forEach(element => {
             bells_info.innerHTML += "<p>A bell at minute " + element + " after start.</p>"
        });
    }
}

