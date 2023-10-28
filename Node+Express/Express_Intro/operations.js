const ExpressError = require("./expressError");

function validateAndConvert(nums) {
  let arr = [];

  for (let str of nums) {
    let num = Number(str);
    if (isNaN(num)) {
      return new Error(`${num} must be a number`);
    }
    arr.push(num);
  }

  return arr;
}

function findMean(nums) {
  if (nums.length === 0) return 0;
  let total = 0;
  for (let num of nums) {
    total += num;
  }
  return total / nums.length;
}

function findMedian(nums) {
  nums.sort((a, b) => a - b);

  let midpoint = Math.floor(nums.length / 2);

  if (nums.length % 2 === 0) {
    return (nums[midpoint] + nums[midpoint - 1]) / 2;
  }
  return nums[midpoint];
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
  findMean,
  findMedian,
  findMode,
  validateAndConvert,
};
