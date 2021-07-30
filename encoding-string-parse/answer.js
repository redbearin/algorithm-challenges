const parseCode = (str) => {
  // break into array without zeroes
  const strArr = str.split('0');
  // array without ''
  const cleanedStrArr = [];
  // parsed info on person
  const details = {};
  // remove all '' from strArr
  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i] !== '')
      cleanedStrArr.push(strArr[i]);
  }
  // add the details on the person to the 
  // object
  details.firstName = cleanedStrArr[0];
  details.lastName = cleanedStrArr[1];
  details.id = cleanedStrArr[2];
  // note I chose to use console output
  // could also use JSON.stringify(details)
  // to return to browser interface
  console.log(details);
};

const str = "Thomas00LEE0000043";

document.getElementById('ans').textContent = parseCode(str);