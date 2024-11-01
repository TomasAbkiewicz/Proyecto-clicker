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

let botonesDerecha= Array.from(document.getElementsByClassName("column"))
let overlay= document.getElementById("overlay");
let closeButton = document.getElementById('closeButton');
let mejora = document.getElementById("upgrade1")
let modeButtons = Array.from(document.getElementsByClassName('btn'));
let tiendaPopup = document.getElementById('tiendaPopup');
let personaje = document.getElementById("gnomo")
let contador= document.getElementById("currency")
let sacrificio =document.getElementById("upgradePer1");
let contadorGnomos =document.getElementById("gnomeCounter");
let hmodos = document.getElementById("modos");

function updateCoins (){
    contadorMonedas += clickStrength  
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
        upgradeStage1 += 1;
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
    tiendaPopup.style.display = 'block';
    closeButton.style.display = 'block';    
    overlay.classList.remove("hidden")
    for (const button of botonesDerecha) {
        button.classList.add("hidden");   
    }
    
});
closeButton.addEventListener('click', function() {
    tiendaPopup.style.display = 'none';
    closeButton.style.display = 'none';
    overlay.classList.add("hidden")
    for (const button of botonesDerecha) {
        button.classList.remove("hidden");   
    }
});

hmodos.addEventListener('click', function() {
   
    
    for (const button of modeButtons) {
        button.classList.toggle("hidden");
        button.classList.toggle("show");
    }
    
    
});

goldenElf.addEventListener('click', () => {
    applyBoost();
    goldenElf.style.display = 'none'; // Hide the elf after being clicked
});
personaje.addEventListener("click",updateCoins)
mejora.addEventListener("click", addStr);  // Correctly add the reference to the function

rebirth.addEventListener("click", rebirt);


function redirect(){
    window.location.href = "http://127.0.0.1:5500/front/principal/modo_buscaminas/prueba_buscaminas.html";
}
function redirect1(){
    window.location.href = "http://127.0.0.1:5500/front/principal/modo_arbol/arbol.html";
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
function save(game) {
    postData("save",game,(ok) => {
        if (ok){
            let overlay = document.createElement("div");
            
        }
    })

}
let saveButton = getElementById("save");
saveButton.addEventListener("click", save)