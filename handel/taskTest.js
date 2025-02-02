const request = require("supertest");
const app = require("../app");

describe("Task API", () => {
  it("should create a new task", async () => {
    const res = await request(app)
      .post("/tasks")
      .send({ title: "Test Task", description: "Test Description" });

    expect(res.statusCode).toEqual(201);
    expect(res.body.success).toBe(true);
  });

  it("should retrieve all tasks", async () => {
    const res = await request(app).get("/tasks");
    expect(res.statusCode).toEqual(200);
    expect(res.body.success).toBe(true);
  });
});
