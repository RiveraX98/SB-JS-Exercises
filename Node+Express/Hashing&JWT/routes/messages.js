const Message = require("../models/message");
const express = require("express");
const ExpressError = require("../expressError");
const router = new express.Router();
const { ensureLoggedIn } = require("../middleware/auth");

/** GET /:id - get detail of message **/

router.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const message = await Message.get(id);
    if (!id) {
      throw new ExpressError(`No such message: ${id}`, 404);
    }
    return res.json(message);
  } catch (e) {
    return next(e);
  }
});
/** POST / - post message **/

router.post("/", ensureLoggedIn, async (req, res, next) => {
  try {
    const from_username = req.user.username;
    const { to_username, body } = req.body;
    const message = await Message.create({ from_username, to_username, body });
    return res.json(message);
  } catch (e) {
    return next(e);
  }
});

/** POST/:id/read - mark message as read **/

router.post("/:id/read", async (req, res, next) => {
  try {
    const { id } = req.params;
    const message = await Message.get(id);
    if (message.to_user.username === req.user.username) {
      const read_at = await Message.markRead(id);
      return res.json(read_at);
    }
    throw new ExpressError("Only the recipient can mark message as read", 400);
  } catch (e) {
    return next(e);
  }
});

module.exports = router;
