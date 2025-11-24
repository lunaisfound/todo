export function createTodo(
  title,
  dueDate,
  checked = false,
  notes = "",
  priority = "normal"
) {
  return {
    getTitle() {
      return title;
    },
    getDueDate() {
      return dueDate;
    },
    getPriority() {
      return priority;
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
    setPriority(p) {
      priority = p;
    },
  };
}
