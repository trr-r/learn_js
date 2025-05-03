// Дано некоторое число:
// 12345
// Найдите сумму цифр этого числа.

// let num = 453453;
// let str = num + "";
// const arr = str.split("");
// console.log(arr);
// let sum = 0;
// for (let digit of arr) {
//   sum = sum + +digit;
//   console.log(sum)
// }
// //console.log(sum);

// let str = 'cat, dog '
// str = str.toUpperCase() // заглавные, не меняет исходную строку
// console.log(str)
// str = str.toLowerCase() // строчные, не меняет исходную строку
// console.log(str)
// let result = str.includes("og ") // проверяет наличие подстроки в строке (возвращает true/false)
// console.log(result)
// let result2 = str.startsWith('cat') // проверяет начало строки (возвращает true/false)
// console.log(result2)
// let result3 = str.endsWith('g') // проверяет конец строки (возвращает true/false)
// console.log(result3)

//Сформировать массив элементов, которые есть, как в первом, так и во втором массиве
const arr = [ 'a', 'b', 'c']
const arr2 = [ 'b', 'c', 'd']
const result = []
for (let el of arr){
    if(arr2.includes(el)){ // проверяет наличие элемента в массиве
        result.push(el) // добавляет элемент в конец массива
    }
}
console.log(result)
console.log(arr.includes('9'))

//Дан массив с числами. Сформируйте новый массив, в котором будут только положительные числа из исходного массива
// const arr = [ -1, 2, -5, 6, 9, 10]
// const result = []
// for (let el of arr){
//     if(el > 0){
//         result.push(el)
//     }
// }
// console.log(result)

//Даны числа, разделенные запятыми:
// '12,34,56'
// Найдите сумму этих чисел.

// let str = "12,34,56";
// const arr = str.split(",");
// console.log(arr);
// let sum = 0;
// for (let el of arr) {
//   sum = sum + +el;
// }
// console.log(sum);
