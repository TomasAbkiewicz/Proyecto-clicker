<<<<<<< HEAD
let counter = 0;
let fruitIsShown= false;
=======
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
>>>>>>> f2487079eaa591c4767fd5dd983a54afbb3b78aa
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



function showRandomFruit() {
<<<<<<< HEAD
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
   
=======
    if(!fruitExist){
    console.log("fruta")
    window.randomFruit = fruits[Math.floor(Math.random() * fruits.length)];
    let cord = cords[Math.floor(Math.random() * cords.length)];
    randomFruit.style.top = cord.top;
    randomFruit.style.left = cord.left
    randomFruit.classList.remove('hidden');
    fruitExist = true
}
>>>>>>> f2487079eaa591c4767fd5dd983a54afbb3b78aa
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
<<<<<<< HEAD
            counter += 1;
            fruitIsShown =false;
            updateCounter();
            fruit.classList.add('hidden');  // Oculta la fruta de nuevo
=======
            fruitExist = false
            fruit.classList.add('hidden');  
>>>>>>> f2487079eaa591c4767fd5dd983a54afbb3b78aa
        }
    });
});
