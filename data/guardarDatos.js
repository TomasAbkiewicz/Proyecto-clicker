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
                        grayHat:0,
                        brownhat:0,
                        redHat:0,
                        blueHat:0,
                        violetHat:0,
                        whiteHat:0,
                        blackHat:0,
                        dragonHat:0,
                    },
                    c500:{
                        grayHat:0,
                        brownhat:0,
                        redHat:0,
                        blueHat:0,
                        violetHat:0,
                        whiteHat:0,
                        blackHat:0,
                        dragonHat:0,
                    },
                    c1000:{
                        grayHat:0,
                        brownhat:0,
                        redHat:0,
                        blueHat:0,
                        violetHat:0,
                        whiteHat:0,
                        blackHat:0,
                        dragonHat:0,
                    },
                    c2500:{
                        grayHat:0,
                        brownhat:0,
                        redHat:0,
                        blueHat:0,
                        violetHat:0,
                        whiteHat:0,
                        blackHat:0,
                        dragonHat:0,
                    },
                    c5000:{
                        grayHat:0,
                        brownhat:0,
                        redHat:0,
                        blueHat:0,
                        violetHat:0,
                        whiteHat:0,
                        blackHat:0,
                        dragonHat:0,
                    },
                    c7500:{
                        grayHat:0,
                        brownhat:0,
                        redHat:0,
                        blueHat:0,
                        violetHat:0,
                        whiteHat:0,
                        blackHat:0,
                        dragonHat:0,
                    },
                    c10000:{
                        grayHat:0,
                        brownhat:0,
                        redHat:0,
                        blueHat:0,
                        violetHat:0,
                        whiteHat:0,
                        blackHat:0,
                        dragonHat:0,
                    },                    
                    c50000:{
                        grayHat:0,
                        brownhat:0,
                        redHat:0,
                        blueHat:0,
                        violetHat:0,
                        whiteHat:0,
                        blackHat:0,
                        dragonHat:0,
                    },
                
            },
            multis: {
                    //el _ es .(no deja poner puntos)
                    x1_1 : {
                        s10:0,
                        s20:0,
                        s30:0,
                        s40:0,
                        s50:0,
                        m1:0,
                        m2:0,
                        m5:0,
                        m7:0,
                        m10:0,
                    },                    
                    x1_2 : {
                        s10:0,
                        s20:0,
                        s30:0,
                        s40:0,
                        s50:0,
                        m1:0,
                        m2:0,
                        m5:0,
                        m7:0,
                        m10:0,
                    },
                    x1_3 : {
                        s10:0,
                        s20:0,
                        s30:0,
                        s40:0,
                        s50:0,
                        m1:0,
                        m2:0,
                        m5:0,
                        m7:0,
                        m10:0,
                    },
                    x1_5 : {
                        s10:0,
                        s20:0,
                        s30:0,
                        s40:0,
                        s50:0,
                        m1:0,
                        m2:0,
                        m5:0,
                        m7:0,
                        m10:0,
                    },                    
                    x1_7 : {
                        s10:0,
                        s20:0,
                        s30:0,
                        s40:0,
                        s50:0,
                        m1:0,
                        m2:0,
                        m5:0,
                        m7:0,
                        m10:0,
                    },
                    x1_9 : {
                        s10:0,
                        s20:0,
                        s30:0,
                        s40:0,
                        s50:0,
                        m1:0,
                        m2:0,
                        m5:0,
                        m7:0,
                        m10:0,
                    },
                    x2 : {
                        s10:0,
                        s20:0,
                        s30:0,
                        s40:0,
                        s50:0,
                        m1:0,
                        m2:0,
                        m5:0,
                        m7:0,
                        m10:0,
                    },

            },
            ACplantable: {
                    s10:{
                        rock:0,
                        stone:0,
                        polishedStone:0,
                        quartz:0,
                        polishedQuartz:0,
                        primeQuartz:0,
                        gold:0,
                        emerald:0,
                        zaphire:0,
                        ruby:0,
                        diamond:0,
                        dragonDiamond:0,
                    },
                    s30:{
                        rock:0,
                        stone:0,
                        polishedStone:0,
                        quartz:0,
                        polishedQuartz:0,
                        primeQuartz:0,
                        gold:0,
                        emerald:0,
                        zaphire:0,
                        ruby:0,
                        diamond:0,
                        dragonDiamond:0,
                    },
                    min1:{
                        rock:0,
                        stone:0,
                        polishedStone:0,
                        quartz:0,
                        polishedQuartz:0,
                        primeQuartz:0,
                        gold:0,
                        emerald:0,
                        zaphire:0,
                        ruby:0,
                        diamond:0,
                        dragonDiamond:0,
                    },
                    min5:{
                        rock:0,
                        stone:0,
                        polishedStone:0,
                        quartz:0,
                        polishedQuartz:0,
                        primeQuartz:0,
                        gold:0,
                        emerald:0,
                        zaphire:0,
                        ruby:0,
                        diamond:0,
                        dragonDiamond:0,
                    },
                    min10:{
                        rock:0,
                        stone:0,
                        polishedStone:0,
                        quartz:0,
                        polishedQuartz:0,
                        primeQuartz:0,
                        gold:0,
                        emerald:0,
                        zaphire:0,
                        ruby:0,
                        diamond:0,
                        dragonDiamond:0,
                    },
                    min30:{
                        rock:0,
                        stone:0,
                        polishedStone:0,
                        quartz:0,
                        polishedQuartz:0,
                        primeQuartz:0,
                        gold:0,
                        emerald:0,
                        zaphire:0,
                        ruby:0,
                        diamond:0,
                        dragonDiamond:0,
                    },
                    h1:{
                        rock:0,
                        stone:0,
                        polishedStone:0,
                        quartz:0,
                        polishedQuartz:0,
                        primeQuartz:0,
                        gold:0,
                        emerald:0,
                        zaphire:0,
                        ruby:0,
                        diamond:0,
                        dragonDiamond:0,
                    },
            },
        },
    }   
    GAMES.push(game);
}


 

    fs.writeFileSync(filePathU, JSON.stringify(USERS, null, 2));
    fs.writeFileSync(filePathG, JSON.stringify(GAMES, null, 2));

    return { ok: true };


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
