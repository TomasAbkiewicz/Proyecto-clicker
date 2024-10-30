import fs from "fs";
let filePathU = './data/users.json';
let filePathG = "./data/gamesFile.json";
let currentUserId;

let USERS = fs.readFileSync(filePathU, "utf-8");
USERS = USERS ? JSON.parse(USERS) : []; 


let GAMES = fs.readFileSync(filePathG, "utf-8");
GAMES = GAMES ? JSON.parse(GAMES) : [];

export function newUser(user) {

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
        currency: {
            sunflowers: 0,
            clovers : {
                cloverPetal: 0,
                clover3:0,
                clover4:0,
            },
            fruits : {
                banana: 0,
                apple:0,
                grapes:0,
                pineapple:0,
                dragonFruits : { 
                    rottenDragonFruit: 0,
                    dragonSeed:0,
                    dragonFruit:0,
                    agedDragonFruit:0,
                    ancientDragonFruit:0,
                    primordialDragonFruit:0,
                },
            },
        }
        }    
        GAMES.push(game);
        fs.writeFileSync(filePathU, JSON.stringify(USERS, null, 2));
        fs.writeFileSync(filePathG, JSON.stringify(GAMES, null, 2));
        return { ok: true };
}
            

   



export function save(game) {

    let GAMES = fs.readFileSync(filePathG, "utf-8");
    GAMES = GAMES ? JSON.parse(GAMES) : [];

    let id = game.userId;
    GAMES[id] = game
    fs.writeFileSync(filePathG, JSON.stringify(GAMES, null, 2));

    return { ok: true };
}

export function login(input){
    for (const user of USERS) {
        if (user.username === input.username) {     
            if (user.password === input.password) {
                let userId = user.id
                currentUserId = userId;
                return userId;
        }else{
            return false
            }
        }
    }
}
export function loadGame(userId){
    let game  = GAMES[userId-1]
    return game;
}
