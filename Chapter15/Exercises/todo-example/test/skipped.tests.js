import { describe, it } from "concise-test";

describe("skipped describe");

describe("with skipped children", () => {
  it("skipped 1");
  it("skipped 2");
});
