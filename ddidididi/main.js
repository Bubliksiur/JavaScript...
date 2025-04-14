const startQuiz = document.querySelector('button');
const firsQuest = document.querySelector('#firsQuest');

const ul = document.querySelector('ul');
const li = document.querySelectorAll('li');
const currectFirst = document.querySelector('#currectFirst');


const warning = document.querySelector('#warning');

startQuiz.addEventListener('click', () => {
    if (startQuiz.style.display = 'none') firsQuest.style.display = 'block';
    else startQuiz.style.display = 'none'
})

currectFirst.addEventListener('click', () => {
    warning.textContent = 'Nice!';
});
