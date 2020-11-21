
let time = 0;
let isRunning = false;
let inPause = false;
document.getElementById("time").innerHTML= time;

function timeCount(){
    
    time++;
    document.getElementById("time").innerHTML= time;
    console.log (time);
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
    time = 0;
    document.getElementById("time").innerHTML= time;
    isRunning = false;

}

function pauseTimer(){

    if(isRunning && inPause == false){

        clearInterval(myTime);
        inPause = true;
    }


}






    


