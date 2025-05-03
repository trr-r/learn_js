const studentRecords = [
    { name: 'John', id: 123, marks: 98 },
    { name: 'Baba', id: 101, marks: 23 },
    { name: 'yaga', id: 200, marks: 45 },
    { name: 'Wick', id: 115, marks: 75 }
    ]
let marks = 0
for(let el of studentRecords){
    console.log(el.name)
    if(el.marks > 50){
        marks = marks + el.marks
    }
}
console.log(marks) // сумма

const arr = []
for(let el of studentRecords){
    if(el.marks > 50){
        arr.push(el.marks)
    }
}
console.log(arr) // сколько элементов
const average = marks / arr.length
console.log(average)

