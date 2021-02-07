let intervals = document.getElementById('intervals');
let intervalModal = document.getElementById('intervalModal');
let flex2 = document.getElementById('interval-flex');
let closeModalInterval = document.getElementById('closeModalInterval');
let okIntervalModal = document.getElementById('okIntervalModal');
let sideMenu = document.getElementById('check');
let wuTimeSelect = 0;
let bellMinutes = 0;




intervals.addEventListener('click', function(){
    intervalModal.style.display = 'block';
    wuModalTimePrint();
});



closeModalInterval.addEventListener('click', function(){
    intervalModal.style.display = 'none';
    sideMenu.checked = false;
});



window.addEventListener('click', function(e){
    if(e.target == flex2){
        intervalModal.style.display = 'none';
        sideMenu.checked = false;
    }
});

function wuModalTimePrint(){
    switch (wuTimeSelect) {
        case 0:
            wuMinutes = 0;
            wuSeconds = 0;
            wuUserMinutes = 0;
            wuUserSeconds = 0;
            document.getElementById('warmup-time').innerHTML = "No Warm Up"
            break;
        case 1:
            wuMinutes = 0;
            wuSeconds = 30;
            wuUserMinutes = 0;
            wuUserSeconds = 30;
            document.getElementById('warmup-time').innerHTML = "30 Seconds"
            break;
        case 2:
            wuMinutes = 1;
            wuSeconds = 0;
            wuUserMinutes = 1;
            wuUserSeconds = 0;
            document.getElementById('warmup-time').innerHTML = "1 Minute"
            break;
        case 3:
            wuMinutes = 2;
            wuSeconds = 0;
            wuUserMinutes = 2;
            wuUserSeconds = 0;
            document.getElementById('warmup-time').innerHTML = "2 Minutes"
            break;
        case 4:
            wuMinutes = 3;
            wuSeconds = 0;
            wuUserMinutes = 3;
            wuUserSeconds = 0;
            document.getElementById('warmup-time').innerHTML = "3 Minutes"
            break;  
        case 5:
            wuMinutes = 4;
            wuSeconds = 0;
            wuUserMinutes = 4;
            wuUserSeconds = 0;
            document.getElementById('warmup-time').innerHTML = "4 Minutes"
            break;  
        case 6:
            wuMinutes = 5;
            wuSeconds = 0;
            wuUserMinutes = 5;
            wuUserSeconds = 0;
            document.getElementById('warmup-time').innerHTML = "5 Minutes"
            break;
        case 7:
            wuMinutes = 6;
            wuSeconds = 0;
            wuUserMinutes = 6;
            wuUserSeconds = 0;
            document.getElementById('warmup-time').innerHTML = "6 Minutes"
            break;
        case 8:
            wuMinutes = 7;
            wuSeconds = 0;
            wuUserMinutes = 7;
            wuUserSeconds = 0;
            document.getElementById('warmup-time').innerHTML = "7 Minute"
            break;
        case 9:
            wuMinutes = 8;
            wuSeconds = 0;
            wuUserMinutes = 8;
            wuUserSeconds = 0;
            document.getElementById('warmup-time').innerHTML = "8 Minutes"
            break;
        case 10:
            wuMinutes = 9;
            wuSeconds = 0;
            wuUserMinutes = 9;
            wuUserSeconds = 0;
            document.getElementById('warmup-time').innerHTML = "9 Minutes"
            break;  
        case 11:
            wuMinutes = 10;
            wuSeconds = 0;
            wuUserMinutes = 10;
            wuUserSeconds = 0;
            document.getElementById('warmup-time').innerHTML = "10 Minutes"
            break;  
    }
}

function wuTimeCycleUp(){
    wuTimeSelect ++;
    wuModalTimePrint()
    if(wuTimeSelect >= 11){
        wuTimeSelect = 11;
        return;
    }
}
function wuTimeCycleDown(){
    wuTimeSelect --;
    wuModalTimePrint()
    if(wuTimeSelect <= 0){
        wuTimeSelect = 0;
        return;
    }
}


okIntervalModal.addEventListener('click', function(){
    bellMinutes = document.getElementById('everyMinutes').value;
    let cookieEvery = new Cookier('cookieEvery', bellMinutes, 60);
    cookieEvery.writeCookie();
    let cookieWu = new Cookier('cookieWu', wuUserMinutes, 60);
    cookieWu.writeCookie();
    intervalModal.style.display = 'none';
    sideMenu.checked = false;
    intervalsList();
    showWarmUp();
    printWuTime();
    printTime();
})



