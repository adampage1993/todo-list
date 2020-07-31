// SELECTORS
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

// FUNCTIONS
function addTodo(e) {
  // Prevent Form Submission
  e.preventDefault();

  // Create Todo Div
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");

  // Create Li
  const todoItem = document.createElement("li");
  todoItem.classList.add("todo-item");
  todoItem.innerText = todoInput.value;
  todoDiv.appendChild(todoItem);

  // Completed Button
  const completedButton = document.createElement("button");
  completedButton.innerHTML = "<i class='fas fa-check'></i>";
  completedButton.classList.add("completed-button");
  todoDiv.appendChild(completedButton);

  // Trash Button
  const trashButton = document.createElement("button");
  trashButton.innerHTML = "<i class='fas fa-trash'></i>";
  trashButton.classList.add("trash-button");
  todoDiv.appendChild(trashButton);

  // Append to UL
  todoList.appendChild(todoDiv);

  // Clear Input Value
  todoInput.value = "";
}

function deleteCheck(e) {
  const item = e.target;
  if (item.classList[0] === "trash-button") {
    item.parentElement.remove();
  }
  if (item.classList[0] === "completed-button") {
    item.parentElement.classList.toggle("completed");
  }
}

// EVENT LISTENERS
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);
