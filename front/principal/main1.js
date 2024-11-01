window.onload= function() {
    let userId = sessionStorage.getItem("userId")
    if (userId && userId !== "undefined"){
        postData("loadGame", userId, (game) => {
            window.partida = game;
            window.contadorMonedas= game.currency.sunflowers;
            return game; 
        });
    }else{
        window.contadorMonedas= 10;
    }
}

let modeButtons = Array.from(document.getElementsByClassName('hidden'));
let personaje = document.getElementById("gnomo");
let contador= document.getElementById("currency");
let modos = document.getElementById("modos");
let botonArbol = document.getElementById("Arbol");
let botonBuscaminas = document.getElementById("Buscaminas");
let moneda = "../../../data/IMAGENES/moneda.png";

contador.textContent= `${moneda} ${game.currency.clover}`
function gnomeClick() {
    game.currency.clovers++
}
function goBack() {
    window.history.back();
}
function redirectBuscaminas(){
    if (game.currency.clovers < 1000){
        game.currency.clovers -= 1000;
        window.location.href = "http://127.0.0.1:5500/Proyecto-clicker/front/principal/modo_buscaminas/prueba_buscaminas.html";
    }
}
function redirectArbol(){
    if (game.currency.clovers < 1000){
        game.currency.clovers -= 1000;
        window.location.href = "http://127.0.0.1:5500/Proyecto-clicker/front/principal/modo_arbol/arbol.html";
    }
}

personaje.addEventListener("click", gnomeClick)
botonArbol.addEventListener("click", redirectArbol)
botonBuscaminas.addEventListener("click", redirectBuscaminas)

modos.addEventListener('click', function() {
    for (const button of modeButtons) {
        button.classList.toggle("hidden");
        button.classList.toggle("show");
    }   
});
