let counter = 0;
const counterDisplay = document.getElementById('counter');
const fruits = Array.from(document.querySelectorAll('.fruit'));

// Actualiza el contador en pantalla
function updateCounter() {
    counterDisplay.textContent = counter;
}

// Muestra una fruta al azar
function showRandomFruit() {
    console.log("fruta")
    const randomFruit = fruits[Math.floor(Math.random() * fruits.length)];
    randomFruit.classList.remove('hidden');
    console.log("fruta2")
}

// Maneja el clic en el gnomo
document.getElementById('gnomo').addEventListener('click', () => {
    console.log("gnomo click")
    if (Math.random() < 0.5) {  // 50% de probabilidad de mostrar una fruta
        showRandomFruit();
    }
});

// Maneja el clic en cada fruta
fruits.forEach(fruit => {
    fruit.addEventListener('click', () => {
        if (!fruit.classList.contains('hidden')) {
            counter += 1;
            updateCounter();
            fruit.classList.add('hidden');  // Oculta la fruta de nuevo
        }
    });
});
