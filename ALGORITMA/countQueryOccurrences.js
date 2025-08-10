function countQueryOccurrences(input, query) {
  const result = [];

  for (let q of query) {
    const count = input.filter(item => item === q).length;
    result.push(count);
  }

  return result;
}

const INPUT = ['xc', 'dz', 'bbb', 'dz'];
const QUERY = ['bbb', 'ac', 'dz'];

const output = countQueryOccurrences(INPUT, QUERY);
console.log(output);
