function testingDevice(){
    var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (isMobile) {
        testCookie();

    } else {
        modalOff();
        
    }
} 


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




