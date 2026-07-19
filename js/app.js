// ================================
// SCHOOL TASK MANAGER — app.js
// Mini Project: Interactive To-Do List
// ================================

// DOM Elements
const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");
const itemsLeft = document.getElementById("items-left");
const filters = document.querySelectorAll(".filter");
const clearCompletedBtn = document.getElementById("clear-completed");

// State — all our data lives here
let todos = [
    { id: 1, text: "Complete HTML assignment", completed: false },
    { id: 2, text: "Study for physics test on Friday", completed: false },
    { id: 3, text: "Submit math homework", completed: true },
    { id: 4, text: "Read chapter 5 of history textbook", completed: false },
    { id: 5, text: "Practice French vocabulary", completed: false }
];

let currentFilter = "all";
let nextId = 6;

// ================================
// CREATE — build one todo element
// ================================
function createTodoElement(todo) {
    const li = document.createElement("li");
    li.className = `todo-item ${todo.completed ? "completed" : ""}`;
    li.dataset.id = todo.id;

    // Checkbox
    const checkbox = document.createElement("div");
    checkbox.className = "todo-checkbox";
    checkbox.dataset.action = "toggle";
    checkbox.dataset.id = todo.id;
    if (todo.completed) checkbox.textContent = "✓";

    // Text
    const span = document.createElement("span");
    span.className = "todo-text";
    span.textContent = todo.text;
    span.dataset.action = "toggle";
    span.dataset.id = todo.id;

    // Double click to edit
    span.addEventListener("dblclick", () => startEditing(todo.id, li, span));

    // Delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.className = "delete-btn";
    deleteBtn.textContent = "✕";
    deleteBtn.dataset.action = "delete";
    deleteBtn.dataset.id = todo.id;
    deleteBtn.title = "Delete task";

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(deleteBtn);

    return li;
}

// ================================
// EDIT — double click to edit
// ================================
function startEditing(id, li, span) {
    const todo = todos.find(t => t.id === id);
    if (!todo) return;

    const editInput = document.createElement("input");
    editInput.className = "todo-edit-input";
    editInput.value = todo.text;

    li.replaceChild(editInput, span);
    editInput.focus();
    editInput.select();

    // Save on Enter
    editInput.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            const newText = editInput.value.trim();
            if (newText) {
                todo.text = newText;
                renderTodos();
            }
        }
        // Cancel on Escape
        if (e.key === "Escape") {
            renderTodos();
        }
    });

    // Save on blur
    editInput.addEventListener("blur", () => {
        const newText = editInput.value.trim();
        if (newText) todo.text = newText;
        renderTodos();
    });
}

// ================================
// RENDER — show todos on screen
// ================================
function renderTodos() {
    todoList.innerHTML = "";

    // Filter todos based on current filter
    const filtered = todos.filter(todo => {
        if (currentFilter === "active") return !todo.completed;
        if (currentFilter === "completed") return todo.completed;
        return true; // "all"
    });

    // Show empty state if no tasks
    if (filtered.length === 0) {
        const empty = document.createElement("li");
        empty.className = "empty-state";
        empty.innerHTML = `
            <div class="emoji">📭</div>
            <p>${currentFilter === "completed" ? "No completed tasks yet!" : currentFilter === "active" ? "All caught up! 🎉" : "No tasks yet — add one above!"}</p>
        `;
        todoList.appendChild(empty);
    } else {
        filtered.forEach(todo => {
            todoList.appendChild(createTodoElement(todo));
        });
    }

    updateStats();
}

// ================================
// ADD — new todo
// ================================
function addTodo(text) {
    const todo = {
        id: nextId++,
        text: text.trim(),
        completed: false
    };
    todos.push(todo);
    renderTodos();
}

// ================================
// TOGGLE — complete/incomplete
// ================================
function toggleTodo(id) {
    const todo = todos.find(t => t.id === id);
    if (todo) {
        todo.completed = !todo.completed;
        renderTodos();
    }
}

// ================================
// DELETE — remove a todo
// ================================
function deleteTodo(id) {
    todos = todos.filter(t => t.id !== id);
    renderTodos();
}

// ================================
// STATS — update items left count
// ================================
function updateStats() {
    const remaining = todos.filter(t => !t.completed).length;
    itemsLeft.textContent = `${remaining} item${remaining !== 1 ? "s" : ""} left`;
}

// ================================
// EVENT LISTENERS
// ================================

// Add todo on form submit
form.addEventListener("submit", function(e) {
    e.preventDefault();
    const text = input.value.trim();
    if (text) {
        addTodo(text);
        input.value = "";
        input.focus();
    }
});

// Event delegation — handle clicks on todo list
// ONE listener handles toggle and delete for ALL items
todoList.addEventListener("click", function(e) {
    const action = e.target.dataset.action;
    const id = parseInt(e.target.dataset.id);

    if (action === "toggle") toggleTodo(id);
    if (action === "delete") deleteTodo(id);
});

// Filter buttons
filters.forEach(btn => {
    btn.addEventListener("click", function() {
        // Update active class
        filters.forEach(f => f.classList.remove("active"));
        this.classList.add("active");

        // Update filter and re-render
        currentFilter = this.dataset.filter;
        renderTodos();
    });
});

// Clear completed tasks
clearCompletedBtn.addEventListener("click", function() {
    todos = todos.filter(t => !t.completed);
    renderTodos();
});

// Keyboard shortcut — press Escape to clear input
document.addEventListener("keydown", function(e) {
    if (e.key === "Escape") {
        input.value = "";
        input.blur();
    }
});

// ================================
// INITIALIZE — render on page load
// ================================
renderTodos();
