const startGameBtn = document.getElementById("start-game-btn");

function startGame() {
  console.log("game is starting here");
}

// You can have functions in objects and call them methods:
// const person = {
//   name: "Max",
//   greet: function greet() {
//     console.log("Hello there!");
//   },
// };

// person.greet();

startGameBtn.addEventListener("click", startGame);
