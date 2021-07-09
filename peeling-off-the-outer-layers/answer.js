const peelLayerOff = (arr) => {
  const final = [];
  let sub;
  for (let i = 1; i < arr.length - 1; i++) {
    sub = [];
    for (let j = 1; j < arr[i].length - 1; j++) {
      sub.push(arr[i][j]);
    }
    final.push(sub);
  }
  return final;
};

const arr = [
  ["hello", "world"],
  ["hello", "world"]
];

document.getElementById('ans').textContent = peelLayerOff(arr);