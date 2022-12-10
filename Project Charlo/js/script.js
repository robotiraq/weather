function addTask() {
  let input = document.getElementById("inputField");
  createCell(input.value);
  let itemsArray = JSON.parse(localStorage.getItem("storage") || "[]");
  let data = { name: input.value };
  itemsArray.push(data);
  localStorage.setItem("storage", JSON.stringify(itemsArray));
  input.value = "";
}

function retrieve() {
  let items = JSON.parse(localStorage.getItem("storage") || "[]");
  for (let item of items) {
    createCell(item.name);
  }
}
window.onload = retrieve;

function createCell(input) {
  let taskCell = document.createElement("div");
  taskCell.id = "taskID";
  taskCell.className =
    "my-1 rounded-md bg-zinc-800 p-2 text-left flex items-center justify-between max-w-sm ";

  let taskTitle = document.createElement("button");
  taskTitle.className = "break-all text-left";
  taskTitle.innerHTML = input;

  let deleteButton = document.createElement("button");
  deleteButton.className = "text-red-500  rounded-md  mx-4 hover:text-red-600 ";
  deleteButton.innerHTML = "Delete";
  deleteButton.id = input;

  taskCell.append(taskTitle, deleteButton);
  document.getElementById("backlog").prepend(taskCell);
  deleteButton.addEventListener("click", function (e) {
    let items = JSON.parse(localStorage.getItem("storage") || "[]");
    let filteredArray = items.filter((item) => item.name !== e.target.id);
    localStorage.setItem("storage", JSON.stringify(filteredArray));
    taskCell.remove();
  });

  taskCell.addEventListener("dblclick", function () {
    if (taskCell.id == "taskID") {
      document.getElementById("inProgress").prepend(taskCell);
      taskCell.id = "statusinProgress";
    } else if (taskCell.id == "statusinProgress") {
      document.getElementById("completed").prepend(taskCell);
      taskCell.id = "statusCompleted";
      taskTitle.className = "break-all pointer-events-none";
    }
  });
}
