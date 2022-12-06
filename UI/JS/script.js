function addTask() {
  let inputValue = document.getElementById("submitButton");
  let taskCell = document.createElement("div");
  taskCell.className =
    "my-1 rounded-md bg-zinc-800 p-2 text-left flex items-center justify-between max-w-sm ";

  let taskTitle = document.createElement("button");
  taskTitle.className = "break-all ";
  taskTitle.innerHTML = inputValue.value;

  let deleteButton = document.createElement("button");
  deleteButton.className = "text-red-500  rounded-md  mx-4 hover:text-red-600 ";
  deleteButton.innerHTML = "Delete";

  taskCell.append(taskTitle, deleteButton);
  inputValue.value = "";

  document.getElementById("backLog").prepend(taskCell);

  deleteButton.addEventListener("click", function () {
    taskCell.remove();
    deleteButton.remove();
  });

  taskCell.addEventListener("dblclick", function () {
    document.getElementById("inProgress").prepend(taskCell);
  });
}
