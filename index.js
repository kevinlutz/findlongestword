//#1 Return the length of the LONGEST WORD in the provided sentence.
//Your response should be a number.
//Takeaway: Math.max, spread operator, split, map
function findLongestWord(str) {
  return Math.max(...str.split(' ').map(word => word.length));
}

findLongestWord('The dog ate my homework')


//#2 Change AM/PM to MILITARY Time:
//Takeaway: interpolate, split, divide into separate 
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

//#3 Reverse the provided string.
//You may need to turn the string into an array before you can reverse it.
//Your result must be a string.

function reverseString(str) {
  return str.split('').reverse().join('');
}

reverseString("hello");


//#4 Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.
function chunkArrayInGroups(arr, size) {
  let newArray = []
  while (arr.length > 0) {
      newArray.push(arr.splice(0, size));
  }
  return newArray;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);


//#5 The algorithm to convert from Celsius to Fahrenheit is the temperature in Celsius times 9/5, plus 32.

function convertToF(celsius) {
  let fahrenheit = celsius * (9/5) + 32
  return fahrenheit;
}

convertToF(30);


//#6 Simply Array Sum
function simpleArraySum(ar) {
    return ar.reduce((acc, curr) => acc + curr, 0);
}


//#7 Compare the Triplets
//why two if statements instead of and if/then statement?
//Takeaway: 
function compareTriplets(a, b) {
    let alice = 0;
    let bob = 0;
    for (let i = 0; i < 3; i++) {
       if (a[i] > b[i]) {
           alice++
       } 
       if (a[i] < b[i]) {
            bob++
       }
    }
    return [alice, bob]
}



//#8 A Very Big Sum
//In this challenge, you are required to calculate and print the sum of the elements in an array, keeping in mind that some of those integers may be quite large.
//Takeaway: reduce/acc/curr
function aVeryBigSum(ar) {
    return ar.reduce((acc, curr) => acc + curr, 0)
}


//#9 Birthday Cake Candles
//You are in charge of the cake for a child's birthday. You have decided the cake will have one candle for each year of their total age. They will only be able to blow out the tallest of the candles. Count how many candles are tallest.
//Takeaway: Math.max, spread operator, for const of
function birthdayCakeCandles(candles) {

    const max = Math.max(...candles)
    let sum = 0

    for(const item of candles){
        if(item === max) sum += 1
    }
    return sum
}

//#10 Plus Minus
//What exactly is Object.value(hash) on line 131??
function plusMinus(arr) {
    const hash = {
        pos: 0,
        neg: 0,
        zero: 0
    }

    for(const num of arr){
        if(num < 0){
            hash.neg += 1
        } else if (num > 0){
            hash.pos += 1
        } else {
            hash.zero += 1
        }
    }

    for(const value of Object.values(hash)){
        console.log(value/arr.length)
    }

}


//#11 Truncate a String
//Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.
//Takeaway: ternary operator, slice
function truncateString(str, num) {
  return str.length > num ? str.slice(0, num) + '...' : str;
}

truncateString("Bring me a green and yellow basket", 8);


//#12 Ends With
//Check if a string (first argument, str) ends with the given target string (second argument, target).
//This challenge can be solved with the .endsWith() method, which was introduced in ES2015. But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.
//Takeaway: slice with one parameter, can also use .endsWith, maybe also substr

function confirmEnding(str, target) {
  return str.slice(str.length - target.length) === target;
}

confirmEnding("He has to give me a new name", "name");


//#13 Repeat a String Repeat a String
//Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number. For the purpose of this challenge, do not use the built-in .repeat() method.
//Takeaway: ternary operator, could use .repeat()
//??Why can the function be used inside the function??
function repeatStringNumTimes(str, num) {
  return num > 0 ? str + repeatStringNumTimes(str, num - 1): '';
}

repeatStringNumTimes("abc", 3);


//#14 Finders Keepers
//Create a function that looks through an array arr and returns the first element in it that passes a 'truth test'. This means that given an element x, the 'truth test' is passed if func(x) is true. If no element passes the test, return undefined.
//Takeaway: find only finds the first that is true then stops searching
function findElement(arr, func) {
  return arr.find(func);
}

//#15 Boo Woo
//Check if a value is classified as a boolean primitive. Return true or false.
//Boolean primitives are true and false.
function booWho(bool) {
  return typeof bool === "boolean";
}
booWho(null);

//Why does the following not work??
function booWho(bool) {
  return (bool === true || false) ? true : false;
}


//#16 Title Case a Sentence
//Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.
//For the purpose of this exercise, you should also capitalize connecting words like the and of.

function titleCase(str) {
var newStr = str.toLowerCase().split(' ').map(function(elem) {
  return elem[0].toUpperCase() + elem.slice(1);
})
return newStr.join(' ');
}

titleCase("I'm a little tea pot");

//Why does the following not work??
function titleCase(str) {
  return str.toLowercase().split(' ').map((each) => each[0].toUpperCase() + each.slice(1)).join('');
}

titleCase("I'm a little tea pot");


