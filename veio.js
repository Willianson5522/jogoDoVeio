const cellElements = document.querySelectorAll("[data-cell]");
const board = document.querySelector("[data-board]");
const winninMessageTextElement = document.querySelector('[data-winning-message-text]')
const restarButton = document.querySelector('[data-restart-button]')

const msgVitoria = document.querySelector("[data-winning-msg]")

    let isCircleTurn = false;

const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
]

const startgame = () => {
    for (const cell of cellElements) {
        cell.classList.remove("circle");
        cell.classList.remove("x");
        cell.removeEventListener("click", handleclick);
        cell.addEventListener("click", handleclick, { once: true });
    }

    isCircleTurn = false;

    board.classList.add("x");
    msgVitoria.classList.remove("show-msgVitoria")

}

const endGame = (isDraw) => {
    if (isDraw) {
        winninMessageTextElement.innerText = "Empate!"
    } else {
        winninMessageTextElement.innerText = isCircleTurn 
        ? "0 Venceu" 
        : "X Venceu";
    }

    msgVitoria.classList.add("show-msgVitoria")

};

const checkForWin = (currentPlayer) => {
    return winningCombinations.some((combination) => {
        return combination.every((index) => {
            return cellElements[index].classList.contains(currentPlayer);
        });
    });
};



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
    const isWin = checkForWin(classToAdd);

    if (isWin) {
        endGame(false)
    }
    // Verificar por empate
    // Mudar simbolo

    swapTurns();
};

startgame();

restarButton.addEventListener("click", startgame);