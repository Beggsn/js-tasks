"use strict";

const todoInput = document.querySelector("#todo-input");
const btnAdd = document.querySelector("#add-todo");
const todosList = document.querySelector(".todos-list");

const state = JSON.parse(localStorage.getItem("state")) || {
  todos: [
    { description: "HTML lernen", done: false },
    { description: "CSS lernen", done: true },
  ],
};

btnAdd.addEventListener("click", addTodo);

// Diese Funktion fügt ein neues Todo zur Liste hinzu
function addTodo(event) {
  event.preventDefault();

  // Überprüfen, ob das Todo bereits vorhanden ist
  if (
    state.todos.some(function (todo) {
      return todoInput.value.toLowerCase() === todo.description.toLowerCase();
    })
  ) {
    return;
  }

  // Ein neues Todo-Objekt erstellen
  const newTodo = {
    description: todoInput.value,
    done: false,
  };

  // Das neue Todo zur Liste hinzufügen
  state.todos.push(newTodo);
  persistState(state);
  todoInput.value = "";
  todoInput.focus();
  renderTodos();
}

// Die Liste mit allen Todos rendern
function renderTodos() {
  todosList.innerHTML = "";
  for (const todo of state.todos) {
    const newTodoListItem = document.createElement("li"); // <li> Element erstellen

    const doneCheckbox = document.createElement("input"); // <input> Element erstellen
    doneCheckbox.type = "checkbox"; // <input type="checkbox">

    // EventListener auf Checkbox
    doneCheckbox.addEventListener("change", function (e) {
      todo.done = doneCheckbox.checked; // Zustand des Todos aktualisieren
      persistState(state);
    });

    doneCheckbox.id = `${todo.description} -> ID:${Date.now()}`; // <input type="checkbox" id="">
    // console.log der Todo ID
    console.log(doneCheckbox.id);

    doneCheckbox.checked = todo.done; // <input type="checkbox" id="">

    const todoLabel = document.createElement("label"); // <label> Element erstellen

    todoLabel.setAttribute("for", doneCheckbox.id); // <label for="">

    todoLabel.innerText = todo.description; // <label>Description</label>

    newTodoListItem.append(doneCheckbox, todoLabel); // <input type="checkbox"> und <label> an <li> anhängen

    todosList.append(newTodoListItem); // <li> an <ul> anhängen (als Child-Element)
  }
}

// Aktuellen Zustand im LocalStorage speichern
function persistState(newState) {
  localStorage.setItem("state", JSON.stringify(newState));
}

// Aktuellen Zustand aus dem LocalStorage laden
renderTodos();
