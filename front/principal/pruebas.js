let score = 0.00;
let balance = 500;
let gridSize = 5;
let multipliers = {
    2: [2.00],
    3: [3.00],
    4: [4.00],
    5: [5.00],
    6: [6.00]
};
let bombProbabilities = {
    2: 0.7,
    3: 0.11,
    4: 0.5,
    5: 0.4,
    6: 0.3
};
let currentMultiplierIndex = 0;
let betAmount = 100;
let gameStarted = false;

function createCell() {
    const cell = document.createElement('div');
    cell.className = 'cell';
    cell.onclick = () => flipCell(cell);
    const img = document.createElement('img');
    img.alt = 'Hidden';
    cell.appendChild(img);
    return cell;
}

function resetBoard() {
    const grid = document.getElementById('grid');
    grid.innerHTML = '';
    grid.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    grid.classList.toggle('small-gap', gridSize === 2);
    const totalCells = gridSize === 2 ? 2 : gridSize * gridSize;
    for (let i = 0; i < totalCells; i++) {
        grid.appendChild(createCell());
    }
    score = 0.00;
    currentMultiplierIndex = 0;
    document.getElementById('score').innerText = score.toFixed(2);
    document.getElementById('popup').style.display = 'none';
    gameStarted = false;
    document.getElementById('play-button').innerText = `Jugar (${betAmount} monedas)`;
    document.querySelectorAll('.grid-size-selector button').forEach(button => button.disabled = false);
}

function flipCell(cell) {
    if (!cell.classList.contains('flipped') && gameStarted) {
        cell.classList.add('flipped');
        const img = cell.querySelector('img');
        let isBomb;
        if (gridSize === 2) {
            const flippedCells = document.querySelectorAll('.cell.flipped.diamond').length;
            isBomb = flippedCells === 0 ? Math.random() < 0.7 : true;
        } else {
            isBomb = Math.random() < (bombProbabilities[gridSize] + currentMultiplierIndex * 0.1);
        }

        cell.classList.add(isBomb ? 'bomb' : 'diamond');
        if (!isBomb) {
            score += multipliers[gridSize][currentMultiplierIndex];
            document.getElementById('score').innerText = score.toFixed(2);
            currentMultiplierIndex = Math.min(currentMultiplierIndex + 1, multipliers[gridSize].length - 1);
        } else {
            document.getElementById('popup-message').innerText = '¡Explotó la bomba, perdiste el juego!';
            document.getElementById('popup').style.display = 'block';
        }
    }
}

function setGridSize(size) {
    gridSize = size;
    betAmount = 100 * gridSize;
    document.getElementById('play-button').innerText = `Jugar (${betAmount} monedas)`;
}

function playGame() {
    if (balance >= betAmount) {
        balance -= betAmount;
        document.getElementById('balance').innerText = balance.toFixed(2);
        resetBoard();
        gameStarted = true;
        document.querySelectorAll('.grid-size-selector button').forEach(button => button.disabled = true);
        document.getElementById('play-button').innerText = 'Jugando...';
    } else {
        alert('No tienes suficiente saldo para jugar.');
    }
}

function withdraw() {
    const winnings = betAmount * score;
    balance += winnings;
    document.getElementById('balance').innerText = balance.toFixed(2);
    document.getElementById('popup-message').innerText = `¡Felicidades por tu premio de ${winnings.toFixed(2)} monedas!`;
    document.getElementById('popup').style.display = 'block';
}

// Initialize the board
resetBoard();


function goBack() {
  window.history.back();
}

