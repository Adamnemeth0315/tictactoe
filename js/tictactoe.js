const statusDisplay = document.querySelector('.game-status');
let cells = [
    ['','',''],
    ['','',''],
    ['','',''],
];
const gameActive = true;
const currentPlayer = 'X';

const winningMessage = () => `The ${currentPlayer} has won!`;

const endMessage = () => `Game over.`

const CurrentPlayerTurnMessage = () => `It's ${currentPlayer}'s turn!` ; 

