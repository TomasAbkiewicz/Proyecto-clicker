(function() {
    let userId = sessionStorage.getItem("userId")
    if (userId && userId !== "undefined"){
        postData("loadGame", userId, (game) => {
            window.partida = game;
            window.contadorMonedas= game.currency.sunflowers;
            console.log(userId)
            console.log(partida)
            return game; 
        });
    }else{
        window.contadorMonedas= 10;
    }
})();

let mejora = document.getElementById("upgrade1")
let modeButtons = Array.from(document.getElementsByClassName('hidden'));

let personaje = document.getElementById("gnomo")
let contador= document.getElementById("currency")
let closeBtn = document.getElementsByClassName("close")[0];
let sacrificio =document.getElementById("upgradePer1");
let contadorGnomos =document.getElementById("gnomeCounter");
let rebirth = document.getElementById("rebirthButton");
let goldenElf = document.getElementById('goldenElf'); 
let hmodos = document.getElementById("modos");

let isBoostActive = false;
let sacriP= 2000
let upgradeStage1 = 0; 
let rebirtStage = 0; 
let clickStrength= 0
let extra= 0
let gnomos= 0
let rebirtExtra= 1
console.log("hola")

   





let rebirtStages = [
    { price: 300000, extra:2},
    { price: 1000000, extra:4},
    { price: 3000000, extra:8},
    { price: 5000000, extra:12},
    { price: 9999999, extra:20},
    { price: 20000000, extra:40},
]
let upgradeStages1 = [
    {price:10, clickStrength:1 , extra:1},
    {price:20,clickStrength:2,extra:1},
    {price:40, clickStrength:4 , extra:1},
    {price:60,clickStrength:0,extra: 2},
    {price:120, clickStrength:0 , extra:2},
    {price:300,clickStrength:2,extra:2},
    {price:1000, clickStrength:4 , extra:2},
    {price:4000,clickStrength:0,extra: 3},
    {price:6000, clickStrength:29 , extra:1},
    {price:6500,clickStrength:0,extra:2},
    {price:10000, clickStrength:0 , extra:4},
    {price:15000,clickStrength:100,extra: 1.5},
    {price:25000, clickStrength: 50, extra:2},
    {price:38000,clickStrength:150,extra:1.2},
    {price:50000, clickStrength:0 , extra:4},
    {price:54000,clickStrength:200,extra: 2},
    {price:59000, clickStrength:1 , extra: 2},
    {price:61000,clickStrength:200,extra:1},
    {price:80000, clickStrength:0 , extra:1.5},
    {price:90000,clickStrength:0,extra: 1.2},
    {price:100000, clickStrength:0 , extra:1.5},
    {price:130000,clickStrength:2,extra:2},
    {price:180000, clickStrength:4 , extra:1.5},
    {price:200000,clickStrength:0,extra: 3},
]
function rebirt(){
    let currentStage= rebirtStages[rebirtStage];
    if (contadorMonedas >= currentStage.price) {
        contadorMonedas -= currentStage.price;  
        
       
        rebirtExtra = currentStage.extra;
       
        clickStrength= 0;
        contadorMonedas = 10;
        precio =10;
        precioP1= 30;    
        extra= 0.1;
    
        gnomos= 0;
        sacriP= 2000;
        upgradeStage1 = 0; 
        upgradeStageP1 = 0; 
        mejora.textContent = "Plantar Gnomo: " + upgradeStages1[0].price;
       
        contadorGnomos.textContent = "Gnomos: " + gnomos;
        sacrificio.textContent = "Sacrificio: " + Math.floor(sacriP);
        rebirtStage +=1;
        if (rebirtStage < rebirtStages.length) {
            rebirth.textContent = "Rebirth: " + rebirtStages[rebirtStage].price;
        } else {
            rebirth.textContent = "Max Upgrade Reached";
        }
    }

}
function updateCoins (){
    contadorMonedas += clickStrength  
    contador.textContent = "Monedas: "+ contadorMonedas
}
function passiveUpdate(){  
    contador.textContent = "Monedas: "+ contadorMonedas
}
function addStr() {
    let currentStage = upgradeStages1[upgradeStage1];
    if (contadorMonedas >= currentStage.price) {
        contadorMonedas -= currentStage.price;  
        contador.textContent = "Monedas: "+ contadorMonedas
        clickStrength += (currentStage.clickStrength * currentStage.extra)* rebirtExtra; 
        gnomos +=1;
        contadorGnomos.textContent = "Gnomos: "+ gnomos;
        upgradeStage1 += 1; // Move to the next stage

        // Update button text to reflect the next stage price
        if (upgradeStage1 < upgradeStages1.length) {
            mejora.textContent = "Plantar Gnomo: " + upgradeStages1[upgradeStage1].price;
        } else {
            mejora.textContent = "Max Upgrade Reached";
        }
    }
}


function showGoldenElf() {
    goldenElf.style.display = 'block';
    goldenElf.style.left = `${Math.random() * (window.innerWidth - 100)}px`;
    goldenElf.style.top = `${Math.random() * (window.innerHeight - 100)}px`;

    // Hide elf after 5 seconds
    setTimeout(() => {
        goldenElf.style.display = 'none';
    }, 5000);
}
function applyBoost() {
    isBoostActive=true;
    if (Math.random() < 0.5) { // Adjust probability as needed
    }
    
}
function randomGoldenElfAppearance() {
    goldenElf.style.display = 'none';
    setInterval(() => {
        if (!isBoostActive&&Math.random() < 0.1) { // Adjust probability as needed
            showGoldenElf();
        }
    }, 600); // Check every 1000 milliseconds = 1 second
}
document.getElementById('shop').addEventListener('click', function() {
    var upgradeButtons = document.getElementById('upgrade-buttons');
    if (upgradeButtons.style.display === 'none' || upgradeButtons.style.display === '') {
        upgradeButtons.style.display = 'block'; // Show the upgrade buttons
    } else {
        upgradeButtons.style.display = 'none'; // Hide the upgrade buttons if already visible
    }
});
hmodos.addEventListener('click', function() {
   
    
    for (const button of modeButtons) {
        button.classList.toggle("hidden");
        button.classList.toggle("show");
    }
    
    
});
closeBtn.onclick = function() {
    modal.style.display = "none";
}
goldenElf.addEventListener('click', () => {
    applyBoost();
    goldenElf.style.display = 'none'; // Hide the elf after being clicked
});
personaje.addEventListener("click",updateCoins)
mejora.addEventListener("click", addStr);  // Correctly add the reference to the function

rebirth.addEventListener("click", rebirt);




setInterval(passiveUpdate, 100);


function redirect(){
    window.location.href = "http://127.0.0.1:5500/Proyecto-clicker/front/principal/modo_buscaminas/prueba_buscaminas.html";
}
function redirect1(){
    window.location.href = "http://127.0.0.1:5500/Proyecto-clicker/front/principal/modo_arbol/arbol.html";
}


window.onload = function() {
    const winnings = sessionStorage.getItem('winnings');
    if (winnings) {
        document.getElementById('currency').innerText = `Tus ganancias son: ${winnings} monedas`;
        document.getElementById("currency").innerText = `${winnings}`;
    } 
}

function goBack() {
    window.history.back();
  }