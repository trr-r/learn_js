//Написать функцию, которой передаем, имя, фамилия и возраст, и получаем строку "Привет Иван Петров с возрастом 17 лет" 
//только здесь данные, которые были переданы в функцию)

// function hi(name, lastName, age){
//     let str = `Привет ${name} ${lastName} с возрастом ${age} лет`
//     return str 
// }
// console.log(hi("Иван", "Петров", 17))



//Написать функцию, которая принимает массив чисел, например [1,2,3,4,5] и функция возвращает среднее арифметическое
// function average(nums){
//     let sum = 0
//     for (let num of nums){
//         sum = sum + num 
//     }
//     return sum/nums.length
// }
// let result = average([1,2,3,4,5])
// console.log(result)


// function num(a,b){
//     console.log(a+b)
// }
// num(1,5)

// const num2 = function(a,b){
//     return a+b
// }
// console.log(num2(4,6))

// const num3 = (a,b) => (a+b)
// console.log(num3(4,7))

//Сделай функцию, которая принимает массив любых целых чисел, которая возращает новый массив, 
//где все элементы кратны пяти. ([1,2,5,12,15,21] вернет [5,15])

const changeArr = function(arr){
    const newArr = []
    for (let num of arr){
        if(num%5 === 0){
            newArr.push(num)
        }  
    }
    return newArr
}
const result = changeArr([1,2,5,12,15,21])
console.log(result)