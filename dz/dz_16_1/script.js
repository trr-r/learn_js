//1.Создайте в html кнопку с текстом "Заполнить" и незаполненный инпут, при клике на кнопку заполняем инпут текстом "test@email.ru"


const input = document.querySelector(".input");
const button = document.querySelector(".btn");

button.addEventListener("click", function () {
    input.value = 'test@email.ru'
  })