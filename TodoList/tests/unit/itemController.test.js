// const testController = require("../../controllers/testController");

import { testFunction } from "../../controllers/testController";

// describe("testController.testFunction", () => {
//   it("should have a todo function", () => {
//     expect(typeof testController.testFunction).toBe("function");
//   });
// });

describe("testFunction", () => {
  it("should have a todo function", () => {
    expect(typeof testFunction).toBe("function");
  });
});
