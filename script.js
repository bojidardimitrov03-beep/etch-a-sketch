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
        square.addEventListener(`mouseover`, () => {
            square.style.backgroundColor = `black`
        })
    }
}
createGrid(16);