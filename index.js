import fs from "fs";
import {onEvent,startServer} from "soquetic";
import {newUser,save,login} from "./data/guardarDatos.js"


onEvent("signup", newUser);
onEvent("save",save);
onEvent("login",login);

startServer();