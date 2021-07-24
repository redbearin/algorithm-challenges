const fullKeyName = (str) => {
  // b or # at end
  if (str[str.length - 1] === 'b' ||str[str.length - 1] === '#') {
    // capital letter before # or b
    if (str.charCodeAt(str.length - 2) > 64 && 
    str.charCodeAt(str.length - 2) < 91)
      return str + ' major';
    // lowercase letter befor # or b
    else
      return str.slice(0, -2) + str[str.length - 2].toUpperCase() + str[str.length - 1] + ' minor';
  }
  // no # or b at end
  else {
   // capital letter
    if (str.charCodeAt(str.length - 1) > 64 && 
    str.charCodeAt(str.length - 1) < 91)
      return str + ' major';
  // lowercase letter
  else
    return str.slice(0, -1) + str[str.length - 1].toUpperCase() + ' minor';
  }
};

const str = "Sonata in eb";

document.getElementById('ans').textContent = fullKeyName(str);