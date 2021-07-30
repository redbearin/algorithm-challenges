const shadowSentence = (sent1, sent2) => {
  const sent1Arr = sent1.split(' ');
  const sent2Arr = sent2.split(' ');
  // same number of words in sentences
  if (sent1Arr.length === sent2Arr.length) {
    // word by word through arrays
    for (let i = 0; i < sent1Arr.length; i++) {
      // words are not the same lengths
      if (sent1Arr[i].length !== sent2Arr[i].length) 
        return false;
      // words are same length
      // make sure letters not duplicated in words
      for (let j = 0; j < sent1Arr[i].length; j++) {
        // duplicate letters between words
        if(sent2Arr[i].includes(sent1Arr[i][j]))
          return false;
      }
    }
    return true;
  }
  return false;
};

const sent1 = "salmonella supper";
const sent2 = "birthright";

document.getElementById('ans').textContent = shadowSentence(sent1, sent2); 