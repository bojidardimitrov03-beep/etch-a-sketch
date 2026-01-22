const container = document.getElementById(`container`)
const resetBtn = document.getElementById(`resetBtn`)

function createGrid(size) {
    const squareSize = 960 / size;

    for (let i = 0; i < size * size; i++) {
        const square = document.createElement(`div`)
        square.classList.add(`grid-square`)

        square.style.width = `${squareSize}px`
        square.style.height = `${squareSize}px`

        container.appendChild(square)
        square.addEventListener(`mouseenter`, () => {
    let currentOpacity = parseFloat(square.style.opacity) || 0;
    currentOpacity = Math.min(currentOpacity + 0.1, 1);

    square.dataset.opacity = currentOpacity;

    if (currentOpacity === 0.1) {
        const randomRed = Math.floor(Math.random() * 256);
        const randomGreen = Math.floor(Math.random() * 256);
        const randomBlue = Math.floor(Math.random() * 256);
        square.style.backgroundColor = `rgb(${randomRed}, ${randomGreen}, ${randomBlue})`;
    }

    square.style.opacity = currentOpacity;
});
    }
}
createGrid(16);

function removeGrid() {
    container.innerHTML = ``;
}

resetBtn.addEventListener(`click`, () => {
    let newSize = prompt(`Enter new grid size (max 100): `)

    newSize = parseInt(newSize)

    if (newSize && newSize > 0 && newSize <= 100) {
        removeGrid()
        createGrid(newSize)
    } else {
        alert(`Invalid size! Please enter a number between 1 and 100.`)
    }
})  


