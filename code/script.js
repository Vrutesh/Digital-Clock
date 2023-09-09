let hrs=document.getElementById("hrs")
let minutes=document.getElementById("min")
let seconds=document.getElementById("sec")



setInterval(()=>{
    let currentTime = new Date()
    
    hrs.innerHTML=(currentTime.getHours()<10?"0":"") + currentTime.getHours()
    minutes.innerHTML=(currentTime.getMinutes()<10?"0":"") + currentTime.getMinutes()
    seconds.innerHTML=(currentTime.getSeconds()<10?"0":"") + currentTime.getSeconds()
},1000)

let day=document.getElementById("day")
let date=document.getElementById("date")
let month=document.getElementById("month")
let year=document.getElementById("year")

let daysofweek =['Sunday','Monday','Tuesday','Wednesday','Thrusday','Friday','Saturday'];
let monthsofyear = ['January','February','March','April','May','June','July','August','September','October','November','December'];

let currentDate = new Date()

day.innerHTML=daysofweek[currentDate.getUTCDay()]
date.innerHTML=(currentDate.getDate()<10?"0":"") + currentDate.getDate()
month.innerHTML=monthsofyear[currentDate.getMonth()]
year.innerHTML=currentDate.getFullYear()





// days.innerHTML=dateobj.getDay()













