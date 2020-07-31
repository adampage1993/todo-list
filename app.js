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

  // Store in Local Storage
  saveLocalStorage(todoInput.value);

  // Clear Input Value
  todoInput.value = "";
}

function deleteCheck(e) {
  const item = e.target;
  if (item.classList[0] === "trash-button") {
    item.parentElement.remove();
    removeFromLocalStorage(item.parentElement);
  }
  if (item.classList[0] === "completed-button") {
    item.parentElement.classList.toggle("completed");
  }
}

function saveLocalStorage(todo) {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  todos.push(todo);
  localStorage.setItem("todos", JSON.stringify(todos));
}

function removeFromLocalStorage(todoItem) {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }

  todos.forEach(function (todo, index) {
    if (todoItem.textContent === todo) {
      todos.splice(index, 1);
    }
  });

  localStorage.setItem('todos', JSON.stringify(todos))
}

function getTasks() {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }

  todos.forEach(function (todo) {
    // Create Todo Div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    // Create Li
    const todoItem = document.createElement("li");
    todoItem.classList.add("todo-item");
    todoItem.innerText = todo;
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
  });
}

// EVENT LISTENERS
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);
document.addEventListener("DOMContentLoaded", getTasks);
