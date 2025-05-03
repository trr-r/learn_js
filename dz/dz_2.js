// 1.Дана строка. Если в этой строке более одного символа, выведите в консоль предпоследний символ этой строки.
let str = '1'
let length = str.length // получение длины
let lastindex = str.length-1 // получение индекса последнего символа в строке
let lastsibol = str[lastindex] // получение последнего символа в строке по индексу
//console.log(lastsibol)
if(length>1){ // если длина больше 1
    lastsibol = str[lastindex-1]  // выводим предпоследний символ  
    console.log(lastsibol)
}

// 2.Выведите в консоль все числа кратные трем в промежутке от 1 до 100.
// for(let i=3; i < 101; i=i+3){ // начало, условие, шаг
//   //if (i % 3 == 0)// проверка на то что остаток от деления числа i на другое число (3) равен 0
//   console.log(i)
// }

// 3.Найдите сумму всех целых чисел от 1 до 100. (эта задача сложнее, но попробуйте подумать, какая здесь будет логика, вдруг получится).
// let sum = 0
// for(let x=1; x < 101; x=x+1){
//   sum = sum + x
// }
// console.log(sum)

// let result = 1
// for(let x=1; x < 11; x=x+1){
//   result = result * x
// }
// console.log(result)



// 4. Дана строка. Выведите в консоль по очереди все символы с конца строки. (Подумайте, как здесь использовать цикл)
//let word = "catdfsdf";
//let lastindex = word.length - 1; // получение индекса последнего символа в строке
//let lastsibol = word[lastindex]; // получение последнего символа в строке по индексу
//console.log(lastsibol);
// let number = word.length - 1;
// while (number >= 0) {
//   console.log(word[number]);
//   number = number - 1; // сколько раз
// }

// let word = "cat";
// let length = word.length; // получение длины
// console.log(length);
// for (let i = length - 1; i >= 0; i = i-1) {
//   // начало, условие, шаг
//   console.log(word[i]);
// }
