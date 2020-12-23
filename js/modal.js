let modal = document.getElementById('myModal');
let flex = document.getElementById('flex');
let closeModal = document.getElementById('closeModal');
let okModal = document.getElementById('okModal');

function testingDevice(){
    var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (isMobile) {
        if ('wakeLock' in navigator) {
            document.getElementById('modal-warning-text').innerHTML = "The app will prevent the device to shutdown automatically during countdown. If you lock your device manually, the countdown will stop."
          } else {
            document.getElementById('modal-warning-text').innerHTML = "Your browser does not support Wake Lock API, during countdown your device will lock automatically, and the countdown will stop." + "<br><br>" + "Supported browsers are: Chrome, Brave, Edge, Opera."
        }
        testCookie();
        } else {
            modalOff();
        }
}
 
            


function testCookie(){
    if(document.cookie == "silenceCheck=on"){
        modalOff();
    }else {
        modalOn();
    }
}


function modalOn(){
    modal.style.display = 'block';
}

closeModal.addEventListener('click', function(){
    modal.style.display = 'none';
});



window.addEventListener('click', function(e){
    if(e.target == flex){
        modal.style.display = 'none';
    }
});

function modalOff(){
    modal.style.display = 'none';
}

okModal.addEventListener('click', function(){
    if(document.getElementById('check').checked){
        var now = new Date().getTime();
        var expireDate = now + (1000*60*60*24*60);
        document.cookie = "silenceCheck = on; expires = " + expireDate.toUTCString(); + "path=/;";
        modalOff();
        return;
    }
    modalOff(); 
});