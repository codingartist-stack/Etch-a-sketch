const grid = document.getElementById('squareGrid');
const userInput = document.getElementById('width-height');

const button = document.getElementById('button')

for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
        const cell = document.createElement('div');
        cell.classList.add(`box`);
        cell.setAttribute('id', `${i+1}_${j+1}`)
        grid.appendChild(cell);
    }
}




