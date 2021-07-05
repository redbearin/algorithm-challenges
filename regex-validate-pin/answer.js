const myRegExp = (entry) => {
  const regex = /^[0-9]{4}$|^[0-9]{6}$/;
  return regex.test(entry);
}
const entry = " 4983";

document.getElementById('ans').textContent = myRegExp(entry);