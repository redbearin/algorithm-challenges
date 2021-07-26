const numberOfSwaps = (arr) => {
  // initialize the number of swaps
  let swaps = 0;
  // temporary storage for array
  // element during swap
  let temp;
  // store the swaps during a round
  let swapsForRound;
  // continue to loop 
  // until there are no swaps in a round
  while (swaps >= 0) {
    // initialize the starting number 
    // of swaps for the round
    swapsForRound = swaps;
    // cycle element by element thru array
    for (let i = 1; i < arr.length; i++) {
      // elements are not in sorted order
      // reorder and increment swaps
      if (arr[i] < arr[i-1]) {
        swaps++;
        temp = arr[i];
        arr[i] = arr[i - 1];
        arr[i - 1] = temp;
      }
    }
    // no swaps took place this round
    // process is finished
    if (swapsForRound === swaps)
      return swaps;
  }
};

const arr = [1, 3, 4, 5];
document.getElementById('ans').textContent = numberOfSwaps(arr);