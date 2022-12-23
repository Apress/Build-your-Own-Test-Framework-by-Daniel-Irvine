import { saveTodo } from "./api.mjs";

export class TodoRepository {
  constructor() {
    this.todos = [];
  }

  add(todo) {
    if (!todo || !todo.title || todo.title === "") {
      throw new Error("title cannot be blank");
    }
    if (this.matchingTodo(todo)) {
      throw new Error("todo already exists");
    }
    saveTodo(todo);
    this.todos = [...this.todos, todo];
    return true;
  }

  findAllMatching(title) {
    return this.todos.filter((t) =>
      t.title.includes(title)
    );
  }

  update(updatedTodo) {
    this.todos = [
      ...this.todos.filter(
        (todo) => todo.title !== updatedTodo.title
      ),
      updatedTodo,
    ];
  }

  matchingTodo({ title }) {
    return this.todos.find(
      (todo) => todo.title === title
    );
  }
}
