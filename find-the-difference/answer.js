const findTheDifference = (strS, strT) => {
  // break strings into arrays and sort
  const strSArr = strS.split('').sort();
  const strTArr = strT.split('').sort();
  // go element by element through arrays
  for (let i = 0; i < strTArr.length; i++) {
    // elements don't match which means the one
    // strTArr is the addition
    if (strSArr[i] !== strTArr[i]) {
      return strTArr[i];
    }
  }
}
const strS = "ae";
const strT = "aea";

document.getElementById('ans').textContent = findTheDifference(strS, strT);