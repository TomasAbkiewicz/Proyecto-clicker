let mejora = document.getElementById("upgrade1");
let personaje = document.getElementById("gnomo")
let contador= document.getElementById("currency")

let clickStrength= 1
let contadorMonedas = 0
let precio =10
let extra= .1

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

personaje.addEventListener("click",updateCoins)
mejora.addEventListener("click", () => addStr(1))





