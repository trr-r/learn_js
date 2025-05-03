//1. Подготовить картинки камень, ножницы и бумага (можно любые на белом фоне или на прозрачном), добавить их в папку с проектом.
//2. Дан массив с числами. Найдите сумму положительных элементов этого массива.
// const nums = [1, 2, -3, 4, 1, -2, 3]
// let result = 0
// for (let el of nums) {
//     if (el > 0) {
//         result = result + el
//     }
//  }
//  console.log(result)

//3.Дано некоторое число: 12345 Переверните его: 54321
// let nums = 12345
// let strNums = nums.toString()
// let arr = strNums.split('').reverse()
// let newStr = Number(arr.join('')) 
// console.log(newStr)
// let result = ""
// for (let i = strNums.length - 1; i >= 0; i--) {
//   result = result + strNums[i]
// }
// console.log(result)

//4.Создайте функцию, которая принимает три числа и выводит в консоль их произведение.
// function multiply(a,b,c) {

// //   let strNums = nums + ""
// //   let result = 1
// //   for (let i of strNums) {
// //     result = result * i
//   return a*b*c
// }
// console.log(multiply(1,2,3))

//5.У вас есть предложение, в котором слова разделены пробелами. Получить из этой строки массив слов.
// Развернуть массив в обратном порядке, а после этого обратно соединить в строку, чтобы между строками были запятые.
// Пример:
// исходная строка: "сегодня хорошая погода"
// результат: "погода,хорошая,сегодня"

const str = 'сегодня хорошая погода'
let arr = str.split(" ")
let reverseArr = arr.reverse()
let result = reverseArr.join(',')
console.log(result)
// let arrRevers = []
// for(let i= arr.length - 1; i >= 0; i--)
//     {
//         arrRevers.push(arr[i])
//  }
//  let strRevers = arrRevers.join(",")
 //console.log(strRevers)
