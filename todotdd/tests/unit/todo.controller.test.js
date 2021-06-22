const TodoController = require("../../controllers/todo.controller");
const TodoModel = require("../../model/todo.model");
const httpMocks = require("node-mocks-http");
const newTodo = require("../mock-data/new-todo.json");

// overwrite create method of mongoose with mock function, purpose is to test if this method is acutally being called in our createTodo function
TodoModel.create = jest.fn();

describe("TodoController.createTodo", () => {
  it("should have a createTodo function", () => {
    expect(typeof TodoController.createTodo).toBe("function");
  });

  it("should call TodoModel.create", () => {
    let req, res, next;
    req = httpMocks.createRequest();
    res = httpMocks.createResponse();
    next = null;

    req.body = newTodo;

    TodoController.createTodo(req, res, next);
    // test if TodoModel.create is called in TodoController.createTodo, without actually creating an item in db
    expect(TodoModel.create).toBeCalledWith(newTodo);
  });
});
