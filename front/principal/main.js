window.onload(()=>{
    const userId= sessionStorage.getItem("userId")
    if (userId || userId !== undefined){
    postData("loadGame", userId, (game) => {
        return game;
    })} else{
        alert("modo sin sesion")
        game = {
            currency: {
              sunflowers: 1000000000000000000000000
            },
            upgrades: {
              up1: 0,
              up2: 0,
              up3: 0,
              cs: 1
            }
          }
        return game;
    }
})
const contador = document.getElementById("currency")
function updateCounter(element, clickStrenght) {
    element += clickStrenght
    contador.innerHTML= `Monedas: ${game.currency.sunflowers}`;
}
contador.innerHTML= game.currency.sunflowers;
upgradeStage1 = game.upgrades.up1;
upgradeStage2 = game.upgrades.up2;
upgradeStage3 = game.upgrades.up3;
clickStrength = game.upgrades.cs;

let pMejora = document.getElementById("passiveStr")
let mejora = document.getElementById("clickStr")
let modeButtons = Array.from(document.getElementsByClassName('btn'));
let botonesDerecha= Array.from(document.getElementsByClassName("botones"))
let personaje = document.getElementById("gnomo")
let mejora3 =document.getElementById("dualStr");
let extra= 0

let upgradeStages3 = [
    {price:200, clickStrength:2, passiveStrength:2, extra:1},
    {price:400, clickStrength:4, passiveStrength:4, extra:1},
    {price:1000, clickStrength:0, passiveStrength:1, extra:2},
    {price:2000, clickStrength:0, passiveStrength:2, extra:2},
    {price:3500, clickStrength:2, passiveStrength:2, extra:2},
    {price:7000, clickStrength:4, passiveStrength:4, extra:2},
    {price:10000, clickStrength:0, passiveStrength:3, extra:3},
    {price:14000, clickStrength:29, passiveStrength:29, extra:1},
    {price:19000, clickStrength:0, passiveStrength:2, extra:2},
    {price:23000, clickStrength:0, passiveStrength:4, extra:4},
    {price:30000, clickStrength:100, passiveStrength:100, extra:1.5},
    {price:55000, clickStrength:50, passiveStrength:50, extra:2},
    {price:88000, clickStrength:150, passiveStrength:150, extra:1.2},
    {price:100000, clickStrength:0, passiveStrength:4, extra:4},
    {price:254000, clickStrength:200, passiveStrength:200, extra:2},
    {price:459000, clickStrength:1, passiveStrength:1, extra:2},
    {price:661000, clickStrength:200, passiveStrength:200, extra:1},
    {price:980000, clickStrength:0, passiveStrength:1.5, extra:1.5},
    {price:1890000, clickStrength:0, passiveStrength:1.2, extra:1.2},
    {price:2500000, clickStrength:0, passiveStrength:1.5, extra:1.5},
    {price:40130000, clickStrength:2, passiveStrength:2, extra:2},
    {price:88180000, clickStrength:4, passiveStrength:4, extra:1.5},
    {price:100000000, clickStrength:0, passiveStrength:3, extra:3},
];

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

function passiveUpdate(){ 
    contador += passiveStrength/10; 
    contador.innerHTML = "Monedas: "+ Math.floor(contadorMonedas)
}
function addStr() {
    let currentStage = upgradeStages1[upgradeStage1];
    if (contadorMonedas >= currentStage.price) {
        contadorMonedas -= currentStage.price;  
        contador.textContent = "Monedas: "+ contadorMonedas
        
        clickStrength *=   currentStage.extra
        clickStrength +=   currentStage.clickStrength
       
        upgradeStage1 += 1; 

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
        contador.textContent = "Monedas: "+ Math.floor(contadorMonedas)
       
        passiveStrength *=   currentStage.extra
        passiveStrength +=   currentStage.clickStrength 
        upgradeStage2 += 1; 
        if (upgradeStage2 < upgradeStages2.length) {
            pMejora.textContent = "Trebol de 4 hojas: " + upgradeStages2[upgradeStage2].price;
        } else {
            pMejora.textContent = "Max Upgrade Reached";
        }
    }
}
function addDStr() {
    let currentStage = upgradeStages3[upgradeStage3];
    if (contadorMonedas >= currentStage.price) {
        contadorMonedas -= currentStage.price;  
        contador.textContent = "Monedas: "+ Math.floor(contadorMonedas)
        clickStrength *=   currentStage.extra
        clickStrength +=   currentStage.clickStrength 
        passiveStrength *=   currentStage.extra
        passiveStrength +=   currentStage.passiveStrength
        upgradeStage3 += 1; 
        if (upgradeStage3 < upgradeStages3.length) {
            mejora3.textContent = "Olla de Oro: " + upgradeStages3[upgradeStage3].price;
        } else {
            mejora3.textContent = "Max Upgrade Reached";
        }
    }
}






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
    } 


});


document.getElementById("save").addEventListener("click",(save)=> {
    
    if (game !== null && game){
        console.log(game)
        game.currency.sunflowers = Math.floor(contadorMonedas);
        game.upgrades.up1= upgradeStage1;
        game.upgrades.up2= upgradeStage2;
        game.upgrades.up3= upgradeStages3;
        game.upgrades.cs = clickStrenght;
        
        postData("save", game, (ok)=>{
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
personaje.addEventListener("click",updateCounter(game.currency.sunflowers, clickStrenght))
mejora.addEventListener("click",        addStr)
pMejora.addEventListener("click",      addPStr)
mejora3.addEventListener("click",      addDStr)