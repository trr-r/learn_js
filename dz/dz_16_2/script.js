//3. Создайте кнопку и попробуйте сделать так, чтобы она меняла свой цвет каждые 5 секунд. 
//Логика здесь может быть разной, так что начните свою собственную реализацию. 
//Здесь можно или напрямую менять стили, через свойство style. 
//Или же добавлять разные классы, тогда нужно будет поработать со свойством classList.

const button = document.querySelector('button');
//button.style.background = "white"
 
// function changeColor(){
//   button.style.background = "red"
// }

// setInterval(changeColor, 5000)

function changeColor(){
  const color = ["red", "green", "white"]
  //button.style.background = ""
  console.log(button.style.background)
  // for (let el of color){
  //   console.log(el)
  //   button.style.background = el
  // }
  if(button.style.background === ""){
    button.style.background = "red"
  }
  else if(button.style.background === "red"){
    button.style.background = "green"
  }
  else if(button.style.background === "green"){
    button.style.background = "white"
  }
  else button.style.background = "red"
}
setInterval(changeColor, 1000)
