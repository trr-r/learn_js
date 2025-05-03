// 1. Дан абзац (можно тег p использовать или любой другой), в котором записано число 1. 
// По нажатию на кнопку увеличивайте число в абзаце в два раза.


const paragraph = document.querySelector(".paragraph")
const button = document.querySelector(".button")

button.addEventListener("click", function () {
    paragraph.innerHTML = (Number(paragraph.innerHTML)) * 2
})
