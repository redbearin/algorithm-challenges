const largestEven = (arr) => {
  let largestEven = -Infinity;
  for (let i =0; i < arr.length; i++) {
    if (arr[i] % 2 === 0  && arr[i] > largestEven)
      largestEven = arr[i];
  }
  if (largestEven === -Infinity)
    return -1;
  return largestEven;
};

const arr = [0, 19, 18973623];

document.getElementById('ans').textContent = largestEven(arr);