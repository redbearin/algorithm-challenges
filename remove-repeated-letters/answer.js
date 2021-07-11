const removeRepeats = (str) => {
  // initialize array with duplicates
  // removed
  const noDups = [];
  // go letter by letter through str
  for (let i = 0; i < str.length; i++) {
    // first index or str at index
    // not same as str at prior index
    // add to noDups array
    if (i === 0 || str[i] !== str[i - 1])
      noDups.push(str[i])
  }
  // join letters in noDups array
  // into a string
  return noDups.join('');
}

const str = "aaabbbccc";

document.getElementById('ans').textContent = removeRepeats(str); 