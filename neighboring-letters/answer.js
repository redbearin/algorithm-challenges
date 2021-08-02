const neighboring = (str) => {
  for (let i = 1; i < str.length; i++) { 
    if (str.charCodeAt(i) + 1 === str.charCodeAt(i-1) ||
        str.charCodeAt(i) - 1 === str.charCodeAt(i-1))
      continue;
    else
      return false;
  }
  return true;
};

const str = "mnopqrstsrqponm";

document.getElementById('ans').textContent = neighboring(str);