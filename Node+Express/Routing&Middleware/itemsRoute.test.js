process.env.NODE_ENV = "test";
const request = require("supertest");
const { describe } = require("yargs");
const { response } = require("./app");
const app = require("./app");
let database = require("./fakeDb");

item = { name: "kitkat", price: 1.25 };

beforeEach(function () {
  database.push(item);
});

afterEach(function () {
  database.length = 0;
});

describe("GET /shopping", () => {
  test("Get all items", async () => {
    const res = await request(app).get("/shopping");
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({ items: [item] });
  });
});

describe("POST /shopping", () => {
  test("add an item", async () => {
    const res = await (
      await request(app).post("/shopping")
    ).send({ name: "iphone13", price: 1200 });
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({ added: { name: "iphone13", price: 1200 } });
  });
});

describe("GET /shopping/:name", () => {
  test("Get specified item", async () => {
    const res = await request(app).get(`/shopping/${item.name}`);
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({ item: item });
  });
  test("Response for invalid name", async () => {
    const res = await response(app).get("/shopping/banana");
    expect(res.statusCode).toBe(404);
  });
});

describe("PATCH /shopping/:name", () => {
  test("add an item", async () => {
    const res = await (
      await request(app).patch(`/shopping/${item.name}`)
    ).send({ price: 1.75 });
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({
      updated: { name: `${item.name}`, price: 1.75 },
    });
  });
  test("Response for invalid name", async () => {
    const res = await response(app).get("/shopping/banana");
    expect(res.statusCode).toBe(404);
  });
});

descfribe("DELETE /shopping/:name", () => {
  test("delete specified item", async () => {
    await response(app).delete(`/shopping/${item.name}`);
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({ Deleted: `${item.name}` });
  });
});
