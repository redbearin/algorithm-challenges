const lostDog = (...args) => {
  // initialize variables
  let houseNum = 0;
  let dogNum = 0;
  const obj = {};
  let name;
  for (let i = 0; i < args.length; i++) {
    // increment house count
    houseNum++;
    for (let j = 0; j < args[i].length; j++) {
      if (args[i][j] === 0) {
        // increment dog count
        dogNum++;
        // name dog
        name = "Dog" + dogNum;
        // put dog house and room no. info
        // into the object
        obj[name] = "House (" + houseNum + ")" + 
                    " and Room (" + (j + 1) + ")";
      }
    }
  }
  console.log(obj);
};

document.getElementById('ans').textContent = lostDog([1, 1, 1, 1, 1, 1],  [1, 1, 1, 1, 1, 1],  [1, 1, 1, 1, 1, 1],  [1, 1, 1, 1, 1, 1]);