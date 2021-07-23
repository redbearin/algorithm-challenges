const charAtPos = (entry, type) => {
  let start, final;
  if (type === 'even')
    start = entry.length - 2;
  else
   start = entry.length - 1;
  if (typeof entry === 'string') {
    final = '';
    for (let i = start; i >= 0; i -= 2) {
      final = entry[i] + final;
    }
    return final;
  }
  else {
    final = [];
    for (let i = start; i >= 0; i -= 2) {
      final.unshift(entry[i]);
    }
    return JSON.stringify(final);
  }
};

const entry = [")", "(", "*", "&", "^", "%", "$", "#", "@", "!"];
const type = "odd";

document.getElementById('ans').textContent = charAtPos(entry, type);