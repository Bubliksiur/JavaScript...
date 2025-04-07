const div = document.querySelector('div');
const drawColor = document.querySelector('#drawColor');

function generateColor() {
    div.style.backgroundColor = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;

    // border color change
    drawColor.style.border = `3px solid ${div.style.backgroundColor}`;
}

drawColor.addEventListener('click', generateColor);
