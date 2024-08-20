
let usuario = {
    usuario: undefined,
    contraseña: undefined,
    id: "#00000001",
}

function meterDatosUsuario() {
    usuario.usuario = document.getElementById("usuarioSignUp").value;
    usuario.contraseña = document.getElementById("contraseñaSignUp").value;
}

class Partida {
    constructor(monedas) {
        this.monedas = monedas;
        //aca pondria todos los datos que faltan;
    }
}

function guardarLocalStorageUsuario() {
    console.log("guardado");
    if(usuario.usuario !== "" && usuario.contraseña !== ""){
    localStorage.setItem("usuario", (usuario.usuario));
    localStorage.setItem("contraseña", (usuario.contraseña));
    localStorage.setItem("id usuario", (usuario.id));
    window.location.href = "login.html";
    } else {
        alert("escribi un usuario y contraseña")
    }
}

let partida1 = new Partida();
//partida1.monedas = prompt("ingrese su cantidad de monedas: ");
    
function guardarLocalStoragePartidaMonedas() {
    localStorage.setItem("monedas", partida1.monedas);
}
const botonSignUp = document.getElementById("botonSignUp")

botonSignUp.addEventListener("click", meterDatosUsuario);
botonSignUp.addEventListener("click", guardarLocalStorageUsuario);
botonSignUp.addEventListener("click", guardarLocalStoragePartidaMonedas);

