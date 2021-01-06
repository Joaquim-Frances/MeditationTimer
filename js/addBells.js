let storedMinute;

function playIntervalBell(bellMinute){
   
    if(minutes == storedMinute - bellMinutes && isRunning){
        storedMinute = minutes;
        playSound();
    }
}