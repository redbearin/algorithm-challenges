const isModest = num => {
  const numStr = num.toString();
  let left, right;
  for (let i = 1; i < numStr.length; i++) {
    left = +numStr.slice(0, i);
    right = +numStr.slice(i);
    if (num % right === left)
      return true;
  }
  return false;
};

const num = 8;

document.getElementById('ans').textContent = isModest(num);