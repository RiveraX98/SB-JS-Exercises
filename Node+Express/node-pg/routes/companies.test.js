/** Tests for companies. */

process.env.NODE_ENV = "test";

const request = require("supertest");

const app = require("../app");
const { createData } = require("./_test-setup");
const db = require("../db");

beforeEach(createData);

afterAll(async () => {
  await db.end();
});

describe("GET /", function () {
  test("It should get all companies", async function () {
    const response = await request(app).get("/companies");
    expect(response.body).toEqual({
      companies: [
        { code: "apple", name: "Apple", description: "Maker of OSX." },
        { code: "ibm", name: "IBM", description: "Big blue." },
      ],
    });
  });
});

describe("GET /apple", function () {
  test("Should return specified company info", async function () {
    const response = await request(app).get("/companies/apple");
    expect(response.body).toEqual({
      company: {
        code: "apple",
        name: "Apple",
        description: "Maker of OSX.",
        invoices: [{ id: 1, amt: 200, paid: true }],
      },
    });
  });

  test("Should return 404 for non-existing companies", async function () {
    const response = await request(app).get("/companies/fake");
    expect(response.status).toEqual(404);
  });
});

describe("POST /", function () {
  test("Should create a company", async function () {
    const response = await request(app)
      .post("/companies")
      .send({ name: "Samsung", description: "Electronics Co." });

    expect(response.body).toEqual({
      company: {
        code: "samsung",
        name: "Samsung",
        description: "Electronics Co.",
      },
    });
  });
});

describe("PATCH /code", function () {
  test("Should update specified company", async function () {
    const response = await request(app)
      .put("/companies/apple")
      .send({ name: "AppleEdit", description: "Red Fruit" });

    expect(response.body).toEqual({
      company: {
        code: "apple",
        name: "AppleEdit",
        description: "Red Fruit",
      },
    });
  });

  test("Should return 404 for non-existing companies", async function () {
    const response = await request(app)
      .put("/companies/fake")
      .send({ name: "fake" });

    expect(response.status).toEqual(404);
  });
});

describe("DELETE /", function () {
  test("It should delete specified company", async function () {
    const response = await request(app).delete("/companies/apple");

    expect(response.body).toEqual({ status: "deleted apple" });
  });

  test("Should return 404 for non-existing companies", async function () {
    const response = await request(app).delete("/companies/fake");

    expect(response.status).toEqual(404);
  });
});
