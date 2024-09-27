// Sample string
const str = "JavaScript is a versatile language";

// 1. split() - Split the string into an array of words
const words = str.split(" ");
console.log("Using split():", words);
// Output: ["JavaScript", "is", "a", "versatile", "language"]

// 2. slice() - Extract a portion of the string from index 0 to 10
const sliced = str.slice(0, 10);
console.log("Using slice():", sliced);
// Output: "JavaScript"

// 3. concat() - Concatenate strings together
const newStr = str.concat(" loved by developers.");
console.log("Using concat():", newStr);
// Output: "JavaScript is a versatile language loved by developers."

// 4. replace() - Replace a word in the string
const replacedStr = str.replace("versatile", "powerful");
console.log("Using replace():", replacedStr);
// Output: "JavaScript is a powerful language"

// 5. toUpperCase() - Convert the string to uppercase
const upperCaseStr = str.toUpperCase();
console.log("Using toUpperCase():", upperCaseStr);
// Output: "JAVASCRIPT IS A VERSATILE LANGUAGE"

// 6. toLowerCase() - Convert the string to lowercase
const lowerCaseStr = str.toLowerCase();
console.log("Using toLowerCase():", lowerCaseStr);
// Output: "javascript is a versatile language"

// 7. includes() - Check if the string contains a specific word
const containsWord = str.includes("versatile");
console.log("Using includes():", containsWord);
// Output: true

// 8. indexOf() - Find the index of the first occurrence of a word
const index = str.indexOf("language");
console.log("Using indexOf():", index);
// Output: 24

// 9. trim() - Remove leading and trailing whitespaces
const strWithSpaces = "   Hello JavaScript!   ";
const trimmedStr = strWithSpaces.trim();
console.log("Using trim():", `"${trimmedStr}"`);
// Output: "Hello JavaScript!"

// 10. charAt() - Get the character at a specific index
const charAtFive = str.charAt(5);
console.log("Using charAt():", charAtFive);
// Output: "S"

// 11. split() with delimiter - Splitting using different delimiters
const csvData = "Apple,Orange,Banana";
const fruits = csvData.split(",");
console.log("Using split() with comma delimiter:", fruits);
// Output: ["Apple", "Orange", "Banana"]
