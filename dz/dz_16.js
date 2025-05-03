//2.Сделайте функцию, которая принимает массив любых целых чисел,
//которая возвращает истину, если хотя бы один элемент нечетный, если все четные, то false.
function number(arr) {
  let numberOdd = [] // четные
  for (let el of arr) {
    // если есть четное, то добавляем в numberOdd
    if (el % 2 === 0) {
      numberOdd.push(el)
    }
  }
  // сравниваем длину массивов, если они равны, значит все числа из arr попали в numberOdd
  if (numberOdd.length === arr.length) {
    return false
  } else {
    return true
  }
}
//let arr = [2, 4, 2]
let arr = [5, 7, 8, 1, 5, 10, 2]
console.log(number(arr))

function number2(arr){
  for(let el of arr){
    if(el % 2 == 1){
      return true
    }
  }
  return false
}
