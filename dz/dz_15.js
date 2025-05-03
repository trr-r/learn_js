//1. Напишите функцию filterRangeInPlace(arr, a, b), которая принимает массив arr 
// и удаляет из него все значения кроме тех, которые находятся между a и b. 
//Функция должна изменять принимаемый массив и ничего не возвращать.
// Например:
// let arr = [5, 3, 8, 1];
// filterRangeInPlace(arr, 1, 4); // удалены числа вне диапазона 1..4
// console.log( arr ); // [3, 1]
//Можно воспользоваться методом splice, почитать о нем можно здесь https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
function filterRangeInPlace(arr, a, b){
    for(let i=0; i<arr.length; i++){
        let el = arr[i]
        if(el>=a && el<=b){
            continue
        }
        else{
            arr.splice(i, 1)
            i = i-1
        }
    }
}
let arr = [5, 7, 8, 1, 5, 10, 2];
filterRangeInPlace(arr, 1, 4); // удалены числа вне диапазона 1..4
console.log( arr )

//1.Выведите текущую дату в формате "год-месяц-день"

// let date = new Date()
// let year = date.getFullYear()
// let month = date.getMonth()+1
// month = month.toString();
// if (month.length < 2) {
//     month = 0 + month;
// }
// let day = date.getDate() // возвращает число
// if (day.length < 2) {
//     day = 0 + day;
// }
// let dateNow = `${year}-${month}-${day}`
// console.log(date)


//2.Посчитайте, сколько часов прошло от 1 января 1991 года до текущего момента.
// let date = new Date()
// const dateOld = new Date('1991-01-01')
// let dateNew = Math.floor(((date - dateOld) / 60000 / 60))
// console.log(dateNew)

//3.Напишите код, который будет выполняться каждые 3 секунды. (на примере любого действия - вывод в консоль, например)
// function printInfo(){
//     console.log('1')
// }
// setInterval(printInfo, 3000) 


// let arr = ["a", "b", "c", "d"]
// arr.splice(1, 0, 'x', '1')
// console.log(arr)
