const reorderDigits = (nums, direction) => {
  let strArr;
  const reordered = [];
  // go number by number through nums array
  for (let i = 0; i < nums.length; i++) {
    // convert number to string and create an 
    // array of digitts
    strArr = nums[i].toString().split('');
    // sort the digits based on direction
    if (direction === 'asc') 
      strArr.sort((a,b) => a-b);
    if (direction === 'des') 
      strArr.sort((a,b) => b-a);
    // add the reordered number to 
    // reordered array
    reordered.push(+strArr.join(''));
  }
  return JSON.stringify(reordered);
}


const nums = [515, 341, 98, 44, 211];
const direction = 'asc'

document.getElementById('ans').textContent = reorderDigits(nums, direction);