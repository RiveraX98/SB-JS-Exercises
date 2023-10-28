const express = require("express");

const itemsRoutes = require("./itemsRoute");

const app = express();

app.use(express.json());

app.use("/shopping", itemsRoutes);

app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  if (process.env.NODE_ENV != "test") console.error(err.stack);

  return res.json({
    error: err,
    message: err.message,
  });
});

module.exports = app;
