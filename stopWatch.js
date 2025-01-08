//selecting the buttons//
const startBtn = document.getElementById("start-btn");
const stopBtn = document.getElementById("pause-btn");
const continueBtn = document.getElementById("play-btn");
const resetBtn  = document.getElementById("reset-btn");

let hour = 0;
let minute = 0;
let second = 0;
let millisecond = 0;
let timer = false;

//event listeners for the button//

startBtn.addEventListener("click", ()=>{
    timer = true;
    stopWatch();
});

stopBtn.addEventListener("click", ()=>{
    timer = false;
    clearTimeout(timerInterval);
});

continueBtn.addEventListener("click", ()=>{
    timer = true;
    stopWatch();
});

resetBtn.addEventListener("click", ()=>{
    timer = false;
    clearTimeout(timerInterval);
    hour = 0;
    minute = 0;
    second = 0;
    millisecond = 0;
    document.getElementById("hours").innerHTML = "00:";
    document.getElementById("minutes").innerHTML = " 00:";
    document.getElementById("seconds").innerHTML = " 00:";
    document.getElementById("milliseconds").innerHTML = " 000";
 
});
//function to run stopWatch//
const stopWatch = () =>{
    if(timer){
        millisecond++;
     if(millisecond === 100){
       second++;
       millisecond = 0;
     }
     if(second === 60){
        minute++;
        second =0;
     }
     if(minute === 60){
        hour ++;
        minute =0;
        second =0;
     }
    }
    let hourString =  hour < 10 ? '0' + hour : hour;
    let minuteString = minute < 10? '0' + minute : minute;
    let secondString = second < 10? '0' + second : second;
    let millisecondString = millisecond < 100 ? "00" + millisecond : millisecond < 10 ? '0' + millisecond : millisecond;
   
    document.getElementById("hours").innerHTML = hourString + ":";
    document.getElementById("minutes").innerHTML = minuteString + ":";
    document.getElementById("seconds").innerHTML = secondString + ":";
    document.getElementById("milliseconds").innerHTML = millisecondString;
    // recursive call to the stopWatch function every millisecond//
    timerInterval = setTimeout(stopWatch, 10);
}