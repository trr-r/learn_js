const name = document.querySelector("#name");
const price = document.querySelector("#price");
const amount = document.querySelector("#amount");
const add = document.querySelector("#add");
const table = document.querySelector("#table");
const total = document.querySelector("#total");

const productList = [
  {
    id: 1234,
    name: "торт",
    price: "500",
    amount: "2",
    sum: 1000,
  },
  {
    id: 1235,
    name: "хлеб",
    price: "50",
    amount: "2",
    sum: 100,
  },
];

//функция добавления таблицы с продуктами
const renderProducts = () => {
  for (let el of productList) {
    const html = `
        <tr>
            <td>${el.name}</td>
            <td>${el.price}</td>
            <td>${el.amount}</td>
            <td>${el.sum}</td>
            <td>х</td>
        </tr>
`
table.insertAdjacentHTML('beforeend', html)
  }
}
renderProducts()

// очистка полей
const clearInputs = () => {
  name.value = ""
  price.value = "";
  amount.value = "";
};

// обработчик при добавлении нового продукта
add.addEventListener("click", function () {
  //console.log(name.value, price.value, amount.value)
  if (
    name.value.length > 0 &&
    price.value.length > 0 &&
    amount.value.length > 0
  ) {
    const newItem = {
      id: Date.now(),
      name: name.value,
      price: price.value,
      amount: amount.value,
      sum: price.value * amount.value,
    };
    productList.push(newItem);
    clearInputs();
  } else alert("Заполните все поля ввода");
});
