

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
    console.log("Wake Lock Acquired");
}
function releaseLock() {
    wakeLock.release().then(() => {
        console.log("Wake Lock Released");
    });
}

// if ('wakeLock' in navigator) {
//     isSupported = true;
//     statusElem.textContent = 'Screen Wake Lock API supported!';
//   } else {
//       statusElem.textContent = 'Wake lock is not supported by this browser.';
    
// }
    


