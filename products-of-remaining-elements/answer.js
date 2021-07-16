const canPartition = (arr) => {
  // initialized the product
  let product;
  // go element by element through array
  for (let i = 0; i < arr.length; i++) {
    product = 1;
    // go through all elements
    // skipping index that is the same as the one 
    // in the outer loop
    for (let j = 0; j < arr.length; j++) {
      if (j !== i)
        product *= arr[j];
    }
    // element is the same as the product
    if (product === arr[i])
      return true;
  }
  // no match
  return false;
};

const arr = [-1, -20, 5, -1, -2, 2];

document.getElementById('ans').textContent = canPartition(arr);