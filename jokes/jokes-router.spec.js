const server = require("../api/server.js");
const request = require("supertest");

describe("jokes router", () => {
  it("return status 400 ", async () => {
    const res = await request(server).get("/api/jokes");

    expect(res.status).toBe(400);
  });

  it("should return a json", async () => {
    const res = await request(server).get("/api/jokes");

    expect(res.type).toBe("application/json");
  });
});
