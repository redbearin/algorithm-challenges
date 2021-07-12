const wordsToSentence = (arr) => { 
  // initialize sentence
  let sentence = '';
  // last element accessed
  let last = false;
  // second to last element accessed
  let secondToLast = false;
  // from end of array, go element
  // by element
  for (let i = arr.length - 1; i >= 0; i--) {
    // element is a space
    if (arr[i] === '') {
      continue;
    }
    // last element (not counting spaces)
    if (last === false && secondToLast === false) {
      sentence = arr[i];
      // mark that last element accessed
      last = true;
    }
    // second to last element (not counting spaces)
    else if (secondToLast === false) {
      sentence = arr[i] + ' and ' + sentence;
      // mark that second to last accessed
      secondToLast = true;
    }
    // other element (not counting spaces)
    else {
      sentence = arr[i] + ', ' + sentence;
    }
  }
  return sentence; 
};

const arr = ["Hello", "", "Bye"];

document.getElementById('ans').textContent = wordsToSentence(arr);