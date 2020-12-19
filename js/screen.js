function screenMode(){

    var elem = document.documentElement;
    
    if(fullScreen == false){
        fullScreen = true;
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        } else if (elem.webkitRequestFullscreen) { /* Safari */
            elem.webkitRequestFullscreen();
        } else if (elem.msRequestFullscreen) { /* IE11 */
            elem.msRequestFullscreen();
        }

    }else if (fullScreen == true) {
        fullScreen = false;
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.webkitExitFullscreen) { 
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) { 
            document.msExitFullscreen();
        }
    }
}


async function acquireLock() {
    wakeLock = await navigator.wakeLock.request("screen");
    console.log(" Wake Lock is acquired");
}
function releaseLock() {
    wakeLock.release().then(() => {
        console.log("Wake Lock Released");
    });
}



function testingDevice(){
    var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (isMobile) {
        writeMesage();

    } else {
        writeMesage();    
    }
} 

function writeMesage(){
    var inDiv = document.createElement("div");
    inDiv.setAttribute ("id", "innerDiv");
    var pTag = document.createElement("P");
    var mesage = document.createTextNode("If you lock your device manually, the countdown will stop.");  
    var Check = document.createElement('input');
    Check.type = 'checkbox';
    var btn = document.createElement("BUTTON");
    btn.innerHTML = "UNDERSTOOD!"; 
    btn.setAttribute("class", "buttons");
    inDiv.appendChild(pTag);                
    inDiv.appendChild(Check);                
    inDiv.appendChild(btn);                
    pTag.appendChild(mesage);                                          
    document.getElementById("mesage").appendChild(inDiv);
    
    
}