
'use strict';

const statusDisplay = document.querySelector('.game-status');
const cells = Array.from(document.querySelectorAll('[data-cell-index]'));
console.log(cells);
const gameActive = true;
const playerOne = 'X';
const playerTwo = 'O';
let circleTurn;

const winningMessage = () => `The ${playerOne} has won!`;

const endMessage = () => `Game over.`

const CurrentPlayerTurnMessage = () => `It's ${playerOne}'s turn!` ; 

let matrix = [
    ['','',''],
    ['','',''],
    ['','',''],
];

function handleCellClick(){
    for (let i = 0; i < cells.length; i++){
        for (let j=0; j < cells[i].length; j++){

        };
    };
};

