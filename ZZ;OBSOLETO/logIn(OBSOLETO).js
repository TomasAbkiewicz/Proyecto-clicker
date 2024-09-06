let  usuarioGuardado = {
    usuario: undefined,
    contraseña: undefined, 
    id: "#00000001",
}
function meterDatosUsuarioGuardado() {
    usuarioGuardado.usuario = localStorage.getItem("usuario")
    usuarioGuardado.contraseña = localStorage.getItem("contraseña")
}

let usuarioIngresado = {
    usuario: undefined,
    contraseña: undefined,
}
function meterDatosUsuarioIngresado(){
    usuarioIngresado.usuario= document.getElementById("usuarioLogIn").value;
    usuarioIngresado.contraseña= document.getElementById("contraseñaLogIn").value;
}

function ingresar(){
    console.log("corre")
    if (usuarioGuardado.contraseña === usuarioIngresado.contraseña && usuarioGuardado.usuario === usuarioIngresado.usuario) {
        window.location.href = "Proyecto.html"
        console.log("hola")
    } else{
        document.getElementById("usuarioLogIn").value = ""
        document.getElementById("contraseñaLogIn").value = ""
        alert("usuario o contraseña incorrectos")
    }
}


document.getElementById("ingresar").addEventListener("click", meterDatosUsuarioIngresado)
document.getElementById("ingresar").addEventListener("click", meterDatosUsuarioGuardado)
document.getElementById("ingresar").addEventListener("click", ingresar)