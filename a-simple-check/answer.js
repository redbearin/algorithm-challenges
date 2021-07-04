const simpleCheck = (num1, num2, count = 0) => {
  // as long as one of numbers is not 0
  while (num1 !== 0 && num2 !== 0) {
    // if one number can be divided evenly into other
    if(num2 % num1 === 0 || num1 % num2 === 0 )
      // increment count
      count++;
    // reduce each number by 1
    num1 = num1 - 1;
    num2 = num2 - 1;
    // go through the operation again
    return simpleCheck(num1, num2, count);
  }
  return count;
};

const num1 = 54;
const num2 = 17;

document.getElementById('ans').textContent = simpleCheck(num1, num2);