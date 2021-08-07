const stockPicker = (arr) => {
  let bestProfit = 0;
  // go element by element thru array
  for (let i = 0; i < arr.length; i++) {
    // go element by element starting
    // at element after current index
    for (let j = i + 1; j < arr.length; j++) {
      // profit greater than bestProfit
      // make new best
      if (arr[j] - arr[i] > bestProfit)
        bestProfit = arr[j] - arr[i];
    }
  }
  // no profit 
  if (bestProfit === 0)
    return -1;
  // there is a best profit
  return bestProfit;
}
const arr = [80, 60, 10, 8];
document.getElementById('ans').textContent = stockPicker(arr);