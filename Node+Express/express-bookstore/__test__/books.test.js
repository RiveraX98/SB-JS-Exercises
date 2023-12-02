process.env.NODE_ENV = "test";

const request = require("supertest");
const app = require("../app");
const db = require("../db");
// require("./jest.config");

let book_isbn;

beforeEach(async () => {
  let result = await db.query(`
    INSERT INTO
      books (isbn, amazon_url,author,language,pages,publisher,title,year)
      VALUES(
        '123432122',
        'https://amazon.com/book',
        'Ellen Page',
        'English',
        257,
        'Amazing publishers',
        'Great Book', 2021)
      RETURNING isbn`);

  book_isbn = result.rows[0].isbn;
});

describe("POST /books", function () {
  test("Creates a new book", async function () {
    const response = await request(app).post(`/books`).send({
      isbn: "32794782",
      amazon_url: "https://books.com",
      author: "mctest",
      language: "english",
      pages: 1000,
      publisher: "amazing times",
      title: "fake book",
      year: 2020,
    });
    expect(response.statusCode).toBe(201);
    expect(response.body.book).toHaveProperty("isbn");
  });

  test("Create book without required attributes", async function () {
    const response = await request(app).post(`/books`).send({ year: 2000 });
    expect(response.statusCode).toBe(400);
  });
});

describe("GET /books", function () {
  test("Gets a list books", async function () {
    const response = await request(app).get(`/books`);
    const books = response.body.books;
    expect(response.statusCode).toBe(200);
    expect(books).toHaveLength(1);
  });
});

describe("GET /books/:isbn", function () {
  test("Gets a single book", async function () {
    const response = await request(app).get(`/books/${book_isbn}`);
    expect(response.statusCode).toBe(200);
    expect(response.body.book.isbn).toBe(book_isbn);
  });

  test("Responds with 404 if book does not exist", async function () {
    const response = await request(app).get(`/books/999`);
    expect(response.statusCode).toBe(404);
  });
});

describe("PUT /books/:id", function () {
  test("Updates a book", async function () {
    const response = await request(app).put(`/books/${book_isbn}`).send({
      amazon_url: "https://books.com",
      author: "fake author",
      language: "english",
      pages: 257,
      publisher: "Amazing publishers",
      title: "UPDATED BOOK",
      year: 2021,
    });
    expect(response.body.book).toHaveProperty("isbn");
    expect(response.body.book.title).toBe("UPDATED BOOK");
  });

  test("Prevents a bad book update", async function () {
    const response = await request(app).put(`/books/${book_isbn}`).send({
      isbn: "32794782",
      badField: "DO NOT ADD ME!",
      amazon_url: "https://books.com",
      author: "fake author",
      language: "english",
      pages: 257,
      publisher: "yeah right",
      title: "UPDATED BOOK",
      year: 2021,
    });
    expect(response.statusCode).toBe(200);

    expect(response.body).not.toContain("badField");
  });

  test("Responds 404 if book does not exist", async function () {
    // delete book first
    await request(app).delete(`/books/${book_isbn}`);
    const response = await request(app).delete(`/books/${book_isbn}`);
    expect(response.statusCode).toBe(404);
  });
});

describe("DELETE /books/:id", function () {
  test("Deletes a book", async function () {
    const response = await request(app).delete(`/books/${book_isbn}`);
    expect(response.body).toEqual({ message: "Book deleted" });
  });
});

afterEach(async function () {
  await db.query("DELETE FROM BOOKS");
});

afterAll(async function () {
  await db.end();
});
