const lovesMe = times => {
  let str = '';
  // build str num by num
  for (let num = 1; num <= times; num++) {
    // odd num
    if (num % 2) {
      // last entry
      if (num === times)
        str += "LOVES ME";
      // other entry
      else 
        str += "Loves me, ";
    }
    // even num
    else {
      // last entry
      if (num === times)
        str += "LOVES ME NOT";
      // other entry
      else 
        str += "Loves me not, ";
    }
  }
  return str;
};

const times = 3;
document.getElementById('ans').textContent = lovesMe(times);