const isOdd = (num1) => {
  if(num1 & 1)
    return "Yes";
  else
    return "No";
};

const isEven = (num2) => {
  const regex = new RegExp('^\d*[02468]$');
  if(regex.test(num2))
    return "Yes";
  else
    return "No";
};

const num1 = 3;
const num2 = '0';

document.getElementById('ansOdd').textContent = isOdd(num1);
document.getElementById('ansEven').textContent = isEven(num2);