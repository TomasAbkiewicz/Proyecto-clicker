import fs from "fs";
let filePathU = './data/users.json';
let filePathG = "./data/gamesFile.json";

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
        },
        items : { 
            autoclickers: {
                c100:{
                    grayHat: {own: 0, cps: 10, duration: 100},
                    brownhat:{own: 0, cps: 20, duration: 100},
                    redHat:{own: 0, cps: 30, duration: 100},
                    blueHat:{own: 0, cps: 50, duration: 100},
                    violetHat:{own: 0, cps: 80, duration: 100},
                    whiteHat:{own: 0, cps: 100, duration: 100},
                    blackHat:{own: 0, cps: 120, duration: 100},
                    dragonHat:{own: 0, cps: 150, duration: 100},
                },                    
                c500:{
                    grayHat: {own: 0, cps: 10, duration: 500},
                    brownhat:{own: 0, cps: 20, duration: 500},
                    redHat:{own: 0, cps: 30, duration: 500},
                    blueHat:{own: 0, cps: 50, duration: 500},
                    violetHat:{own: 0, cps: 80, duration: 500},
                    whiteHat:{own: 0, cps: 100, duration: 500},
                    blackHat:{own: 0, cps: 120, duration: 500},
                    dragonHat:{own: 0, cps: 150, duration: 500},
                },
                c750:{
                    grayHat: {own: 0, cps: 10, duration: 750},
                    brownhat:{own: 0, cps: 20, duration: 750},
                    redHat:{own: 0, cps: 30, duration: 750},
                    blueHat:{own: 0, cps: 50, duration: 750},
                    violetHat:{own: 0, cps: 80, duration: 750},
                    whiteHat:{own: 0, cps: 100, duration: 750},
                    blackHat:{own: 0, cps: 120, duration: 750},
                    dragonHat:{own: 0, cps: 150, duration: 750},
                },
                c1000:{
                    grayHat: {own: 0, cps: 10, duration: 1000},
                    brownhat:{own: 0, cps: 20, duration: 1000},
                    redHat:{own: 0, cps: 30, duration: 1000},
                    blueHat:{own: 0, cps: 50, duration: 1000},
                    violetHat:{own: 0, cps: 80, duration: 1000},
                    whiteHat:{own: 0, cps: 100, duration: 1000},
                    blackHat:{own: 0, cps: 120, duration: 1000},
                    dragonHat:{own: 0, cps: 150, duration: 1000},
                },
                c1500:{
                    grayHat: {own: 0, cps: 10, duration: 1500},
                    brownhat:{own: 0, cps: 20, duration: 1500},
                    redHat:{own: 0, cps: 30, duration: 1500},
                    blueHat:{own: 0, cps: 50, duration: 1500},
                    violetHat:{own: 0, cps: 80, duration: 1500},
                    whiteHat:{own: 0, cps: 100, duration: 1500},
                    blackHat:{own: 0, cps: 120, duration: 1500},
                    dragonHat:{own: 0, cps: 150, duration: 1500},
                },
                c3000:{
                    grayHat: {own: 0, cps: 10, duration: 3000},
                    brownhat:{own: 0, cps: 20, duration: 3000},
                    redHat:{own: 0, cps: 30, duration: 3000},
                    blueHat:{own: 0, cps: 50, duration: 3000},
                    violetHat:{own: 0, cps: 80, duration: 3000},
                    whiteHat:{own: 0, cps: 100, duration: 3000},
                    blackHat:{own: 0, cps: 120, duration: 3000},
                    dragonHat:{own: 0, cps: 150, duration: 3000},
                },
                c5000:{
                    grayHat: {own: 0, cps: 10, duration: 5000},
                    brownhat:{own: 0, cps: 20, duration: 5000},
                    redHat:{own: 0, cps: 30, duration: 5000},
                    blueHat:{own: 0, cps: 50, duration: 5000},
                    violetHat:{own: 0, cps: 80, duration: 5000},
                    whiteHat:{own: 0, cps: 100, duration: 5000},
                    blackHat:{own: 0, cps: 120, duration: 5000},
                    dragonHat:{own: 0, cps: 150, duration: 5000},
                },
                c7500:{
                    grayHat: {own: 0, cps: 10, duration: 7500},
                    brownhat:{own: 0, cps: 20, duration: 7500},
                    redHat:{own: 0, cps: 30, duration: 7500},
                    blueHat:{own: 0, cps: 50, duration: 7500},
                    violetHat:{own: 0, cps: 80, duration: 7500},
                    whiteHat:{own: 0, cps: 100, duration: 7500},
                    blackHat:{own: 0, cps: 120, duration: 7500},
                    dragonHat:{own: 0, cps: 150, duration: 7500},
                },
                c10000:{
                    grayHat: {own: 0, cps: 10, duration: 10000},
                    brownhat:{own: 0, cps: 20, duration: 10000},
                    redHat:{own: 0, cps: 30, duration: 10000},
                    blueHat:{own: 0, cps: 50, duration: 10000},
                    violetHat:{own: 0, cps: 80, duration: 10000},
                    whiteHat:{own: 0, cps: 100, duration: 10000},
                    blackHat:{own: 0, cps: 120, duration: 10000},
                    dragonHat:{own: 0, cps: 150, duration: 10000},
                },
                c25000:{
                    grayHat: {own: 0, cps: 10, duration: 25000},
                    brownhat:{own: 0, cps: 20, duration: 25000},
                    redHat:{own: 0, cps: 30, duration: 25000},
                    blueHat:{own: 0, cps: 50, duration: 25000},
                    violetHat:{own: 0, cps: 80, duration: 25000},
                    whiteHat:{own: 0, cps: 100, duration: 25000},
                    blackHat:{own: 0, cps: 120, duration: 25000},
                    dragonHat:{own: 0, cps: 150, duration: 25000},
                },
                c50000:{
                    grayHat: {own: 0, cps: 10, duration: 50000},
                    brownhat:{own: 0, cps: 20, duration: 50000},
                    redHat:{own: 0, cps: 30, duration: 50000},
                    blueHat:{own: 0, cps: 50, duration: 50000},
                    violetHat:{own: 0, cps: 80, duration: 50000},
                    whiteHat:{own: 0, cps: 100, duration: 50000},
                    blackHat:{own: 0, cps: 120, duration: 50000},
                    dragonHat:{own: 0, cps: 150, duration: 50000},
                },        
            },
            multis: {
                    //el _ es .(no deja poner puntos)
                x1_1 : {
                    s10: {own: 0, multi: 1.1, duration: 10},
                    s20:{own: 0, multi: 1.1, duration: 20},
                    s30:{own: 0, multi: 1.1, duration: 30},
                    s40:{own: 0, multi: 1.1, duration: 40},
                    s50:{own: 0, multi: 1.1, duration: 50},
                    m1:{own: 0, multi: 1.1, duration: 60},
                    m2:{own: 0, multi: 1.1, duration: 120},
                    m5:{own: 0, multi: 1.1, duration: 300},
                    m7:{own: 0, multi: 1.1, duration: 420},
                    m10:{own: 0, multi: 1.1, duration: 600},
                },
                x1_2 : {
                    s10: {own: 0, multi: 1.2, duration: 10},
                    s20:{own: 0, multi: 1.2, duration: 20},
                    s30:{own: 0, multi: 1.2, duration: 30},
                    s40:{own: 0, multi: 1.2, duration: 40},
                    s50:{own: 0, multi: 1.2, duration: 50},
                    m1:{own: 0, multi: 1.2, duration: 60},
                    m2:{own: 0, multi: 1.2, duration: 120},
                    m5:{own: 0, multi: 1.2, duration: 300},
                    m7:{own: 0, multi: 1.2, duration: 420},
                    m10:{own: 0, multi: 1.2, duration: 600},
                },
                x1_3 : {
                    s10: {own: 0, multi: 1.3, duration: 10},
                    s20:{own: 0, multi: 1.3, duration: 20},
                    s30:{own: 0, multi: 1.3, duration: 30},
                    s40:{own: 0, multi: 1.3, duration: 40},
                    s50:{own: 0, multi: 1.3, duration: 50},
                    m1:{own: 0, multi: 1.3, duration: 60},
                    m2:{own: 0, multi: 1.3, duration: 120},
                    m5:{own: 0, multi: 1.3, duration: 300},
                    m7:{own: 0, multi: 1.3, duration: 420},
                    m10:{own: 0, multi: 1.3, duration: 600},
                },
                x1_5 : {
                    s10: {own: 0, multi: 1.5, duration: 10},
                    s20:{own: 0, multi: 1.5, duration: 20},
                    s30:{own: 0, multi: 1.5, duration: 30},
                    s40:{own: 0, multi: 1.5, duration: 40},
                    s50:{own: 0, multi: 1.5, duration: 50},
                    m1:{own: 0, multi: 1.5, duration: 60},
                    m2:{own: 0, multi: 1.5, duration: 120},
                    m5:{own: 0, multi: 1.5, duration: 300},
                    m7:{own: 0, multi: 1.5, duration: 420},
                    m10:{own: 0, multi: 1.5, duration: 600},
                },
                x1_7 : {
                    s10: {own: 0, multi: 1.7, duration: 10},
                    s20:{own: 0, multi: 1.7, duration: 20},
                    s30:{own: 0, multi: 1.7, duration: 30},
                    s40:{own: 0, multi: 1.7, duration: 40},
                    s50:{own: 0, multi: 1.7, duration: 50},
                    m1:{own: 0, multi: 1.7, duration: 60},
                    m2:{own: 0, multi: 1.7, duration: 120},
                    m5:{own: 0, multi: 1.7, duration: 300},
                    m7:{own: 0, multi: 1.7, duration: 420},
                    m10:{own: 0, multi: 1.7, duration: 600},
                },
                x2 : {
                    s10: {own: 0, multi: 2, duration: 10},
                    s20:{own: 0, multi: 2, duration: 20},
                    s30:{own: 0, multi: 2, duration: 30},
                    s40:{own: 0, multi: 2, duration: 40},
                    s50:{own: 0, multi: 2, duration: 50},
                    m1:{own: 0, multi: 2, duration: 60},
                    m2:{own: 0, multi: 2, duration: 120},
                    m5:{own: 0, multi: 2, duration: 300},
                    m7:{own: 0, multi: 2, duration: 420},
                    m10:{own: 0, multi: 2, duration: 600},
                },
                
            },
            ACplantable: {
                    s10:{
                        rock: {own: 0, cps: 5, duration: 10},
                        stone: {own: 0, cps: 7, duration: 10},
                        polishedStone: {own: 0, cps: 10, duration: 10},
                        quartz: {own: 0, cps: 12, duration:10},
                        polishedQuartz: {own: 0, cps: 15, duration: 10},
                        primeQuartz: {own: 0, cps: 20, duration: 10},
                        gold: {own: 0, cps: 22, duration: 10},
                        emerald: {own: 0, cps: 25, duration: 10},
                        zaphire: {own: 0, cps: 27, duration: 10},
                        ruby: {own: 0, cps: 30, duration: 10},
                        diamond: {own: 0, cps: 32, duration: 10},
                        dragonDiamond: {own: 0, cps: 35, duration: 10},
                    },
                    s30:{
                        rock: {own: 0, cps: 5, duration: 30},
                        stone: {own: 0, cps: 7, duration: 30},
                        polishedStone: {own: 0, cps: 10, duration: 30},
                        quartz: {own: 0, cps: 12, duration: 30},
                        polishedQuartz: {own: 0, cps: 15, duration: 30},
                        primeQuartz: {own: 0, cps: 20, duration: 30},
                        gold: {own: 0, cps: 22, duration: 30},
                        emerald: {own: 0, cps: 25, duration: 30},
                        zaphire: {own: 0, cps: 27, duration: 30},
                        ruby: {own: 0, cps: 30, duration: 30},
                        diamond: {own: 0, cps: 32, duration: 30},
                        dragonDiamond: {own: 0, cps: 35, duration: 30},
                    },
                    m1 : {
                        rock: {own: 0, cps: 5, duration: 60},
                        stone: {own: 0, cps: 7, duration: 60},
                        polishedStone: {own: 0, cps: 10, duration: 60},
                        quartz: {own: 0, cps: 12, duration:60},
                        polishedQuartz: {own: 0, cps: 15, duration: 60},
                        primeQuartz: {own: 0, cps: 20, duration: 60},
                        gold: {own: 0, cps: 22, duration: 60},
                        emerald: {own: 0, cps: 25, duration: 60},
                        zaphire: {own: 0, cps: 27, duration: 60},
                        ruby: {own: 0, cps: 30, duration: 60},
                        diamond: {own: 0, cps: 32, duration: 60},
                        dragonDiamond: {own: 0, cps: 35, duration: 60},
                    },
                    m5 : {
                        rock: {own: 0, cps: 5, duration: 300},
                        stone: {own: 0, cps: 7, duration: 300},
                        polishedStone: {own: 0, cps: 10, duration: 300},
                        quartz: {own: 0, cps: 12, duration:300},
                        polishedQuartz: {own: 0, cps: 15, duration: 300},
                        primeQuartz: {own: 0, cps: 20, duration: 300},
                        gold: {own: 0, cps: 22, duration: 300},
                        emerald: {own: 0, cps: 25, duration: 300},
                        zaphire: {own: 0, cps: 27, duration: 300},
                        ruby: {own: 0, cps: 30, duration: 300},
                        diamond: {own: 0, cps: 32, duration: 300},
                        dragonDiamond: {own: 0, cps: 35, duration: 300},
                    },
                    m10 : {
                        rock: {own: 0, cps: 5, duration: 600},
                        stone: {own: 0, cps: 7, duration: 600},
                        polishedStone: {own: 0, cps: 10, duration: 600},
                        quartz: {own: 0, cps: 12, duration:600},
                        polishedQuartz: {own: 0, cps: 15, duration: 600},
                        primeQuartz: {own: 0, cps: 20, duration: 600},
                        gold: {own: 0, cps: 22, duration: 600},
                        emerald: {own: 0, cps: 25, duration: 600},
                        zaphire: {own: 0, cps: 27, duration: 600},
                        ruby: {own: 0, cps: 30, duration: 600},
                        diamond: {own: 0, cps: 32, duration: 600},
                        dragonDiamond: {own: 0, cps: 35, duration: 600},
                    },
                    m15 : {
                        rock: {own: 0, cps: 5, duration: 900},
                        stone: {own: 0, cps: 7, duration: 900},
                        polishedStone: {own: 0, cps: 10, duration: 900},
                        quartz: {own: 0, cps: 12, duration:900},
                        polishedQuartz: {own: 0, cps: 15, duration: 900},
                        primeQuartz: {own: 0, cps: 20, duration: 900},
                        gold: {own: 0, cps: 22, duration: 900},
                        emerald: {own: 0, cps: 25, duration: 900},
                        zaphire: {own: 0, cps: 27, duration: 900},
                        ruby: {own: 0, cps: 30, duration: 900},
                        diamond: {own: 0, cps: 32, duration: 900},
                        dragonDiamond: {own: 0, cps: 35, duration: 900},
                    },
                    m30 : {
                        rock: {own: 0, cps: 5, duration: 1800},
                        stone: {own: 0, cps: 7, duration: 1800},
                        polishedStone: {own: 0, cps: 10, duration: 1800},
                        quartz: {own: 0, cps: 12, duration:1800},
                        polishedQuartz: {own: 0, cps: 15, duration: 1800},
                        primeQuartz: {own: 0, cps: 20, duration: 1800},
                        gold: {own: 0, cps: 22, duration: 1800},
                        emerald: {own: 0, cps: 25, duration: 1800},
                        zaphire: {own: 0, cps: 27, duration: 1800},
                        ruby: {own: 0, cps: 30, duration: 1800},
                        diamond: {own: 0, cps: 32, duration: 1800},
                        dragonDiamond: {own: 0, cps: 35, duration: 1800},
                    },
                    h1 : {
                        rock: {own: 0, cps: 5, duration: 3600},
                        stone: {own: 0, cps: 7, duration: 3600},
                        polishedStone: {own: 0, cps: 10, duration: 3600},
                        quartz: {own: 0, cps: 12, duration:3600},
                        polishedQuartz: {own: 0, cps: 15, duration: 3600},
                        primeQuartz: {own: 0, cps: 20, duration: 3600},
                        gold: {own: 0, cps: 22, duration: 3600},
                        emerald: {own: 0, cps: 25, duration: 3600},
                        zaphire: {own: 0, cps: 27, duration: 3600},
                        ruby: {own: 0, cps: 30, duration: 3600},
                        diamond: {own: 0, cps: 32, duration: 3600},
                        dragonDiamond: {own: 0, cps: 35, duration: 3600},
                    },
                    }
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
    let savedGameIndex = GAMES.findIndex(g => g.userId === id);

    if (savedGameIndex >= 0) {
        GAMES[savedGameIndex] = game;
    } else {
        return { error: "Game not found" };
    }

    fs.writeFileSync(filePathG, JSON.stringify(GAMES, null, 2));

    return { ok: true };
}

export function login(input){
    for (const user of USERS) {
        if (user.username === input.username) {     
            if (user.password === input.password) {
                let userId = user.id
                return userId;
        }else{
            return false
            }
        }
    }
}
export function loadGame(userId){
    let game  = GAMES[userId]
    return game;
}