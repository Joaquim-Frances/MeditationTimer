let modal = document.getElementById('myModal');
let flex = document.getElementById('flex');
let openModal = document.getElementById('openModal');
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
        console.log("Check is marked");
        modalOff();
    }


});