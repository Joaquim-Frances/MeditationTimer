let modal = document.getElementById('myModal');
let flex = document.getElementById('flex');
let closeModal = document.getElementById('closeModal');
let okModal = document.getElementById('okModal');
let video = document.getElementsByClassName('video');
let videoMovile = document.getElementsByClassName('videoMovile');

function testingDevice(){
    var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (isMobile) {
        document.getElementById('modal-warning-text').innerHTML = "If the device enters sleep and lock, the countdown will stop. This web app uses a new feature to prevent that and keep the screen on during countdown, but not all browser supports this.<br><br>If you lock your device manually, the countdown will stop. <br><br> Supported browsers:<br><br> Chrome, Brave and Firefox in full screen."
        testCookie();
        
        } else {
            modalOff();
        }
}
 
            


function testCookie(){
    if(Cookier.getCookie('silenceCheck')){
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
    if(document.getElementById('Modalcheck').checked){
        var now = new Date();
        now.setTime(now.getTime() + (60*24*60*60*1000))
        document.cookie = "silenceCheck = 77; expires = " + now.toUTCString(); + "path=/;";
        modalOff();
        return;
    }
    modalOff(); 
});