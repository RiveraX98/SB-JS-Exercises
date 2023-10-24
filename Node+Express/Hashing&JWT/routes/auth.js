const express = require("express");
const ExpressError = require("../expressError");
const User = require("../models/user");
const router = new express.Router();
const jwt = require("jsonwebtoken");
const { SECRET_KEY } = require("../config");

/** POST /login - login: {username, password} => {token}**/

router.post("/login", async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const auth = await User.authenticate(username, password);
    if (auth) {
      const token = jwt.sign({ username }, SECRET_KEY);
      return res.json({ message: "Logged In", token });
    }
    throw new ExpressError("Invalid username or password", 400);
  } catch (e) {
    return next(e);
  }
});

/** POST /register - register user: registers, logs in, and returns token.*/

router.post("/register", async (req, res, next) => {
  try {
    const { username, password, first_name, last_name, phone } = req.body;
    let user = await User.register({
      username,
      password,
      first_name,
      last_name,
      phone,
    });

    user.token = jwt.sign({ username }, SECRET_KEY);

    return res.json(user);
  } catch (e) {
    return next(new ExpressError("Username taken, please try again", 400));
  }
});

module.exports = router;
