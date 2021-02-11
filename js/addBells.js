let storedMinute;
let interval_container = document.getElementById('interval_container');
let valuesList = [];
let cookieArray;

function playIntervalBell(bellMinute){
    if(bellMinute == 0){
        return;
    }
    if(minutes == storedMinute - bellMinutes && isRunning){
        storedMinute = minutes;
        playBell();
    }
}

function addIntervalBells(){
    valuesList = [];
    interval_container.innerHTML += "<p>Ring a bell &nbsp;&nbsp;<input type='number' class='afterMinutes'> &nbsp; minutes after start.</p><br>"
    
}

function resetIntervals(){
    interval_container.innerHTML = "";
    valuesList = [];
    console.log(valuesList);
    
}

function intervalsList(){
    bells_mesage.innerHTML = "";
    valuesList = [];
    let intervalElements = document.getElementsByClassName('afterMinutes');
    
    for(var i=0; i<intervalElements.length; i++){ 

        if(intervalElements[i].value !=0){

            valuesList.push(intervalElements[i].value);

        }else{
            interval_container.innerHTML = "";
        }
        
    } 
    
    cookieValues = valuesList.toString(",");
    if(cookieValues == 0){
        cookieValues = 0;
    }
    let cookieArray = new Cookier('cookieAfter', cookieValues, 60);
    cookieArray.writeCookie();
    // console.log(valuesList);
    // console.log(cookieValues);
}

function playBellsList(){
    for(var i=0; i<valuesList.length; i++){
        if(minutes == startingMinutes - valuesList[i]){
            playBell();
        }
    }
}