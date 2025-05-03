// первый этап создание функции 
// function printInfo(){ 
//     console.log('Hello')
// }
// второй этап вызов функции
// printInfo()
// printInfo()
// printInfo()

function sum(a, b){
    let summ = a+b
    return summ // возвращает значение из функции и после него команды работать не будут
    console.log(7)
}
sum(4, 5)
sum(49, 85)
const result = sum(3,6)
console.log(result)
// // получение доступа к кнопки из html
// const btn = document.querySelector("button")
// console.log(btn) 
// // при клике на кнопку мы вызываем функцию printInfo
// btn.addEventListener("click", printInfo)