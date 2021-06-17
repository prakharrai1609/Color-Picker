const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.querySelector('#btn');
const color = document.querySelector('.color');

btn.addEventListener("click", () => {
    let i = randomNumber();
    color.textContent = colors[i];
    document.body.style.backgroundColor = colors[i];
})

function randomNumber() {
    let i = Math.floor(Math.random() * colors.length);
    return i;
}