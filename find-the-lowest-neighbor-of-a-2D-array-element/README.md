Create a function that returns the lowest neighbor of a given (x, y) coordinate element in a 2D array. The function will be passed three parameters.

 arr,  x,  y
arr will be a 2D array holding integer values and will always be symmetrical in size (e.g. 2x2, 3x3, 4x4).
x will hold the row coordinate, while y will hold the column coordinate.
You will have to check the horizontal, vertical and diagonal neighbor elements. If there isn't any lower neighbors, return the value of the given (x, y) coordinate.

Examples
1.
lowestElement([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
], 1, 1) ➞ 1


[
  [1, 2, 3]
  [4, 5, 6]  // (1, 1) holds the integer 5. Check the surrounding neighbors.
  [7, 8, 9]
]
2. 
lowestElement([
  [9, 8, 7],
  [0, -1, -3],
  [-5, -9, 54]
], 0, 0) ➞ -1

[
  [9, 8, 7]   // (0, 0) holds the integer 9. Check the surrounding neighbors.
  [0, -1, -3]
  [-5, -9, 54]
]
3.
lowestElement([
  [0, 3, 6], 
  [1, 4, 7], 
  [2, 5, 8]], 2, 2) ➞ 4