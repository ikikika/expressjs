const TodoController = require("../../controllers/todo.controller");
const TodoModel = require("../../model/todo.model");

// overwrite create method of mongoose with mock function, purpose is to test if this method is acutally being called in our createTodo function
TodoModel.create = jest.fn();

describe("TodoController.createTodo", () => {
  it("should have a createTodo function", () => {
    expect(typeof TodoController.createTodo).toBe("function");
  });

  it("should call TodoModel.create", () => {
    TodoController.createTodo();
    // test if TodoModel.create is called in TodoController.createTodo, without actually creating an item in db
    expect(TodoModel.create).toBeCalled();
  });
});
