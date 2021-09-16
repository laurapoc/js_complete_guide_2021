function sayHello(name) {
  console.log("Hi " + name);
}

// Re-write the function you find in assignment.js as an arrow function.
const sayHelloAgain = (name) => {
  console.log("Hi " + name);
};

// Adjust the arrow function you created as part of task 1 to use three different syntaxes: With two arguments (incl. a phrase that replaces "Hi"), with no arguments (hard-coded values in function body) and with one returned value (instead of outputting text inside of the function directly).
const sayHelloWithTwoArgs = (greeting, name) => console.log(`${greeting} ${name}`);

const sayHelloWithNoArgs = () => console.log("Hi again Laura");

const returnHello = (str) => str;

// Add a default argument to the function you created: A fallback value for the phrase if no value is provided.

const DEFAULT_VALUE = "Laura";
const functionWithDefaultValue = (greeting, name = DEFAULT_VALUE) => console.log(greeting, name);

// Add a new function: "checkInput" which takes an unlimited amount of arguments (unlimited amount of strings) and executes a callback function if NO argument/ string is an empty string.

const checkInput = (callBackFunction, ...strings) => {
  let emptyString = false;
  for (const el of strings) {
    if (!el) {
      emptyString = true;
      break;
    }
  }
  if(!emptyString) {
    callBackFunction()
  }
};

const showResult = () => console.log("All strings are not empty.")

sayHello("Laura");
sayHelloAgain("Jane");
sayHelloWithTwoArgs("Hi", "Max");
sayHelloWithNoArgs();
console.log(returnHello("Returned hi!"));
functionWithDefaultValue("Hi");
functionWithDefaultValue("Hi", "Max");
checkInput(showResult, "hi", "my", "name");
checkInput(showResult, "", "adkjvka");
