const Player = function (name, position) {
  let playerIcon = "";
  const _playerSymbol = () => {
    if (position === 1) {
      playerIcon = "X";
    } else {
      playerIcon = "O";
    }
  };
  _playerSymbol();
  return { name, playerIcon };
};

const playerOne = Player("Tom", 1);
const playerTwo = Player("Pawl", 2);

let playerOneScore = 0;
let playerTwoScore = 0;

let turnNumber = 0;
const resetButtons = document.getElementById("resetButton");
const playerOneScoreLabel = document.getElementById("p1Score");
const playerTwoScoreLabel = document.getElementById("p2Score");

const gameBoard = (function () {
  const boardArr = ["", "", "", "", "", "", "", "", ""];
  const boardSpace = document.getElementById("boardSpace");

  function _displayBoard(value, index) {
    boardSpace.innerHTML += `<div class="cubeSpace" id="${index}">${value}</div>`;
  }

  const createBoard = function () {
    boardArr.forEach(_displayBoard);
  };

  const _gameLogic = function (i, turn) {
    turnNumberFunc(i);
    winnerFunction();
    playerOneScoreLabel.innerText = playerOneScore;
    playerTwoScoreLabel.innerText = playerTwoScore;
  };

  const turnNumberFunc = function (i) {
    resetButtons.style.display = "inline";
    if (turnNumber == 1) {
      if (document.getElementById(i).innerText != playerOne.playerIcon) {
        boardArr[i] = playerTwo.playerIcon;
        document.getElementById(i).innerText = playerTwo.playerIcon;
        turnNumber--;
      } else {
        alert("This spot exists");
      }
    } else if (turnNumber == 0) {
      if (document.getElementById(i).innerText != playerTwo.playerIcon) {
        boardArr[i] = playerOne.playerIcon;
        document.getElementById(i).innerText = playerOne.playerIcon;
        turnNumber++;
      } else {
        alert("This spot exists");
      }
    }
    return turnNumber;
  };

  const winnerFunction = function () {
    if (
      boardArr[0] === playerOne.playerIcon &&
      boardArr[1] === playerOne.playerIcon &&
      boardArr[2] === playerOne.playerIcon
    ) {
      alert(playerOne.name + " wins!");
      resetButton();
      playerOneScore++;
    } else if (
      boardArr[0] === playerOne.playerIcon &&
      boardArr[3] === playerOne.playerIcon &&
      boardArr[6] === playerOne.playerIcon
    ) {
      alert(playerOne.name + " wins!");
      resetButton();
      playerOneScore++;
    } else if (
      boardArr[0] === playerOne.playerIcon &&
      boardArr[4] === playerOne.playerIcon &&
      boardArr[8] === playerOne.playerIcon
    ) {
      alert(playerOne.name + " wins!");
      resetButton();
      playerOneScore++;
    } else if (
      boardArr[1] === playerOne.playerIcon &&
      boardArr[4] === playerOne.playerIcon &&
      boardArr[7] === playerOne.playerIcon
    ) {
      alert(playerOne.name + " wins!");
      resetButton();
      playerOneScore++;
    } else if (
      boardArr[2] === playerOne.playerIcon &&
      boardArr[5] === playerOne.playerIcon &&
      boardArr[8] === playerOne.playerIcon
    ) {
      alert(playerOne.name + " wins!");
      resetButton();
      playerOneScore++;
    } else if (
      boardArr[3] === playerOne.playerIcon &&
      boardArr[4] === playerOne.playerIcon &&
      boardArr[5] === playerOne.playerIcon
    ) {
      alert(playerOne.name + " wins!");
      resetButton();
      playerOneScore++;
    } else if (
      boardArr[6] === playerOne.playerIcon &&
      boardArr[7] === playerOne.playerIcon &&
      boardArr[8] === playerOne.playerIcon
    ) {
      alert(playerOne.name + " wins!");
      resetButton();
      playerOneScore++;
    } else if (
      boardArr[2] === playerOne.playerIcon &&
      boardArr[4] === playerOne.playerIcon &&
      boardArr[6] === playerOne.playerIcon
    ) {
      alert(playerOne.name + " wins!");
      resetButton();
      playerOneScore++;
    } else if (
      boardArr[0] === playerTwo.playerIcon &&
      boardArr[1] === playerTwo.playerIcon &&
      boardArr[2] === playerTwo.playerIcon
    ) {
      alert(playerTwo.name + " wins!");
      resetButton();
      playerTwoScore++;
    } else if (
      boardArr[0] === playerTwo.playerIcon &&
      boardArr[3] === playerTwo.playerIcon &&
      boardArr[6] === playerTwo.playerIcon
    ) {
      alert(playerTwo.name + " wins!");
      resetButton();
      playerTwoScore++;
    } else if (
      boardArr[0] === playerTwo.playerIcon &&
      boardArr[4] === playerTwo.playerIcon &&
      boardArr[8] === playerTwo.playerIcon
    ) {
      alert(playerTwo.name + " wins!");
      resetButton();
      playerTwoScore++;
    } else if (
      boardArr[1] === playerTwo.playerIcon &&
      boardArr[4] === playerTwo.playerIcon &&
      boardArr[7] === playerTwo.playerIcon
    ) {
      alert(playerTwo.name + " wins!");
      resetButton();
      playerTwoScore++;
    } else if (
      boardArr[2] === playerTwo.playerIcon &&
      boardArr[5] === playerTwo.playerIcon &&
      boardArr[8] === playerTwo.playerIcon
    ) {
      alert(playerTwo.name + " wins!");
      resetButton();
      playerTwoScore++;
    } else if (
      boardArr[3] === playerTwo.playerIcon &&
      boardArr[4] === playerTwo.playerIcon &&
      boardArr[5] === playerTwo.playerIcon
    ) {
      alert(playerTwo.name + " wins!");
      resetButton();
      playerTwoScore++;
    } else if (
      boardArr[6] === playerTwo.playerIcon &&
      boardArr[7] === playerTwo.playerIcon &&
      boardArr[8] === playerTwo.playerIcon
    ) {
      alert(playerTwo.name + " wins!");
      resetButton();
      playerTwoScore++;
    } else if (
      boardArr[2] === playerTwo.playerIcon &&
      boardArr[4] === playerTwo.playerIcon &&
      boardArr[6] === playerTwo.playerIcon
    ) {
      alert(playerTwo.name + " wins!");
      resetButton();
      playerTwoScore++;
    }
  };
  const resetButton = function (index, value) {
    for (var j = 0; j < boardArr.length; j++) {
      boardArr[j] = "";
      document.getElementById([j]).innerHTML = "";
      turnNumber = 0;
    }

    resetButtons.style.display = "none";
  };

  const assignPieces = function () {
    console.log(turnNumber);
    const pieceOne = document.getElementById("0");
    const pieceTwo = document.getElementById("1");
    const pieceThree = document.getElementById("2");
    const pieceFour = document.getElementById("3");
    const pieceFive = document.getElementById("4");
    const pieceSix = document.getElementById("5");
    const pieceSeven = document.getElementById("6");
    const pieceEight = document.getElementById("7");
    const pieceNine = document.getElementById("8");

    //addEventListener second end needs to be a arrow function or a regular function before passing a faction through...
    pieceOne.addEventListener("click", () => _gameLogic(pieceOne.id));
    pieceTwo.addEventListener("click", () => _gameLogic(pieceTwo.id));
    pieceThree.addEventListener("click", () => _gameLogic(pieceThree.id));
    pieceFour.addEventListener("click", () => _gameLogic(pieceFour.id));
    pieceFive.addEventListener("click", () => _gameLogic(pieceFive.id));
    pieceSix.addEventListener("click", () => _gameLogic(pieceSix.id));
    pieceSeven.addEventListener("click", () => _gameLogic(pieceSeven.id));
    pieceEight.addEventListener("click", () => _gameLogic(pieceEight.id));
    pieceNine.addEventListener("click", () => _gameLogic(pieceNine.id));
  };

  return { createBoard, assignPieces, resetButton };
})();

gameBoard.createBoard();
gameBoard.assignPieces();

resetButtons.addEventListener("click", () => gameBoard.resetButton());
