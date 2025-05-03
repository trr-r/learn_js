//1.Eсть несколько записей для студентов с атрибутами: name, ID и marks.
const studentRecords = [
  { name: "John", id: 123, marks: 98 },
  { name: "Baba", id: 101, marks: 23 },
  { name: "yaga", id: 200, marks: 45 },
  { name: "Wick", id: 115, marks: 75 },
];

//Постановка задачи: получить имена студентов и записать их заглавными буквами.
//Ожидаемый результат:
//['JOHN', 'BABA', 'YAGA', 'WICK']

// function arrUpper(studentRecords) {
//   const arr = []
//   for (let el of studentRecords) {
//     arr.push(el.name.toUpperCase())
//   }
//   return arr
// }

// const resultArrUpper = arrUpper(studentRecords);
// console.log(resultArrUpper)

// const nameUpper = studentRecords.map(function(el){ // map не меняет исходный массив, он возвращает новый массив на основании исходного и будет такой же длины
//         return el.name.toUpperCase()
// })
// console.log(nameUpper)

//2.Работайте с тем же массивом данных, что и в первой задаче.
//Функция должна вернуть только те записи студентов, у которых оценки больше 50.

// function maxMarks(studentRecords) {
//   let arr = []
//   for (let el of studentRecords) {
//     if (el.marks > 50) 
//         arr.push(el)
//     else continue
//   }
//   return arr
// }

// const resultMaxMarks = maxMarks(studentRecords);
// console.log(resultMaxMarks)

// const maxMarks = studentRecords.filter(function(el){ // filter не меняет исходный массив, он возвращает новый массив на основании исходного и в нем будут те элементы для которых условие было true
//     return el.marks > 50
// })
// console.log(maxMarks)

//3.С тем же массивом данных найти общую сумму баллов студентов (используя reduce).

function totalMarks(studentRecords) {
  let total = 0
  for (let i = 0; i < studentRecords.length; i++) {
    const currentMarks = studentRecords[i]
    total = total + currentMarks.marks
    //total += currentMarks.marks
  }
  return total
}

const resultTotalMarks = totalMarks(studentRecords);
console.log(resultTotalMarks)

// const sumMarks = studentRecords.reduce(function(sum, el){ // reduce не меняет исходный массив, он возвращает результат каких то действий в зависимости от того что мы делаем, вторым параметром принимает начальное значение для нашего аккумулятора
//     return sum + el.marks
// }, 0
// )
// console.log(sumMarks)


//Если быстро справитесь, то можете также эти задачи решить еще другими способами (без map, filter и reduce)
