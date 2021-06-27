const maxCollatz = (num) => {
  // initialize maxNum
  let maxNum = num;
  // continue as long as num > 1
  while (num > 1) {
    // even
    if (num % 2 === 0)
      num = num / 2;
    //odd
    else
      num = num * 3 + 1;
    // if num > maxNum
    // make num maxNum
    if (num > maxNum)
      maxNum = num;
  }
  return maxNum;
}
const num = 85;
document.getElementById('ans').textContent = maxCollatz(num);