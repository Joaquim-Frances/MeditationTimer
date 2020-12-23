let modal = document.getElementById('myModal');
let flex = document.getElementById('flex');
let closeModal = document.getElementById('closeModal');
let okModal = document.getElementById('okModal');

function testingDevice(){
    var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (isMobile) {
        document.getElementById('modal-warning-text').innerHTML = "This web app uses a technology to prevent the device go to sleep and lock if the countdown is running, but not all browser supports this.<br><br>If you lock your device manually, the countdown will stop. If you're using Firefox use the app in full screen to prevent the shutdown.<br><br> Supported browsers:<br><br> Chrome, Brave and Firefox in full screen."
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
        var now = new Date();
        now.setTime(now.getTime() + (60*24*60*60*1000))
        document.cookie = "silenceCheck = on; expires = " + now.toUTCString(); + "path=/;";
        modalOff();
        return;
    }
    modalOff(); 
});