// "use strict";
const selectMenu = document.querySelectorAll("select");
let currentTime = document.querySelector("h1");
let setAlarmbtn = document.querySelector("button");
let content = document.querySelector(".content");
let alarmTime,isAlarmSet=false;
ringtone = new Audio("alarm_clock_old.mp3");

for(let i=12;i>0;i--)
{
    i=i<10 ? "0"+i : i; 
    let option = `<option value="${i}">${i}</option>`;
    selectMenu[0].firstElementChild.insertAdjacentHTML("afterend",option);
}
var iiiii= 50;
for(let i=59;i>=0;i--)
{
    i=i<10 ? "0"+i : i; 
    let option = `<option value="${i}">${i}</option>`;
    selectMenu[1].firstElementChild.insertAdjacentHTML("afterend",option);
}

for(let i=2;i>0;i--)
{
    let ampm = i == 1 ? "AM" : "PM"; 
    let option = `<option value="${ampm}">${ampm}</option>`;
    selectMenu[2].firstElementChild.insertAdjacentHTML("afterend",option);
}

setInterval(()=>{
    let date = new Date();
    h=date.getHours();
    m=date.getMinutes();
    s=date.getSeconds();
    ampm="AM";
    if(h>=12)
    {
        h=h-12;
        ampm="PM";

    }

    h=h<10 ? "0" + h : h;
    m=m<10 ? "0" + m : m;
    s=s<10 ? "0" + s : s;

    currentTime.innerText=`${h}  :  ${m} : ${s}  ${ampm}`;
    

    if(alarmTime == `${h}:${m} ${ampm}`)
    {
        console.log("alarm ringing");
        ringtone.play();
        ringtone.loop=true;
    }




},1000);

function setAlarm()
{
    if(isAlarmSet)
    {
        alarmTime = "";
        ringtone.pause();
        content.classList.remove("disable");
        setAlarmbtn.innerHTML="Set Alarm";
        return isAlarmSet=false;


    }
    //get selected minute and hours 
    let time = `${selectMenu[0].value}:${selectMenu[1].value} ${selectMenu[2].value}`;
   
    if(time.includes("Hour") || time.includes("Minute") || time.includes("AM/PM"))
    {
        return alert("please select valid alarm");
    }
    isAlarmSet=true;
    alarmTime = time;  
    content.classList.add("disable");
    setAlarmbtn.innerHTML="Clear Alarm";
    
}

setAlarmbtn.addEventListener("click",setAlarm);

