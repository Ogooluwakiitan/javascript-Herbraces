// 1. Write a JavaScript function to check two given numbers and return true if one of the number is 50 or if their sum is 50.

function numberCheck(a, b) {
    if (a === 50 || b === 50 || a + b === 50) {
      return true;
    } else return false;
  }
  
  console.log(numberCheck(27, 24));
  console.log(numberCheck(50, 20));
  console.log(numberCheck(27, 50));
  console.log(numberCheck(25, 25));
  console.log(numberCheck(27, 23));
  console.log(numberCheck(20, 40));
  
  // 2. Write a JavaScript function to check if a given integer is negative or positive.

  
  function integerCheck(a) {
    if (a > 0) {
      return a + " is positive";
    } else return a + "  is negative";
  }
  
  console.log(integerCheck(23));
  console.log(integerCheck(-4));
  
  // 3. Write a JavaScript program to create a new string adding "Py" in front of a given string. If the given string begins with "Py" then return the original string.

  
  function stringCheck(str1) {
    if (str1 === null || str1 === undefined || str1.substring(0, 2) === "Py") {
      return str1;
    }
    return "Py" + str1;
  }
  console.log(stringCheck("Python"));
  console.log(stringCheck("thon"));
  
  // 4. Write a JavaScript program to find the largest of three given integers.
  function largestInteger(a, b, c) {
    if (a > b && a > c) {
      return a + " is the largest";
    } else if (b > a && b > c) {
      return b + " is the largest";
    } else if (c > a && c > b) {
      return c + " is the largest";
    } else return "they are all equal";
  }
  console.log(largestInteger(5, 4, 3));
  console.log(largestInteger(5, 7, 3));
  console.log(largestInteger(1, 2, 3));
  console.log(largestInteger(2, 2, 2));
  
  // 5. Write a JavaScript program to find a value which is nearest to 100 from two different given integer values.

  function nerestToHundred(a, b) {
    if (100 - a < 100 - b) {
      return a + " is closer to 100";
    } else if (100 - a > 100 - b) {
      return b + " is closer to 100";
    } else return "they are the same";
  }
  
  console.log(nerestToHundred(32, 32));
  console.log(nerestToHundred(10, 90));
  console.log(nerestToHundred(99, 90));
  
  // 6. Write a JavaScript program to check three given numbers, if the three numbers are same return 30 otherwise return 20 and if two numbers are same return 40.
  
  function checkThree(a, b, c) {
    if (a === b && b === c) {
      return 30;
    } else if (a !== b && b !== c) {
      return 20;
    } else return 40;
  }
  
  console.log(checkThree(10, 10, 5));
  console.log(checkThree(10, 15, 5));
  console.log(checkThree(10, 10, 10));
  
  // 7. Write a JavaScript program to reverse a given string.
  function reverseString(str) {
    let newString = "";
    for (let i = str.length - 1; i >= 0; i--) {
      newString += str[i];
    }
    return newString;
  }
  
  // 8. Write a JavaScript program to count the number of vowels in a given string.

  function vowelCount(str) {
    return str.replace(/[^aeiou]/g, "").length;
  }
  
  console.log(vowelCount("Python"));
  console.log(vowelCount("w3resource.com"));
  
  // 9. Write a Javascript program that converts a string to an array.

  
  // 10. Create a Javascript object with 2 properties and 2 methods.
  
  let johnObject = {
    firstName: "John",
    lastName: "Doe",
    age: function () {
      return 2012 - 2000;
    },
    fullName: function () {
      return this.firstName + " " + this.lastName;
    },
  }