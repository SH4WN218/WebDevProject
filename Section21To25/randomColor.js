const allBtns = document.querySelectorAll('button');
const allH2s = document.querySelectorAll('h2');
const randomNumber = () => Math.floor(Math.random() * 256) + 1;

for (let btn of allBtns) {
    btn.addEventListener('click', colorize)
}

for (let h2 of allH2s) {
    h2.addEventListener('click', colorize)
}

function colorize() {
    this.style.backgroundColor = `rgb(${randomNumber()}, ${randomNumber()}, ${randomNumber()})`;
    this.style.color = `rgb(${randomNumber()}, ${randomNumber()}, ${randomNumber()})`;
}




