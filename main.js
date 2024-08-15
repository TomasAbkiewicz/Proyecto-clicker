let mejora = document.getElementById("upgrade1");
let mejoraPassiva = document.getElementById("upgradeP1");
let personaje = document.getElementById("gnomo")
let contador= document.getElementById("currency")

let clickStrength= 0
let contadorMonedas = 10
let precio =10
let precioP1= 30
let extra= 0.1
let coinPerSec = 0

function passiveCoins(){
    contadorMonedas += coinPerSec/10;
    contador.textContent = "Monedas: "+Math.floor(contadorMonedas)
}
function updateCoins (){
    contadorMonedas += clickStrength
    contador.textContent = "Monedas: "+Math.floor(contadorMonedas)
}


function addStr(amount){
    if (contadorMonedas >= precio){
        contadorMonedas -=Math.floor(precio)
        contador.textContent ="Monedas: "+ Math.floor(contadorMonedas)
        clickStrength+=amount + extra;
        extra*= 2
        precio *=1.8
        mejora.textContent = "Plantar Gnomo: " + Math.floor(precio)
    }
    
}
function addPStr(amount){
    if (contadorMonedas >= precioP1){
        contadorMonedas -=Math.floor(precioP1)
        coinPerSec+=amount ;
        precioP1 *= 1.1
        mejoraPassiva.textContent = "Regar Jardin: " + Math.floor(precioP1)
    }
    
}

personaje.addEventListener("click",updateCoins)
mejora.addEventListener("click", () => addStr(1))
mejoraPassiva.addEventListener("click", () => addPStr(1))

setInterval(passiveCoins,100);


