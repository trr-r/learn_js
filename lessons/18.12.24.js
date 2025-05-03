//const str = 'Hello, Ivan'
//console.log(str.startsWith('Hello'))
//console.log(str.endsWith('Iva'))


//Дан массив со строками. Оставьте в этом массиве только те строки, которые начинаются на
//http://.

//const arr = ['http://abc', 'a', 'http://drt', 'y']
// for(let el of arr){
//     if (el.startsWith('http://')){ 
//         continue // в этой итерации цикла ничего не делаем, переходим к следующей
//     }
//     else {
//         const index = arr.indexOf(el) // indexOf определяет индекс какого-то элемента в массиве
//         arr.splice(index, 1) // splice позволяет нам удалить любое количество элементов из массива, 1й параметр - индекс с которого начинаем удаление, 2й параметр - количество удаляемых элементов
//     }
// }
// console.log(arr)

// for(let i=0; i<arr.length; i++){
//     //console.log(i)
//     //console.log(arr[i]) // выводим в консоль текущий элемент массива
//     if (arr[i].startsWith('http://')){
//         continue
//     }
//     else {
//         arr.splice(i, 1)
//     }
// }
// console.log(arr)


//Дан массив с числами. Увеличьте каждое число из массива на 10 процентов. 
//Создайте новый массив с увеличенными числами


function calc(arr){
    const arr2 = []
    for(let i=0; i<arr.length; i++){
        //console.log(arr[i]* 1.1)
        const num = arr[i]* 1.1
        arr2.push(num)
    }
    console.log(arr2)
}
calc([1, 4, 3])
calc([5, 6, 8])


    