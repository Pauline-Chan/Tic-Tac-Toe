let currentPlayer = 'X';
let board = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;

const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];


function makeMove(cellIndex) {
     
        
    if (gameActive && board[cellIndex] === '') {
        board[cellIndex] = currentPlayer;
        document.getElementsByClassName('cell')[cellIndex].innerText = currentPlayer;
      
        if (checkWin()) {
            document.getElementById('message').innerText = `${currentPlayer} wins!`;
            gameActive = false;
        } else if (isBoardFull()) {
            document.getElementById('message').innerText = "It's a draw!";
            gameActive = false;
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
      
        }
     
  }

const isXTurn = true; 

    
    if (isXTurn) {
        const xSound = document.getElementById('xSound');
        xSound.currentTime = 0; 
        xSound.play();
    } else {
        const oSound = document.getElementById('oSound');
        oSound.currentTime = 0; 
        oSound.play();
    }

        
}


function checkWin() {
    return winningConditions.some(condition => {
        return condition.every(index => {
            return board[index] === currentPlayer;
        });
    });
}

function isBoardFull() {
    return board.every(cell => cell !== '');
}

function restartGame() {
    currentPlayer = 'X';
    board = ['', '', '', '', '', '', '', '', ''];
    gameActive = true;
    document.getElementById('message').innerText = '';
    Array.from(document.getElementsByClassName('cell')).forEach(cell => cell.innerText = '');
}

function playGameSound() {
            const audioElement = document.getElementById("gameSound");
            audioElement.play();
        }

const restartButton = document.querySelector("button");
        restartButton.addEventListener("click", playGameSound);


