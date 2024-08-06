

const usuario = {
    usuario: "joaco",
    contraseña: "sch", 
    id: "#00000001",
}


class Partida{
    constructor(monedas){
        this.monedas = monedas;
        //aca pondria todos los datos que faltan;
    }

}


function guardarLocalStorageUsuario() {
    localStorage.setItem("usuario", (usuario.usuario));
    localStorage.setItem("contraseña", (usuario.contraseña));
    localStorage.setItem("id usuario", (usuario.id));
}
document.getElementById("boton").addEventListener("click",guardarLocalStorageUsuario)

let partida1 = new Partida()
partida1.monedas = prompt("ingrese su cantidad de monedas: ")
function guardarLocalStoragePartidaMonedas(){
    localStorage.setItem("monedas", partida1.monedas)
}
document.getElementById("boton").addEventListener("click",guardarLocalStoragePartidaMonedas)

document.write(localStorage.getItem("monedas"))