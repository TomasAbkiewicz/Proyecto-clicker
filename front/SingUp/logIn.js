
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
        sessionStorage.setItem('userId', userId);
        alert("sesion iniciada correctamente")
<<<<<<< HEAD
        window.location.href= "http://127.0.0.1:5500/Proyecto-clicker/front/principal/Proyecto.html"
=======
        window.location.href= "http://127.0.0.1:5500/front/principal/Proyecto.html"
>>>>>>> 912a321923eadeb2f458173b5fb92d8387216fc3
      } else {
        alert("error al cargar el usuario");
      }
  });
}
login.addEventListener("click",enviarUsuario)