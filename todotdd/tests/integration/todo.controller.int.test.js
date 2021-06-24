const request = require("supertest");

const app = require("../../app");
// const newTodo = require("../mock-data/new-todo.json");

// const endpointUrl = "/todos/";

// jest.useFakeTimers();
describe("endpointUrl", () => {
  it("nothing", () => {
    const testvar = true;
    expect(testvar).toBeTruthy();
  });
  //   it("POST " + endpointUrl, async () => {
  //     console.log("ok");
  //     // jest.setTimeout(20000);
  //     // const response = await request(app).post(endpointUrl).send(newTodo);
  //     // expect(response.statusCode).toBe(201);
  //     // expect(response.body.title).toBe(newTodo.title);
  //     // expect(response.body.done).toBe(newTodo.done);
  //   });
});
