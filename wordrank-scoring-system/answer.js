const wordRank = (str) => {
  // break string into array of words
  const strArr =  str.split(' ');
  // initialize highest score
  // and word associated with highest scoree
  let highestScore = 0;
  let word = '';
  // declare score variable
  let score;
  // go word by word thru strArr
  for (let i = 0; i < strArr.length; i++) {
    // intialize score for word
    score = 0;
    // go letter by letter through word and 
    // add points to the score
    for (let j = 0; j < strArr[i].length; j++) {
      if (strArr[i].charCodeAt(j) > 64 && strArr[i].charCodeAt(j) < 91)
        score += strArr[i].charCodeAt(j) - 64;
      if (strArr[i].charCodeAt(j) > 96 && strArr[i].charCodeAt(j) < 123)
        score += strArr[i].charCodeAt(j) - 96;
    }
    // if highest score
    // update word and highest score
    if (score > highestScore) {
      word = strArr[i];
      highestScore = score;
    }
  }
  // initialize final word
  let finalWord = '';
  // remove everything that is not a letter
  for (let i = 0; i < word.length; i++) {
    if (word.charCodeAt(i) > 64 && word.charCodeAt(i) < 91 ||
        word.charCodeAt(i) > 96 && word.charCodeAt(i) < 123)
      finalWord += word[i];
  }
  return finalWord;
}

const str = "Wednesday is hump day.";
document.getElementById('ans').textContent = wordRank(str);