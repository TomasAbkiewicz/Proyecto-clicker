let fruitExist = false
const fruitTypes = {
    banana: { id: 0, won: 0 },
    apple: { id: 1, won: 0 },
    grapes: { id: 2, won: 0 },
    pineapple: { id: 3, won: 0 },
    dragonFruit: { id: 4, won: 0 }
};

let cords = [
    { top: "50%", left: "10%" },
    { top: "50%", left: "20%" },
    { top: "50%", left: "30%" },
    { top: "50%", left: "40%" },
    { top: "50%", left: "50%" },
    { top: "50%", left: "60%" },
    { top: "50%", left: "70%" },
    { top: "50%", left: "80%" },
    { top: "50%", left: "90%" },
    { top: "50%", left: "100%" },
];
const counterDisplay = document.getElementById('counter');
const fruits = Array.from(document.querySelectorAll('.fruit'));

function showRandomFruit() {
    if(!fruitExist){
    console.log("fruta")
    window.randomFruit = fruits[Math.floor(Math.random() * fruits.length)];
    let cord = cords[Math.floor(Math.random() * cords.length)];
    randomFruit.style.top = cord.top;
    randomFruit.style.left = cord.left
    randomFruit.classList.remove('hidden');
    fruitExist = true
}
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
            fruitExist = false
            fruit.classList.add('hidden');  
        }
    });
});
