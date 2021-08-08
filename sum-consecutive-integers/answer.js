const sumConsecutives = (arr) => {
  const final = [];
  // initialize: 
  // sum for similar elements
  // and flag that summing of similar 
  // elements is in process
  let sum = 0;
  let sumInProcess = false;
  // go element through element starting
  // at second element (index 1)
  for (let i = 1; i < arr.length; i++) {
    // element same as prior element
    if (arr[i - 1] === arr[i]) {
      sum += arr[i-1];
      sumInProcess = true;
      if (i === arr.length - 1) {
        sum += arr[i];
        final.push(sum);
      }
    }
    // element not same as prior element
    else {
      // there were similar elements
      // add the prior element to sum
      // reinitialize sum and flag for sumInProcess
      if (sumInProcess) {
        sum += arr[i-1];
        final.push(sum);
        sumInProcess = false;
        sum = 0;
      }
      // no similar elements
      else {
        final.push(arr[i-1]);
      }
      // last element
      if (i === arr.length - 1) 
        final.push(arr[i]);
    }
  }
  return JSON.stringify(final);
}

const arr = [0, 7, 7, 7, 5, 4, 9, 9, 0];

document.getElementById('ans').textContent = sumConsecutives(arr);