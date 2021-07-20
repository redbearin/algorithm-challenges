const electricityBill = (units) => {
  let total = 0;
  // caclulate total depending on units;
  if (units > 500)
    total += (5 * (units - 500)) + 
             (4 * 200) + 
             (3 * 100) + 
             (2 * 100) + 
             100;
  else if (units >= 300)
    total += (4 * (units - 300)) + 
             (3 * 100) + 
             (2 * 100) + 
             100;
  else if (units >= 200) 
    total += (3 * (units - 200)) + 
             (2 * 100) + 
             100;
  else if (units >= 100) 
    total += (2 * (units - 100)) + 
            100;
  else 
    total += (1 * (units));
  // add 10%
  total *= 1.10;
  // add service fee to total
  return (total + 15).toFixed(2);
};

const units = 300;

document.getElementById('ans').textContent = electricityBill(units);