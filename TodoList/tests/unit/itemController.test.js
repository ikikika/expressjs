import { createItem } from "../../controllers/itemController";
import Item from "../../models/itemModel";

// mock function
Item.save = jest.fn();

describe("createItem", () => {
  // check if the createItem function exist
  it("should should be a function", () => {
    expect(typeof createItem).toBe("function");
  });

  // check if create method is called inside createItem
  //   it("should call Item.save", () => {
  //     Item.save();
  //     expect(Item.save).toBeCalledWith({
  //       title: "item title",
  //       description: "item description",
  //     });
  //   });
});
