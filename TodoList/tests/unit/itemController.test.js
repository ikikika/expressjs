import { createItem } from "../../controllers/itemController";

describe("createItem", () => {
  it("should have a todo function", () => {
    expect(typeof createItem).toBe("function");
  });
});
