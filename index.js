import fs from "fs";
import {onEvent,startServer} from "soquetic";
import {newUser,save} from "./data/guardarDatos.js"


onEvent("signup", newUser);
onEvent("save",save);


startServer();