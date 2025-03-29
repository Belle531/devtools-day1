// Error 1: The message was mispelled
let message = 'Welcome to the debugging exercise!';
console.log(message); 

// Error 2:Change class name to an ID 
let button = document.querySelector('#actionButton'); 
button.addEventListener('click', eventHandler); 


// Error 3: There's not syntax or runtime error. Hoever, it's good practice to pass the 
// 'event' object to the event handler if you need information about the event later.
function eventHandler(event) {
  console.log('Button clicked');
  displayOutput();
}

// Error 4: Code works correctly assuming there's an HTML element withan ID output.
// ID output line 14 of the HTML
function displayOutput() {
  let output = document.querySelector('#output'); 
  output.innerText = 'You clicked the button!';
}

// Error 6: Misusing variable scope The variable localMessage is declared inside the UpdateMessage
// function using let the locaa variable, is not accessible within the function's scope. 
// When you try to console.log(localMessage) outside the function, it results in a 
// ReferenceError: localMessage is not defined.
function updateMessage() {
  let localMessage = 'Updated message';
updateMessage();
console.log(localMessage); 
} // moved the console.log inside the function therefore it within the scope

// Error 7:The issue is being called addEventListener and being called testFunction
// and the result of the function which is undefined it doesn't return anything as being 
// passed to addEvenListener it needs to pass the function itself as the event handler
//removed ()
document.getElementById('testButton').addEventListener('click', testFunction);

function testFunction() {
  console.log('Test function executed');
}

// Error 8:This code calculates the difference (number 1 - number2), not the sum.
// The parentheses are correctly used to ensure the 
// subtraction happens before the string concatenation. Change the'-' to '+'
let number1 = 10;
let number2 = 5;
console.log('Sum is: ' + (number1 + number2));

// Error 9: null is a primitive value that represents the intentional absence of any object
// value. It doesn't have properties like length, need to acces nullVar.length that will
// result in a TypeError: Cannot read properties of null (reading 'length'.)
let nullVar = null;

if (nullVar !== null) {
console.log(nullVar.length);
} else { // Handle the null case with a conditional: If you only want to attempt
  // to access the length if the variable is not null, you can use an if statement:
  console.log ("nullVar is null")
}
// Error 10: JavaScript is case-sensitive. caseSensitiveVar and CaseSensitiveVar are treated
// as different variables. Since CaseSensitiveVar was never defined, you'll get a 
// ReferenceError: CaseSensitiveVar is not defined. 
let caseSensitiveVar = 'Case matters';
console.log(caseSensitiveVar); // Corrected Code from CaseSensitiveVar to lower case c

// Error 11: moved line 68 to line 67 loggin the string importantData instead of the v
// variable importantData
let importantData = "This string must be logged to the console. It's important!";
console.log('importantData');

// Error 12: Need to Define the function before calling it. line 73 function tryToCallFunction
//  () { console.log(Function called!);
//}
//tryToCallFunction (); correct code below
function tryToCallFunction (){
  console.log('Function called!');
}
tryToCallFunction();

// Error 13: name is mispelled corrected object property namee are case-sensitive.
let user = { name: 'Alice' };
console.log(user.name)

// Error 14: toUpperCase is a string method, not a number method. 
// Converted the number to a string first toUpperCase());
// Numbers don't have a toUpperCase() method. needed to convert the number toa string
// using toString() before applying the string method.
let someNumber = 123;
console.log(someNumber. toString() .toUpperCase());

// Error 15: Missing Quotes "Hello, world!";
let greeting = "Hello, world!";

// Error 16: remove the semicolon. form console.log('Five is equal to 5');
for (let i = 0; i < 5; i++); {
    console.log(i);
}

// Error 17: using strict equality (===) to compare a string ('5') with a number (5)
// Fix the loose equality (==) or conver the string to a number.
let five = '5';
if (five == 5) {
    console.log('Five is equal to 5') // This one should be logged
} else {
    console.log('Five is not equal to 5');
}
    

// Error 18:Overriding the built-in array.prototype.push method id generally a bad idea
// and can lead to unexpected behavior. Avoid overriding built-in prototypes.
Array.prototype.push = function() {
    console.log('Array push method is overwritten');
};
let numbers = [];
numbers.push(1);
console.log(numbers);

// Error 19: The original code tried to console.log(X) before X was declared. This results in a ReferenceError
// because the variablee X doesn't exist in the current scope when console.log(x) is executed
// I moved the declaration let x = 5; to before the console.log(x) statement Now, x is defined before it's used. 

x = 5;
console.log(x);


// Error 20: Strings in JavaScript are primitive data types. They are immutable and do not have properties like objects do.
//assigning a property to a string like myString.property = world will either fail silently in non-strict mode, or do nothing
// In strict mode, it would error. Also, accessing myString.property will return undefined. Removed the property for 
// console.log
let myString = 'Hello';
myString.property = 'World';
console.log(myString);