const findMissing = (arr) => {
  // empty array
  if (!arr.length)
    return false;
  // initialize array of lengths
  const lengths = [];
  // go through arr element by element
  for (let i = 0; i < arr.length; i++) {
    // add length of each subarray to 
    // lengths array
    lengths.push(arr[i].length);
  }
  // sort the lengths array
  lengths.sort((a,b) => a-b);
  // a subarray is empty
  if (lengths[0] === 0)
    return false;
  // find the gaps in the lengths
  for (let i = 1; i < arr.length; i++) {
    if (lengths[i - 1] + 1 !== lengths[i])
      return lengths[i - 1] + 1;
  }
};

const arr = [[4, 4, 4, 4], [1], [3, 3, 3]];

document.getElementById('ans').textContent = findMissing(arr);