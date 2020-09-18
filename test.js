const Player = function (name, position) {
  let playerIcon = "";
  const welcomeMessage = () => console.log("Name is: " + name);
  const _playerSymbol = () => {
    if (position === 1) {
      playerIcon = "X";
    } else {
      playerIcon = "O";
    }
  };
  _playerSymbol();
  return {name,  welcomeMessage, playerIcon };
};

const playerOne = Player("Tom", 1);
const playerTwo = Player("Pawl", 2);

playerOne.welcomeMessage();
playerTwo.welcomeMessage();

console.log(playerOne.name + "'s icon is: " + playerOne.playerIcon);
console.log(playerTwo.name + "'s icon is: " + playerTwo.playerIcon);


const gameBoard = (function () {
  const boardArr = ["", "", "", "", "", "", "", "", ""];
  const boardSpace = document.getElementById("boardSpace");

  function _displayBoard(value, index, array) {
    boardSpace.innerHTML += `<div class="cubeSpace" id="${index}">${value}</div>`;
  }

  const createBoard = function () {
    boardArr.forEach(_displayBoard);
  };

  const _gameLogic = function (i) {
    boardArr[i] = playerTwo.playerIcon;
    document.getElementById(i).innerText = playerTwo.playerIcon;
  };


  const assignPieces = function () {
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

 
  return { createBoard, assignPieces };
})();

gameBoard.createBoard();
gameBoard.assignPieces();