//#17 Falsy Bouncer
//Remove all falsy values from an array.
//Takeaway: Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.
//Hint: Try converting each value to a Boolean.
function bouncer(arr) {
  return arr.filter(Boolean);
}

OR

function bouncer(arr) {
  return arr.filter(elem => elem);
}

//#18 Mutations
//Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.
//For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.
//The arguments ["hello", "hey"] should return false because the string hello does not contain a y.
//Takeaways: .toLowerCase(), for of, !negation, includes
function mutation(arr) {
  const firstWord = arr[0].toLowerCase();
  const secondWord = arr[1].toLowerCase();

  for (const elem of secondWord) {
    if (!firstWord.includes(elem)) return false
    }
    return true
}

mutation(["hello", "hey"]);


//#19 Where Do I Belong
//Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.
//For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).
function getIndexToIns(arr, num) {
  arr.sort((a, b) => a - b);

  for (var i=0; i<arr.length; i++) {
    if (num <= arr[i]) {
      return i;
    }
  }
  return arr.length;
}

getIndexToIns([40, 60], 50);


//#20 Return Largest Numbers in Arrays 
//Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.
//Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].
//Takeaways: 
//This is not working below. What am I missing. 
function largestOfFour(arr) {

  const highest = [];

  for (const elem of arr) {
    elem.sort(function(a,b) {
      return a - b;
    });
 
   highest.push(elem[elem.length-1]);
    
  }
  console.log(highest)
  return highest;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

//#21 Big Sort Hacker Rank
function bigSorting(unsorted) {
    if (unsorted.length > 10**5 * 2) return
    unsorted.sort(function(a, b) {
        return a - b;
    });
    return unsorted;
}


//#22 Diagonal Difference Hacker Rank
function diagonalDifference(arr) {
    let lineOne = 0;
    let lineTwo = 0 
    for (var i=0; i < arr.length; i++){
        const num = arr[i][i]
        lineOne += num
    }
    let index = 0;
    for (var i=arr.length-1; i >= 0; i--){
        const number = arr[index][i]
        index += 1
        lineTwo += number
    }
       return Math.abs(lineOne - lineTwo )
}


//#23 Seek And Destroy
//You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.
//Note: You have to use the arguments object.
//This is not working yet. Not sure how to use 'rest' - ??
function destroyer(arr) {
 const unique = []
for (var i=arr[0][0]; i < arr[0].length; i++) {
  if(i !== arr...rest){
    unique.push(i)
  }
  return unique
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);


1. loop through index 0
2. if each elem !== the rest of arr
3. push to const unique = []


//#24
//Palindrome Checker
//Return true if the given string is a palindrome. Otherwise, return false.
//A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.
//Note: You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything into the same case (lower or upper case) in order to check for palindromes.
function palindrome(str) {
  var reg = /[\W_]/g;
  var newStr = str.toLowerCase().replace(reg, '');
  var reverse = newStr.split('').reverse().join('');
  return (reverse === newStr ? true : false)
  }

palindrome("eye");


//#25
//Convert the given number into a roman numeral.
//All roman numerals answers should be provided in upper-case.
function convertToRoman(num) {
 var romanToNum = {
  M: 1000,
  CM: 900,
  D: 500,
  CD: 400,
  C: 100,
  XC: 90,
  L: 50,
  XL: 40,
  X: 10,
  IX: 9,
  V: 5,
  IV: 4,
  I: 1
 }

 var roman = "";

 for (var key in romanToNum) {
   while (num >= romanToNum[key]) {
     roman += key;
     num -= romanToNum[key];
   }
 }
 return roman
}

convertToRoman(3);

//#26
//Ceasar's Cipher
function rot13(str) {
  var solved = '';
  for (var i=0; i<str.length; i++){
    var asciiNum = str[i].charCodeAt();
    if (asciiNum >= 65 && asciiNum <= 77) {
      solved += String.fromCharCode(asciiNum + 13);
    } else if (asciiNum >= 78 && asciiNum <= 90) {
      solved += String.fromCharCode(asciiNum - 13);
    } else {
      solved += str[i];
  }
}
  return solved;
}

//[a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z]

rot13("A");


//#27
//Telephone Number Validator
//Return true if the passed string looks like a valid US phone number.
//The user may fill out the form field any way they choose as long as it has the format of a valid US number. The following are examples of valid formats for US numbers (refer to the tests below for other variants):

555-555-5555
(555)555-5555
(555) 555-5555
555 555 5555
5555555555
1 555 555 5555

function telephoneCheck(str) {
  let regEx = /^(1\s?)?(\d{3}|\(\d{3}\))[\-\s]?\d{3}[\-\s]?\d{4}$/;
  return regEx.test(str);
}

telephoneCheck("555-555-5555");


//#28 Sort Union - freecodecamp
//Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.
//In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.
//The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.
//Below, can we replace indexOf with includes??

function uniteUnique(collection) {
  const unique = [];
  let values = Object.values(arguments);

  values.forEach(group => {
    group.forEach(individual => {
      if (unique.indexOf(individual) === -1) {
        unique.push(individual);
      }
    });
  });
  return unique
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);