function addTask() {
  let input = document.getElementById("taskInput");

  let task = input.value;

  if (task == "") {
    alert("Enter a task");
    return;
  }

  let li = document.createElement("li");

  let checkbox = document.createElement("input");

  checkbox.type = "checkbox";

  checkbox.onclick = function () {
    if (checkbox.checked) {
      li.style.textDecoration = "line-through";
    } else {
      li.style.textDecoration = "none";
    }
  };

  li.appendChild(checkbox);

  li.append(" " + task);

  document.getElementById("taskList").appendChild(li);

  input.value = "";
}
