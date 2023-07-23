function find132pattern(nums) {
  let second = -Infinity;
  const stack = [];

  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] < second) {
      return true;
    }

    while (stack.length > 0 && nums[i] > stack[stack.length - 1]) {
      second = Math.max(second, stack.pop());
    }

    stack.push(nums[i]);
  }

  return false;
}

// Test cases
console.log(find132pattern([1, 2, 3, 4])); // Output: false
console.log(find132pattern([3, 1, 4, 2])); // Output: true
console.log(find132pattern([-1, 3, 2, 0])); // Output: true
