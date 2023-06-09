Full Stack Developer Assessment
This repository contains the solutions for the Full Stack Developer assessment. The assessment covers various topics related to web development, including JavaScript, Node.js, React.js, and MongoDB.

Code Management
Git has been used for code management throughout the assessment. The repository is set as a public repository to facilitate easy access and review. You can find the public repository at GitHub Repository.

Logic Comments
1) Find Duplicate and Same Values in Two Arrays
javascript
Copy code
var fullWordList = ['1','2','3','4','5'];
var wordsToRemove = ['1','2','3'];
Comment: The above code initializes two arrays, fullWordList and wordsToRemove. To find duplicate and same values in the two arrays, you can implement logic such as iterating through both arrays and comparing each element.

2) Longest Chain of Letters in Word
javascript
Copy code
const word = '00000111110101001111100001001';
Comment: The above code initializes a string variable word. To find the longest chain of letters in the word, you can implement logic to iterate through the characters and track the longest consecutive chain of letters.

3) Object Reference
javascript
Copy code
let obj1 = { "greeting": "hello" };
let obj2 = obj1;
obj1["greeting"] = "Bye";
console.log(obj1);
console.log(obj2);
Comment: The above code demonstrates object reference behavior in JavaScript. Both obj1 and obj2 point to the same object. Changing the value of a property in obj1 also affects obj2 since they reference the same object.

4) Comparison Operators
javascript
Copy code
console.log("7" > 7);
console.log("2" > "21");
console.log("KL" > "S");
Comment: The above code showcases the comparison behavior of different types in JavaScript. The output of the comparisons may vary based on the comparison rules.

5) Average Function
javascript
Copy code
function average(a, b) {
  return a + b / 2;
}
console.log(average(2, 1));
Comment: The above code defines an average function that calculates the average of two numbers. However, there is a mistake in the calculation since the operator precedence is not correct. The division should be performed before the addition. To fix it, the calculation should be (a + b) / 2.

Fullstack Test Complete
javascript
Copy code
console.log("===== Fullstack test complete =====");
Comment: The above code outputs a message indicating the completion of the fullstack test.

Additional Requirements
To complete the assessment successfully, the following additional requirements have been fulfilled:

For the Database (MongoDB)
MongoAtlas has been used as the database solution.

For Node.js
Passport.js has been utilized for user creation and authentication.
A middleware for token has been implemented.
Examples for Promise.all, resolve, and reject have been included.
An example for Aggregate Lookup property has been provided.
An example for populating an array field (showing reference IDs in an array) has been included.
Several socket emit and on function examples, including socket connection, have been added.
Indexing has been implemented for schemas.
For React
Both a class component and a function component example have been provided. The function component example also utilizes TypeScript and includes an interface for function props.
React hooks have been used to get updates regarding any state value



