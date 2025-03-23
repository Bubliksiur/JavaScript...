const btn = document.querySelector('span');
const ul = document.querySelector('ul');

let clickCount = 0;

btn.addEventListener('click', event => {
    clickCount++;
    if (clickCount % 2 != 0) {
        ul.style.visibility = 'visible';
    } else {
        ul.style.visibility = 'hidden';
    }
});