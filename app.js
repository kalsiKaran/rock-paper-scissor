const game = () => {
  let p = 0,
    c = 0;
  const winnerText = document.querySelector(".winner");
  // start a game
  const start = () => {
    const starting = document.querySelector(".start");
    const playBtn = document.querySelector(".play");
    const playing = document.querySelector(".playing");

    playBtn.addEventListener("click", () => {
      starting.classList.add("fade-out");
      playing.classList.remove("fade-out");
    });
  };

  //   generate random number for computer

  const buttons = document.querySelectorAll(".button-container button");
  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      const playerChoice = document.querySelector(".player-choice");
      const computerChoice = document.querySelector(".computer-choice");

      const elements = ["rock", "paper", "scissors"];
      const randomNumber = Math.floor(Math.random() * 3);
      const randomPic = elements[randomNumber];

      setTimeout(() => {
        computerChoice.src = `images/${randomPic}.png`;
        playerChoice.src = `images/${this.textContent}.png`;

        winner(this.textContent, randomPic);
        playerChoice.style.animation = "";
        computerChoice.style.animation = "";
      }, 1000);

      playerChoice.style.animation = "shake-player 1s ease";
      computerChoice.style.animation = "shake-computer 1s ease";
    });
  });

  // updating scores
  const update = () => {
    const playerScore = document.querySelector(".p-score");
    const computerScore = document.querySelector(".c-score");
    playerScore.textContent = p;
    computerScore.textContent = c;
  };

  // check the winner
  const winner = (playerChoice, randomPic) => {
    const player = playerChoice;
    const computer = randomPic;
    console.log(player, computer);
    if (player === computer) {
      winnerText.textContent = "Tie";
      winnerText.style.color = "yellow";
      return;
    }
    if (player === "rock") {
      if (computer === "paper") {
        winnerText.textContent = "You Lose";
        winnerText.style.color = "darkred";
        c++;
        update();
        return;
      } else {
        winnerText.textContent = "You Win";
        winnerText.style.color = "green";
        p++;
        update();
        return;
      }
    }
    if (player === "scissors") {
      if (computer === "rock") {
        winnerText.textContent = "You Lose";
        winnerText.style.color = "darkred";
        c++;
        update();
        return;
      } else {
        winnerText.textContent = "You Win";
        winnerText.style.color = "green";
        p++;
        update();
        return;
      }
    }
    if (player === "paper") {
      if (computer === "scissors") {
        winnerText.textContent = "You Lose";
        winnerText.style.color = "darkred";
        c++;
        update();
        return;
      } else {
        winnerText.textContent = "You Win";
        winnerText.style.color = "green";
        p++;
        update();
        return;
      }
    }
  };

  const reset = document.querySelector(".reset");
  reset.addEventListener("click", () => {
    p = 0;
    c = 0;
    update();
    winnerText.textContent = "play again";
    winnerText.style.color = "white";
  });

  start();
};
game();
