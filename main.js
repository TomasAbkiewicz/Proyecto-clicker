let mejora = document.getElementById("upgrade1");
let mejoraPassiva = document.getElementById("upgradeP1");
let personaje = document.getElementById("gnomo")
let contador= document.getElementById("currency")
let contadorDT= document.getElementById("time")
let modal = document.getElementById("loginModal");
let closeBtn = document.getElementsByClassName("close")[0];
let logInBtn=document.getElementById("login");

let upgradeStage1 = 0; 
let upgradeStageP1 = 0; 
let minutos= 0
let tiempoJ= 50
let clickStrength= 0
let contadorMonedas = 1000
let precio =10
let precioP1= 30
let extra= 0.1
let coinPerSec = 0

let upgradeStages1 = [
    {price:10, clickStrength:1 , extra:1},
    {price:20,clickStrength:2,extra:1},
    {price:40, clickStrength:4 , extra:1},
    {price:60,clickStrength:0,extra: 2},
    {price:120, clickStrength:0 , extra:2},
    {price:300,clickStrength:2,extra:2},
    {price:1000, clickStrength:4 , extra:2},
    {price:4000,clickStrength:0,extra: 3},
]
let upgradeStagesP1 = [
    { price: 30, coinPerSec: 1 },
    { price: 60, coinPerSec: 2 },
    { price: 90, coinPerSec: 3 }, 
    { price: 200, coinPerSec: 4 },
    { price: 300, coinPerSec: 4 },
    { price: 600, coinPerSec: 5},
    { price: 1000, coinPerSec: 6 },
    { price: 1200, coinPerSec: 7 },
    { price: 2000, coinPerSec: 10 },
    { price: 5000, coinPerSec: 12 },
    { price: 5500, coinPerSec: 15 },
]
function updateTime(){
     
    if (tiempoJ>59){
        minutos+=1
        tiempoJ-=60
        contadorDT.textContent= "Tiempo jugado: "+minutos+"M, "+tiempoJ+"S";   
    }else{
        tiempoJ+=1
        contadorDT.textContent= "Tiempo jugado: "+minutos+"M, "+tiempoJ+"S";  
    }
}
function passiveCoins(){
    contadorMonedas += coinPerSec/10;
    contador.textContent = "Monedas: "+Math.floor(contadorMonedas)
}
function updateCoins (){
    contadorMonedas += clickStrength
    contador.textContent = "Monedas: "+Math.floor(contadorMonedas)
}


function addStr() {
    let currentStage = upgradeStages1[upgradeStage1];
    if (contadorMonedas >= currentStage.price) {
        contadorMonedas -= currentStage.price;  
        contador.textContent = "Monedas: " + Math.floor(contadorMonedas);
        clickStrength += currentStage.clickStrength * currentStage.extra; 
    
        upgradeStage1 += 1; // Move to the next stage

        // Update button text to reflect the next stage price
        if (upgradeStage1 < upgradeStages1.length) {
            mejora.textContent = "Plantar Gnomo: " + upgradeStages1[upgradeStage1].price;
        } else {
            mejora.textContent = "Max Upgrade Reached";
        }
    }
}
function addPStr(){
    let currentStage = upgradeStagesP1[upgradeStageP1];
    if (contadorMonedas >= currentStage.price) {
        contadorMonedas -= currentStage.price;  
        contador.textContent = "Monedas: " + Math.floor(contadorMonedas);
        coinPerSec += currentStage.coinPerSec; 
    
        upgradeStageP1 += 1; // Move to the next stage

        // Update button text to reflect the next stage price
        if (upgradeStageP1 < upgradeStagesP1.length) {
            mejoraPassiva.textContent = "Regar Jardin: " + upgradeStagesP1[upgradeStageP1].price;
        } else {
            mejoraPassiva.textContent = "Max Upgrade Reached";
        }
    }
    
}

document.getElementById('shop').addEventListener('click', function() {
    var upgradeButtons = document.getElementById('upgrade-buttons');
    if (upgradeButtons.style.display === 'none' || upgradeButtons.style.display === '') {
        upgradeButtons.style.display = 'block'; // Show the upgrade buttons
    } else {
        upgradeButtons.style.display = 'none'; // Hide the upgrade buttons if already visible
    }
});


function displayLog() {
    modal.style.display = "block";
}

closeBtn.onclick = function() {
    modal.style.display = "none";
}

personaje.addEventListener("click",updateCoins)
mejora.addEventListener("click", addStr);  // Correctly add the reference to the function
mejoraPassiva.addEventListener("click", addPStr); // Correctly add the reference to the function
logInBtn.addEventListener("click", displayLog);

setInterval(passiveCoins,100);
setInterval(updateTime,1000);

