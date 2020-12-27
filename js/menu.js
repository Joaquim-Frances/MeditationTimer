let closeMenu = document.getElementsByClassName('closeMenu');


// closeMenu.addEventListener('click', function(){
//     menu.style.display ='none';
// });

window.addEventListener('click', function(e){
    if(e.target == flex){
        menu.style.display = 'none';
    }
});