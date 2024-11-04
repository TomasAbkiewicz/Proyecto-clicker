(function() {
    let userId = sessionStorage.getItem("userId")
    window.partida = JSON.parse(sessionStorage.getItem("partida"))
    if (userId !== "undefined" && userId && partida === null){
        postData("loadGame", userId, (game) => {
            partida = game;
            console.log(game)
            window.contadorMonedas= partida.currency.sunflowers;
            console.log(userId)
            console.log(partida)
            window.upgradeStage1 = partida.upgrades.up1;
            window.upgradeStage2 = partida.upgrades.up2;
            window.clickStrength = 0;
            window.passiveStrength= 0;
            if (window.upgradeStage1 !== 0){
                for (i=0; i<upgradeStage1; i++){
                    let currentStage= upgradeStages1[i];
                    window.clickStrength *=   rebirtExtra
                    window.clickStrength *=   currentStage.extra
                    window.clickStrength +=   currentStage.clickStrength
                    
                }
            
                
                
            }
            if (window.upgradeStage2 !==0){
                for (i=0; i<upgradeStage2; i++){
                    let currentStage= upgradeStages2[i];
                    window.passiveStrength *=   rebirtExtra 
                    window.passiveStrength *=   currentStage.extra
                    window.passiveStrength +=   currentStage.clickStrength
                    
                }
            }
            mejora.textContent = "Regar Jardin: " + upgradeStages1[window.upgradeStage1].price;
            pMejora.textContent = "Trebol de 4 hojas: " + upgradeStages2[window.upgradeStage2].price;
            setInterval(passiveUpdate,100);
            return game; 
        });
    }else{
        window.contadorMonedas= 10; 
        window.upgradeStage1= 0;
        window.upgradeStage1= 0;
        window.clickStrength= 0;
        window.passiveStrength=0;
        alert ("estas jugando sin cuenta, tu progreso no sera guardado y se reiniciara al salir de la pagina o entrar a cualquier modo de juego. Para no perder el progress, crea una cuenta con el boton log in ubicado en la esquina derecha de la pantalla")
    }
    
    
})();

let pMejora = document.getElementById("passiveStr")
let mejora = document.getElementById("clickStr")
let modeButtons = Array.from(document.getElementsByClassName('btn'));
let botonesDerecha= Array.from(document.getElementsByClassName("botones"))
let personaje = document.getElementById("gnomo")
let contador= document.getElementById("currency")
let closeBtn = document.getElementsByClassName("close")[0];
let sacrificio =document.getElementById("upgradePer1");
let contadorGnomos =document.getElementById("gnomeCounter");
let rebirth = document.getElementById("rebirth");
let goldenElf = document.getElementById('goldenElf'); 
let hmodos = document.getElementById("modos");

let isBoostActive = false;
let sacriP= 2000;
let rebirtStage = 0; 
let extra= 0
let gnomos= 0
let rebirtExtra= 1
   



