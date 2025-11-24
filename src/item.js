export function createTodo(title, dueDate, checked = false, notes = "") {
  return {
    getTitle() {
      return title;
    },
    getDueDate() {
      return dueDate;
    },
    isChecked() {
      return checked;
    },
    getNotes() {
      return notes;
    },
    toggle() {
      checked = !checked;
    },
    setNotes(n) {
      notes = n;
    },
  };
}
