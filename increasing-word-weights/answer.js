const increasingWordWeights = (str) => {
  // split into array of words
  const strArr = str.split(' ');
  const weights = [];
  let sum;
  // go word by word thru array
  for (let i = 0; i < strArr.length; i++) {
    sum = 0;
    // go element by element through word
    for (let j = 0; j < strArr[i].length; j++) {
      if (strArr[i].charCodeAt(j) > 64 && 
          strArr[i].charCodeAt(j) < 91 ||
          strArr[i].charCodeAt(j) > 96 && 
          strArr[i].charCodeAt(j) < 123)
        // if a letter add code to sum
        sum += strArr[i].charCodeAt(j);
    }
    // add the sum to the weights array
    weights.push(sum);
    // not the first word
    if (i > 0)
      // sum of codes for word not larger
      if (weights[i] <= weights[i - 1])
        return false;
  }
  return true;
};

const str = "Why not try?";

document.getElementById('ans').textContent = increasingWordWeights(str);