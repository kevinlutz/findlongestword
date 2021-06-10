//#1
//Return the length of the LONGEST WORD in the provided sentence.
//Your response should be a number.

function findLongestWord(str) {
  return Math.max(...str.split(' ').map(word => word.length));
}

findLongestWord('The dog ate my homework')


//#2
//Change AM/PM to MILITARY Time:
function timeConversion(s) {
    const newString = s.substring(0, s.length-2);
    const array = newString.split(':');
    const hour = array[0];
    const minutes = array[1];
    const seconds = array[2];
    const hourNumber = parseInt(hour);
    if (hourNumber === 12 && s.includes('PM')) {
        return `${hour}:${minutes}:${seconds}`
    } else if (s.includes('PM')){
        const newHour = hourNumber + 12
        return `${newHour}:${minutes}:${seconds}`
    } else if (hourNumber === 12 && s.includes('AM')) { 
        return `00:${minutes}:${seconds}`
    } else {
        return `${hour}:${minutes}:${seconds}`
    }
}

//#3
//Reverse the provided string.
//You may need to turn the string into an array before you can reverse it.
//Your result must be a string.

function reverseString(str) {
  return str.split('').reverse().join('');
}

reverseString("hello");


//#4
//Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.
function chunkArrayInGroups(arr, size) {
  let newArray = []
  while (arr.length > 0) {
      newArray.push(arr.splice(0, size));
  }
  return newArray;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);


