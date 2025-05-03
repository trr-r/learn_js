const user = {
    name: "Ivan",
    age: 25,
    other: ['a', 'b', 'c'],
    showInfo: function(num){
        console.log(`Name: ${this.name}, age: ${this.age + num}`)
    },
    //el: true
}
user.lastname = 'Ivanov'
user.calcYear = function(){
    console.log(2025 - this.age) // можем добавить свойства и методы в созданный раньше объект
}
//console.log(user)
//user.calcYear()
const keys = Object.keys(user) // получить массив всех ключей
console.log(keys)
// const values = Object.values(user) // получить массив всех значений
// console.log(values)
//const entries = Object.entries(user) // получить массив массивов с парами ключ:значение
//console.log(entries)


// console.log(user.other[0])
// user.age = 26
// console.log(user)

// //delete user.age // удаление свойства из объекта
// console.log(user)

// user.showInfo(2)

//for(let key in user){
    //console.log(user[key])
//}

//console.log("nam" in user)

// const employees = [
//     {
//     name: 'name1',
//     salary: 300,
//     age: 28,
//     },
//     {
//     name: 'name2',
//     salary: 400,
//     age: 29,
//     },
//     {
//     name: 'name3',
//     salary: 500,
//     age: 30,
//     },
//     {
//     name: 'name4',
//     salary: 600,
//     age: 31,
//     },
//     {
//     name: 'name5',
//     salary: 700,
//     age: 32,
//     },
//     ];
// const div = document.querySelector(".cont") // получаем доступ к любому html тегу на странице
// for(let el of employees){
//     //console.log(el.age)
//     const htmlEl = document.createElement('p') // создаем тег, указываем какой именно
//     htmlEl.innerHTML = `Name: ${el.name}, age: ${el.age}` // помещаем данные внутрь тега
//     div.appendChild(htmlEl) // добавляем созданный тег в div
// }
