const express = require("express");
const operations = require("./operations");
const ExpressError = require("./expressError");
const app = express();

app.get("/mean", function (req, res, next) {
  try {
    if (!req.query.nums) {
      throw new ExpressError("Query of numbers required.", 400);
    }
  } catch (e) {
    next(e);
  }

  try {
    let nums = req.query.nums.split(",");
    arr = operations.validateAndConvert(nums);

    if (arr instanceof Error) {
      throw new ExpressError(arr.message, 400);
    }

    val = operations.findMean(arr);
    return res.json(`operation:Mean, value:${val} `);
  } catch (e) {
    console.log(`error: ${e}`);
    next(e);
  }

  // if (nums instanceof ExpressError){
  //     next(e)
  // }

  //   return res.json(`operation: "Mean", value:"${val}" `);
});

app.get("/median", function (req, res, next) {
  try {
    if (!req.query.nums) {
      throw new ExpressError("Query of numbers required.", 400);
    }
  } catch (e) {
    next(e);
  }

  try {
    let nums = req.query.nums.split(",");
    arr = operations.validateAndConvert(nums);

    if (arr instanceof Error) {
      throw new ExpressError(arr.message, 400);
    }
    val = operations.findMedian(arr);
    res.json(`operation: median, value:${val}`);
  } catch (e) {
    next(e);
  }
});

app.get("/mode", function (req, res) {
  const nums = req.query.nums;
  operations.findMode(nums);
});

app.use((error, req, res, next) => {
  let status = error.status || 500;
  console.log(error);
  let msg = error.msg;
  return res.status(status).json({ error: { status, msg } });
});

app.listen(3000, () => {
  console.log("Server Running");
});
