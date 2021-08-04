const validateCard = (card) => {
  // convert the number to a string
  const cardStr = card.toString();
  // save the last digit
  const checkDigit = +cardStr[cardStr.length - 1];
  // remove the last digit
  const cutStr = cardStr.slice(0, -1);

  // intialize reversed number
  let numRev = '';
  // reverse the number
  for (let i = cutStr.length - 1; i >= 0; i--) {
    numRev += cutStr[i];
  };

  let num, numStr, multiNum;
  // initialize the final number
  let final = '';
  // go digit by digit thru reversed number
  for (let i = 0; i < numRev.length; i++) {
    // odd digit
    if (i % 2 === 0) {
      // double digit
      num = +numRev[i] * 2;
      // doubled digit < 10
      if (num < 10)
        // add digit to final
        final += num;
      // doubled digit > 9
      else {
        numStr = num.toString();
        multiNum = 0;
        // add the digits together
        for (let j = 0; j < numStr.length; j++) {
          multiNum += +numStr[j];
        }
        // add this new number to final 
        final += multiNum;
      }
    }
    // even digit
    else {
      // add digit directly to final
      final += numRev[i]
    }
  }
  // initialize sum
  let sum = 0;
  // sum the digits in the final number
  for (let i = 0; i < final.length; i++) {
    sum += +final[i];
  }

  const sumStr = sum.toString();
  const lastDigit = +sumStr[sumStr.length - 1]
  // 10 - last digit of sum is checkDigit
  if (10 - lastDigit === checkDigit)
    return true;
  return false;
};

const card = 1234567890123456;

document.getElementById('ans').textContent = validateCard(card);