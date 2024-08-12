/*1. Return the number (count) of vowels in the given string.
We will consider a, e, i, o, u as vowels for this Kata (but not y).
The input string will only consist of lower case letters and/or spaces.*/
function getCount(str) {
  count = 0; //initializing the counter
  vowels = "aeiou"; //declaring the variable with the string of characters to iterate through

  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      count++; // if the counter is a variable, the counter increments
    }
  }

  return count;
}
/* 2. Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.*/
function evenOrOdd(number) {
  if (number % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}

console.log(evenOrOdd(4));
console.log(evenOrOdd(9));

/*You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, 
return the middle character. If the word's length is even, return the middle 2 characters.*/

const getMiddle = (str) => {
  //giving back the middle character of an odd number
  const mid = Math.floor(str.length / 2);
  //giving back the two middle characters for an even string
  return str.length % 2 !== 0 ? str.charAt(mid) : str.slice(mid - 1, mid + 1);
};

console.log(getMiddle("test"));
