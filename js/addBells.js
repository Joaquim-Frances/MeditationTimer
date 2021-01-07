let storedMinute;
let interval_container = document.getElementById('interval_container');


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
    let valuesList = [];
    for(var i=0; i<intervalElements.length; i++){
        
        valuesList.push(intervalElements[i].value);
    }    
    console.log(valuesList);
}