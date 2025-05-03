//1. Функция принимает число. Например, 74631. Нужно проверить, что все цифры числа больше трех.
//Если это так, то функция возвращает true, если нет, то возвращает false

// function maxThree(num) {
//   let arrayNum = ("" + num).split("") // перевела число в массив
//   let numMaxThree = [] // добавляю сюда все цифры больше трех
//   for (let el of arrayNum) {
//     if (el > 3) {
//       numMaxThree.push(el)
//     }
//   }
//   if (numMaxThree.length === arrayNum.length) { // если длина numMaxTree не равна array, значит какая то цифра была больше 3х
//     return true
//   } else return false
// }
// console.log(maxThree(74631))

// 2.Функция принимает строку в формате:
// 'kebab-case'
// Преобразуйте ее в формат и верните ее:
// 'snake_case'

// function revert(str) {
//     let newStr = str.slice(6)
//     return ('snake_' + newStr)
// }
// console.log(revert('kebab-case'))

//3.Сделайте функцию, которая параметром будет принимать
//массив с числами и возвращать максимальное и минимальное значение из этого массива в виде следующего объекта:
// {
//   max: 9,
//   min: 1,
// }

function maxAndMin(nums) {
  const object = 
    {
      max: Math.max(...nums),
      min: Math.min(...nums)
    }

  return object
}
//console.log(maxAndMin([1, 4, 5, 2, 9]))

function maxMin2(nums){
    let min = nums[0]
    let max = nums[0]
    for(let i=1; i<nums.length; i++){
        if(nums[i]<min){
            min = nums[i]
        }
        if(nums[i]>max){
            max=nums[i]
        }
    }
    return {
        max: max,
        min: min
    }
}
console.log(maxMin2([1, 4, 5, 2, 9]))
