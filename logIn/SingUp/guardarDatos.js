
export function guardarInfo(username, password){
    let fs = require(fs)
    let USERS = JSON.parse(fs.readFileSync("usersFile.json", "utf-8"))
    let user = {
        data= {
            username: username,
            password: password,
            id: undefined,
        },
    }
    
    USERS.push(user)
    JSON.stringify(fs.writeFile("usersFile.json", USUARIOS, (err)=>{
        if(err){
            return false;
        }else{
            return true;
        }
    })) 

    function asignarId() {
        for (let i = 0; i= false; i++) {
            if (USERS.user.data.username === username){
               break
            }
            
        }
        return i;
    }
    asignarId()
}

function guardarPartida()
