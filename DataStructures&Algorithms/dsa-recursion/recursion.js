/** product: calculate the product of an array of numbers. */

function product(nums) {
  if (nums.length === 0) return 0;
  return nums[0] + sum(nums.slice(1));
}

/** longest: return the length of the longest word in an array of words. */

function longest(words, i = 0, longWord = 0) {
  if (words.length === i) return longWord;
  if (words[i].length > longWord) {
    longWord = words[i].length;
  }

  return longest(words, i + 1, longWord);
}

/** everyOther: return a string with every other letter. */

function everyOther(str, i = 0) {
  if (idx >= str.length) return newStr;
  newStr += str[idx];
  return everyOther(str, idx + 2, newStr);
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str) {
  let leftIdx = idx;
  let rightIdx = str.length - idx - 1;
  if (leftIdx >= rightIdx) return true;
  if (str[leftIdx] !== str[rightIdx]) return false;
  return isPalindrome(str, idx + 1);
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, i = 0) {
  if (i > arr.length) return -1;
  if (arr[i] === val) return i;
  return findIndex(arr, val, i + 1);
}

/** revString: return a copy of a string, but in reverse. */

function revString(str, i = str.length - 1, newStr = "") {
  console.log(newStr);
  if (i < 0) return newStr;
  newStr += str[i];
  i--;
  return revString(str, i, newStr);
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj, arr = []) {
  for (let key in obj) {
    if (typeof obj[key] === "string") arr.push(obj[key]);
    if (typeof obj[key] === "object") {
      gatherStrings(obj[key], arr);
    }
  }
  return arr;
}
let nestedObj = {
  firstName: "Lester",
  favoriteNumber: 22,
  moreData: {
    lastName: "Testowitz",
  },
  funFacts: {
    moreStuff: {
      anotherNumber: 100,
      deeplyNestedString: {
        almostThere: {
          success: "you made it!",
        },
      },
    },
    favoriteString: "nice!",
  },
};
console.log(gatherStrings(nestedObj));

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
};
