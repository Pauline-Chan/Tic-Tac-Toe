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

var soundX = new Audio('Sound2.mp3');
var soundO = new Audio('Sound3.mp3');
var winSound = new Audio('Sound4.mp3');
var restartSound = new Audio('Sound1.mp3');

function makeMove(cellIndex) {
    if (gameActive && board[cellIndex] === '') {
        board[cellIndex] = currentPlayer;
        document.getElementsByClassName('cell')[cellIndex].innerText = currentPlayer;

        // Play sound based on currentPlayer
        if (currentPlayer === 'X') {
            soundX.play();
        } else {
            soundO.play();
        }

        if (checkWin()) {
            document.getElementById('message').innerText = `${currentPlayer} wins!`;
            gameActive = false;
            winSound.play();
        } else if (isBoardFull()) {
            document.getElementById('message').innerText = "It's a draw!";
            gameActive = false;
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
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
    
    
    restartSound.play();
}


document.getElementById('restartButton').addEventListener('click', restartGame);