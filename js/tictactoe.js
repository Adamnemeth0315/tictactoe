
'use strict';

const statusDisplay = document.querySelector('.game--status');
const cells = document.querySelectorAll('[data-cell-index]');
const startButton = document.querySelector('.startBtn');

let matrix = ['', '', '', '', '', '', '', '','',];

const playerOne = 'X';
const playerTwo = 'O';
const players = [playerOne, playerTwo];
let winner =[];
 
let clickNumber = 0;

startButton.addEventListener('click', function () {
    clickNumber = 0;
    cells.forEach(function (item, index) {
        item.textContent = "";
        matrix[index] = 0;
    }) ;
    statusDisplay.textContent = '';
});

function game() {
    clickNumber = 0;
    for (let i = 0; i < cells.length; i += 1) {
        cells[i].addEventListener('click', function () {
            if (cells[i].textContent === '') {
                if (clickNumber % 2 === 0) {
                    cells[i].textContent = "X";
                    matrix[i] = "X";
                } else {
                    cells[i].textContent = "O";
                    matrix[i] = "O";
                }
                clickNumber ++; 
                if (clickNumber > 4) {
                    check();
                }               
            }
        });
    }
    }

function check() {

    winner = [
        [matrix[0], matrix[1], matrix[2]],
        [matrix[3], matrix[4], matrix[5]],
        [matrix[6], matrix[7], matrix[8]],
        [matrix[0], matrix[3], matrix[6]],
        [matrix[1], matrix[4], matrix[7]],
        [matrix[2], matrix[5], matrix[8]],
        [matrix[0], matrix[4], matrix[8]],
        [matrix[2], matrix[4], matrix[6]],
    ]; 

    for (let i =0; i < winner.length; i++){
        if (winner[i] === 'X'){
            statusDisplay.textContent = 'Az X játkos nyert';
        } else if (winner[i] ==='O'){
            statusDisplay.textContent = 'Az O játkos nyert';
        } else if (clickNumber === 9) {
            statusDisplay.textContent = 'Game over!';
        } else {
            clickNumber ++;
        }
    }        
};

game();