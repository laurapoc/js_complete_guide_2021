const randomNumber = Math.random(); // produces random number between 0 (including) and 1 (excluding)

// In the attached code assignment.js, you find a variable that holds a random number between 0 and 1. Write code that shows an alert (with any message) when that number is greater than 0.7.
function alertRandomNumber() {
  while (randomNumber <= 0.7) {
    return;
  }
  alert("greater than 0.7. random number: " + randomNumber);
}
alertRandomNumber();

// Create an array of numbers (any numbers of your choice) and loop through the array in two different ways - outputting the numbers inside of the loop.
const arrayOfNumbers = [1, 5, 4, 9, 10, 12];
for (let i = 0; i < arrayOfNumbers.length; i++) {
  console.log("output with for loop: ", arrayOfNumbers[i]);
}

for (number of arrayOfNumbers) {
  console.log("Output with for-of loop", number);
}

// Adjust one of the loops from the last task such that it actually starts at the end (last element) of the array and loops to the first element.
for (let i = arrayOfNumbers.length - 1; i >= 0; i--) {
  console.log("Output from for loop backwards: ", arrayOfNumbers[i]);
}

// Create another random number (in a separate constant) and show an alert in two different scenarios: Both are greater 0.7 OR at least one of the two is NOT greater than 0.2.
const anotherRandomNumber = Math.random();
if ((randomNumber > 0.7 && anotherRandomNumber > 0.7) || randomNumber <= 0.2 || anotherRandomNumber <= 0.2) {
  alert(
    `Greater than 0.7 or  less than 0.2. random number: ${randomNumber}, another random number: ${anotherRandomNumber}`
  );
}
