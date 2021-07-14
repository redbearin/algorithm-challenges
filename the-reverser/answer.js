const reverse = (str) => {
  let newStr = '';
  for (let i = str.length - 1; i >= 0; i--) {
    if (str[i] === ' ')
      newStr += ' ';
    if (str.charCodeAt(i) > 64 && str.charCodeAt(i) < 91)
      newStr += str[i].toLowerCase();
    else 
    newStr += str[i].toUpperCase();
  }
  return newStr;
};

const str = "Radar";

document.getElementById('ans').textContent = reverse(str);