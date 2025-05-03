// Задача 1: Поиск уникального элемента в массиве
// Описание задачи:
// Напишите функцию, которая находит уникальный элемент в массиве чисел, где все числа повторяются дважды, за исключением одного.
// Если такого числа нет, то функция вернет null

// Пример использования функции
// const arrayExample = [1, 2, 3, 4, 1, 2, 3];
// console.log(findUniqueElement(arrayExample)); ``// Выведет 4
// const arrayExample2 = [1, 2, 3, 4, 1, 2, 3, 4];
// console.log(findUniqueElement(arrayExample2)); ``// Выведет null

// lastIndexOf() Ищет последнее вхождение элемента в массиве или подстроки в строке и возвращает индекс найденного элемента.
// работает аналогично методу Array.indexOf(),но начинает поиск с конца массива.

// indexOf() Ищет вхождение элемента в массив или подстроки в строку и возвращает индекс.
// Вернётся индекс первого найденного элемента или -1, если ничего не нашлось.

// function findUniqueElement(){
//     let uniqueElement = []
//     for (let el of arrayExample) {
//         let num1 = arrayExample.indexOf(el)
//         let num2 = arrayExample.lastIndexOf(el)
//         //let num3 = null
//         if (num1 == num2){
//             uniqueElement.push(el)
//         }
//         // if (num1 !== num2){
//         //     uniqueElement.push(null) // тут никак не соображу чтоб цикл не сравнивал, а просто возвращал один null
//         //     //uniqueElement.push(num3)
//         // }
//         else continue
// }
// if (uniqueElement.length === 0){
//   return null
// }
// //return uniqueElement
// return uniqueElement.join(",")
// }
// const arrayExample = [1, 2, 3, 1, 2, 3];
// console.log(findUniqueElement(arrayExample))

// 2.Функция принимает строку.
// Посчитать количество гласных букв в ней и вернуть их количество.
// (строки только с латиницей, то есть сравниваем с гласными английского языка)

// function numOfVowels(){
//     let count = 0
//     const vowels = 'a,e,i,o,u,y'
//     for (let el of str) {
//         if(vowels.includes(el)){
//             count = count + 1
//         }
// }
// return count
// }
// const str = 'Hello world'
// console.log(numOfVowels(str))

// 3. Написать функцию, которая принимает массив и возвращает массив,
// в котором все значения из исходного массива встречаются только по одному разу.
// Пример массива - const fruits = ['kiwi', 'apple', 'kiwi', 'orange', 'kiwi', 'apple'];
// должно получиться [ "kiwi", "apple", "orange" ]

function deleteDublicates(fruits) {
  const unique = [];
  for (let el of fruits) {
    if (unique.includes(el)) {
      continue;
    } else unique.push(el);
  }
  return unique;
}
const fruits = ["kiwi", "apple", "kiwi", "orange", "kiwi", "apple"];
const unique = new Set (fruits)
console.log(unique)
const uniqueArr = [...unique]
console.log(...uniqueArr)
