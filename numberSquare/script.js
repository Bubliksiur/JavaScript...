const gradeForm = document.getElementById('gradeForm');
const message = document.getElementById('message');
const submit = document.getElementById('submit');

let result = 0;

submit.addEventListener('click', (e) => {
    e.preventDefault();

    const n = document.getElementById('num').value;

    if (n >= 0) {
        for (let i = 1; i <= n; i++) {
            result = (i * i);
            message.textContent = `the square of ${i} is ${result}`;
        }
    } else if (n <= 0) {
        for (let i = 1; i <= -n; i++) {
            result = (i * i);
            message.textContent = `the square of ${-i} is ${result}`;
        }
    }

    document.getElementById('gradeForm').reset();
});