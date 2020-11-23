
'use strict';

const statusDisplay = document.querySelector('.game-status');
const cells = Array.from(document.querySelectorAll('[data-cell-index]'));
console.log(cells);
const gameActive = true;
const playerOne = 'X';
const playerTwo = 'O';

const winningMessage = () => `The ${playerOne} has won!`;

const CurrentPlayerTurnMessage = () => `It's ${playerOne}'s turn!` ; 

let matrix = [
    ['','',''],
    ['','',''],
    ['','',''],
];

function handleClick(){
  for (let i = 0; i < cells.length; i++){
                cells[i].addEventListener('click', handleCellClicked);
}
};

function handleCellClicked (){
    for (let i = 0; i < cells.length; i++){
        cells[i].innerHTML = 'X';
    }
}
