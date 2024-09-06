
let nombreInput= document.getElementById("usuarioSignUp");
let contraseñaInput= document.getElementById("contraseñaSignUp");
let signup= document.getElementById("botonSignUp")

function enviarUsuario() {

  let username = nombreInput.value;
  let password = contraseñaInput.value
           
  if (password.length >= 8 &&  
    /[A-Z]/.test(password) &&
    /[0-9]/.test(password) &&
    /[!@#$%^&*]/.test(password)
    ){
      
    password = contraseñaInput.value;
    if ( username !== "" ) {
      postData("signup", { username,password }, (response) => {
        if (response.ok) {
          alert("usuario cargado");
          limpiarPedido();
        } else {
          alert("error al guardar el usuario");
        }
      });
    } else {
      alert("Complete todos los campos");
    }
  } else{
    alert("contraña invalida")
  }
}
signup.addEventListener("click",enviarUsuario)