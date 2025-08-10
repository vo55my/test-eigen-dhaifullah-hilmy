function longest(sentence) {
  const words = sentence.split(' ');
  let longestWord = '';

  for (let word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }

  console.log(`${longestWord}: ${longestWord.length} character`);
  return longestWord;
}

const sentence = "Saya sangat senang mengerjakan soal algoritma";
longest(sentence); 
