let storedMinute;
let interval_container = document.getElementById('interval_container');
let valuesList = [];

function playIntervalBell(bellMinute){
    if(bellMinute == 0){
        return;
    }
    if(minutes == storedMinute - bellMinutes && isRunning){
        storedMinute = minutes;
        playSound();
    }
}

function addIntervalBells(){
    interval_container.innerHTML += "<p>Ring a bell &nbsp;&nbsp;<input type='number' class='afterMinutes'> &nbsp; minutes after start.</p><br>"
}

function resetIntervals(){
    interval_container.innerHTML = "";
}

function intervalsList(){
    let intervalElements = document.getElementsByClassName('afterMinutes');
    
    for(var i=0; i<intervalElements.length; i++){ 
        valuesList.push(intervalElements[i].value);
    }    
    console.log(valuesList);
}

function intervalBellsList(){
    for(var i=0; i<valuesList.length; i++){
        if(minutes == startingMinutes - valuesList[i]){
            playSound();
        }
    }
}