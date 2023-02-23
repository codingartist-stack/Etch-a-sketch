const grid = document.getElementById('squareGrid');
const userInput = document.getElementById('width-height');

const button = document.getElementById('button')

button.addEventListener('click', (e) => {
    console.log(`button was clicked`)
    console.log(userInput.value)
    if (userInput.value > 100 ) {
        alert(`ERROR`)
        return
    }
    for (let i = 0; i < userInput.value; i++) {
        for (let j = 0; j < userInput.value; j++) {
            const cell = document.createElement('div');
            cell.classList.add(`box`);
            cell.setAttribute('id', `${i+1}_${j+1}`)
            grid.appendChild(cell);

            cell.addEventListener('mouseover', (e) => {
                e.target.classList.add(`boxHover`);
            })
        }
    }
    document.getElementById('squareGrid').style.gridTemplateColumns = `repeat(${userInput.value}, 1fr)`
})

// for (let i = 0; i < 4; i++) {
//     for (let j = 0; j < 4; j++) {
//         const cell = document.createElement('div');
//         cell.classList.add(`box`);
//         cell.setAttribute('id', `${i+1}_${j+1}`)
//         grid.appendChild(cell);
//     }
// }




