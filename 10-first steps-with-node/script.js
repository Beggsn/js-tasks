"use strict";

const addTodoBtn = document.querySelector("#add-todo-btn");
const newTodoInput = document.querySelector("#new-todo");
const todoList = document.querySelector("#list");

let todos = [];

function loadTodos() {
  fetch("http://localhost:4730/todos?_sort=description")
    .then((response) => response.json())
    .then((todosFromApi) => {
      todos = todosFromApi;
      renderTodos();
    });
}



//
// function patch a todo from "http://localhost:4730/todos/:id"

// function delete a todo from "http://localhost:4730/todos/:id"


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
      console.log(todo);
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
      loadTodos();
      // renderTodos();
      newTodoInput.value = "";
      newTodoInput.focus();
    });
}

loadTodos();
newTodoInput.focus();
