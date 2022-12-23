import { describe, it, expect } from "concise-test";

describe.shared("a list", () => {
  describe("adding entries", () => {
    it("returns true on success", ({ type, entry }) => {
      expect(type.add(entry)).toBe(true);
    });

    it("throws error when adding undefined", ({
      type,
    }) => {
      expect(() => type.add(undefined)).toThrow();
    });
  });
});
