const message = document.getElementById('message');
const submit = document.getElementById('submit');
const numbers = document.getElementById('numbers');

submit.addEventListener('click', function (e) {
    e.preventDefault();

    const n = parseInt(document.getElementById('number').value);
    numbers.textContent = '';

    if (n > 0) {
        message.textContent = `Numbers from 1 to ${n} that are divisible by 3 are:`;
        for (let i = 1; i <= n; i++) {
            if (i % 3 === 0) {
                numbers.textContent += `${i} `;
            }
        }
    } else if (n < 0) {
        message.textContent = `Numbers from 1 to ${-n} that are divisible by 3 are:`;
        for (let i = 1; i <= -n; i++) {
            if (i % 3 === 0) {
                numbers.textContent += `${-i} `;
            }
        }
    } else {
        message.textContent = "Invalid value";
    }
});