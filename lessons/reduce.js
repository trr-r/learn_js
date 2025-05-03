const arr = [1, 5, 3, 4, 2]
const resultReduce = arr.reduce(function(sum, num){
    return sum + num
}
, 0
)
//console.log(resultReduce) // reduce не меняет исходный массив, первым параметром он принимает аккумулятор (сумма), вторым - функцию, возвращает результат работы функции

for(let el in arr){ // for in не рекомендуется используется для массивов, он нужен для объектов
    console.log(el)
}