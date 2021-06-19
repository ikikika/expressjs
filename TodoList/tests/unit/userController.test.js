import { authUser } from "../../controllers/userController";

// authUser = jest.fn();

jest.mock(authUser);

describe("authUser", () => {
  // check if the createItem function exist
  it("should should be a function", () => {
    expect(typeof authUser).toBe("function");
  });

  it("should log user in and return token", () => {
    expect(authUser).toBeCalledWith({
      email: "test1@email.com",
      password: "123456",
    });
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
