let number = 0;

const btn = document.querySelector('#btn-1');
const display = document.querySelector('#display-1');

btn.addEventListener('click', () => {
    number++;
    display.textContent = number;
})

