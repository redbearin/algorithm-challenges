const cleanUp = (arr, part) => {
  // array that includes prefix and suffix
  // for each string
  const preAndSuf = [];
  const matches = [];
  let sub, position;
  // break into and array of subarrays that 
  // include prefix and suffix
  for (let i = 0; i < arr.length; i++) {
      preAndSuf.push(arr[i].split('.'));
  }
  // assign subarray position (prefix or suffix)
  if(part === 'suffix')
    position = 1;
  else
    position = 0;
  // go element by element through array
  for (let i = 0; i < arr.length; i++) {
    // already reviewed, skip
    if (preAndSuf[i][position] === '*')
      continue;
    // initialize the subarray with current
    // arr string
    sub = [arr[i]];
    // go element by element through array
    for (let j = 0; j < arr.length; j++) {
      // if on same index as i skip
      if (i === j)
        continue;
      // matches in the position
      if (preAndSuf[i][position] === preAndSuf[j][position]) {
        // add to subarray
        sub.push(arr[j]);
        // mark as already reviewed
        preAndSuf[j][position] = '*';
      }
    }
    // subarray has a match
    if (sub.length > 1)
      matches.push(sub);
  }
  return JSON.stringify(matches);
}
const arr = ["_1.rb", "_2.rb", "_3.rb", "_4.rb"]; 
const part = "prefix";
document.getElementById('ans').textContent = cleanUp(arr, part);