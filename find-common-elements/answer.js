const commonElements = (arr1, arr2) => {
  const unqArr1 = [...arr1];
  const unqArr2 = [...arr2];
  let len, base, comp;
  const final = [];
  if (unqArr1.len <= unqArr2.length) {
    len = unqArr1.length;
    base = unqArr1;
    comp = unqArr2;
  }
  else {
    len = unqArr2.length;
    base = unqArr2;
    comp = unqArr1;
  }
  for (let i = 0; i < len; i++) {
    if(comp.includes(base[i]))
      final.push(base[i]);
  }
  return final;
}

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [10, 12, 13, 15];

document.getElementById('ans').textContent = commonElements(arr1, arr2);