let seconds
let timer
const spanTimer = document.querySelector(".timer")
const input = document.querySelector(".input")
const btnStart = document.querySelector(".btn")

function calcTime(){
    let min = Math.floor(seconds/60)
    //console.log(min)
    let sec = seconds - min*60
    if(min.toString().length < 2){
        min = "0"+min
    }
    if(sec.toString().length < 2){
        sec = "0"+sec
    }
    spanTimer.innerHTML = `${min}:${sec}`
}

function minusOne(){
    if(seconds > 0){
        seconds = seconds - 1
        calcTime()
    } else {
        clearInterval(timer)
        btnStart.disabled = false
    }
}

btnStart.addEventListener("click", function () {
    const num = Number(input.value)
    seconds = num * 60
    calcTime()
    timer = setInterval(minusOne, 1000)
    btnStart.disabled = true
})


