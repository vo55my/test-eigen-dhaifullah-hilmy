function reverseAlphabetsKeepNumbers(str) {
  const letters = str.replace(/[0-9]/g, '');
  const numbers = str.replace(/[^0-9]/g, '');

  const reversedLetters = letters.split('').reverse().join('');

  return reversedLetters + numbers;
}

const input = "NEGIE1";
const result = reverseAlphabetsKeepNumbers(input);
console.log(result);
