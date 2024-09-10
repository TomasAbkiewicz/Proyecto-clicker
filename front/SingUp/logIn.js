
let nombreInput= document.getElementById("usuarioLogIn");
let contraseñaInput= document.getElementById("contraseñaLogIn");
let login= document.getElementById("ingresar")

function enviarUsuario() {
    let username = nombreInput.value;
    let password = contraseñaInput.value;
    postData("login", { username,password },(response) => {
        if (response.ok) {
          alert("usuario cargado");
        } else {
          alert("error al guardar el usuario");
        }
    });
}
login.addEventListener("click",enviarUsuario)