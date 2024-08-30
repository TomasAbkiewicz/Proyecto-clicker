import fs from "fs"
function newUser(user) {
    let USERS = fs.readFileSync(JSON.parse("usersFile.json"), "utf-8");
    let GAMES = fs.readFileSync(JSON.parse("gamesFile.json"), "utf-8");

    for (let i = 0; index < USERS.length; i++) {
        let usuarioExistente = false;
        let n = USERS[i].username;
        if (n === user.username){
            usuarioExistente = true;
            return false
        } else{
            usuarioExistente = false
        }
    }

    let userdata = {     
        username: user.username,
        password: user.password,
        id: USERS.length() + 1,
    }    
    USERS.push(userdata);    

    let game = {
        userId: userdata.id,
        monedas: 0,
    }
    GAMES.push(game);

    fs.writeFileSync("usersFile.json", JSON.stringify(USERS));
    fs.writeFileSync("gamesFile.json", JSON.stringify(GAMES));

}

function save(game) {
    let GAMES = fs.readFileSync(JSON.parse("gamesFile.json"), "utf-8");
    let id = game.userId;
    let savedGame = GAMES[id];
    savedGame = game;
    GAMES[id]= savedGame;
    fs.writeFileSync("gamesFile.json", JSON.stringify(GAMES));
}
