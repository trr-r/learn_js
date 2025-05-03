//const arr = [4, 6, 7, 9, 10]
// const resultMap = arr.map(function(el, i, numbers){
//     console.log(el, i, numbers)
// })


// const resultMap = arr.map(function(el){ // map не меняет исходный массив, он возвращает новый массив на основании исходного и будет такой же длины
//         return el * 2
// })
// console.log(resultMap, arr)

// const resultFilter = arr.filter(function(el){ // filter не меняет исходный массив, он возвращает новый массив на основании исходного и в нем будут те элементы для которых условие было true
//     return el > 5
// })
// console.log(resultFilter)

// const sumReduce = arr.reduce(function(sum, el){ // reduce не меняет исходный массив, он возвращает результат каких то действий в зависимости от того что мы делаем, вторым параметром принимает начальное значение для нашего аккумулятора
//     return sum + el
// }, 0
// )
// console.log(sumReduce)

// Дан массив строк. Получить массив тех строк, длина которых больше 5
// const arr = ['12345', '123', 'adc', 'werrr rer', 'asdfgg']
// const resultFilter = arr.filter(function(el){
//     return el.length > 5
// })
// console.log(resultFilter)

// Дан массив чисел. Получить массив, где каждый элемент будет умножен на его индекс.
// const arr = [4, 6, 7, 9, 10]
// const resultMap = arr.map((el, i) => {
//     return el * i
// })
// console.log(resultMap)

// Каждый элемент возвести в квадрат
const arr = [4, 6, 7, 9, 10]
const resultMap = arr.map((el)=>{
    //return el ** 2
    return Math.pow(el, 2)
})
console.log(resultMap)



