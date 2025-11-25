// tests/integration.test.js
const request = require("supertest");
const app = require("../src/app");

test("GET /status retorna 200 e message OK", async () => {
  const res = await request(app).get("/status");
  expect(res.statusCode).toBe(200);
  expect(res.body.message).toBe("OK");
});
