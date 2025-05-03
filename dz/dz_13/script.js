//Дан инпут, кнопка и абзац. В инпут вводится число.
//По нажатию на кнопку выведите в абзац строку, состоящую из нулей, количество которых равно числу.
//Например, при вводе числа 5 у нас должна получится строка '00000'.
//Эту задачу сделать без функции repeat, а через цикл.
//Подумайте, как сформировать итоговую строку, отталкиваясь от того, сколько раз должен отработать цикл.
//Здесь нужно взаимодействовать с элементами на html странице.

const input = document.getElementById("input");
const button = document.querySelector(".button");
const paragraph = document.getElementById("paragraph");

button.addEventListener("click", function () {
  const num = Number(input.value);
  let result = ""
  for (let i = 0; i < num; i++){
    if (num >= 0) {
      result = result + "0"
    }
  }
  paragraph.innerHTML = result;
})
