const gridContainer = document.getElementById("grid-container");

const resizeButton = document.getElementById("resize-button");
const clearButton = document.getElementById("clear-button");
const rgbButton = document.getElementById("rgb-button");
const blackButton = document.getElementById("black-button");
const eraseButton = document.getElementById("erase-button");

function createGrid(numCells = 16) {
    gridContainer.style.display = "grid";
    gridContainer.style.grid = `repeat(${numCells}, 1fr)/repeat(${numCells}, 1fr)`;

    for (i = 0; i < numCells*numCells; i++) {
        const divCell = document.createElement('div');
        divCell.classList.add("cell");
        gridContainer.appendChild(divCell);
    }
    const cells = document.getElementsByClassName("cell");
    const cellsArray = Array.from(cells);

    cellsArray.forEach(function(cell) {
        cell.addEventListener("mouseover", function() {
                cell.style.backgroundColor = "black";
        })
    });
}

/*function resizeGrid() {
    let numCells = prompt("How many squares should be on each row of the grid?");
    numCellsInt = parseInt(numCells);
    createGrid(numCellsInt);
}*/

function randomColor() {
    let color = [];
    
    for (i = 0; i < 3; i++) {
        color[i] = (Math.floor(Math.random() * 256)).toFixed(0);
    }
    
    const rgb = `rgb(${color[0]}, ${color[1]}, ${color[2]})`
    return rgb;
}

resizeButton.addEventListener("click", () => {
    let numCells = prompt("How many squares should be on each row of the grid?");
    numCellsInt = parseInt(numCells);
    createGrid(numCellsInt);
});
rgbButton.addEventListener("click", () => {
    const cells = document.getElementsByClassName("cell");
    const cellsArray = Array.from(cells);
    cellsArray.forEach(function(cell) {
        cell.addEventListener("mouseover", function() {
            cell.style.backgroundColor = randomColor();
        })
    });
});

blackButton.addEventListener("click", () => {
    const cells = document.getElementsByClassName("cell");
    const cellsArray = Array.from(cells);
    cellsArray.forEach(function(cell) {
        cell.addEventListener("mouseover", function() {
            cell.style.backgroundColor = "black";
        })
    });
});

eraseButton.addEventListener("click", () => {
    const cells = document.getElementsByClassName("cell");
    const cellsArray = Array.from(cells);
    cellsArray.forEach(function(cell) {
        cell.addEventListener("mouseover", function() {
            cell.style.backgroundColor = "darkgray";
        })
    });
});

clearButton.addEventListener("click", () => {
    const cells = document.getElementsByClassName("cell");
    const cellsArray = Array.from(cells);
    cellsArray.forEach(function(cell) {
        cell.style.backgroundColor = "darkgray";
    })
});

createGrid();