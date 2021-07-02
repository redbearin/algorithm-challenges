
// initialize the digit count (ct) to 0
const count = (num, ct = 0) => {
  // we are not on the last digit
  if (num / 10 > 1 || num / 10 < -1) {
    // increment digit count
    ct++;
    // divide num by 10 to move over a digit
    num = num /10;
    // call function again and return num and ct
    return count(num, ct);
  }
  // add digit count plus one for the last digit
  return ct + 1;
};

const num = -314890;

document.getElementById('ans').textContent = count(num); 