process.env.NODE_ENV = "test";

const request = require("supertest");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const app = require("../app");
const db = require("../db");
require("./jest.config");
const BCRYPT_WORK_FACTOR = 1;

describe("Auth Routes Test", function () {
  beforeEach(async function () {
    const hashedPwd = await bcrypt.hash("testPassword", BCRYPT_WORK_FACTOR);
    await db.query(
      `INSERT INTO users (username, password, first_name, last_name, phone, join_at, last_login_at )
    VALUES ($1, $2, $3, $4, $5,current_timestamp,current_timestamp)`,
      ["Tester1", hashedPwd, "fName1", "lName1", 1111111]
    );
  });

  /** POST /auth/register => token  */

  describe("POST /auth/register", function () {
    test("can register", async function () {
      let response = await request(app).post("/auth/register").send({
        username: "bob",
        password: "secret",
        first_name: "Bob",
        last_name: "Smith",
        phone: "+14150000000",
      });

      let token = response.body.token;
      expect(jwt.decode(token)).toEqual({
        username: "bob",
        iat: expect.any(Number),
      });
    });
  });

  /** POST /auth/login => token  */

  describe("POST /auth/login", function () {
    test("can login", async function () {
      let response = await request(app)
        .post("/auth/login")
        .send({ username: "Tester1", password: "testPassword" });

      let token = response.body.token;
      expect(jwt.decode(token)).toEqual({
        username: "Tester1",
        iat: expect.any(Number),
      });
    });

    test("won't login w/wrong password", async function () {
      let response = await request(app)
        .post("/auth/login")
        .send({ username: "test1", password: "WRONG" });
      expect(response.statusCode).toEqual(400);
    });

    test("won't login w/wrong password", async function () {
      let response = await request(app)
        .post("/auth/login")
        .send({ username: "not-user", password: "password" });
      expect(response.statusCode).toEqual(400);
    });
  });
});

afterEach(async function () {
  await db.query("DELETE FROM messages");
  await db.query("DELETE FROM users");
});

afterAll(async function () {
  await db.end();
});
