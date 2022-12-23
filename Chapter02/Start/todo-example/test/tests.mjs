import { emptyTodo, markAsDone } from "../src/todo.mjs";
import { TodoRepository } from "../src/todoRepository.mjs";

const todo = emptyTodo();

if (!markAsDone(todo).completedAt)
  throw new Error(
    "completedAt not set when calling markAsDone"
  );

const repository = new TodoRepository();

try {
  repository.add(emptyTodo());
  throw new Error(
    "no error thrown when adding an empty todo"
  );
} catch (e) {
  if (e.message !== "title cannot be blank")
    throw new Error(
      "wrong message in guard clause when adding an empty todo"
    );
}

const newTodo = { ...emptyTodo(), title: "test" };
repository.add(newTodo);

const repeatedTodo = { ...newTodo };
try {
  repository.add(repeatedTodo);
  throw new Error(
    "no error thrown when adding a repeated todo"
  );
} catch (e) {
  if (e.message !== "todo already exists")
    throw new Error(
      "wrong message in guard clause when adding an existing todo"
    );
}

if (repository.findAllMatching("").length !== 1)
  throw new Error("added todo was not returned");

if (
  repository.findAllMatching("some other test").length !==
  0
)
  throw new Error(
    "filter was not applied when finding matches"
  );
