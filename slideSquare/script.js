const square = document.getElementById('kwadrat');

let offsetX, offsetY;

square.addEventListener('mousedown', (e) => {
    offsetX = e.clientX - square.getBoundingClientRect().left;
    offsetY = e.clientY - square.getBoundingClientRect().top;

    document.addEventListener('mousemove', moveSquare);
    document.addEventListener('mouseup', stopMovingSquare);
});

function moveSquare(e) {
    square.style.left = `${e.clientX - offsetX}px`;
    square.style.top = `${e.clientY - offsetY}px`;
}

function stopMovingSquare() {
    document.removeEventListener('mousemove', moveSquare);
    document.removeEventListener('mouseup', stopMovingSquare);
}