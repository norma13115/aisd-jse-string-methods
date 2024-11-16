
// Declare a string variable that will be used for all examples
const str = "JavaScript is a versatile language";
console.log("Initial String:", str);

// Split the string into an array of words
const words = str.split(" ");
console.log("Using split():", words);

// Extract a portion of the string from index 0 to 10
const sliced = str.slice(0, 10);
console.log("Using slice():", sliced);

const newStr = str.concat(" loved by developers.");
console.log("Using concat():", newStr);
// Replace a word in the string
const replacedStr = str.replace("versatile", "powerful");
console.log("Using replace():", replacedStr);
// Convert the string to uppercase
const upperCaseStr = str.toUpperCase();
console.log("Using toUpperCase():", upperCaseStr);
// Convert the string to lowercase
const lowerCaseStr = str.toLowerCase();
console.log("Using toLowerCase():", lowerCaseStr);
// Check if the string contains the word "versatile"
const containsWord = str.includes("versatile");
console.log("Using includes():", containsWord);
// Find the index of the word "language"
const index = str.indexOf("language");
console.log("Using indexOf():", index);
// Remove leading and trailing whitespace
const strWithSpaces = "   Hello JavaScript!   ";
const trimmedStr = strWithSpaces.trim();
console.log("Using trim():", `"${trimmedStr}"`);
// Get the character at index 5
const charAtFive = str.charAt(5);
console.log("Using charAt():", charAtFive);
// Split a CSV string into an array
const csvData = "Apple,Orange,Banana";
const fruits = csvData.split(",");
console.log("Using split() with comma delimiter:", fruits);
