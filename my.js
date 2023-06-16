let seconds = document.getElementById("seconds")
let minutes = document.getElementById("minutes")
let hours = document.getElementById("hours")

let seconds_alarm = document.getElementById("set_alarm_s")
let minutes_alarm = document.getElementById("set_alarm_m")
let hours_alarm = document.getElementById("set_alarm_h")

let hands_seconds = 0
let hands_minutes = 0
let hands_hours = 0

let alarm = new Audio("Radar-1.mp3")

function rotateSeconds(s) {
    if (s <= 0) {
        seconds.style.transition = "0ms linear all"
    }else{
        seconds.style.transition = "1000ms linear all"
    }
    seconds.style.transform = 'rotate('+s*6+'deg)'
}
function rotateMinutes(m) {
    if (m <= 0) {
        minutes.style.transition = "0ms linear all"
    }else{
        minutes.style.transition = "60000ms linear all"
    }
    minutes.style.transform = 'rotate('+m*6+'deg)'
}
function rotateHours(h) {
    if (h <= 0) {
        hours.style.transition = "0ms linear all"
    }else{
        hours.style.transition = "3600000ms linear all"
    }
    hours.style.transform = 'rotate('+h*30+'deg)'
}
function resteTime(h, m, s){
    seconds.style.transform = 'rotate('+s*6+'deg)'
    minutes.style.transform = 'rotate('+m*6+'deg)'
    hours.style.transform = 'rotate('+h*30+'deg)'
}

let timeClock = new Date(),
    h = timeClock.getHours(),
    m = timeClock.getMinutes(),
    s = timeClock.getSeconds()

resteTime(h, m, s)

setInterval(() => {
    timeClock = new Date()
    h = timeClock.getHours()
    m = timeClock.getMinutes()
    s = timeClock.getSeconds()
    console.log("hours: "+h+", minutes: "+m+", seconds: "+s)

    rotateHours(h)
    rotateMinutes(m)
    rotateSeconds(s)

    if(parseInt(seconds_alarm.value) == 0){
        if(m == 0)
        {
            m = 59
            if (h == 0) {
                h = 23
            }else{
                h -= 1
            }
        }else{
            m -= 1
        }
    }
    if(parseInt(minutes_alarm.value) == 0){
        if(h == 0)
        {
            h = 23
        }else{
            h -= 1
        }
    }
    if (h == parseInt(hours_alarm.value) && m == parseInt(minutes_alarm.value) && s == parseInt(seconds_alarm.value)) {
        alarm.play()
        alert("Будильник")
        window.setTimeout(stopAlarm, 1000)
    }
}, 1000)

function stopAlarm() {
    alarm.pause()
}