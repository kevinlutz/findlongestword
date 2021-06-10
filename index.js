//Return the length of the longest word in the provided sentence.
//Your response should be a number.

function findLongestWord(str) {
  return Math.max(...str.split(' ').map(word => word.length));
}

findLongestWord('The dog ate my homework')



//Change AM/PM to Military Time:
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