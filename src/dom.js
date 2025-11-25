import { todoList } from "./todoList.js";

const listContainer = document.querySelector("#todo-list");
const form = document.querySelector("#todo-form");

export const DOMController = {
  init() {
    form.addEventListener("submit", this.handleSubmit);
    this.render();
  },

  handleSubmit(event) {
    event.preventDefault();

    const title = document.querySelector("#title").value;
    const dueDate = document.querySelector("#due-date").value;
    const notes = document.querySelector("#notes").value;

    todoList.add(title, dueDate, notes);
    form.reset();
    DOMController.render();
  },

  render() {
    listContainer.innerHTML = "";

    todoList.getAll().forEach((todo, index) => {
      const div = document.createElement("div");
      div.classList.add("todo");

      div.innerHTML = `
      <h3>${todo.getTitle()}</h3>
      <p>Due: ${todo.getDueDate()}</p>
      <p>${todo.getNotes()}</p>
      <label>
        <input type="checkbox" data-index="${index}" ${
        todo.isChecked() ? "checked" : ""
      }/>
        Completed
      </label>
      <button class="delete" data-index="${index}">Delete</button>
      `;
      listContainer.appendChild(div);
    });
    this.addListeners();
  },

  addListeners() {
    document.querySelectorAll("input[type='checkbox']").forEach((cb) => {
      cb.addEventListener("change", (e) => {
        const index = e.target.dataset.index;
        todoList.toggle(index);
      });
    });

    document.querySelectorAll(".delete").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const index = e.target.dataset.index;
        todoList.delete(index);
        this.render();
      });
    });
  },
};
