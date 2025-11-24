import { createTodo } from "./todo";

const todos = [];

export const todoList = {
  add(title, dueDate, notes = "", priority = "normal") {
    const todo = createTodo(title, dueDate, false, notes, priority);
    todos.push(todo);
    return todo;
  },

  delete(index) {
    todos.splice(index, 1);
  },

  getAll() {
    return todos;
  },
};
