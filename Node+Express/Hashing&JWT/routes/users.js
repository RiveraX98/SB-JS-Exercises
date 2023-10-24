const express = require("express");
const ExpressError = require("../expressError");
const User = require("../models/user");
const router = new express.Router();
const jwt = require("jsonwebtoken");
const { SECRET_KEY } = require("../config");
const { ensureLoggedIn, ensureCorrectUser } = require("../middleware/auth");
/** GET / - get list of users **/

router.get("/", ensureLoggedIn, async (req, res, next) => {
  const allUsers = await User.all();
  return res.json(allUsers);
});

/** GET /:username - get detail of users **/
router.get("/:username", ensureCorrectUser, async (req, res, next) => {
  try {
    const { username } = req.params;
    const user = await User.get(username);
    if (!user) {
      throw new ExpressError(`User Not Found`, 400);
    }
    return res.json(user);
  } catch (e) {
    return next(e);
  }
});

/** GET /:username/to - get messages to user **/

router.get("/:username/to", async (req, res, next) => {
  try {
    const { username } = req.params;
    const messages = await User.messagesTo(username);
    return res.json(messages);
  } catch (e) {
    return next(e);
  }
});

/** GET /:username/from - get messages from user **/
router.get("/:username/from", async (req, res, next) => {
  try {
    const { username } = req.params;
    const messages = await User.messagesFrom(username);
    return res.json(messages);
  } catch (e) {
    return next(e);
  }
});

module.exports = router;
