const warpTunnel = (arr, shift) => {

  // length of subarrays
  const subLen = arr[0].length;
  // move all elements to array wo
  // subarrays
  const flatArr = arr.flat();
  // elements that will move to front
  if (shift === flatArr.length || 
      shift % flatArr.length === 0)
    return arr;
  else if (shift > flatArr.length) {
    shift = shift % flatArr.length;
  }
  const move = [...flatArr.slice(-shift)];
  // front end
  const base = [...flatArr.slice(0, -shift)];
  // build new array with part that is moved 
  // to front and base
  const newArr = move.concat(base);
  // placeholder for newArr with subarrays
  const newArrWSubs = [];
  let index = 0;
  // cycle through indices in newArr
  // build subarrays and add to newArrWSubs
  while(index < newArr.length) {
    let sub = [];
    for (let i = index; i < index + subLen; i++) {
      sub.push(newArr[i])
    }
    newArrWSubs.push(sub);
    // increment the index to the index of first
    // element in next subarray
    index += subLen;
  }
  return newArrWSubs;
};

const arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
const shift = 18;

document.getElementById('ans').textContent = warpTunnel(arr, shift);