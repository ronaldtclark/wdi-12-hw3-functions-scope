// VERBAL QUESTIONS

// 2. A parameter is the variable within the function as part of its definition. An argument is the value processed by the function when it's invoked.
// 3. Return will give you an actual value produced by the function, an exit value, and stops the function. Console.log is used by developers to "print" something that has set-up parameters, primarily to check for bugs or define something.

// PALINDROME

const checkPalindrome = (word) => {
  let reverseWord = word.split(" ").reverse().join(" ");
  if (word === reverseWord) {
    return true;
  } else if (word != reverseWord) {
    return false;
  }
  
};

console.log(checkPalindrome ("radar"));
console.log(checkPalindrome ("mouse"));
console.log(checkPalindrome ("wooooork"));

// Unsure why this isnt working. Moving on....

const sumDigits = (num) => {
  let digits = num.toString();
  let splitDigits = digits.split(" ");
  
  for (let i = 0; i < splitDigits.length; i++) {
    parseInt(splitDigits[i]);
  return splitDigits.reduce((a, b) => a + b); 
  }
};
console.log(sumDigits(42));

// Also not working...

