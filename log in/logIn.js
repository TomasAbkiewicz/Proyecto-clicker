let  usuarioGuardado = {
    usuario: undefined,
    contraseña: undefined, 
    id: "#00000001",
}
function meterDatosUsuarioGuardado() {
    usuario.usuario = localStorage.getItem("usuario")
    usuario.contraseña = localStorage.getItem("contraseña")
}

let usuarioIngresado = {
    usuario: document.getElementById("usuarioLogIn").textContent,
    contraseña: document.getElementById("contraseñaLogIn").textContent,
}

function ingresar(){
    if (usuarioGuardado.contraseña === usuarioIngresado.contraseña && usuarioGuardado.usuario === usuarioIngresado.usuario) {
        window.location.href = "Proyecto.html"
        console.log("hola")
    }
}


document.getElementById("ingresar").addEventListener("click", meterDatosUsuarioGuardado)
document.getElementById("ingresar").addEventListener("click", ingresar)