let upgradeStages2 = [
    {price:100, clickStrength:1 , extra:1},
    {price:200,clickStrength:2,extra:1},
    {price:400, clickStrength:4 , extra:1},
    {price:1000,clickStrength:0,extra: 2},
    {price:2000, clickStrength:0 , extra:2},
    {price:3500,clickStrength:2,extra:2},
    {price:7000, clickStrength:4 , extra:2},
    {price:10000,clickStrength:0,extra: 3},
    {price:14000, clickStrength:29 , extra:1},
    {price:19000,clickStrength:0,extra:2},
    {price:23000, clickStrength:0 , extra:4},
    {price:30000,clickStrength:100,extra: 1.5},
    {price:55000, clickStrength: 50, extra:2},
    {price:88000,clickStrength:150,extra:1.2},
    {price:100000, clickStrength:0 , extra:4},
    {price:254000,clickStrength:200,extra: 2},
    {price:459000, clickStrength:1 , extra: 2},
    {price:661000,clickStrength:200,extra:1},
    {price:980000, clickStrength:0 , extra:1.5},
    {price:1890000,clickStrength:0,extra: 1.2},
    {price:2500000, clickStrength:0 , extra:1.5},
    {price:40130000,clickStrength:2,extra:2},
    {price:88180000, clickStrength:4 , extra:1.5},
    {price:100000000,clickStrength:0,extra: 3},
]

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
    contador.textContent = "Monedas: "+ Math.floor(contadorMonedas)
}
function passiveUpdate(){ 
    contadorMonedas += passiveStrength/10; 
    contador.textContent = "Monedas: "+ Math.floor(contadorMonedas)
}
function addStr() {
    let currentStage = upgradeStages1[upgradeStage1];
    if (contadorMonedas >= currentStage.price) {
        contadorMonedas -= currentStage.price;  
        contador.textContent = "Monedas: "+ contadorMonedas
        clickStrength *=   rebirtExtra
        clickStrength *=   currentStage.extra
        clickStrength +=   currentStage.clickStrength
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
function addPStr() {
    let currentStage = upgradeStages2[upgradeStage2];
    if (contadorMonedas >= currentStage.price) {
        contadorMonedas -= currentStage.price;  
        contador.textContent = "Monedas: "+ contadorMonedas
        passiveStrength *=   rebirtExtra 
        passiveStrength *=   currentStage.extra
        passiveStrength +=   currentStage.clickStrength 
        upgradeStage2 += 1; // Move to the next stage

        // Update button text to reflect the next stage price
        if (upgradeStage2 < upgradeStages2.length) {
            pMejora.textContent = "Trebol de 4 hojas: " + upgradeStages2[upgradeStage2].price;
        } else {
            pMejora.textContent = "Max Upgrade Reached";
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

hmodos.addEventListener('click', function() {
   
    
    for (const button of modeButtons) {
        button.classList.toggle("hidden");
        button.classList.toggle("show");
    }
    
    
});
document.getElementById('shop').addEventListener('click', function() {
    tiendaPopup.style.display = 'block'; 
    closeButton.style.display = 'block'; 
    overlay.classList.remove("hidden") 
    for (const button of botonesDerecha) { 
        button.classList.add("hidden"); 
    } }); 

closeButton.addEventListener('click', function() { 
    tiendaPopup.style.display = 'none'; 
    closeButton.style.display = 'none'; 
    overlay.classList.add("hidden") 
    for (const button of botonesDerecha) {
         button.classList.remove("hidden"); 
    } });

goldenElf.addEventListener('click', () => {
    applyBoost();
    goldenElf.style.display = 'none'; 
});
personaje.addEventListener("click",updateCoins)
mejora.addEventListener("click", addStr);  
pMejora.addEventListener("click", addPStr)
//rebirth.addEventListener("click", rebirt);

document.getElementById("save").addEventListener("click",(save)=> {
    
    if (partida !== null && partida){
        console.log(partida)
        partida.currency.sunflowers = Math.floor(contadorMonedas);
        partida.currency.fruits.banana = 0;
        partida.currency.fruits.apple = 0;
        partida.currency.fruits.grapes = 0;
        partida.currency.fruits.pineapple = 0;
        partida.currency.fruits.dragonFruits = 0;
        partida.upgrades.up1= upgradeStage1;
        partida.upgrades.up2= upgradeStage2;
        partida.upgrades.up3=0;
        partida.upgrades.up4=0;
        
        postData("save", partida, (ok)=>{
            if (ok.ok){
                alert("guardado correctamente")
            }

        })
    }
    
   

})


function redirectLogin(){
    window.location.href = "http://127.0.0.1:5500/front/SingUp/login.html";
}

function toggleModes() {
    const modesContainer = document.getElementById("modesContainer");
    modesContainer.classList.toggle("hidden");
}

function redirect(){
    window.location.href = "http://127.0.0.1:5500/front/principal/modo_buscaminas/prueba_buscaminas.html";
}
function redirect1(){
    window.location.href = "http://127.0.0.1:5500/front/principal/modo_arbol/arbol.html";
}
let pop1 = document.getElementById("popup1")
infor.addEventListener("mouseenter", () => {
    pop1.classList.remove("hidden")
    pop1.style.display = 'block';
} )
infor.addEventListener("mouseleave", () =>{
    pop1.classList.add("hidden")
    pop1.style.display = "none"
})

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

