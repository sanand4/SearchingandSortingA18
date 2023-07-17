function firstBadVersion(n) {
  let left = 1;
  let right = n;

  while (left < right) {
    const mid = Math.floor(left + (right - left) / 2);

    if (isBadVersion(mid)) {
      // If mid is a bad version, search in the left half
      right = mid;
    } else {
      // If mid is not a bad version, search in the right half
      left = mid + 1;
    }
  }

  return left;
}

// Example usage:
const n1 = 5;
const bad1 = 4;
console.log(firstBadVersion(n1)); // Output: 4

const n2 = 1;
const bad2 = 1;
console.log(firstBadVersion(n2)); // Output: 1
