let fs = require(fs)
let USUARIOS =[];
let CONTRASEÑAS =[];
let PARTIDAS =[];
let archivoUsuarios = "Usuarios.json"
let archivoContraseñas = "Contraseñas.json"
let archivoPartidas = "Partidas.json"

class Partida{
    constructor(moneda){
        this.monedas= monedas;
    }  
}


function guardarDatos(){
    if (document.getElementById("usuarioSignUp").value !== "" && document.getElementById("contraseñaSignUp").value !== ""){
        USUARIOS.push(document.getElementById("usuarioSignUp").value);
        CONTRASEÑA.push(document.getElementById("contraseñaSignUp").value);

        fs.writeFile(archivoUsuarios, USUARIOS, (err)=>{
            if (err){
                console.error("ERROR AL GUARDAR EL USUARIO")
            } else{
                console.alert("USUARIO GUARDADO CORRECTAMENTE")
            }
        })
        fs.writeFile(archivoContraseñas, CONTRASEÑAS, (err)=>{
            if (err){
                console.error("ERROR AL GUARDAR LA CONTRASEÑA")
            } else{
                console.alert("CONTRASEÑA GUARDADA CORRECTAMENTE")
            }
        })

        window.location.href= "login.html"
    } else{
        alert("Ingrese un usuario y contraseña")
    }
}


const botonSignUp = document.getElementById("botonSignUp")

botonSignUp.addEventListener("click", guardarDatos);


