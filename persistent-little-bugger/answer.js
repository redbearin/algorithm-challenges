const bugger = (num) => {
  let times = 0;
  let strNum = num.toString();
  // the number has 
  // more than one digit
  while (strNum.length > 1) {
    // increment the times counter
    times++;
    let product = 1;
    // go number through number and
    // find the product
    for (let i = 0; i < strNum.length; i++) {
      product *= +strNum[i];
    }
    // assign the product string to strNum
    strNum = product.toString();
  }
  return times;
};

const num = 4;

document.getElementById('ans').textContent = bugger(num);