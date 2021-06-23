const countDigits = (nums, type) => {
  // build array of string nums
  const strNums = [];
  for (let i = 0; i < nums.length; i++) {
    strNums.push(nums[i].toString());
  }
  const final = [];
  // go through string number by string number
  for (let i = 0; i < strNums.length; i++) {
    // initialize count for string number
    count = 0;
    // go through digit by digit
    for (let j = 0; j < strNums[i].length; j++) {
      // type is even
      // digit is even
      if (type === 'even' && 
          +strNums[i][j] % 2 === 0)
        count++;
      // type is odd
      // digit is odd
      else if (type === 'odd' && 
               +strNums[i][j] % 2 !== 0)
        count++;
    }
    final.push(count);
  }
  return final;
}

const nums = [54, 113, 89, 10];
const type = 'odd';

document.getElementById('ans').textContent = countDigits(nums, type);
