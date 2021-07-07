const afterPotion = (str) => {
  // initialized str to build numbers
  let num = '';
  // array of new numbers after
  // addition and subtraction
  const newNums = [];
  // go element by element through str
  for (let i = 0; i < str.length; i++) {
    // add one to num
     // push to newNums array
     // reinitialize num
    if (str[i] === 'A') {
      newNums.push(+num + 1);
      num = '';
    }
    // subtract one from num
    // push to newNums array
    // reinitialize num
    else if (str[i] === 'B') {
      newNums.push(+num - 1);
      num = '';
    }
    // on last element and it is a number
    else if (i === str.length - 1) {
      num += str[i];
      newNums.push(num);
    }
    // not a letter and not
    // last element
    // add digit to num
    else {
      num += str[i];
    }
  }
  return newNums.join('');
};

const str = "567";

document.getElementById('ans').textContent = afterPotion(str);