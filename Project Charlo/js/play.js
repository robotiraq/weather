let aere = [];

function addProduct() {
  let productName = document.getElementById("name");
  let price = document.getElementById("price");
  let currency = document.getElementById("currency");
  let puplishStatus = document.getElementById("publish");
  let itemsArray = JSON.parse(localStorage.getItem("storage") || "[]");
  let data = {
    name: productName.value,
    price: price.value,
    currency: currency.value,
    status: puplishStatus.value,
  };
  itemsArray.push(data);
  localStorage.setItem("storage", JSON.stringify(itemsArray));

  let totalPrice = itemsArray.reduce(
    (accumulator, itemsArray) => accumulator + +itemsArray.price,
    0
  );
  aere.push(data);
  createCell(productName.value, price.value, currency.value);
  document.getElementById("totalPrice").innerHTML =
    "Total price is=" + totalPrice;
}

// total price holder
let totalPrice = document.createElement("p");
totalPrice.innerHTML = "Total price is=" + 0;
document.getElementById("totalPrice").prepend(totalPrice);

// retrice function
function retrive() {
  let items = JSON.parse(localStorage.getItem("storage") || "[]");
  aere = items;
  for (let item of items) {
    createCell(item.name, item.price, item.currency);
  }
  let totalPrice = items.reduce(
    (accumulator, items) => accumulator + +items.price,
    0
  );

  document.getElementById("totalPrice").innerHTML =
    "Total price is=" + parseInt(totalPrice);
}
window.onload = retrive;

// create function
function createCell(a, b, c, d) {
  let taskCell = document.createElement("div");
  taskCell.id = "containerParent";
  taskCell.className =
    "my-1 rounded-md bg-zinc-800 p-2 text-left flex items-center justify-between max-w-sm ";

  let name = document.createElement("p");
  name.innerHTML = a;

  let productPrice = document.createElement("p");
  productPrice.innerHTML = b;

  let productCurrency = document.createElement("p");
  productCurrency.innerHTML = c;

  taskCell.append(name, productPrice, productCurrency);
  document.getElementById("backlog").prepend(taskCell);
}
// Clear all function
document.getElementById("clear").addEventListener("click", function () {
  localStorage.clear();
  location.reload();
});

// Filter by Currency
document.getElementById("filter").addEventListener("click", function () {
  let items = JSON.parse(localStorage.getItem("storage") || "[]");
  let filterByCurrency = items.filter(currency);

  function currency(items) {
    return items.currency === "USD";
  }
  document.getElementById("backlog").innerHTML = "";
  for (let item of filterByCurrency) {
    createCell(item.name, item.price, item.currency);
  }
});
