const ExpressError = require("./expressError");

function validateAndConvert(nums) {
  let arr = [];
  console.log(nums);
  for (let str of nums) {
    let num = Number(str);
    if (isNaN(num)) {
      return new Error(`${num} must be a number`);
    }
    arr.push(num);
  }
  console.log("nums converted");
  return arr;
}

function findMean(nums) {
  let total = 0;
  for (let num of nums) {
    total += num;
  }
  return total / nums.length;
}

function findMedian(nums) {
  let midpoint = Math.ceil(nums.length / 2);
  console.log(midpoint);
  return nums[midpoint - 1];
}

function findMode(nums) {
  let counter = {};
  let highest = 0;
  let mostFreqNum;
  for (let num of nums) {
    if (counter[num]) {
      counter[num] += 1;
      counter[num] > highest
        ? (mostFreqNum = num)
        : (mostFreqNum = mostFreqNum);
      counter[num] > highest ? (highest = counter[num]) : (highest = highest);
    } else {
      counter[num] = 1;
    }
  }

  return mostFreqNum;
}

module.exports = {
  findMean: findMean,
  findMedian: findMedian,
  findMode: findMode,
  validateAndConvert: validateAndConvert,
};
