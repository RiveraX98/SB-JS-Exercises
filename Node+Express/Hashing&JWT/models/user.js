/** User class for message.ly */

const db = require("../db");
const bcrypt = require("bcrypt");
const { BCRYPT_WORK_FACTOR, SECRET_KEY } = require("../config");

class User {
  constructor({ username, first_name, password, last_name, phone }) {
    this.username = username;
    this.password = password;
    this.first_name = first_name;
    this.last_name = last_name;
    this.phone = phone;
  }
  /** register new user -- returns**/

  static async register({ username, password, first_name, last_name, phone }) {
    const hashedPwd = await bcrypt.hash(password, BCRYPT_WORK_FACTOR);
    const res = await db.query(
      `INSERT INTO users (username, password, first_name, last_name, phone, join_at, last_login_at )
    VALUES ($1, $2, $3, $4, $5,current_timestamp,current_timestamp) RETURNING username,password, first_name, last_name, phone`,
      [username, hashedPwd, first_name, last_name, phone]
    );

    return res.rows[0];
  }

  /** Authenticate: is this username/password valid? Returns boolean. */

  static async authenticate(username, password) {
    const res = await db.query(
      `SELECT username, password FROM users WHERE username =$1`,
      [username]
    );
    const user = res.rows[0];
    if (user) {
      if (await bcrypt.compare(password, user.password)) {
        this.updateLoginTimestamp(username);
        return true;
      }
    }
    return false;
  }

  /** Update last_login_at for user */

  static async updateLoginTimestamp(username) {
    await db.query(
      `UPDATE users SET last_login_at = current_timestamp WHERE username = $1`,
      [username]
    );
  }

  /** All: basic info on all users:**/

  static async all() {
    const result = await db.query(
      `SELECT username,
                first_name,
                last_name,
                phone
            FROM users`
    );

    return result.rows;
  }

  /** Get: get user by username**/

  static async get(username) {
    const res = await db.query(
      `SELECT username,first_name,last_name,phone,last_login_at,join_at FROM users WHERE username=$1`,
      [username]
    );
    return res.rows[0];
  }

  /** Return messages from this user.*/

  static async messagesFrom(username) {
    const result = await db.query(
      `SELECT m.id,
              m.to_username,
              m.from_username,
              m.body,
              m.sent_at,
              m.read_at
        FROM messages AS m
        WHERE from_username = $1`,
      [username]
    );
    return result.rows;
  }

  /** Return messages to this user.*/

  static async messagesTo(username) {
    const result = await db.query(
      `SELECT m.id,
      m.to_username,
      m.from_username,
      m.body,
      m.sent_at,
      m.read_at
      FROM messages as m
      WHERE to_username = $1`,
      [username]
    );
    return result.rows;
  }
}

module.exports = User;
