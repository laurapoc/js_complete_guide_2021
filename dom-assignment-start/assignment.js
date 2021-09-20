// 1: Select this task (in two different ways at least!) and change the background-color to black, text-color to white.

const firstTaskById = document.getElementById("task-1");
const firstTaskByQuery = document.querySelector("li:first-of-type");

firstTaskById.style.color = "white";
firstTaskByQuery.style.backgroundColor = "black";

// 2: Change the document title (in <head></head>) to "Assignment - Solved!". Use two different ways for getting access to the <title> element: Via querySelector on document and via querySelector on the certain property you find in document.

const title = document.querySelector("title");
const head = document.querySelector("head");

head.querySelector("title").textContent = "Assignment - Solved!";

// 3: Select the <h1> element on this page and change its text to "Assignment - Solved!".

const h1 = document.querySelector("h1");

h1.textContent = "Assignment - Solved!";
