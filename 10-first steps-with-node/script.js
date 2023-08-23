"use strict";

const addTodoBtn = document.querySelector("#add-todo-btn");
const newTodoInput = document.querySelector("#new-todo");
const todoList = document.querySelector("#list");
const radioButtons = document.querySelectorAll('input[type="radio"]');


let todos = [];

function refresh() {
  fetch("http://localhost:4730/todos?_sort=description")
    .then((response) => response.json())
    .then((todosFromApi) => {
      todos = todosFromApi;
      renderTodos();
    });
}

// function patch a todo
function updateTodo(id, done) {
  fetch("http://localhost:4730/todos/" + id, {
    method: "PATCH",
    body: JSON.stringify({ done: done }),
    headers: {
      "Content-Type": "application/json",
    },
  }).then(() => {
    refresh();
  });
}


// function delete a todo

// function render selected todos

function renderTodos() {
  todoList.innerHTML = "";
  todos.forEach((todo) => {
    const newLi = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = todo.done;
    checkbox.id = `todo-${todo.id}`;

    checkbox.addEventListener("change", () => {
      todo.done = checkbox.checked;
      // console.log(todo);
      updateTodo(todo.id, todo.done);
    });

    const label = document.createElement("label");
    label.htmlFor = `todo-${todo.id}`;
    label.textContent = todo.description;

    newLi.append(checkbox, label);
    todoList.append(newLi);
  });
}

addTodoBtn.addEventListener("click", addTodo);
newTodoInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    addTodo();
  }
});

function addTodo() {
  const newTodoText = newTodoInput.value;
  const newTodo = {
    description: newTodoText,
    done: false,
  };

  fetch("http://localhost:4730/todos", {
    method: "POST",
    body: JSON.stringify(newTodo),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((newTodoFromApi) => {
      // todos.push(newTodoFromApi);
      refresh();
      // renderTodos();
      newTodoInput.value = "";
      newTodoInput.focus();
    });
}

refresh();
newTodoInput.focus();
