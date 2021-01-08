function playSound(){
    console.log("Sound Played!");
    let gong = new Audio('./src/singingbowl.mp3');
    gong.play();
    return;
}