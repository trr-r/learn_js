//1.Дан массив с числами. Подсчитайте количество отрицательных чисел в этом массиве. Выведите результат в консоль
//const arr = [ -1, 2, -5, 6, -9, -10]
// const result = []
// for (let el of arr){
//     if(el < 0){
//         result.push(el)
//     }
// }
// console.log(result.length)

// let num = 0
// for (let el of arr){
//     if(el < 0){
//         num = num + 1
//     }
// }
// console.log(num)

//2.Даны два слова. Проверьте, что последняя буква первого слова совпадает с первой буквой второго слова. 
//Если они совпадают, выведите в консоль "да", если не совпадают, выведите в консоль "нет"
// let word1 = 'red'
// let word2 = 'drose'
// let lastindex1 = word1.length-1 // получение индекса последнего символа в строке
// let lastsimbol1 = word1[lastindex1] // получение последнего символа в строке по индексу
// let firstsimbol2 = word2[0]; // первая буква второго слова
// console.log(lastsimbol1)
// console.log(firstsimbol2)
// if (lastsimbol1 === firstsimbol2){
//     console.log('yes')
// }
// else {
//     console.log('no')
// }

//3.Найдите сумму всех целых нечетных чисел в промежутке от 1 до 100. Результат нужно вывести в консоль
// let sum = 0
// for (let i = 1; i < 101; i = i+2) { // получили список нечетных чисел
//     sum = sum + i
//   }
// console.log(sum);

//4.Дана некоторая строка: 'abcde'
//Переведите в верхний регистр все нечетные буквы этой строки. В нашем случае должно получится следующее: 'AbCdE'
let str = 'abcde'
const arr = str.split("")
//console.log(arr)
const result = [] 
for (let i = 0; i < arr.length; i++){
    if(i%2===0){
        result.push(arr[i].toUpperCase())
    }
    else{ 
        result.push(arr[i])    
    }
}
console.log(result.join(''))





// const changeArr = function(arr){
//     const newArr = []
//     for (let num of arr){
//         if(num%5 === 0){
//             newArr.push(num)
//         }  
//     }
//     return newArr
// }
// const result = changeArr([1,2,5,12,15,21])
// console.log(result)
