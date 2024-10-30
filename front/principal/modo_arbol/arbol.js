let fruitExist = false;
let timer = document.getElementById("counter");
let time = 10;
let startGame = false;
timer.textContent = time;
let countdownInterval;

window.onload = () => {
    const overlay = document.createElement('div');
    overlay.className = 'overlay';

    const popup = document.createElement('div');
    popup.className = 'popup';

    const title = document.createElement('h2');
    title.textContent = 'Reglas del juego';
    popup.appendChild(title);

    const rules = document.createElement("p");
    rules.textContent = "Cuando clickees jugar tendrás 10s para clickear el gnomo y conseguir frutas. Cada click tiene probabilidades de spawnear una fruta.";
    popup.appendChild(rules);

    const startButton = document.createElement("div");
    startButton.classList.add("start-button");
    startButton.id = 'startButton';
    startButton.textContent = "START";
    popup.appendChild(startButton);

    overlay.appendChild(popup);
    document.body.appendChild(overlay);

    startButton.addEventListener("click", () => {
        gameStatus();
        overlay.remove();
        countdownInterval = setInterval(countdown, 1000);
    });
}

function gameStatus() {
    startGame = !startGame;
}

function countdown() {
    if (startGame === true) {
        if (time > 0) {
            time--;
            timer.textContent = time;
        } else {
            clearInterval(countdownInterval);
            openPopUp(fruits);
        }
    }
}

const fruits = {
    banana: { id: 0, won: 0, class: 'fruit1' },
    apple: { id: 1, won: 0, class: 'fruit2' },
    grapes: { id: 2, won: 0, class: 'fruit3' },
    pineapple: { id: 3, won: 0, class: 'fruit4' },
    dragonFruit: { id: 4, won: 0, class: 'fruit5' },
};

const cords = [
    { top: "-10%", left: "-10%" },
    { top: "75%", left: "-20%" },
    { top: "20%", left: "130%" },
    { top: "30%", left: "125%" },
    { top: "45%", left: "-35%" },
    { top: "-20%", left: "130%" },
    { top: "90%", left: "110%" },
    { top: "92%", left: "-14%" },
    { top: "18%", left: "-40%" },
    { top: "10%", left: "120%" },
];

const counterDisplay = document.getElementById('counter');
const fruit = document.getElementById('fruit');
let currentFruitType;

function showRandomFruit() {
    if (!fruitExist && time > 0 && startGame === true) {
        const randomPosition = cords[Math.floor(Math.random() * cords.length)];
        fruit.style.top = randomPosition.top;
        fruit.style.left = randomPosition.left;

        const fruitKeys = Object.keys(fruits);
        const randomTypeKey = fruitKeys[Math.floor(Math.random() * fruitKeys.length)];
        currentFruitType = randomTypeKey;

        fruit.className = `fruit ${fruits[randomTypeKey].class}`;
        fruit.classList.remove('hidden');
        fruitExist = true;
    }
}

document.getElementById('gnomo').addEventListener('click', () => {
    if (Math.random() < 0.1) {
        showRandomFruit();
    }
});

fruit.addEventListener('click', () => {
    if (!fruit.classList.contains('hidden')) {
        if (currentFruitType) {
            fruits[currentFruitType].won += 1;
            console.log(`Fruit Type: ${currentFruitType}, Won Count: ${fruits[currentFruitType].won}`);
            console.log(fruits);
        }

        fruitExist = false;
        fruit.classList.add('hidden');
    }
});

function goBack() {
    window.history.back();
}

function openPopUp(fruits) {
    if (!fruit.classList.contains('hidden')){
        fruit.classList.add('hidden');
    }
    const overlay = document.createElement('div');
    overlay.className = 'overlay';

    const popup = document.createElement('div');
    popup.className = 'popup';

    const title = document.createElement('h2');
    title.textContent = 'Resultados del Juego';
    popup.appendChild(title);

    const fruitList = document.createElement('ul');
    for (const fruit in fruits) {
        const listItem = document.createElement('li');
        listItem.textContent = `${fruit}: ${fruits[fruit].won}`;
        fruitList.appendChild(listItem);
    }
    popup.appendChild(fruitList);

    const closeButton = document.createElement('button');
    closeButton.textContent = 'Volver al menu principal';
    closeButton.className = 'close-btn';
    closeButton.addEventListener('click', () => {
        overlay.remove();
        goBack()
    });
    popup.appendChild(closeButton);

    const startButton = document.createElement("div");
    startButton.classList.add("start-button");
    startButton.id = 'startButton';
    startButton.textContent = "PLAY AGAIN?";
    popup.appendChild(startButton);

    overlay.appendChild(popup);
    document.body.appendChild(overlay);

    startButton.addEventListener("click", () => {
        clearInterval(countdownInterval);
        time = 10;
        timer.textContent = time;
        startGame = true;
        overlay.remove();
        countdownInterval = setInterval(countdown, 1000);
    });
}
