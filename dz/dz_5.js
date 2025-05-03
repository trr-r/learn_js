// 1.Дано некоторое число, например, такое: 123789
// Удалите из этого числа все нечетные цифры. В нашем случае получится такой результат: 28
// Можно не напрямую удалять, а создать новую переменную, в которой будет итоговый результат

// let nums = 1237849;
// let str = nums + ""
// const arr = str.split("") // создаем массив
// let result = []
// for (let el of arr) {
//   if (el % 2 === 0) {
//     // находим все четные цифры
//     result.push(el); // добавляем в результат все четные
//   }
// }
// let resultStr = result.join("")
// console.log(resultStr) // выводим в консоль в виде строки

// 2.Напишите функцию min(a,b), которая возвращает меньшее из чисел a и b.
// Пример вызовов:
// min(2, 5)  -  2
// min(3, -1)  - -1
// вызов функции можно выводить в консоль, чтобы посмотреть, что она возвращает

// function min(a, b) {
//   let minNum = Math.min(a, b)
//   return minNum
// }
// const result1 = min(2, 5)
// const result2 = min(3, -1)
// console.log(result1, result2)

// function min2(a, b) {
//     if (a > b){
//         return b
//     }
//     else {
//         return a
//     }
// }
// const result1 = min2(25, 5)
// console.log(result1)


// 3.Напишите функцию pow(x,n), которая возводит x в степень n и возвращает результат.
// pow(3, 2) = 3 * 3 = 9
// pow(3, 3) = 3 * 3 * 3 = 27

// function pow(x, n) {
//   let num = Math.pow(x, n)
//   return num
// }
// const result1 = pow(3, 2)
// const result2 = pow(3, 3)
// console.log(result1, result2)

function pow(x, n){
    let result = x
    n-1, result * x
    return result
}
const result1 = pow(4, 3)
console.log(result1)



// цикл будет на 1 раз меньше чем указанная степень
// let result = x
// n-1, result * x