const canvas = document.querySelector('#canvas');
const body = document.querySelector('body');

let isDrawing = false;

let currentColor = 'rgb(0, 0, 0)';
console.log(currentColor);

let x = 128;
let y = 128;

let draw = function(square) {
    square.setAttribute('style', 'background-color: black;');
}

canvas.addEventListener('mouseleave', () => {
    isDrawing = false;
});

body.addEventListener('mousedown', () => {
    isDrawing = true;
});

body.addEventListener('mouseup', () => {
    isDrawing = false;
});


for (i = 0; i < y; i++) {
    const row = document.createElement('div');
    row.classList.add('row');
    for (j = 0; j < x; j++) {
        const div = document.createElement('div');
        div.classList.add('square');
        div.addEventListener('mouseover', (e) => {
            if (isDrawing) {
                draw(e.target);
            }
        });
        row.appendChild(div);
    };
    canvas.appendChild(row);
};

const reset = document.querySelector('.resetButton');
const squares = Array.from(document.querySelectorAll('.square'));

let clearCanvas = function () {
    squares.forEach(square => {
        square.setAttribute('style', 'background-color: white;');
    });
}


reset.addEventListener('click', (e) => {
    if (window.confirm('Reset canvas?')) {
    clearCanvas();
    }
});

// reset.setAttribute('style', 'background-color: ' + currentColor);
