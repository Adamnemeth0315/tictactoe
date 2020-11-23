
'use strict';

const statusDisplay = document.querySelector('.game-status');

const gameActive = true;
const playerOne = 'X';
const playerTwo = 'O';

const winningMessage = () => `The ${currentPlayer} has won!`;

const endMessage = () => `Game over.`

const CurrentPlayerTurnMessage = () => `It's ${currentPlayer}'s turn!` ; 

let cells = [
    ['','',''],
    ['','',''],
    ['','',''],
];

cells.forEach(cell => cell.addEventListener('click', handleCellClick));

function handleCellClick(){
    for (let i = 0; i < cells.length; i++){
        for (let j=0; j < cells[i].length; j++){

        };
    };
};
