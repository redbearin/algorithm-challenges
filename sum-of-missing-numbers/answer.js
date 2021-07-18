const sumOfMissingNums = (arr) => {
  // initialized  array with only numbers
  const cleaned = [];
  // remove anything that is not a number
  for (let i = 0; i < arr.length; i++) {
    if(!isNaN(arr[i]))
      cleaned.push(arr[i]);
  }
  // sort the clean array
  cleaned.sort((a,b) => a-b);
  let count = 0;
  // go through clean and array and count gaps
  for (let i = 1; i < cleaned.length; i++) {
    count += (+cleaned[i] - +cleaned[i-1]) - 1;
  }
  return count;
};

const arr = ["1", "5", "B", "9", "z"];

document.getElementById('ans').textContent = sumOfMissingNums(arr);