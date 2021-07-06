const lowestElement = (arr, idx1, idx2) => {
  // initialize smallest
  let smallest = Infinity;
  // cycle through rows from 
  // one before to one after idx1
  for (i = idx1 - 1; i <= idx1 + 1; i++) {
    // i is outside array
    // skip
    if (i === -1 || 
        i === arr.length)
      continue;
    // cycle through columns from
    // one before to one after idx2
    for (j = idx2 - 1; j <= idx2 + 1; j++) { 
      // j outside array
      // or on the initial element 
      // skip   
      if(j === -1 || 
         j === arr[i].length || 
         i === idx1 && j === idx2)
        continue;
      // if element is smaller
      // assign it to smallest
      if (arr[i][j] < smallest)
        smallest = arr[i][j];
    }
  }
  return smallest;
};

const arr = [
  [0, 3, 6], 
  [1, 4, 7], 
  [2, 5, 8]
];
const idx1 = 2;
const idx2 = 2;

document.getElementById('ans').textContent = lowestElement(arr, idx1, idx2);