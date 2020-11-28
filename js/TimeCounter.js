//let nowTime = new Date();
let minutes = 8;
//let addedTime = 15;

function addTime(){

    minutes++;
    document.getElementById("minutes").innerHTML = minutes;
}
    
    


function countDown(){

    let nowTime = Date.now();
    let nowMinutes = new Date(nowTime).getMinutes();
    let nextTime = new Date(nowTime).getMinutes() + minutes;
    
    let timeToCount = nowMinutes - nextTime;

    console.log(timeToCount);
    

}

countDown();