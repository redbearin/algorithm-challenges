// determine if the number is prime
const isPrime = num => {
  for(let i = 2; i <= Math.sqrt(num); i++) {
    if(num % i === 0) 
      return false; 
  }
  return true;
}
// find all prime numbers
const filterPrimes = nums => {
  let primes = [];
  // go number by number
  for (let i = 0; i < nums.length; i++) {
    // if the number is prime
    // add it to prime list
    if(isPrime(nums[i])) 
      primes.push(nums[i])
  }
  return JSON.stringify(primes);
}

const nums = [1009, 10, 10, 10, 3, 33, 9, 4, 1, 61, 63, 69, 1087, 1091, 1093, 1097];

document.getElementById('ans').textContent = filterPrimes(nums); 