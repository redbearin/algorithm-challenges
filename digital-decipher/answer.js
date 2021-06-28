const digitalDecipher = (eMessage, key) => {
  // break key into array of string digits
  const keyArr = key.toString().split('');
  const letters = [];
  /// intialize counter for index in key
  let keyIdx = 0;
  // go number through number in emessage
  for (let i = 0; i < eMessage.length; i++) {
    // keyIdx beyond the last index
    // go back to zero index
    if (keyIdx > keyArr.length - 1)
      keyIdx = 0;
    // add letter to letter array
    letters.push(String.fromCharCode(eMessage[i] - +keyArr[keyIdx] + 96));
    // increment the keyIdx
    keyIdx++;
  }
  // build and return word
  return letters.join('');
};

const eMessage = [6, 4, 1, 3, 9, 20];
const key = 100;

document.getElementById('ans').textContent = digitalDecipher(eMessage, key);