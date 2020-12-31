let intervals = document.getElementById('intervals');
let intervalModal = document.getElementById('intervalModal');
let flex2 = document.getElementById('interval-flex');
let closeModalInterval = document.getElementById('closeModalInterval');
let okIntervalModal = document.getElementById('okIntervalModal');




intervals.addEventListener('click', function(){
    intervalModal.style.display = 'block';
});



closeModalInterval.addEventListener('click', function(){
    intervalModal.style.display = 'none';
});



window.addEventListener('click', function(e){
    if(e.target == flex2){
        intervalModal.style.display = 'none';
    }
});


okIntervalModal.addEventListener('click', function(){
    wuMinutes = document.getElementById('warmup').value;
    wuUserMinutes = document.getElementById('warmup').value;
    console.log(wuMinutes);
    intervalModal.style.display = 'none';
    showWarmUp();
    printWuTime();
})

