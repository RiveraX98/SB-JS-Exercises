let nums = [
  4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34, 23, 2, 453, 546, 75, 67, 4342,
  32,
];

function getMax(arr) {
  let max = 0;
  for (let num of arr) {
    if (num > max) {
      max = num;
    }
  }
  return max;
}

function countSort(arr, exp) {
  let output = new Array(arr.length).fill(0);
  let count = new Array(10).fill(0);

  for (let i = 0; i < arr.length; i++) {
    count[Math.floor(arr[i] / exp) % 10]++;
  }

  for (let i = 1; i < 10; i++) {
    count[i] += count[i - 1];
  }

  for (let i = arr.length - 1; i >= 0; i--) {
    output[count[Math.floor(arr[i] / exp) % 10] - 1] = arr[i];
    count[Math.floor(arr[i] / exp) % 10]--;
  }

  for (let i = 0; i < arr.length; i++) {
    arr[i] = output[i];
  }
}

function radixSort(arr) {
  const max = getMax(arr);

  for (let exp = 1; Math.floor(max / exp) > 0; exp *= 10) {
    countSort(arr, exp);
  }

  return arr;
}

console.log(radixSort(nums));

module.exports = { getMax, countSort, radixSort };
