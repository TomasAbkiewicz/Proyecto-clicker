import fs from "fs";

let filePathU = './data/users.json';
let filePathG = "./data/gamesFile.json";

export function newUser(user) {

    let USERS = fs.readFileSync(filePathU, "utf-8");
    USERS = USERS ? JSON.parse(USERS) : []; 


    let GAMES = fs.readFileSync(filePathG, "utf-8");
    GAMES = GAMES ? JSON.parse(GAMES) : [];


    let usuarioExistente = USERS.some(u => u.username === user.username);
    if (usuarioExistente) {
        return false;
    }


    let userdata = {     
        username: user.username,
        password: user.password,
        id: USERS.length + 1,
    };
    USERS.push(userdata); 


    let game = {
        userId: userdata.id,
        monedas: 0,
    };
    GAMES.push(game);


    fs.writeFileSync(filePathU, JSON.stringify(USERS, null, 2));
    fs.writeFileSync(filePathG, JSON.stringify(GAMES, null, 2));

    return { ok: true };
}

export function save(game) {
    // Read and parse GAMES
    let GAMES = fs.readFileSync(filePathG, "utf-8");
    GAMES = GAMES ? JSON.parse(GAMES) : [];

    // Find the game by userId
    let id = game.userId;
    let savedGameIndex = GAMES.findIndex(g => g.userId === id);

    if (savedGameIndex >= 0) {
        GAMES[savedGameIndex] = game;  // Update the game with new data
    } else {
        return { error: "Game not found" }; // Handle case where the game does not exist
    }

    // Save updated GAMES array back to the file
    fs.writeFileSync(filePathG, JSON.stringify(GAMES, null, 2));

    return { ok: true };
}
