let usuarioGuardado = {
    usuario: localStorage.getItem("usuario"),
    contraseña: localStorage.getItem("contraseña"), 
    id: "#00000001",
}

const usuarioIngresado = {
    usuario: document.getElementById("usuario"),
    contraseña: document.getElementById("contraseña")
}

function ingresar(){
    if (usuarioGuardado.contraseña === usuarioIngresado.contraseña && usuarioGuardado.usuario === usuarioIngresado.usuario) {
        window.location.href = "Proyecto.html"
    }
}