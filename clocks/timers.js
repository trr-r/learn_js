function printInfo(){
    console.log('1')
}
//setTimeout(printInfo, 5000) // работает 1 раз спустя заданный промежуток времени
console.log('2')
console.log('3')
setInterval(printInfo, 1000) // работает много раз с заданным интервалом