const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9 , 'A', 'B', 'C', 'D', 'E', 'F'];
const btn = document.querySelector('#btn');
const color = document.querySelector('.color');

btn.addEventListener('click' , () => {
    let newColor = '#';
    for (let i = 0; i < 6; i++) {
        newColor += hex[randomNumber()];
    }
    color.textContent = newColor;
    document.body.style.backgroundColor = newColor;
})

randomNumber = () => {
    let i = Math.floor(Math.random() * hex.length);
    return i;
}