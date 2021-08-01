const sortByLetter = (list) => {
  const ltrAndStr = [];
  // build an array of subarrays
  // that include ltr and str
  for (let i = 0; i < list.length; i++) {
    for (let j = 0; j < list[i].length; j++) {
      if(isNaN(list[i][j])) {
        ltrAndStr.push([list[i][j], list[i]]);
        break;
      }
    }
  }
  // sort array of subarrays by the letter
  ltrAndStr.sort();

  let strSorted = [];
  // create an array of just strings
  for (let i = 0; i < ltrAndStr.length; i++) {
    strSorted.push(ltrAndStr[i][1]);
  }
  // format for browser and return
  return JSON.stringify(strSorted);
};

const list = [];
document.getElementById('ans').textContent = sortByLetter(list);