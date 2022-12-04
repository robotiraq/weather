function addTask() {
  let inputValue = document.getElementById("backlog");
  const task = document.createElement("button");
  task.className = "my-1 rounded-md bg-zinc-800 p-2 pr-36 text-left";
  task.innerHTML = inputValue.value;
  let itemGet = document.getElementById("taskList");
  itemGet.insertAdjacentElement("afterbegin", task);
  inputValue.value = "";
}
