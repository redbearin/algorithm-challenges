const charCount = (str) => {
  // object to hold letter counts
  const obj = {};
  let lowerLtr;
  // count number of each letter
  for (let i = 0; i < str.length; i++) {
    // a letter
    if(str.charCodeAt(i) > 64 && 
       str.charCodeAt(i) < 91 ||
       str.charCodeAt(i) > 96 && 
       str.charCodeAt(i) < 123) {
      // capital letter
      if (str.charCodeAt(i) > 64 && 
          str.charCodeAt(i) < 91)
        lowerLtr = str[i].toLowerCase();
      // lowercase letter
      else
        lowerLtr = str[i];
      // already a count for the letter
      if (obj[lowerLtr])
        obj[lowerLtr] += 1;
      // not count for letter
      else 
        obj[lowerLtr] = 1;
    }
  }
  // make object a string and cut off object 
  // curly braces
  let objStr = JSON.stringify(obj).slice(1, -1);
  let finalStr = '';
  // remove " " and replace , with a space
  for (let i = 0; i < objStr.length; i++) {
    if (objStr[i] !== '"' && objStr[i] !== ',')
      finalStr += objStr[i];
    if (objStr[i] === ',')
      finalStr += ' ';
  }
  return finalStr;
};

const str = "Now, I learn JavaScript";

document.getElementById('ans').textContent = charCount(str);