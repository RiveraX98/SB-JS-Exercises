// const request = require("supertest");
const { findMean, findMedian, findMode } = require("./operations");

describe("findMedian", function () {
  test("findMedian with even array", function () {
    expect(findMedian([1, -1, 4, 2])).toEqual(1.5);
  });

  test("findMedian with odd array", function () {
    expect(findMedian([1, -1, 4])).toEqual(1);
  });
});

describe("findMean", function () {
  test("findMean", function () {
    expect(findMean([1, -1, 4, 2])).toEqual(1.5);
  });

  test("findMean with empty array", function () {
    expect(findMean([])).toEqual(0);
  });
});

describe("findMode", function () {
  test("findMode", function () {
    expect(findMode([1, 1, 1, 2, 2, 3])).toEqual(1);
  });
});
