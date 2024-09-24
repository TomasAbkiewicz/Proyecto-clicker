let mejora = document.getElementById("upgrade1");
let mejoraPassiva = document.getElementById("upgradeP1");
let personaje = document.getElementById("gnomo")
let contador= document.getElementById("currency")
let contadorDT= document.getElementById("time")
let modal = document.getElementById("loginModal");
let closeBtn = document.getElementsByClassName("close")[0];
let logInBtn=document.getElementById("login");
let sacrificio =document.getElementById("upgradePer1");
let contadorGnomos =document.getElementById("gnomeCounter");
let rebirth = document.getElementById("rebirthButton");
let goldenElf = document.getElementById('goldenElf'); 
let helloScreen = document.getElementById("helloScreen");
let hmodos = document.getElementById("modos");
let progressBar = document.getElementById('progressBar');



let isBoostActive= false;
let sacriP= 2000
let upgradeStage1 = 0; 
let rebirtStage = 0; 
let upgradeStageP1 = 0; 
let minutos= 0
let tiempoJ= 50
let clickStrength= 0
let contadorMonedas = 300000
let extra= 0.1
let coinPerSec = 0
let gnomos= 0
let rebirtExtra= 1
let progress = 0;
let mostrarMonedas

function modosCambio() {
    window.location.href = ("Proyecto-clicker/front/principal/buscaminas.html");
}


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
    { price: 7000, coinPerSec: 20 }, 
    { price: 9000, coinPerSec: 40 },
    { price: 10000, coinPerSec: 40 },
    { price: 13000, coinPerSec: 50 },
    { price: 17000, coinPerSec: 55 },
    { price: 25000, coinPerSec: 70 },
    { price: 35000, coinPerSec: 90 },
    { price: 50000, coinPerSec: 120 },
    { price: 65000, coinPerSec: 200 },
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
        coinPerSec = 0;
        gnomos= 0;
        sacriP= 2000;
        upgradeStage1 = 0; 
        upgradeStageP1 = 0; 
        mejora.textContent = "Plantar Gnomo: " + upgradeStages1[0].price;
        mejoraPassiva.textContent = "Regar Jardin: " + upgradeStagesP1[0].price; 
       
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
    contadorMonedas += coinPerSec/100;
    let millones = Math.floor((contadorMonedas/1000000) *10)/10
    let billones = Math.floor((contadorMonedas/1000000000) *10)/10
    if (contadorMonedas>= 1000000000){
        contador.textContent="Monedas: "+ billones +" B"
    }else if (contadorMonedas>= 1000000){
        contador.textContent="Monedas: "+ millones +" M"
    }else{
        
        contador.textContent = "Monedas: "+Math.floor(contadorMonedas)
    }
    
    
    
    
}
function updateCoins (){
    contadorMonedas += clickStrength
    
}
function addStr() {
    let currentStage = upgradeStages1[upgradeStage1];
    if (contadorMonedas >= currentStage.price) {
        contadorMonedas -= currentStage.price;  
        
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
function addPStr(){
    let currentStage = upgradeStagesP1[upgradeStageP1];
    if (contadorMonedas >= currentStage.price) {
        contadorMonedas -= currentStage.price;  
    
        coinPerSec += currentStage.coinPerSec* rebirtExtra; 
    
        upgradeStageP1 += 1; // Move to the next stage

        // Update button text to reflect the next stage price
        if (upgradeStageP1 < upgradeStagesP1.length) {
            mejoraPassiva.textContent = "Regar Jardin: " + upgradeStagesP1[upgradeStageP1].price;
        } else {
            mejoraPassiva.textContent = "Max Upgrade Reached";
        }
    }
    
}
function sacrifice(){
    if (contadorMonedas >= sacriP && gnomos>0) {
        contadorMonedas -= sacriP;  
        gnomos -=1
        contadorGnomos.textContent = "Gnomos: "+ gnomos;
     
        coinPerSec += 1.2*rebirtExtra;   
        sacriP *= 1.2  
        sacrificio.textContent = "Sacrificar Gnomo: " + Math.floor(sacriP);
        
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
        clickStrength *= 777; // Double the click strength
        setTimeout(() => {
            isBoostActive=false;
            clickStrength /= 777; // Revert click strength after 10 seconds
        }, 10000); 
    }else{
        coinPerSec *= 777; // Double the click strength
        setTimeout(() => {
            isBoostActive=false;
            coinPerSec /= 777; // Revert click strength after 10 seconds
        }, 60000);
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
function displayLog() {
    modal.style.display = "block";
}
closeBtn.onclick = function() {
    modal.style.display = "none";
}
goldenElf.addEventListener('click', () => {
    applyBoost();
    goldenElf.style.display = 'none'; // Hide the elf after being clicked
});
personaje.addEventListener("click",updateCoins)
mejora.addEventListener("click", addStr);  // Correctly add the reference to the function
mejoraPassiva.addEventListener("click", addPStr); // Correctly add the reference to the function
logInBtn.addEventListener("click", displayLog);
sacrificio.addEventListener("click", sacrifice);
rebirth.addEventListener("click", rebirt);
modos.addEventListener("click", modosCambio);
clickableImage.addEventListener('click', function() {
    if (progress < 100) {
        progress += 10; // Increment the progress by 10% on each click
        progressBar.style.width = progress + '%';
    }
});

setInterval(passiveCoins,10);
setInterval(updateTime,1000);
randomGoldenElfAppearance()


