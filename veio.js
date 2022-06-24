const cellElements = document.querySelectorAll("[data-cell]");
const board = document.querySelector("[data-board]");

let isCircleTurn = false;

const placeMark = (cell, classToAdd) => {
    cell.classList.add(classToAdd);
};

const swapTurns = () => {
    isCircleTurn = !isCircleTurn;

    board.classList.remove("circle");
    board.classList.remove("x");

    if (isCircleTurn) {
        board.classList.add("circle");
    }
    else {
        board.classList.add("x");
    }
};


const handleclick = (e) => {
    // Colocar a marca (x ou circulo)
    const cell = e.target;
    const classToAdd = isCircleTurn ? "circle" : "x";

    placeMark(cell, classToAdd);
    // Verificar por Vitoria
    // Verificar por empate
    // Mudar simbolo

    swapTurns();
};


for (const cell of cellElements) {
    cell.addEventListener("click", handleclick, { once: true });
}