
const colorPicker = document.querySelector('#colorPicker');
const colorBtn = document.querySelector('#clearBtn');
const eraserBtn = document.querySelector('#eraserBtn');
const clearBtn = document.querySelector('#clearBtn');


function createBoard(size){
    let board = document.querySelector('.board');

    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let numDivs = size * size; 

    for (i = 0; i < numDivs; i++){
        let div = document.createElement('div');
        div.style.backgroundColor = 'yellow';
        board.insertAdjacentElement('beforeend', div);
    }
}

createBoard(32);