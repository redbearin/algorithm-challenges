const possiblePalindrome = (str) => {
  // counts for each letter
  const ltrCount = {};
  // letters with a count of 1
  let countOf1 = 0;
  // add letter counts ltrCount object
  for (let i = 0; i < str.length; i++) {
    if (ltrCount[str[i]])
      ltrCount[str[i]] += 1;
    else
      ltrCount[str[i]] = 1;
  }
  // go through the ltrCount object pair by
  // pair
  for (key in ltrCount) {
    // count is odd and greater than 1
    if (ltrCount[key] > 1 && ltrCount[key] % 2)
      return false;
    // count is 1
    if (ltrCount[key] === 1) {
      countOf1++;
      if (countOf1 > 1)
        return false;
    }
  }
  return true;
};

const str = "acabbaa";

document.getElementById('ans').textContent = possiblePalindrome(str);