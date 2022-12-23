import { emptyTodo, markAsDone } from "../src/todo.mjs";
import {
  beforeEach,
  describe,
  expect,
  it,
} from "concise-test";

describe("todo", { tags: ["todo"] }, () => {
  it("sets completedAt when calling markAsDone", () => {
    const todo = emptyTodo();

    expect(markAsDone(todo).completedAt).toBeDefined();
  });
});

describe("async tests", () => {
  it("waits for a little bit", async () => {
    //it.timesOutAfter(2000);
    await new Promise((resolve, _) =>
      setTimeout(resolve, 5000)
    );
  });
});
