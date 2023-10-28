const express = require("express");
const items = require("./fakeDb");
const ExpressError = require("./expressError");
const router = new express.Router();

router.get("/", function (req, res) {
  res.json({ items });
});

router.post("/", function (req, res) {
  const newItem = { name: req.body.name, price: req.body.price };
  items.push(newItem);
  res.status(201).json({ added: newItem });
});

router.get("/:name", function (req, res, next) {
  try {
    const foundItem = items.find((item) => item.name === req.params.name);
    if (foundItem === undefined) {
      throw new ExpressError("item not found", 404);
    }
    res.json({ item: foundItem });
  } catch (e) {
    return next(e);
  }
});

router.patch("/:name", function (req, res, next) {
  try {
    const foundItem = items.find((item) => item.name === req.params.name);
    if (foundItem === undefined) {
      throw new ExpressError("item not found", 404);
    }

    foundItem.name = req.body.name;
    foundItem.price = req.body.price;

    res.json({ updated: foundItem });
  } catch (e) {
    return next(e);
  }
});

router.delete("/:name", function (req, res) {
  const foundItem = items.find((item) => item.name === req.params.name);
  if (foundItem === undefined) {
    throw new ExpressError("item not found", 404);
  }

  items.pop(foundItem);

  res.json({ Deleted: req.params.name });
});

module.exports = router;
