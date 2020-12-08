function ArrayChallenge(array) {
  let currentSum = 0;
  let largestSum = 0;

  for (let number of array) {
    currentSum = Math.max(0, currentSum + number);
    largestSum = Math.max(largestSum, currentSum);
  }

  return largestSum;
}

ArrayChallenge([3, -1, -1, 4, 3, -1]);
