const charCount = (str) => {
  // object to hold letter counts
  const obj = {};
  let lowerLtr;
  // count number of each letter
  for (let i = 0; i < str.length; i++) {
    // a letter
    if(str.charCodeAt(i) > 64 && 
       str.charCodeAt(i) < 91 ||
       str.charCodeAt(i) > 96 && 
       str.charCodeAt(i) < 123) {
      // capital letter
      if (str.charCodeAt(i) > 64 && 
          str.charCodeAt(i) < 91)
        lowerLtr = str[i].toLowerCase();
      // lowercase letter
      else
        lowerLtr = str[i];
      // already a count for the letter
      if (obj[lowerLtr])
        obj[lowerLtr] += 1;
      // not count for letter
      else 
        obj[lowerLtr] = 1;
    }
  }
  // create an array of entry subarrays and sort
  const sortedLtrCts = Object.entries(obj).sort();

  let finalStr = '';
  // go subarray by subarray thru sorted entries
  // build a string in the format requested
  for (let i = 0; i < sortedLtrCts.length; i++) {
    finalStr += sortedLtrCts[i][0] + ':' + sortedLtrCts[i][1];
    if (i !== length - 1)
      finalStr += ' ';
  }
  return finalStr;
};

const str = "Hello world!";

document.getElementById('ans').textContent = charCount(str);