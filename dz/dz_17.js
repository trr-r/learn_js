// 2. Дан массив с числами. Увеличьте каждое число из массива на 10 процентов. Сделайте двумя способами - через цикл и без него.

// const arr = [5, 20, 54.60]
// let arr2 = []
// for (let el of arr){
//     //console.log(el+(el * 0.10))
//     arr2.push(el * 1.1)
// }
// console.log(arr2)

// const resultMap = arr.map(function(el){ // map не меняет исходный массив, он возвращает новый массив на основании исходного и будет такой же длины
////         return el+(el * 0.10)
//          return el * 1.1

// })
//console.log(resultMap)

// 3. Выведите в консоль все числа в промежутке от 1 до 1000, сумма первой и второй цифры которых равна пяти.
// например, 14, 23, 50, 329, 507, 143

let num = []
for(let i=1; i < 1001; i=i+1){ 
  num.push(i.toString())
}
let result = []
for(let el of num){
  if((Number(el[0])+Number(el[1]))===5){
    result.push(el)
  }
  else continue
}
console.log(result.join(', '))