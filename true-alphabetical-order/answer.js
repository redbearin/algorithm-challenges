const trueAlphabetic = (str) => {
  let strArr = [];
  let spaceIndices = [];

  // find space indices
  // push everything that is not a space
  // to an array
  for (let i = 0; i < str.length; i++)  {
    if (str[i] === ' ')
      spaceIndices.push(i);
    else
      strArr.push(str[i]);
  }
  // sort strArr
  strArr.sort();
  // add back in spaces
  for (let i = 0; i < spaceIndices.length; i++) {
    strArr.splice(spaceIndices[i], 0, ' ');
  }
  return strArr.join('');
}

const str = "have a nice day";

document.getElementById('ans').textContent = trueAlphabetic(str);