//Return the length of the longest word in the provided sentence.
//Your response should be a number.

function findLongestWord(str) {
  return Math.max(...str.split(' ').map(word => word.length));
}

findLongestWord('The dog ate my homework')