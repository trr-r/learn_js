const time = document.querySelector(".time");
const button = document.querySelector(".btn");
let timerId
console.log(timerId)

const getTime = function () {
  let date = new Date();
  let hour = date.getHours();
  let min = date.getMinutes();
  let seconds = date.getSeconds();

  seconds = seconds.toString();
  if (seconds.length < 2) {
    seconds = 0 + seconds;
  }

  min = min.toString();
  if (min.length < 2) {
    min = 0 + min;
  }

  hour = hour.toString();
  if (hour.length < 2) {
    hour = 0 + hour;
  }

  let clock = `${hour}:${min}:${seconds}`;
  time.innerHTML = clock;
}

button.addEventListener("click", function () {
    if(!timerId){
        getTime()
        timerId = setInterval(getTime, 1000)
        console.log(timerId)
    }
    else{
        clearInterval(timerId)
        timerId = null
        time.innerHTML = '00:00:00'
    }
})