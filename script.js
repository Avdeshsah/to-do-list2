function addTask() {
  const input = document.getElementById("taskInput");
  const taskText = input.value.trim();

  if (taskText === "") {
    alert("Please enter a task.");
    return;
  }

  const li = document.createElement("li");
  li.innerHTML = `
    <span onclick="toggleDone(this)">${taskText}</span>
    <button onclick="deleteTask(this)">Delete</button>
  `;

  document.getElementById("taskList").appendChild(li);
  input.value = "";
}

function deleteTask(button) {
  button.parentElement.remove();
}

function toggleDone(span) {
  span.parentElement.classList.toggle("done");
}
