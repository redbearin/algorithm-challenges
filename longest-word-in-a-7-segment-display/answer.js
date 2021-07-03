const longest7SegmentWord = (words) => {
  const notAllowed = ['k', 'm', 'v', 'w', 'x'];
  // initialize the longest acceptable word as a space
  let longest = '';
  // go word by word
  for (let i = 0; i < words.length; i++) {
    // go letter by letter in the word
    for (let j = 0; j < words[i].length; j++) {
      // reached letter that is not allowed
      if(notAllowed.includes(words[i][j])) {
        // go to next word
        break;
      }
      // all letters are acceptable
      if (j === words[i].length - 1) {
        // length of current word is longer
        // than length of longest word
        // make this word the longest word
        if (longest.length < words[i].length)
          longest = words[i];
      }
    }
  }
  // longest word
  return longest;
};

const words = ["velocity", "mackerel", "woven", "kingsmen"];

document.getElementById('ans').textContent = longest7SegmentWord(words);