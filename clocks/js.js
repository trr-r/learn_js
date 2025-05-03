function test(nums){
    for(let el of nums){
        if(el === 5){
            return 'ok'
        }
    }
    return 'no'
}
//console.log(test([1,4,7]))

let date = new Date()
//console.log(typeof date)
let year = date.getFullYear()
let month = date.getMonth()+1
//let day = date.getDay() // возвращает день недели
let day = date.getDate() // возвращает число
let hours = date.getHours()
let minutes = date.getMinutes()
let seconds = date.getSeconds()
let dateString = date.toString()
console.log(typeof dateString)

console.log(date, hours, minutes, seconds)
console.log(date.toDateString())
console.log(date.toTimeString())
console.log(date.toLocaleString("de-DE"))
//let a = Date.now()
//console.log(a)