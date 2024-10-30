let fruitExist = false;
let timer = document.getElementById("counter");
let time= 101;
timer.textContent = time;

function countdown (){
    if(time !== 0){
        time --;
        timer.textContent = time;
    }
}
const fruitTypes = {
    banana: { id: 0, won: 0, class: 'fruit1' },
    apple: { id: 1, won: 0, class: 'fruit2' },
    grapes: { id: 2, won: 0, class: 'fruit3' },
    pineapple: { id: 3, won: 0, class: 'fruit4' },
    dragonFruit: { id: 4, won: 0, class: 'fruit5' },
};

const cords = [
    { top: "10%", left: "10%" },
    { top: "10%", left: "20%" },
    { top: "10%", left: "30%" },
    { top: "10%", left: "40%" },
    { top: "10%", left: "50%" },
    { top: "10%", left: "60%" },
    { top: "10%", left: "70%" },
    { top: "10%", left: "80%" },
    { top: "10%", left: "90%" },
    { top: "10%", left: "100%" },
];

const counterDisplay = document.getElementById('counter');
const fruit = document.getElementById('fruit');
let currentFruitType;

function showRandomFruit() {
    if (!fruitExist && time !== 0) {
        const randomPosition = cords[Math.floor(Math.random() * cords.length)];
        fruit.style.top = randomPosition.top;
        fruit.style.left = randomPosition.left;

        const fruitKeys = Object.keys(fruitTypes);
        const randomTypeKey = fruitKeys[Math.floor(Math.random() * fruitKeys.length)];
        currentFruitType = randomTypeKey;
        
        fruit.className = `fruit ${fruitTypes[randomTypeKey].class}`; 

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
            fruitTypes[currentFruitType].won += 1;
            console.log(`Fruit Type: ${currentFruitType}, Won Count: ${fruitTypes[currentFruitType].won}`);
            console.log(fruitTypes);
        }

        fruitExist = false;
        fruit.classList.add('hidden');
    }
});

function goBack() {
    window.history.back();
}
setInterval(countdown,1000);