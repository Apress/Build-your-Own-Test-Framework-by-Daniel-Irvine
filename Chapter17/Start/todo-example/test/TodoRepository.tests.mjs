import { emptyTodo } from "../src/todo.mjs";
import { TodoRepository } from "../src/todoRepository.mjs";
import {
  beforeEach,
  describe,
  expect,
  it,
} from "concise-test";

import * as examples from "./list.shared.tests.mjs";

describe(
  "TodoRepository",
  { tags: ["doesn't match"] },
  () => {
    const newTodo = { ...emptyTodo(), title: "test" };
    let repository;

    beforeEach(() => {
      repository = new TodoRepository();
    });

    it.behavesLike("a list", () => ({
      type: repository,
      entry: newTodo,
    }));

    describe("add", () => {
      it(
        "throws an exception when adding a todo without a title",
        { tags: ["todo", "asnot"] },
        () => {
          expect(() =>
            repository.add(emptyTodo())
          ).toThrow(new Error("title cannot be blank"));
        }
      );

      it("throws errors when adding a repeated todo", () => {
        repository.add(newTodo);
        const repeatedTodo = { ...newTodo };
        expect(() =>
          repository.add(repeatedTodo)
        ).toThrow(new Error("todo already exists"));
      });
    });

    describe("findAllMatching", () => {
      beforeEach(() => {
        repository.add(newTodo);
      });

      it("finds an added todo", () => {
        expect(
          repository.findAllMatching("")
        ).toHaveLength(1);
      });

      it("filters out todos that do not match filter", () => {
        expect(
          repository.findAllMatching("some other test")
        ).toHaveLength(0);
      });
    });
  }
);
