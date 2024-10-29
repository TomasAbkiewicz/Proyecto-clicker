import fs from "fs";
import {onEvent,startServer} from "soquetic";
import {newUser,save,login, loadGame,sendData} from "./data/guardarDatos.js"


onEvent("signup", newUser);
onEvent("save",save);
onEvent("login",login);
onEvent("loadGame", loadGame)
onEvent("pruebaSave", save)
onEvent("loginium",sendData)
startServer();