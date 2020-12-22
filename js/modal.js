let modal = document.getElementById('myModal');
let flex = document.getElementById('flex');
let closeModal = document.getElementById('closeModal');
let okModal = document.getElementById('okModal');


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
            
            document.cookie = "silenceCheck = on; expires = Thu, 24 Dec 2020 12:00:00 UTC; path=/;";
            if(document.cookie){
                console.log("Cookie Writed!" + document.cookie);
            }
            modalOff();
            return;
        }
    
    modalOff(); 
});
    

function testCookie(){
    if(document.cookie == "silenceCheck=on"){
        console.log("We have cookie from the begining!");
        modalOff();
    }else {
        modalOn();
    }

}