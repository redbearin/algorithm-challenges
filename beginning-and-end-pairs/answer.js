const pairs = (arr) => {
  const combos = [];
  for (let i = 0; i < arr.length; i++) {
    // if the index from the right is 
    // less than index from left
    if (arr.length - 1 - i < i)
      break;
    // add the subarray with pair to combo arr
    combos.push([arr[i], arr[arr.length - 1 - i]])
  }
  return combos;
}

const arr = [];

document.getElementById('ans').textContent = pairs(arr);