const sortByLast = (str) => {
  // array of words
  const strArr = str.split(' ');
  // array of last letters (from each word)
  const lastLtrs = [];
  // array of words reordered based 
  // on last letter of each word
  const reordered = [];
  // add last letter from each word to  
  // lastLtrs array
  for (i = 0; i < strArr.length; i++) {
    lastLtrs.push(strArr[i][strArr[i].length - 1]);
  }
  // sort lastLtrs array to another reference location
  const sortedLtrs = [...lastLtrs].sort();
  // add each word to reordered array based on 
  // position of last letter and mark that
  // letter so that index is not reused
  for (i = 0; i < sortedLtrs.length; i++) {
    reordered.push(strArr[lastLtrs.indexOf(sortedLtrs[i])]);
    lastLtrs[lastLtrs.indexOf(sortedLtrs[i])] = '*';
  }
  return reordered.join(' ');
};

const str = "sample partner autonomy swallow trend";

document.getElementById('ans').textContent = sortByLast(str);