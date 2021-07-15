const encrypt = (str) => {
  let newStr = '';
  // obj that correlated letters with numbers
  const vowelNums = {a: 0, e: 1, i: 2, o: 2, u: 3};
  // cycle through string from back
  for (let i = str.length - 1; i >= 0; i--) {
    // if it is a vowel
    if (str[i] in vowelNums)
      // change to the appropriate number
      // add to newStr
      newStr += vowelNums[str[i]];
    else
      // add the consonate letter to newStr
      newStr += str[i];
  }
  // add suffix and return
  return newStr + "aca";
};

const str = "alpaca";

document.getElementById('ans').textContent = encrypt(str);