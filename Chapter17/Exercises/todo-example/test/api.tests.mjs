import {
  describe,
  beforeEach,
  it,
  expect,
  spy,
  anObjectContaining,
} from "concise-test";

import { saveTodo } from "../src/api.mjs";

describe("api", () => {
  const todo = "todo text";

  beforeEach(() => {
    global.fetch = spy(() => ({ ok: true }));
  });

  it("calls POST /todos with headers", () => {
    saveTodo(todo);
    expect(global.fetch).toBeCalledWith(
      "/todos",
      anObjectContaining({
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      })
    );
  });

  it("calls POST /todos with the todo body", () => {
    saveTodo(todo);
    expect(global.fetch).toBeCalledWith(
      "/todos",
      anObjectContaining({
        body: { todo },
      })
    );
  });
});
