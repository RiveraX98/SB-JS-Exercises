/** Common config for bookstore. */

// let DB_URI = `postgresql://bookstore`;

// if (process.env.NODE_ENV === "test") {
//   DB_URI = `${DB_URI}/books-test`;
// } else {
//   DB_URI = process.env.DATABASE_URL || `${DB_URI}/books`;
// }

const DB_URI =
  process.env.NODE_ENV === "test"
    ? "postgresql:///bookstore_test"
    : "postgresql:///bookstore";

module.exports = { DB_URI };
