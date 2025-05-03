//1.Дан некоторый массив, например, вот такой:
//[17, 62, 13, 4, 35, 16]
//Поделите сумму элементов, стоящих на четных позициях, на сумму элементов, стоящих на нечетных позициях.

// const arrNum = [17, 62, 13, 4, 35, 16]
// let evenNum = [] // массив с элементами на четных позициях
// let oddNum = [] // массив с элементами на нечетных позициях

// for(let el of arrNum){
//     if(arrNum.indexOf(el)% 2 === 0){ // находим нечетные
//         oddNum.push(el)
//     }
//     else evenNum.push(el) // остальные четные
// }

// //получаем сумму на четных
// const sumEvenNum = evenNum.reduce(function(sum, num){
//     return sum + num
// }
// )

// //получаем сумму на нечетных
// const sumOddNum = oddNum.reduce(function(sum, num){
//     return sum + num
// }
// )

// const result = sumEvenNum/sumOddNum
// console.log(sumEvenNum, sumOddNum, result)

//2.Дан массив с числами. После каждого однозначного числа вставьте еще такое же.
//Пример: [34,3,12,5,6,18]
//Результат: [34,3,3,12,5,5,6,6,18]

const arrNum = [34,3,12,5,6,18,10,9]
const result = []
for(let el of arrNum){
  if(el<10){
    result.push(el,el)
  } else result.push(el)
}
console.log(result)

//3.Дан массив:
//[
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ]
// Найдите сумму элементов этого массива.

//const arr = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ]
// let newArr = []
// for (let el of arr) {
//   newArr = newArr.concat(el)
// }
// const resultReduce = newArr.reduce(function (sum, num) {
//   return sum + num
// }, 0)
// console.log(resultReduce)

//4.const salaries = {
//   "John": 100,
//   "Pete": 300,
//   "Mary": 250
// };
// Создайте функцию topSalary(salaries), которая возвращает имя самого высокооплачиваемого сотрудника.

// Если объект salaries пустой, то нужно вернуть null.
// Если несколько высокооплачиваемых сотрудников, можно вернуть любого из них.

// function topSalary(salaries) {
//   let max = 0 // записываем самое большое значение
//   let employer = null
//   for (let [name, salary] of Object.entries(salaries)){
//     if (salary > max) {
//         max = salary
//         employer = name
//       }
    // if(max > 0){
    //   return max // не придумала как возвращать имя
    // }
    // else return null
//   }
//   return employer
// }

// const salaries = {
//   John: 100,
//   Pete: 300,
//   Mary: 250,
// }
// console.log(topSalary(salaries))

// Object.keys(salaries)
// Object.values(salaries)
