const straightDigital = (num) => {
  // convert num to string
  const strNum = num.toString();
  // aren't at least 3 digits
  if(strNum.length < 3)
    return "Not Straight";
  // set the base difference
  const base = +strNum[1] - +strNum[0];
  // loop through remaining digits
  for (let i = 2; i < strNum.length; i++) {
    // difference between two digits NOT same as base
    if (+strNum[i] - +strNum[i-1] !== base)
      return "Not Straight";
  }
  // digits all the same
  if (base === 0)
    return "Trivial Straight";
  // difference between all digits same
  return base;
};

const num = 99;
document.getElementById('ans').textContent = straightDigital(num);