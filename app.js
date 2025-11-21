const tasks = [];

document.getElementById("addBtn").addEventListener("click", addTask);

function addTask() {
  const input = document.getElementById("taskInput");
  const text = input.value.trim();

  if (text === "") return;

  tasks.push(text);
  render();
  input.value = "";
}

function deleteTask(index) {
  tasks.splice(index, 1);
  render();
}

function render() {
  const list = document.getElementById("taskList");
  list.innerHTML = "";

  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
      ${task}
      <button class="delete-btn" onclick="deleteTask(${index})">Eliminar</button>
    `;
    list.appendChild(li);
  });
}
