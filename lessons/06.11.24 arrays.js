// const letters = [ "a", "b", "c"]
// console.log(letters[0])
// for(let i = 0; i < letters.length; i++ ){
//     console.log(letters[i]) // доступ по индексу
// }

// for(let el of letters){
//     console.log(el) // доступ к элементу
// }

const nums = [ 4, 5, -6, -9, 99]
// let sum = 0
// for(let num of nums ){
//     console.log(num)
//     if(num > 0){
//         sum = sum + num
//     }
// }
// console.log(sum)

//Дан массив с числами. Найдите сумму тех элементов этого массива, которые больше нуля и меньше десяти.

let sum = 0
for(let i = 0; i < nums.length; i++ ){
    //console.log(nums[i])
    if(nums[i] >0 && nums[i] < 10) // объединения нескольких условий
        sum = sum + nums[i]
}
console.log(sum)

// const str = "snow-win-er"
// const arr = str.split("-") // преобразует строку в массив
// console.log(typeof arr) 
// let newstr = arr.join(" ") // преобразует массив в строку
// console.log(newstr)