//1.Дан массив со строками. Оставьте в этом массиве только те строки, которые заканчиваются на .html. сделайте в виде функции

// function web(arr) {
//   for (let el of arr) {
//     if (el.endsWith(".html")) {
//       continue; 
//     } else {
//       const index = arr.indexOf(el);
//       arr.splice(index, 1)
//     }
//   }
//   return arr
// }
// let result = web(["a.html", "b", "c.html", "y"])
// console.log(result)

//2.Дан некоторый массив, например, вот такой:
//[1, 2, 3, 4, 5, 6]
//Найдите сумму первой половины элементов этого массива.

// function half(nums) {
//   let arr = nums. slice ( 0 , nums. length / 2 ) // создаем массив только из первой половины элементов
//   //console.log(arr)
//   let sum = 0
//   for (let num of arr) {
//     sum = sum + num
//   }
//   return sum
// }
// let result = half([1, 2, 3, 4, 5, 6, 7]) // если в массиве не четное число, скорее всего считает не правильно
// console.log(result)

//3. Дан массив с числами. Подсчитайте количество отрицательных чисел в этом массиве.
// Сделайте в виде функции которая принимает массив и возвращает результат

// function count(arr) {
//   for (let el of arr) {
//     if (el.startsWith("-")) {
//       continue; 
//     } else {
//       const index = arr.indexOf(el);
//       arr.splice(index, 1)
//     }
//   }
//   console.log(arr)
//   return arr.length
// }
// let result = count(["-1", "2", "-3"])
// console.log(result)

function count(arr){
  let count2 = 0
  for(let el of arr){
    if (el < 0){
      count2 = count2 + 1
    }
  }
  return count2
}
let result = count([-1, -2, -3])
console.log(result)





