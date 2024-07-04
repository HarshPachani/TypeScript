"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./style.css");
const todos = [];
// const todos: Todo[] = [];
const todosContainer = document.querySelector('.todosContainer');
const todoInput = document.getElementsByName('title')[0];
const myForm = document.getElementById('myForm');
myForm.onsubmit = (e) => {
    e.preventDefault();
    const todo = {
        title: todoInput.value,
        isCompleted: false,
        id: String(Math.random() * 1000),
    };
    todoInput.value = '';
    todos.push(todo);
    renderTodo(todos);
};
const deleteTodo = (id) => {
    const idx = todos.findIndex(item => item.id === id);
    todos.splice(idx, 1);
    renderTodo(todos);
};
const generateTodoItem = (title, isCompleted, id) => {
    const todo = document.createElement('div');
    todo.className = 'todo';
    //Creating a checkbox.
    const checkBox = document.createElement('input');
    checkBox.setAttribute('type', 'checkbox');
    checkBox.className = 'isCompleted';
    checkBox.checked = isCompleted;
    checkBox.onchange = () => {
        todos.find(item => {
            if (item.id === id)
                item.isCompleted = checkBox.checked;
        });
        paragraph.className = (checkBox === null || checkBox === void 0 ? void 0 : checkBox.checked) ? 'text-cut' : '';
    };
    //Creating p for title
    const paragraph = document.createElement('p');
    paragraph.innerText = title;
    paragraph.className = isCompleted ? 'text-cut' : '';
    //creating delete button
    const btn = document.createElement('button');
    btn.innerText = 'X';
    btn.className = 'deleteBtn';
    btn.onclick = () => deleteTodo(id);
    //Appending All to TodoItem.
    todo.append(checkBox, paragraph, btn);
    todosContainer.append(todo);
};
const renderTodo = (todos) => {
    todosContainer.innerText = '';
    todos.forEach(item => {
        generateTodoItem(item.title, item.isCompleted, item.id);
    });
};
