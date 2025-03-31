const section = document.querySelector('section');
const ul = document.querySelector('ul');
const button = document.querySelector('button');
const input = document.querySelector('input');
const warning = document.querySelector('p');

button.addEventListener('click', (e) => {
    if (input.value == '') {
        warning.textContent = "Don't leave blank fields!";
        e.preventdefault();
    } else {
        warning.textContent = "";

        let span = document.createElement('span');
        section.appendChild(span);
        span.textContent = `${input.value}`;

        let delbtn = document.createElement('button');
        span.appendChild(delbtn);
        delbtn.textContent = "X";

        delbtn.addEventListener('click', () => {
            span.style.display = 'none';
        })
    }
})

