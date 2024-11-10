// // JSON.stringify and JSON.parse are two essential JavaScript methods for handling JSON (JavaScript Object Notation) data.

// // JSON.stringify: Converts a JavaScript object or array into a JSON string.
// // JSON.parse: Converts a JSON string back into a JavaScript object or array.
// // Here are examples for each:

// // 1. JSON.stringify Example
// // Suppose you have a JavaScript object and want to send it to a server as a JSON string.


// // Copy code
// const user = {
//   name: "Alice",
//   age: 25,
//   active: true,
//   preferences: ["reading", "traveling", "coding"]
// };

// // Convert JavaScript object to JSON string
// const jsonString = JSON.stringify(user);
// console.log(jsonString);
// // Output: {"name":"Alice","age":25,"active":true,"preferences":["reading","traveling","coding"]}
// Use Case: JSON.stringify is often used when sending data to a server, as JSON strings are the expected format for transmitting data in many web APIs.

// 2. JSON.parse Example
// Now, let’s assume you received a JSON string from a server and need to convert it into a JavaScript object.


// Copy code
// const jsonString = '{"name":"Alice","age":25,"active":true,"preferences":["reading","traveling","coding"]}';

// // Convert JSON string to JavaScript object
// const user = JSON.parse(jsonString);
// console.log(user.name); // Output: Alice
// console.log(user.age);  // Output: 25
// console.log(user.preferences); // Output: ["reading", "traveling", "coding"]
// // Use Case: JSON.parse is commonly used when receiving data from an API, allowing you to work with the JSON data as a regular JavaScript object.

// Notes
// JSON.stringify ignores functions and undefined values within the object, as JSON does not support them.
// JSON.parse throws an error if the string is not a valid JSON format, so always handle errors when parsing unknown data sources.