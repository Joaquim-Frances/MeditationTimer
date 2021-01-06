let storedMinute;

function playIntervalBell(bellMinute){
    // if(minutes == startingMinutes - 1){
    //     return;
    // }
    if(minutes == storedMinute - bellMinutes && isRunning){
        storedMinute = minutes;
        playSound();
    }
}