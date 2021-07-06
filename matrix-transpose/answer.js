const transposeMatrix = (arr) => {
  let row;
  // create subarray
  let sub = [];
  // initialize column
  let col = 0;
  // initialized new array
  const transposed = [];
  // while you have not gone beyond last row
  while (col < arr[0].length) {
    // initialize sub array
    sub = [];
    // go row by row through array
    for(row = 0; row < arr.length; row++) {
      // add the element from each row in that column
      sub.push(arr[row][col])
    }
    // add subarry to transposed array
    transposed.push(sub);
    // go to next column
    col++;
  }
  return transposed;
};

const arr = [
  [5, 5],
  [6, 7],
  [9, 1]
];

document.getElementById('ans').textContent = transposeMatrix(arr);