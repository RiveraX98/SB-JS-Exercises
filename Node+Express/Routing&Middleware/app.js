const express = require("express");
const app = express();
const itemsRoutes = require("./itemsRoute");
const ExpressError = require("./expressError");

app.use(express.json());

app.use("/shopping", itemsRoutes);

app.use((error, req, res, next) => {
  let status = error.status || 500;
  let msg = error.msg;
  return res.status(status).json({ error: { status, msg } });
});

module.exports = app;
