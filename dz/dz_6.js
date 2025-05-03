// 1. Написать функцию, получающую на вход два числа.
//Если оба числа чётные - функция возвращает их произведение.
//Если оба числа нечётные - функция возвращает их сумму.
//Если одно из чисел чётное, а второе нечётное - функция возвращает это нечётное число.

// function num(a, b) {
//   if (a % 2 === 0 && b % 2 === 0) {
//     // проверяем что числа четные
//     return a * b;
//   } else if (a % 2 == 1 && b % 2 == 1) {
//     // проверяем что числа не четные
//     return a + b;
//   } else if (a % 2 === 0) {
//     return b;
//   } // если а четное возвращаем б, если нет возвращаем а
//   else {
//     return a;
//   } // если нет возвращаем а
// }
// const result = num(3, 4);
// console.log(result);

// 2. Сделайте функцию, которая принимает параметром число от 1 до 7, а возвращает день недели на русском языке.
// function num(a) {
//     if (a == 1){
//         return 'Понедельник'
//     }
//     else if (a == 2){
//         return 'Вторник'
//     }
//     else if (a == 3){
//         return 'Среда'
//     }
//     else if (a == 4){
//         return 'Четверг'
//     }
//     else if (a == 5){
//         return 'Пятница'
//     }
//     else if (a == 6){
//         return 'Суббота'
//     }
//     else if (a == 7){
//         return 'Воскресенье'
//     }
//     else { 'Не найдено'
//     }
// }
// const result = num(2)
// console.log(result)


// function num2(a){
//     const arr = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье']
//     return arr[a-1]
// }
// const result2 = num(3)
// console.log(result2)

// 3. Напишите функцию JavaScript, которая принимает два аргумента: строку и букву.
//Функция должна подсчитывать количество вхождений указанной буквы в строке. И возвращать это как результат

function char_count1(str, letter) {
    const result = []
    for (let el of str){
        if(el === letter){
            result.push(str)
        }
        }
        return result.length
    }
const result = char_count1('с новым годом', 'о')
console.log(result)

// здесь пыталась сделать такую логику: циклом перебираем каждую букву в str и сравниваем ее с letter,
// если она совпадает то добавляем в массив и потом выводим длину массива

function char_count(str, letter) {
    let count = 0
    for (let el of str){
        if(el === letter)
            count = count + 1
        //console.log(el)

    }
    return count
}
const result2 = char_count('с новым годом', 'м')
console.log(result2)