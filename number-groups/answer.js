const number_groups = (arr1, arr2, arr3) => {
  // build one array of all arrays
  const groups = [arr1, arr2, arr3];
  const obj = {};
  const final = [];
  let dupsRem;
  // go through array by array
  for (let i = 0; i < groups.length; i++) {
    // removed duplicates from each array
    dupsRem = [...new Set(groups[i])];
    // go through array with dups removed 
    // number by number
    for (let j = 0; j < dupsRem.length; j++) {
      // number in object
      if (obj[dupsRem[j]])
        obj[dupsRem[j]] += 1;
      // number not in object
      else
        obj[dupsRem[j]] = 1;
    }
  }
  // go key by key thru obj
  for (let key in obj) {
    // number is more than one array
    if (obj[key] > 1)
      final.push(+key);
  }
  return final;
}
const arr1 = [7, 8, 4, 8, 7]; 
const arr2 = [8, 5, 9, 2, 9];
const arr3 = [6, 1, 5, 5, 6];

document.getElementById('ans').textContent = number_groups(arr1, arr2, arr3);