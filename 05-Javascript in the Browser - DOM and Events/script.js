"use strict";

/* console.log(document.querySelector(".message").textContent);
document.querySelector(".message").textContent = "🥳 Correct Number";
console.log(document.querySelector(".message").textContent);

console.log(document.querySelector(".guess").value);
document.querySelector(".guess").value = 10;
console.log(document.querySelector(".guess").value); */

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = (message) => {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".guess").value = "";

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  if (!guess) {
    // document.querySelector(".message").textContent = "⛔ No Number Entered!";
    displayMessage("⛔ No Number Entered!");
  } else if (guess === secretNumber) {
    document.querySelector(".number").textContent = secretNumber;
    // document.querySelector(".message").textContent = "🥳 Correct Number!";
    displayMessage("🥳 Correct Number!");
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";

    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      //   document.querySelector(".message").textContent =
      //     guess > secretNumber ? "📈 Too high" : "📉 Too Low";
      displayMessage(guess > secretNumber ? "📈 Too high" : "📉 Too Low");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      //   document.querySelector(".message").textContent = "😔You Lost the Game!";
      displayMessage("😔You Lost the Game!");
      document.querySelector(".score").textContent = 0;
    }
  }
  //   else if (guess > secretNumber) {
  //     if (score > 1) {
  //       document.querySelector(".message").textContent = "📈 Too high";
  //       score--;
  //       document.querySelector(".score").textContent = score;
  //     } else {
  //       document.querySelector(".message").textContent = "😔You Lost the Game!";
  //       document.querySelector(".score").textContent = 0;
  //     }
  //   } else if (guess < secretNumber) {
  //     if (score > 1) {
  //       document.querySelector(".message").textContent = "📉 Too Low";
  //       score--;
  //       document.querySelector(".score").textContent = score;
  //     } else {
  //       document.querySelector(".message").textContent = "😔You Lost the Game!";
  //       document.querySelector(".score").textContent = 0;
  //     }
  //   }
});

document.querySelector(".again").addEventListener("click", function () {
  console.log("Again");
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  //   document.querySelector(".message").textContent = "Start guessing...";
  displayMessage("Start guessing...");
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".score").textContent = score;
  document.querySelector(".guess").value = "";
  document.querySelector(".number").textContent = "?";
});
