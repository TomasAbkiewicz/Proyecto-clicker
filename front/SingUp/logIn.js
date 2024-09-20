
let nombreInput= document.getElementById("usuarioLogIn");
let contraseñaInput= document.getElementById("contraseñaLogIn");
let login= document.getElementById("ingresar")

function enviarUsuario() {
  let user = {
    username : nombreInput.value,
    password : contraseñaInput.value,
  }
  postData("login", user,(userId) => {
      if (userId) {
        console.log("llego a login")
        sessionStorage.setItem("userId", userId)
        alert("sesion iniciada correctamente")
        window.location.href= "http://127.0.0.1:5500/Main%20Archivos/Proyecto.html"
      } else {
        alert("error al cargar el usuario");
      }
  });
}
login.addEventListener("click",enviarUsuario)