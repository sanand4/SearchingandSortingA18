function maximumGap(nums) {
  if (nums.length < 2) {
    return 0;
  }

  // Step 1: Find the minimum and maximum elements in the array
  const minNum = Math.min(...nums);
  const maxNum = Math.max(...nums);

  // Step 2: Calculate the gap size
  const gap = Math.max(1, Math.floor((maxNum - minNum) / (nums.length - 1)));

  // Step 3: Create buckets to store minimum and maximum values
  const bucketSize = Math.floor((maxNum - minNum) / gap) + 1;
  const bucketsMin = new Array(bucketSize).fill(Infinity);
  const bucketsMax = new Array(bucketSize).fill(-Infinity);

  // Step 4 and Step 5: Update the bucketsMin and bucketsMax arrays
  for (const num of nums) {
    const index = Math.floor((num - minNum) / gap);
    bucketsMin[index] = Math.min(bucketsMin[index], num);
    bucketsMax[index] = Math.max(bucketsMax[index], num);
  }

  // Step 6: Find the maximum gap
  let maxGap = 0;
  let prevMax = minNum;
  for (let i = 0; i < bucketSize; i++) {
    if (bucketsMin[i] === Infinity) {
      continue;
    }
    maxGap = Math.max(maxGap, bucketsMin[i] - prevMax);
    prevMax = bucketsMax[i];
  }

  // Step 7: Return the maximum gap found
  return maxGap;
}

// Test cases
console.log(maximumGap([3, 6, 9, 1])); // Output: 3
console.log(maximumGap([10])); // Output: 0
