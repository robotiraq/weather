const items = [
  {
    id: 1,
    name: "something",
    price: 1200,
    currency: "IQD",
    status: "published",
  },
  {
    id: 2,
    name: "something2",
    price: 1200,
    currency: "USD",
    status: "published",
  },
];
let button = document.getElementById("showArray");
button.innerHTML = "click me";
button.addEventListener("click", function () {
  console.log(items);
});
