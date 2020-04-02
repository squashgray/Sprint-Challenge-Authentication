const server = require("../api/server.js");
const request = require("supertest");
const db = require("../database/dbConfig.js");

describe("register works", () => {
  beforeEach(async () => {
    await db("users").truncate();
  });
  it("should register a user ", function() {
    return request(server)
      .post("/api/auth/register")
      .send({ username: "testname", password: "testpass" })
      .then(res => {
        expect(res.status).toBe(201);
      });
  });
  it("should return a json ", function() {
    return request(server)
      .post("/api/auth/register")
      .send({ username: "testname", password: "testpass" })
      .then(res => {
        expect(res.status).toBe(201);
        expect(res.type).toMatch(/json/i);
      });
  });
});

describe("login works and returns a json", () => {
  it("should login a user ", function() {
    return request(server)
      .post("/api/auth/login")
      .send({ username: "testname", password: "testpass" })
      .then(res => {
        expect(res.status).toBe(200);
      });
  });
  it("should return a json ", function() {
    return request(server)
      .post("/api/auth/login")
      .send({ username: "testname", password: "testpass" })
      .then(res => {
        expect(res.status).toBe(200);
        expect(res.type).toMatch(/json/i);
      });
  });
});
