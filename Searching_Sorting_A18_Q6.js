function findMinArrowsBurstBalloons(points) {
  if (points.length === 0) {
    return 0;
  }

  // Step 1: Sort the balloons based on their end points
  points.sort((a, b) => a[1] - b[1]);

  let arrows = 1;
  let end = points[0][1];

  // Step 2: Find overlapping segments to minimize the number of arrows
  for (let i = 1; i < points.length; i++) {
    if (points[i][0] > end) {
      // If the current balloon's start point is beyond the end point of the current segment,
      // we need to shoot another arrow and update the current segment's end point.
      arrows++;
      end = points[i][1];
    }
  }

  return arrows;
}

// Test cases
console.log(
  findMinArrowsBurstBalloons([
    [10, 16],
    [2, 8],
    [1, 6],
    [7, 12],
  ])
); // Output: 2
console.log(
  findMinArrowsBurstBalloons([
    [1, 2],
    [3, 4],
    [5, 6],
    [7, 8],
  ])
); // Output: 4
console.log(
  findMinArrowsBurstBalloons([
    [1, 2],
    [2, 3],
    [3, 4],
    [4, 5],
  ])
); // Output: 2
