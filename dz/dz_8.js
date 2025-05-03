//1. Дан массив чисел. На основании этого массива получить новый массив, где будут только те элементы, которые делятся на 3 без остатка. 
//Сделать двумя способами - как через цикл, так и с помощью одного из трех новых методов.

// function calc(arr){
//     const arr2 = []
//     for(let el of arr){
//             if (el % 3 == 0)
//                 arr2.push(el)
//             }
//             return arr2
//         }

// const result = calc([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19])
// console.log(result)

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]
// const resultFilter = arr.filter(function(el){ // filter не меняет исходный массив, он возвращает новый массив на основании исходного и в нем будут те элементы для которых условие было true
//     return el % 3 == 0
// })
// console.log(resultFilter)


//2. Дан массив строк. Получить массив такой же длины, где каждая исходная строка будет написана заглавными буквами.

const arr = ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье']
// const resultMap = arr.map(function(el){ 
//     return el.toUpperCase() 
// })
// console.log(resultMap)

//3. Дан массив строк. Получить массив, в котором будут содержаться только первые буквы исходных строк.

// function firstLetter(arr){
//     const arr2 = []
//     for(let el of arr){
//         arr2.push(el[0]) // доступ к элементу
//     } 
//     return arr2
// }
// let result = firstLetter(['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'])
// console.log(result)

const resultMap = arr.map(function(el){
    return el[0]
})
console.log(resultMap)

