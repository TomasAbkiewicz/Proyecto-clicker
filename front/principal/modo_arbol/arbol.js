let counter = 0;
let fruitIsShown= false;
const counterDisplay = document.getElementById('counter');
const fruits = Array.from(document.querySelectorAll('.fruit'));
const positions = [
    { top: '5%', left: '10%' },
    { top: '10%', left: '20%' },
    { top: '15%', left: '30%' },
    { top: '20%', left: '40%' },
    { top: '25%', left: '50%' },
    { top: '10%', left: '60%' },
    { top: '30%', left: '70%' },
    { top: '35%', left: '80%' },
    { top: '40%', left: '90%' },
    { top: '25%', left: '80%' },
];



// Actualiza el contador en pantalla
function updateCounter() {
    counterDisplay.textContent = counter;
}

// Muestra una fruta al azar
function showRandomFruit() {
    if (!fruitIsShown){
        fruitIsShown= true
        console.log("fruta")
        const randomFruit = fruits[Math.floor(Math.random() * fruits.length)];
        randomFruit.classList.remove('hidden');
        console.log("fruta2")
        const randomPosition = positions[Math.floor(Math.random() * positions.length)];
        randomFruit.style.top = randomPosition.top;
        randomFruit.style.left = randomPosition.left;
    }
   
}

// Maneja el clic en el gnomo
document.getElementById('gnomo').addEventListener('click', () => {
    console.log("gnomo click")
    if (Math.random() < 0.05) {  // 50% de probabilidad de mostrar una fruta
        showRandomFruit();
    }
});

// Maneja el clic en cada fruta
fruits.forEach(fruit => {
    fruit.addEventListener('click', () => {
        if (!fruit.classList.contains('hidden')) {
            counter += 1;
            fruitIsShown =false;
            updateCounter();
            fruit.classList.add('hidden');  // Oculta la fruta de nuevo
        }
    });
});
