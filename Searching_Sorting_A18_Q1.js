function mergeIntervals(intervals) {
  // Sort intervals by start time
  intervals.sort((a, b) => a[0] - b[0]);

  const merged = [];
  let currentInterval = intervals[0];

  for (let i = 1; i < intervals.length; i++) {
    const interval = intervals[i];

    // If the current interval overlaps with the next interval
    if (currentInterval[1] >= interval[0]) {
      // Merge the intervals by updating the end time of the current interval
      currentInterval[1] = Math.max(currentInterval[1], interval[1]);
    } else {
      // If there is no overlap, push the current interval to the merged array
      merged.push(currentInterval);
      currentInterval = interval; // Update the current interval
    }
  }

  // Push the last interval to the merged array
  merged.push(currentInterval);

  return merged;
}

// Example usage:
const intervals1 = [
  [1, 3],
  [2, 6],
  [8, 10],
  [15, 18],
];
console.log(mergeIntervals(intervals1)); // Output: [[1,6],[8,10],[15,18]]

const intervals2 = [
  [1, 4],
  [4, 5],
];
console.log(mergeIntervals(intervals2)); // Output: [[1,5]]
