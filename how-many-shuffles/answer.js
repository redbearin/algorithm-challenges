const shuffleCount = (num) => {
  // build an array from num
  // build the framework to place 
  // numbers as array is shuffled
  let numArr = [];
  let shuffledArr = [];
  for (let i = 1; i <= num; i++) {
    numArr.push(i);
    shuffledArr.push(' ');
  }
  // create a string from the initial array
  const baseStr = numArr.join('');

  // number times array is shuffled
  let timesShuffled = 0;
  // index of numArr
  let index;

  // shuffled array is not the base as 
  // the initial array
  while (shuffledArr.join('') !== baseStr) {
    timesShuffled++;
    // starting at beginning of numArr
    index = 0;
    while (index < num/2) {
      // increment shuffled array index by 2
      // starting at 0 index
      for (let i  = 0; i < shuffledArr.length; i += 2) {
        shuffledArr[i] = numArr[index];
        // increment numArr index
        index++;
      }
    }
    // starting halfway through numArr
    index = num/2;
    while (index < num) {
      // increment shuffled array index by 2
      // starting at 1 index
      for (let i  = 1; i < shuffledArr.length; i += 2) {
        shuffledArr[i] = numArr[index];
        // increment numArr index
        index++;
      }
    }
    // assign the shuffled array to the numArr
    numArr = [...shuffledArr];
  }
  return timesShuffled;
};

const num = 52;

document.getElementById('ans').textContent = shuffleCount(num);
