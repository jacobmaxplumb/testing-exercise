// mathFunctions.js

function factorial(n) {
  if (n < 0) {
    throw new Error("Factorial is not defined for negative numbers");
  }
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}

function findMax(arr) {
  if (arr.length === 0) {
    throw new Error("Array cannot be empty");
  }
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

function filterOdds(arr) {
  return arr.filter((num) => num % 2 === 0);
}

function mergeSortedArrays(arr1, arr2) {
  let result = [];
  let i = 0,
    j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      result.push(arr1[i++]);
    } else {
      result.push(arr2[j++]);
    }
  }

  while (i < arr1.length) {
    result.push(arr1[i++]);
  }

  while (j < arr2.length) {
    result.push(arr2[j++]);
  }

  return result;
}

module.exports = { factorial, findMax, filterOdds, mergeSortedArrays };
