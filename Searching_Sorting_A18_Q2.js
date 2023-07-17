function sortColors(nums) {
  let low = 0; // Pointer for 0
  let mid = 0; // Pointer for 1
  let high = nums.length - 1; // Pointer for 2

  while (mid <= high) {
    if (nums[mid] === 0) {
      // If the current element is 0, swap it with the element at the low pointer
      [nums[low], nums[mid]] = [nums[mid], nums[low]];
      low++;
      mid++;
    } else if (nums[mid] === 1) {
      // If the current element is 1, move the mid pointer forward
      mid++;
    } else {
      // If the current element is 2, swap it with the element at the high pointer
      [nums[mid], nums[high]] = [nums[high], nums[mid]];
      high--;
    }
  }
}

// Example usage:
const nums1 = [2, 0, 2, 1, 1, 0];
sortColors(nums1);
console.log(nums1); // Output: [0,0,1,1,2,2]

const nums2 = [2, 0, 1];
sortColors(nums2);
console.log(nums2); // Output: [0,1,2]
