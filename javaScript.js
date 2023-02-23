const grid = document.getElementById('squareGrid');


for (let i = 0; i < 16; i++) {
    const gridBox = document.createElement('div');
    gridBox.classList.add('box');
    squareGrid.appendChild(gridBox);
}
// gridBox.addEventListener("mouseover", (event) => {
    // gridBox.classList.add('boxHover');
// });
