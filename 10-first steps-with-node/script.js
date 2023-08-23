"use strict";

// Referenzen auf HTML-Elemente holen
const addTodoBtn = document.querySelector("#add-todo-btn");
const newTodoInput = document.querySelector("#new-todo");
const todoList = document.querySelector("#list");
const radioButtons = document.querySelectorAll('input[type="radio"]');
const deleteTodoBtn = document.querySelector("#delete-todo-btn");

// Zustandsobjekt
const state = {
  currentFilter: "filter-all",
  todos: [],
};

// Funktion, um Todos von der API abzurufen und zu aktualisieren
function refresh() {
  fetch("http://localhost:4730/todos?_sort=description")
    .then((response) => response.json())
    .then((todosFromApi) => {
      state.todos = todosFromApi;
      renderTodos();
    });
}

// Funktion, um ein Todo zu aktualisieren
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

// Funktion, um erledigte Todos zu löschen
function removeDone() {
  const doneTodos = state.todos.filter((todo) => todo.done === true);

  for (const todo of doneTodos) {
    fetch("http://localhost:4730/todos/" + todo.id, {
      method: "DELETE",
    }).then(() => {
      refresh();
    });
  }
}

// Event-Listener für den Button zum Löschen von erledigten Todos
deleteTodoBtn.addEventListener("click", () => {
  removeDone();
});

// Event-Listener für die Radio-Buttons
radioButtons.forEach((radioButton) => {
  radioButton.addEventListener("click", () => {
    state.currentFilter = radioButton.id; // Aktualisiere den aktuellen Filter im Zustandsobjekt
    renderTodos();
  });
});

// Funktion, um die Todos zu rendern
function renderTodos() {
  todoList.innerHTML = "";

  const filteredTodos = state.todos.filter((todo) => {
    // Filtere die Todos basierend auf dem aktuellen Filter
    if (state.currentFilter === "filter-all") {
      return true; // Zeige alle Todos
    } else if (state.currentFilter === "filter-open") {
      return !todo.done; // Zeige nur offene Todos
    } else if (state.currentFilter === "filter-done") {
      return todo.done; // Zeige nur erledigte Todos
    }
  });
  // Iteriere über die gefilterten Todos und erstelle HTML-Elemente
  filteredTodos.forEach((todo) => {
    const newLi = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = todo.done;
    checkbox.id = `todo-${todo.id}`;

    checkbox.addEventListener("change", () => {
      todo.done = checkbox.checked; // Aktualisiere den Status des Todos
      updateTodo(todo.id, todo.done); // Aktualisiere das Todo in der API
    });

    const label = document.createElement("label");
    label.htmlFor = `todo-${todo.id}`;
    label.textContent = todo.description;

    newLi.append(checkbox, label);
    todoList.append(newLi);
  });
}
// Event-Listener für den Button zum Hinzufügen eines Todos
addTodoBtn.addEventListener("click", addTodo);
newTodoInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    addTodo();
  }
});

// Funktion zum Hinzufügen eines Todos
function addTodo() {
  // Erstelle ein neues Todo
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
    .then(() => {
      // Aktualisiere die Liste
      refresh();
      newTodoInput.value = "";
      newTodoInput.focus();
    });
}

// Startup
refresh();
newTodoInput.focus();
