const TodoController = require("../../controllers/todo.controller");
const TodoModel = require("../../model/todo.model");
const httpMocks = require("node-mocks-http");
const newTodo = require("../mock-data/new-todo.json");

// overwrite create method of mongoose with mock function, purpose is to test if this method is acutally being called in our createTodo function
TodoModel.create = jest.fn();

let req, res, next;
beforeEach(() => {
  req = httpMocks.createRequest();
  res = httpMocks.createResponse();
  next = null;
});

describe("TodoController.createTodo", () => {
  it("should have a createTodo function", () => {
    expect(typeof TodoController.createTodo).toBe("function");
  });

  it("should call TodoModel.create", () => {
    req.body = newTodo;

    TodoController.createTodo(req, res, next);
    // test if TodoModel.create is called in TodoController.createTodo, without actually creating an item in db
    expect(TodoModel.create).toBeCalledWith(newTodo);
  });

  it("should return 201 response code", () => {
    req.body = newTodo;

    TodoController.createTodo(req, res, next);

    expect(res.statusCode).toBe(201);
    expect(res._isEndCalled()).toBeTruthy();
  });
});
